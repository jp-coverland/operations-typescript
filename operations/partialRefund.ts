import { supabase } from "../constants/constants";

export async function getOrderInfo(orderNumber: string) {
  if (!orderNumber) {
    console.warn("No order numbers provided for the Supabase query.");
    return { data: [], error: null };
  }

  const ordersTableSelect = "order_id, order_date, total_amount, total_tax, customer_name, customer_email, customer_phone, payment_gateway";
  const productsTableSelect = `"skulabs SKU"`;
  const orderItemsTableSelect = "price, preorder_discount, multiplier";

  const { data, error } = await supabase
    .from("_Orders")
    .select(
      `${ordersTableSelect}, 
      orderItems:orderItems_table (${orderItemsTableSelect},
        product:Products (${productsTableSelect})
        )`
    )
    .eq("order_id", `${orderNumber}`);

  if (error) {
    console.error("Supabase query error:", error);
    return { data: [], error };
  }

  return { data, error: null };
}

type FrontBackPrice = {
  fullSKU: string;
  fullSKUPrice: number;
  frontSKU: string;
  frontSKUPrice: number;
  rearSKU: string;
  rearSKUPrice: number;
};

async function getProductInfo(sku: string) {
  const productsTableSelect = `"skulabs SKU", msrp`;

  const { data, error } = await supabase.from("Products").select(`${productsTableSelect}`).eq(`"skulabs SKU"`, `${sku}`).limit(1);

  if (error) {
    console.error("Supabase query error:", error);
    return { data: [], error };
  }

  return { data, error: null };
}

async function getFrontBackPrice(orderData: any) {
  const regex = /^CA-SC-10-(F|B)-(\d+)-(F|B)-(\d+)-([A-Z]+)-(\d+TO)$/;
  const result: FrontBackPrice[] = [];

  for (const orderItem of orderData.data[0].orderItems) {
    const sku = orderItem.product["skulabs SKU"];
    const match = sku.match(regex);
    const discountPerSKU = orderItem.preorder_discount / 2;

    if (!match) return null;
    const [, pos1, num1, pos2, num2, color, tone] = match;
    const frontSKU = `CA-SC-10-${pos1}-${num1}-${color}-${tone}`;
    const rearSKU = `CA-SC-10-${pos2}-${num2}-${color}-${tone}`;

    const frontSKUData = await getProductInfo(frontSKU);
    const frontSKUPrice = frontSKUData.data[0].msrp - discountPerSKU;

    const individualSKUs: FrontBackPrice = {
      fullSKU: sku,
      fullSKUPrice: orderItem.price,
      frontSKU: frontSKU,
      frontSKUPrice: frontSKUPrice,
      rearSKU: rearSKU,
      rearSKUPrice: orderItem.price - frontSKUPrice,
    };

    result.push(individualSKUs);
  }

  return result;
}

// check order numbers: CL-PRE-250327-SE-1149 (multi-fullset), CL-PRE-250315-SE-0683 (single-fullset), CL-PRE-241201-SE-0078 (old), CL-250328-CC-0097 (car cover), CL-250328-SE-0835 (single-frontset)
async function main() {
  const orderData = await getOrderInfo("CL-PRE-250327-SE-1149");
  console.log(JSON.stringify(orderData, null, 2));

  const individualSKUs = await getFrontBackPrice(orderData);
  console.log(individualSKUs);
}

main();
