import { supabaseDataProcessing } from "../constants/constants";
import { logger } from "../constants/logger";
import { getInventoryBySkuName, getSkuLabsItemsMap, InventoryBySkuName } from "./skulabsInventory";

async function getSupabaseInventory(tableName: string) {
  const { data, error } = await supabaseDataProcessing.from(`${tableName}`).select("*");

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

export async function updateSupabaseInventoryDraft(inventoryBySkuName: InventoryBySkuName) {
  logger.info(`[start] starting uploading inventory count on to Supabase...`);
  const supabaseSKUs = await getSupabaseInventory("skus_skulabs_test_eta");
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
        skipped.push({ master_sku: sku });
        continue;
        // skip upserts of floor mats for now
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
      });
    }
  }

  if (updates.length > 0) {
    await supabaseDataProcessing.rpc("batch_update_skulabs_inventory_eta", { payload: updates });
    logger.info(`Updated ${updates.length} rows.`);
  }

  if (inserts.length > 0) {
    const { error: insertError } = await supabaseDataProcessing.from("skus_skulabs_test_eta").upsert(inserts, { onConflict: "master_sku" });

    if (insertError) throw new Error(`Insert upsert failed: ${insertError.message}`);
    logger.info(`Inserted ${inserts.length} rows.`);
  }

  if (skipped.length > 0) {
    logger.warn(`Skipped ${skipped.length} SKUs due to unmatched patterns.`);
  }
}

export async function updateInventoryOnSupabase(inventoryBySkuName: InventoryBySkuName) {
  logger.info(`[start] starting uploading inventory count on to Supabase...`);
  const supabaseSKUs = await getSupabaseInventory("skus_skulabs");
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
        skipped.push({ master_sku: sku });
        continue;
        // skip upserts of floor mats for now
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

  if (updates.length > 0) {
    await supabaseDataProcessing.rpc("batch_update_skulabs_inventory", { payload: updates });
    logger.info(`Updated ${updates.length} rows.`);
  }

  if (inserts.length > 0) {
    console.log(inserts);
    const { error: insertError } = await supabaseDataProcessing.from("skus_skulabs").upsert(inserts, { onConflict: "master_sku" });

    if (insertError) throw new Error(`Insert upsert failed: ${insertError.message}`);
    logger.info(`Inserted ${inserts.length} rows.`);
  }

  if (skipped.length > 0) {
    logger.warn(`Skipped ${skipped.length} SKUs.`);
  }
}

async function updateInventory() {
  const itemsMap = await getSkuLabsItemsMap();
  const inventoryBySkuName = await getInventoryBySkuName(itemsMap);

  await updateInventoryOnSupabase(inventoryBySkuName);
}

updateInventory();
