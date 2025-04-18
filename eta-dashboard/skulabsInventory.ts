import axios from "axios";
import dotenv from "dotenv";
import { logger } from "../constants/logger";
import fs from "fs";
import path from "path";

dotenv.config();

export type InventoryCounts = {
  item_id: string;
  on_hand: number;
  reserved: number;
  free: number;
};

type SkuLabsInventory = {
  [item_id: string]: InventoryCounts;
};

export type InventoryBySkuName = {
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
      inventoryBySkuName[sku] = { item_id: itemID, ...skuLabsItemsMap[itemID] };
    } else if (itemID === "sku_reserve_breakdown_by_order") {
      continue;
    } else {
      logger.error(`[error] No SKU found for itemID: ${itemID}`);
    }
  }

  return inventoryBySkuName;
}
