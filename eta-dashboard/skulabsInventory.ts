import axios from "axios";
import dotenv from "dotenv";
import { supabaseDataProcessing } from "../constants/constants";
import { logger } from "../constants/logger";
import fs from "fs";
import path from "path";
import { unparse } from "papaparse";

dotenv.config();

type InventoryCounts = {
  item_id: string;
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
      inventoryBySkuName[sku] = { item_id: itemID, ...skuLabsItemsMap[itemID] };
    } else if (itemID === "sku_reserve_breakdown_by_order") {
      continue;
    } else {
      logger.error(`[error] No SKU found for itemID: ${itemID}`);
    }
  }

  return inventoryBySkuName;
}

async function getSupabaseInventory() {
  const { data, error } = await supabaseDataProcessing.from("skus_skulabs").select("*");

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

export async function updateInventoryOnSupabase(inventoryBySkuName: InventoryBySkuName) {
  const supabaseSKUs = await getSupabaseInventory();
  const supabaseMap: Record<string, any> = [];

  for (const row of supabaseSKUs.data) {
    supabaseMap[row.master_sku] = row;
  }

  const updates = [];
  const inserts = [];
  const skipped = [];

  for (const [sku, inv] of Object.entries(inventoryBySkuName)) {
    const existing = supabaseMap[sku];

    if (existing) {
      const needsUpdate = existing.on_hand !== inv.on_hand || existing.reserved !== inv.reserved || existing.free !== inv.free;

      if (needsUpdate) {
        updates.push({ id: existing.id, on_hand: inv.on_hand, reserved: inv.reserved, free: inv.free, updated_at: new Date().toISOString() });
      }
    } else {
      let product_type = "unknown";

      if (/^CA-SC-10-F-/.test(sku)) {
        product_type = "front seat cover";
      } else if (/^CA-SC-10-B-/.test(sku)) {
        product_type = "rear seat cover";
      } else if (/^CA-SC-10-E-/.test(sku)) {
        product_type = "third row seat cover";
      } else if (/^CA-FM-TX/.test(sku)) {
        product_type = "floor mats";
      } else if (/^CC-/.test(sku)) {
        product_type = "car cover";
      } else {
        skipped.push({ master_sku: sku });
        continue;
      }

      inserts.push({
        master_sku: sku,
        item_id: inv.item_id,
        product_type,
        on_hand: inv.on_hand,
        reserved: inv.reserved,
        free: inv.free,
        updated_at: new Date().toISOString(),
      });
    }
  }

  const insertsCSV = unparse(inserts);
  const skippedCSV = unparse(skipped);
  fs.writeFileSync(path.resolve(__dirname, "not_on_supabase.csv"), insertsCSV, "utf-8");
  fs.writeFileSync(path.resolve(__dirname, "skipped.csv"), skippedCSV, "utf-8");

  await supabaseDataProcessing.rpc("batch_update_skulabs_inventory", { payload: updates });
  logger.info(`Updated ${updates.length} rows.`);
}
