import { supabase, supabaseDataProcessing } from "../constants/constants";
import fs from "fs";
import Papa from "papaparse";
import path = require("path");

async function getSkus() {
  const { data, error } = await supabaseDataProcessing.from("skus_skulabs_test_eta").select("*");

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  const skus: Record<string, any> = {};

  for (const row of data) {
    skus[row.master_sku] = {
      preorder: row.preorder,
      next_container_date: row.next_container_date,
    };
  }

  return { data: skus, error: null };
}

function getPreorderDiscount(preorderDate: string, type: string, displaySet: string): number | null {
  const today = new Date();
  const eta = new Date(preorderDate);
  const diffDays = Math.ceil((eta.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  // Handle Full Set first
  if (displaySet === "Full Seat Set") {
    if (diffDays <= 28) return 20;
    if (diffDays <= 56) return 30;
    if (diffDays <= 84) return 40;
    if (diffDays >= 85) return 60;
  }

  // Individual Covers or Car Covers
  if (type === "Seat Covers" || type === "Car Covers") {
    if (diffDays <= 28) return 10;
    if (diffDays <= 56) return 20;
    if (diffDays <= 84) return 30;
    if (diffDays >= 85) return 40;
  }

  return null;
}

function getIndividualFromFullSet(fullSku: string): string[] {
  const parts: string[] = [];

  const segments = fullSku.split("-");

  const prefix = segments.slice(0, 3).join("-"); // e.g., CA-SC-10
  const suffix = segments.slice(-2).join("-"); // e.g., DG-1TO

  // Now detect positions of seat segments (F, B, R)
  for (let i = 3; i < segments.length - 2; i += 2) {
    const letterCode = segments[i]; // e.g., F, B, E
    const sizeNumber = segments[i + 1]; // e.g., 10, 16

    const rebuilt = `${prefix}-${letterCode}-${sizeNumber}-${suffix}`;
    parts.push(rebuilt);
  }

  return parts;
}

function evaluatePreorderValues(matchedParts: Array<{ preorder: boolean; next_container_date: string }>, type: string, displaySet: string) {
  const preorderParts = matchedParts.filter((p) => p.preorder);

  if (preorderParts.length === 0) {
    return {
      preorder: false,
      preorder_date: null,
      preorder_discount: null,
    };
  }

  // Use the latest container date among the matched preorder parts
  const latest = preorderParts.reduce((latest, current) => (new Date(current.next_container_date) > new Date(latest.next_container_date) ? current : latest));

  return {
    preorder: true,
    preorder_date: latest.next_container_date,
    preorder_discount: getPreorderDiscount(latest.next_container_date, type, displaySet),
  };
}

async function updateProductsDB() {
  console.log("Starting updating products table...");
  const BATCH_SIZE = 10000;
  let offset = 0;
  let hasMore = true;

  const { data: skus } = await getSkus();
  const allBatches = [];
  const notFound: any[] = [];

  while (hasMore) {
    const { data: products, error } = await supabase
      .from("products_duplicate_ji")
      .select(`id, type, display_set, "skulabs SKU", preorder, preorder_discount, preorder_date`)
      .order("id", { ascending: true })
      .range(offset, offset + BATCH_SIZE - 1);

    if (error) {
      throw new Error(`Failed to fetch products: ${JSON.stringify(error, null, 2)}`);
    }

    if (!products || products.length === 0) {
      hasMore = false;
      break;
    }

    console.log(`Getting data from ${offset} to ${offset + BATCH_SIZE - 1}`);
    const batchArray = products
      .map((product) => {
        const skuKey = product["skulabs SKU"];
        const displaySet = product["display_set"];
        const type = product["type"];

        if (type === "Floor Mats") return null;

        let matches: Array<{ preorder: boolean; next_container_date: string }> = [];

        if (displaySet === "Full Seat Set") {
          const parts = getIndividualFromFullSet(skuKey);
          matches = parts.map((part) => skus[part]).filter((match) => match); // filter out undefined
        } else {
          const match = skus[skuKey];
          if (match) matches.push(match);
        }

        if (matches.length === 0) {
          notFound.push(product);
        }

        const { preorder, preorder_date, preorder_discount } = evaluatePreorderValues(matches, type, displaySet);

        return {
          id: product.id,
          sku: skuKey,
          preorder,
          next_container_date: preorder_date,
          preorder_discount,
        };
      })
      .filter(Boolean); // removes nulls

    offset += BATCH_SIZE;
    allBatches.push(...batchArray);
  }

  // NEED TO: write logic to actually push changes to the database

  const csv = Papa.unparse(allBatches);
  fs.writeFileSync(path.resolve(__dirname, "product_db_eta.csv"), csv, "utf-8");
  console.log("CSV written to output.csv");
  console.log("Not on skulabs:", notFound);
}
