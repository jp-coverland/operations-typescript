import axios from "axios";
import dotenv from "dotenv";
import { supabaseDataProcessing } from "../constants/constants";
import { logger } from "../constants/logger";
import fs from "fs";
import path from "path";

dotenv.config();

type InventoryCounts = {
  on_hand: number;
  reserved: number;
  free: number;
};

type SkuLabsInventory = {
  [item_id: string]: InventoryCounts;
};

type InventoryBySkuName = {
  [sku: string]: InventoryCounts;
};

type SupabaseIDMapping = {
  sku: string;
  item_id: string;
};

export async function getSkuLabsItemsMap() {
  const url = "https://api.skulabs.com/inventory/get_items_map";
  const reqeustBody = {
    data: {},
  };

  const response = await axios.post(url, reqeustBody, {
    headers: {
      Authorization: `Bearer ${process.env.SKU_LABS_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
}

export async function getSKUByItemIDs(skuIDs: string[]) {
  const url = "https://api.skulabs.com/item/get";
  const selector = { _id: skuIDs };
  const fields = { sku: 1 };
  const response = await axios.get(url, {
    params: {
      selector: JSON.stringify(selector),
      fields: JSON.stringify(fields),
    },
    headers: {
      Authorization: `Bearer ${process.env.SKU_LABS_API_KEY}`,
    },
  });

  return response.data;
}

export function getInventoryBySkuName(skuLabsItemsMap: any) {
  // const logger = getLogger(__dirname, "inventory-by-sku-name");
  const filePath = path.resolve(__dirname, `most-recent-sku-id-map.json`);
  const rawData = fs.readFileSync(filePath, "utf-8");
  const skuIdMapping = JSON.parse(rawData);

  const itemIDToSkuMap: Record<string, string> = {};
  for (const item of skuIdMapping) {
    itemIDToSkuMap[item._id] = item.sku;
  }

  const inventoryBySkuName: Record<string, InventoryCounts> = {};
  for (const itemID in skuLabsItemsMap) {
    const sku = itemIDToSkuMap[itemID];
    if (sku) {
      inventoryBySkuName[sku] = skuLabsItemsMap[itemID];
    } else if (itemID === "sku_reserve_breakdown_by_order") {
      continue;
    } else {
      logger.error(`[error] No SKU found for itemID: ${itemID}`);
    }
  }

  return inventoryBySkuName;
}

async function getSupabaseInventory() {
  const { data, error } = await supabaseDataProcessing.from("skus_skulabs").select("id, master_sku");

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

async function updateInventoryOnSupabase(inventoryBySkuName: InventoryBySkuName) {
  const supabaseSKUs = await getSupabaseInventory();

  const updates = [];
  const notFound = [];

  for (const row of supabaseSKUs.data) {
    const inventoryData = inventoryBySkuName[row.master_sku];

    if (inventoryData) {
      updates.push({
        id: row.id,
        master_sku: row.master_sku,
        on_hand: inventoryData.on_hand,
        reserved: inventoryData.reserved,
        free: inventoryData.free,
      });
    } else {
      // row in skus_skulabs table is not found in inventoryBySkuName
      notFound.push({
        id: row.id,
        master_sku: row.master_sku,
      });
      // error should only display sku name, if displays sku ID, something is wrong.
      console.error(`Not found: ${(row.id, row.master_sku)}`);
    }
  }

  console.info(`Successful updates: ${updates.length}\nFailed updates b/c not found: ${notFound.length}`);
}

async function main() {
  const skuLabsItemsMap = await getSkuLabsItemsMap();
  const inventoryBySkuName = await getInventoryBySkuName(skuLabsItemsMap);
  updateInventoryOnSupabase(inventoryBySkuName);
}

// main();
