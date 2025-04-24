import { supabase, supabaseDataProcessing } from "../constants/constants";
import fs from "fs";
import Papa from "papaparse";
import path = require("path");
import { logger } from "../constants/logger";

async function getSkus() {
  const { data, error } = await supabaseDataProcessing.from("skus_skulabs").select("*");

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

export async function updateProductsDB() {
  logger.info("Starting updating products table...");
  const BATCH_SIZE = 10000;
  let offset = 0;
  let hasMore = true;

  const { data: skus } = await getSkus();
  const allBatches = [];
  const allNotFound: any[] = [];

  while (hasMore) {
    const updates = [];
    const skipped = [];
    const notFound = [];

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
    logger.info(`Getting data from ${offset} to ${offset + BATCH_SIZE - 1}`);

    for (const product of products) {
      const skuKey = product["skulabs SKU"];
      const displaySet = product["display_set"];
      const type = product["type"];

      if (type === "Floor Mats") continue;

      let matches: Array<{ preorder: boolean; next_container_date: string }> = [];

      if (displaySet === "Full Seat Set") {
        const parts = getIndividualFromFullSet(skuKey);
        matches = parts.map((part) => skus[part]).filter((match) => match);
      } else {
        const match = skus[skuKey];
        if (match) matches.push(match);
      }

      if (matches.length === 0) {
        notFound.push(product);
        continue;
      }

      const { preorder, preorder_date, preorder_discount } = evaluatePreorderValues(matches, type, displaySet);
      const shouldUpdate = preorder !== product.preorder || preorder_discount !== product.preorder_discount || preorder_date !== product.preorder_date;
      const row = {
        id: product.id,
        sku: skuKey,
        preorder,
        preorder_date: preorder_date,
        preorder_discount,
      };

      if (shouldUpdate) {
        updates.push(row);
      } else {
        skipped.push(row);
      }
    }

    // upsert incrementally
    const { error: updateError } = await supabase.from("products_duplicate_ji").upsert(updates, { onConflict: "id" });

    if (updateError) {
      logger.error(`update error for rows ${offset} to ${offset + BATCH_SIZE - 1}`, updateError);
    } else {
      logger.info(
        `updated ${updates.length} rows, skipped ${skipped.length} rows, and not found ${notFound.length} rows on products table for batch ${offset} to ${
          offset + BATCH_SIZE - 1
        }`
      );
    }

    const taggedUpdates = updates.map((row) => ({ ...row, source: "updated" }));
    const taggedSkipped = skipped.map((row) => ({ ...row, source: "skipped" }));
    allBatches.push(...taggedUpdates, ...taggedSkipped);
    allNotFound.push(notFound);

    offset += BATCH_SIZE;
  }

  const csv = Papa.unparse(allBatches);
  fs.writeFileSync(path.resolve(__dirname, "product_db_eta.csv"), csv, "utf-8");

  logger.warn("Not on skulabs:", allNotFound);
}

async function updateProductsDbRun() {
  await updateProductsDB();
}

updateProductsDbRun();
