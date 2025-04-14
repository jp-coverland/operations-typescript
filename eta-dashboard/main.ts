import { getInventoryBySkuName, getSkuLabsItemsMap, updateInventoryOnSupabase } from "./skulabsInventory";
import { readFinalOrderListCSV, updateToSupabase } from "./uploadFinalOrderList";
import path from "path";

async function finalOrderList() {
  const csvFilePath = path.resolve(__dirname, "final_order_list.csv");
  const finalOrderCSV = readFinalOrderListCSV(csvFilePath);

  await updateToSupabase(finalOrderCSV);
}

// finalOrderList();

async function supabaseSkuInventory() {
  const skuLabsItemsMap = await getSkuLabsItemsMap();
  const inventoryBySkuName = getInventoryBySkuName(skuLabsItemsMap);

  await updateInventoryOnSupabase(inventoryBySkuName);
}

// supabaseSkuInventory();
