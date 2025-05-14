import { readCSVOrderNumbers, getSupabaseQuery, mapOrderItemsToCartItems, generateSkuLabOrderInput, postSkuLabsOrder, delay } from "./functions";
import { Address, CustomerInfo, SkuLabOrderInput, SkuLabOrderResponse } from "./types";

async function inputOrder() {
  const csvFilePath = "./missing-order-check/missing-orders.csv";

  try {
    const orderNumbers = await readCSVOrderNumbers(csvFilePath);
    const { data } = await getSupabaseQuery(orderNumbers);

    // Generate all SKU Lab Order Inputs first
    const skuLabsOrderInputs = await Promise.all(
      data.map(async (order) => {
        const cartItems = mapOrderItemsToCartItems(order.orderItems);

        const customerInfo: CustomerInfo = {
          name: order.customer_name,
          email: order.customer_email,
          phoneNumber: order.customer_phone,
        };

        const shippingAddress: Address = {
          address_line_1: order.shipping_address_line_1,
          address_line_2: order.shipping_address_line_2,
          address_city: order.shipping_address_city,
          address_state: order.shipping_address_state,
          address_postal_code: order.shipping_address_postal_code,
          address_country: order.shipping_address_country,
        };

        const orderInputBody: SkuLabOrderInput = {
          orderNumber: order.order_id,
          cartItems: cartItems,
          orderTotal: order.total_amount,
          shippingAddress: shippingAddress,
          customerInfo: customerInfo,
          paymentMethod: order.payment_gateway,
          tax: order.total_tax ?? 0,
          discount: 0,
          shipping: 0,
        };

        return await generateSkuLabOrderInput(orderInputBody);
      })
    );

    const responses: SkuLabOrderResponse[] = [];

    for (const orderInfo of skuLabsOrderInputs) {
      console.log(`Attempting to input order: ${orderInfo.order_number}`);
      const response = await postSkuLabsOrder(orderInfo);
      responses.push(response);
      await delay(1500);
    }

    console.log(responses);
  } catch (error) {
    console.error("Error processing CSV:", error);
  }
}

inputOrder();
