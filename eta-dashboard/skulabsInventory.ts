import axios from "axios";
import dotenv from "dotenv";
import { getTimestamp, supabaseDataProcessing } from "../constants/constants";
import { getLogger } from "../constants/loggers";
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

async function getSkuLabsItemsMap() {
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

async function getSKUByItemIDs(skuIDs: string[]) {
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

async function getSkuIDMapping() {
  const skuLabsItemsMap = await getSkuLabsItemsMap();
  const skuIDs: string[] = Object.keys(skuLabsItemsMap).filter((id) => /^[a-f\d]{24}$/i.test(id)); // only valid MongoDB ObjectIds

  const batchSize = 400;
  const results: any[] = [];
  const delayBetweenRequests = 500;

  console.info(`[${getTimestamp()}] Getting SKU-ID Mapping...`);
  for (let i = 0; i < skuIDs.length; i += batchSize) {
    const batch = skuIDs.slice(i, i + batchSize);

    await new Promise((resolve) => setTimeout(resolve, delayBetweenRequests));

    try {
      const batchData = await getSKUByItemIDs(batch);

      if (Array.isArray(batchData)) {
        results.push(...batchData);
        console.info(`Successfully inserted batch ${i / batchSize}`);
      } else {
        console.warn(`Unexpected response at batch ${i / batchSize}:`, batchData);
      }
    } catch (error: any) {
      const status = error.response?.status;
      const apiMessage = error.response?.data?.message || JSON.stringify(error.response?.data);
      console.error(`Failed batch ${i / batchSize} (Status ${status}): ${apiMessage}`);
    }
  }

  const outputPath = path.resolve(__dirname, `sku-id-mapping_${getTimestamp()}.json`);
  const outputPathReuse = path.resolve(__dirname, `most-recent-sku-id-map.json`);
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), "utf-8");
  fs.writeFileSync(outputPathReuse, JSON.stringify(results, null, 2), "utf-8");
  //   return inventoryBySkuName;
}

function getInventoryBySkuName(skuLabsItemsMap: any) {
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
    } else {
      console.error(`No SKU found for itemID: ${itemID}`);
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

  return updates;
}

async function main() {
  try {
    // getSkuIDMapping();
    const itemsMap = await getSkuLabsItemsMap();
    const inventoryBySkuName = getInventoryBySkuName(itemsMap);
    const updates = await updateInventoryOnSupabase(inventoryBySkuName);
    console.log(updates);
  } catch (error) {
    console.error("Error:", error);
    // log.error("Error on getting inventory data:", { error });
  }
}

main();
