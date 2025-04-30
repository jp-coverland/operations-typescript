import * as XLSX from "xlsx";
import path from "path";
import { supabaseCoverlandSizeChart } from "../constants/constants";

const workbook = XLSX.readFile(path.resolve(__dirname, "shopify_images.xlsx"));

const sheetName = "car_cover_bkgr";
const worksheet = workbook.Sheets[sheetName];
const bkgrExcelData = XLSX.utils.sheet_to_json(worksheet);

async function fetchShopifyDB() {
  const { data, error } = await supabaseCoverlandSizeChart.from("shopify_db").select("id, product_vehicle_id, color_id");

  if (error) {
    throw new Error(`Failed to fetch shopify_db: ${error.message}`);
  }

  const lookup: Record<string, number> = {};

  for (const row of data) {
    const key = `${row.product_vehicle_id}-${row.color_id}`;
    lookup[key] = row.id;
  }

  return lookup;
}

async function testUpload() {
  const data = await fetchShopifyDB();
  console.log(data);
}

testUpload();
