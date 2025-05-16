import path from "path";
import { delay, getSupabaseQuery, mapLinnWorksOrderRequest, mapOrderItemsToCartItems, postLinnworksOrder, readCSVOrderNumbers } from "./functions";
import { Address, CustomerInfo, LinnWorksOrderRequest } from "./types";

async function inputOrdersToLinnworks() {
  const csvFilePath = path.resolve(__dirname, "missing-orders.csv");

  try {
    const orderNumbers = await readCSVOrderNumbers(csvFilePath);
    const { data } = await getSupabaseQuery(orderNumbers);

    const linnworksOrderInputs: LinnWorksOrderRequest[] = await Promise.all(
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

        const billingAddress: Address = {
          address_line_1: order.billing_address_line_1,
          address_line_2: order.billing_address_line_2,
          address_city: order.billing_address_city,
          address_state: order.billing_address_state,
          address_postal_code: order.billing_address_postal_code,
          address_country: order.billing_address_country,
        };

        const orders = await mapLinnWorksOrderRequest(
          order.order_id,
          cartItems,
          shippingAddress,
          billingAddress,
          customerInfo,
          order.payment_gateway,
          order.total_tax,
          0
        );
        const location = order.order_id.includes("-PRE-") ? "Virtual Warehouse" : "default";

        return { orders: orders, location: location };
      })
    );

    for (const orderInfo of linnworksOrderInputs) {
      for (const object of orderInfo.orders) {
        console.info(`Attempting to input order: ${object.ReferenceNumber}`);
      }
      const response = await postLinnworksOrder(orderInfo);
      console.info(response);
    }
  } catch (error) {
    console.error("Error with entire execution.");
  }
}

inputOrdersToLinnworks();
