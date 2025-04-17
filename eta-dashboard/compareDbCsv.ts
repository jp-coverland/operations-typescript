import fs from "fs";
import Papa from "papaparse";
import { exit } from "process";

// DATE normalization
const normalizeDate = (input: string) => {
  const trimmed = input.trim();
  if (trimmed.toLowerCase() === "in stock" || trimmed === "") return ""; // normalize to empty if it's 'In Stock'

  const [month, day, year] = trimmed.split("/");
  if (!month || !day || !year) return trimmed; // fallback if format is unexpected

  return `${year.padStart(4, "0")}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`; // YYYY-MM-DD
};

// DISCOUNT normalization
const normalizeDiscount = (input: string) => input.trim().replace(/^\$/, "");

export function compareCSVs() {
  const productsDbCSV = fs.readFileSync("./eta-dashboard/product_db_eta.csv", "utf-8");
  const jinwonCSV = fs.readFileSync("./eta-dashboard/jinwon-db.csv", "utf-8");

  const productsParsed: any = Papa.parse(productsDbCSV, {
    header: true,
    skipEmptyLines: true,
  }).data;

  const jinwonParsed: any = Papa.parse(jinwonCSV, {
    header: true,
    skipEmptyLines: true,
  }).data;

  const productsById: Record<string, any> = {};
  for (const row of productsParsed) {
    productsById[row.id] = row;
  }

  for (const jinwonRow of jinwonParsed) {
    const id = jinwonRow.id;
    const productRow = productsById[id];

    if (!productRow) {
      console.log(`[MISSING] ID ${id} not found in products DB`);
      continue;
    }

    if (jinwonRow["skulabs SKU"] !== productRow["sku"]) {
      console.log(`[SKU MISMATCH] ID ${id}: ${jinwonRow["skulabs SKU"]} vs ${productRow["sku"]}`);
    }

    const jPreorder: boolean = jinwonRow["preorder_true"].toUpperCase();
    const pPreorder: boolean = productRow["preorder"].toUpperCase();

    // Compare preorder boolean
    if (jPreorder !== pPreorder) {
      console.log(`[PREORDER FLAG MISMATCH] ID ${id}: ${jPreorder} vs ${pPreorder}`);
      continue;
    }

    // Both are false
    if (!jPreorder && !pPreorder) {
      const jDate = normalizeDate(jinwonRow["preorder_date"].trim());
      const pDate = productRow["next_container_date"].trim();

      const jDiscount = normalizeDiscount(jinwonRow["preorder_discount"].trim());
      const pDiscount = productRow["preorder_discount"].trim();

      if (jDate !== "" || pDate !== "") {
        console.log(`[DATE IN-STOCK MISMATCH] ID ${id}: jinwon=${jDate}, products=${pDate}`);
      }

      if (jDiscount !== "" || pDiscount !== "") {
        console.log(`[DISCOUNT BLANK MISMATCH] ID ${id}: jinwon=${jDiscount}, products=${pDiscount}`);
      }
    }

    // Both are true
    if (jPreorder && pPreorder) {
      const jDate = normalizeDate(jinwonRow["preorder_date"].trim());
      const pDate = productRow["next_container_date"].trim();

      const jDiscount = normalizeDiscount(jinwonRow["preorder_discount"].trim());
      const pDiscount = productRow["preorder_discount"].trim();

      if (jDate !== pDate) {
        console.log(`[DATE MISMATCH] ID ${id}, SKU ${productRow.sku}: jinwon=${jDate}, products=${pDate}`);
      }

      if (jDiscount !== pDiscount) {
        console.log(`[DISCOUNT MISMATCH] ID ${id}, SKU ${productRow.sku}: jinwon=${jDiscount}, products=${pDiscount}`);
      }
    }
  }
}
