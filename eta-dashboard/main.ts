import moment from "moment";
import { fetchOrderInfo, getSkuCountFromOrders } from "./sales";
import { getInventoryBySkuName, getSkuLabsItemsMap } from "./skulabsInventory";
import { readFinalOrderListCSV, updateToSupabase } from "./uploadFinalOrderList";
import path from "path";
import { compareCSVs } from "./compareDbCsv";
import { updateInventoryOnSupabase, updateSupabaseInventoryDraft } from "./updateInventorySupabase";

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

async function getSales() {
  const orderInfo = await fetchOrderInfo();
  const data: any = getSkuCountFromOrders(orderInfo.preorderData, orderInfo.startDate28);
  const sorted = data.sort((a: any, b: any) => moment(a.date).valueOf() - moment(b.date).valueOf());

  console.log(sorted.length);
  // console.log(JSON.stringify(sorted, null));
}

// getSales();

async function updateInventoryDraft() {
  const itemsMap = await getSkuLabsItemsMap();
  const inventoryBySkuName = await getInventoryBySkuName(itemsMap);

  await updateSupabaseInventoryDraft(inventoryBySkuName);
}

// updateInventoryDraft();

// compareCSVs();
