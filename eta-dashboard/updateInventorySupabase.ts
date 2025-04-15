import { getInventoryBySkuName, getSkuLabsItemsMap, updateInventoryOnSupabase } from "./skulabsInventory";

async function updateInventory() {
  const itemsMap = await getSkuLabsItemsMap();
  const inventoryBySkuName = await getInventoryBySkuName(itemsMap);

  await updateInventoryOnSupabase(inventoryBySkuName);
}

updateInventory();
