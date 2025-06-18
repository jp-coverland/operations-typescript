import { getAuthToken } from "../linnworks/authorize";
import { getLinnworksInventory } from "../linnworks/inventory";
import Papa from "papaparse";
import path from "path";
import fs from "fs";

export async function getDefaultWarehouseInventory() {
  const entriesPerPage = 400;
  const startPage = 1;
  const DEFAULT_WAREHOUSE_ID = process.env.DEFAULT_WAREHOUSE_ID;
  const excludeComposites = false;
  const AUTH_TOKEN = await getAuthToken();

  let totalData: any[] = [];

  const firstPage = await getLinnworksInventory(entriesPerPage, startPage, DEFAULT_WAREHOUSE_ID, excludeComposites, AUTH_TOKEN);
  totalData = totalData.concat(firstPage.Data);
  const totalPages = firstPage.TotalPages;

  console.info(`[start] Getting Complete Linnworks Inventory...`);

  for (let page = 2; page <= totalPages; page++) {
    console.info(`[info] Getting Inventory Page ${page}/${totalPages}`);
    const result = await getLinnworksInventory(entriesPerPage, page, DEFAULT_WAREHOUSE_ID, excludeComposites, AUTH_TOKEN);
    totalData = totalData.concat(result.Data);
  }

  return totalData;
}

async function filterCompositeSkus() {
  const allSkus = await getDefaultWarehouseInventory();

  const compositeSkus = allSkus.filter((item) => item.IsCompositeParent === true);

  const itemNumbers = compositeSkus.map((item) => item.ItemNumber);
  const csv = Papa.unparse(itemNumbers.map((item) => ({ ItemNumber: item })));

  const csvFilePath = path.resolve(__dirname, "composite_skus.csv");

  fs.writeFileSync(csvFilePath, csv);
}

filterCompositeSkus();
