import fs from "fs";
import Papa from "papaparse";
import path from "path";

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
  const errorMessages = new Set<string>();

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
      // console.log(`[MISSING] ID ${id} not found in products DB`);
      errorMessages.add(`[MISSING] ID ${id} not found in products DB`);
      continue;
    }

    if (jinwonRow["skulabs SKU"] !== productRow["sku"]) {
      // console.log(`[SKU MISMATCH] ID ${id}: ${jinwonRow["skulabs SKU"]} vs ${productRow["sku"]}`);
      errorMessages.add(`[SKU MISMATCH] ${jinwonRow["skulabs SKU"]} vs ${productRow["sku"]}`);
    }

    const jPreorder: boolean = jinwonRow["preorder_true"].toUpperCase();
    const pPreorder: boolean = productRow["preorder"].toUpperCase();

    // Compare preorder boolean
    if (jPreorder !== pPreorder) {
      // console.log(`[PREORDER FLAG MISMATCH] ID ${id}: ${jPreorder} vs ${pPreorder}`);
      errorMessages.add(`[PREORDER FLAG MISMATCH] ${productRow.sku}: ${jPreorder} vs ${pPreorder}`);
      continue;
    }

    // Both are false
    if (!jPreorder && !pPreorder) {
      const jDate = normalizeDate(jinwonRow["preorder_date"].trim());
      const pDate = productRow["preorder_date"].trim();

      const jDiscount = normalizeDiscount(jinwonRow["preorder_discount"].trim());
      const pDiscount = productRow["preorder_discount"].trim();

      if (jDate !== "" || pDate !== "") {
        // console.log(`[DATE IN-STOCK MISMATCH] ID ${id}: jinwon=${jDate}, products=${pDate}`);
        errorMessages.add(`[DATE IN-STOCK MISMATCH] ${productRow.sku}: jinwon=${jDate}, products=${pDate}`);
      }

      if (jDiscount !== "" || pDiscount !== "") {
        // console.log(`[DISCOUNT BLANK MISMATCH] ID ${id}: jinwon=${jDiscount}, products=${pDiscount}`);
        errorMessages.add(`[DISCOUNT BLANK MISMATCH] ${productRow.sku}: jinwon=${jDiscount}, products=${pDiscount}`);
      }
    }

    // Both are true
    if (jPreorder && pPreorder) {
      const jDate = normalizeDate(jinwonRow["preorder_date"].trim());
      const pDate = productRow["preorder_date"].trim();

      const jDiscount = normalizeDiscount(jinwonRow["preorder_discount"].trim());
      const pDiscount = productRow["preorder_discount"].trim();

      if (jDate !== pDate) {
        // console.log(`[DATE MISMATCH] ID ${id}, SKU ${productRow.sku}: jinwon=${jDate}, products=${pDate}`);
        errorMessages.add(`[DATE MISMATCH] SKU ${productRow.sku}: jinwon=${jDate}, products=${pDate}`);
      }

      if (jDiscount !== pDiscount) {
        // console.log(`[DISCOUNT MISMATCH] ID ${id}, SKU ${productRow.sku}: jinwon=${jDiscount}, products=${pDiscount}`);
        errorMessages.add(`[DISCOUNT MISMATCH] SKU ${productRow.sku}: jinwon=${jDiscount}, products=${pDiscount}`);
      }
    }
  }

  const errorCSV: Array<{ message: string }> = [];
  for (const msg of errorMessages) {
    errorCSV.push({ message: msg });
  }

  const csv = Papa.unparse(errorCSV);
  fs.writeFileSync(path.resolve(__dirname, "db_comparison_result.csv"), csv, "utf-8");
}

compareCSVs();
