import fs from "fs";
import moment from "moment";
import dotenv from "dotenv";

dotenv.config();
const SKU_LABS_API_KEY = process.env.SKU_LABS_API_KEY;

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${SKU_LABS_API_KEY}`,
  },
};
const BASE_URL = "https://api.skulabs.com/order/get_all";

async function fetchOrdersByDateRange(startDate: string, endDate: string) {
  const requestBody = JSON.stringify({
    start: startDate,
    end: endDate,
    // 636d54d28addf561d93ad576: PHONE tag ID | 6328f5c3c3ea0aede729f817: Coverland tag ID
    tags: ["6328f5c3c3ea0aede729f817", "636d54d28addf561d93ad576"],
  });

  const response = await fetch(`${BASE_URL}?request_body=${requestBody}`, options);
  const responseData = (await response.json()) as { orders: any[] };

  return responseData.orders || [];
}

async function getOrderInfo() {
  const startDate = moment("2024-08-01");
  const endDate = moment().add(1, "days").format("YYYY-MM-DD"); // tomorrow's date
  const intervalDays = 7;
  const delayBetweenRequests = 1500;

  let allOrderData: any[] = [];

  for (let currentStart = startDate.clone(); currentStart.isBefore(endDate); ) {
    const currentEnd = currentStart.clone().add(intervalDays, "days").subtract(1, "millisecond");

    const orderGETRequest = await fetchOrdersByDateRange(currentStart.toISOString(), currentEnd.toISOString());

    console.log(`Fetching orders from ${currentStart.format()} to ${currentEnd.format()} | ${orderGETRequest.length} orders`);

    const extractOrderStatus = orderGETRequest.map((order) => {
      const orderNumber = order.order_number;

      const orderStatus = order.status;

      const mostRecentShipmentStatus =
        order.shipments
          ?.slice()
          ?.reverse()
          ?.find((item: any) => item.return_label === false)?.tracking_status || "";

      const mostRecentShipmentTracking =
        order.shipments
          ?.slice()
          ?.reverse()
          ?.find((item: any) => item.return_label === false)?.response?.tracking_number || "";

      const orderedDate = moment(order.stash.date).format("YYYY-MM-DD");

      const mostRecentReturnStatus =
        order.shipments
          ?.slice()
          ?.reverse()
          ?.find((item: any) => item.return_label === true)?.tracking_status || "";

      const phoneNumber = order.stash.shipping_information.phone;
      const email = order.stash.shipping_information.email;
      const address = order.stash.shipping_information.address;
      const address2 = order.stash.shipping_information.address_2;
      const city = order.stash.shipping_information.city;
      const state = order.stash.shipping_information.state;
      const zip = order.stash.shipping_information.zip;
      const country = order.stash.shipping_information.country;

      // const trackingStatus =
      //   order.shipments?.[0]?.tracking_status || "Not Started";
      return {
        order_number: orderNumber,
        order_status: orderStatus,
        tracking_number: mostRecentShipmentTracking,
        tracking_status: mostRecentShipmentStatus,
        ordered_date: orderedDate,
        return_status: mostRecentReturnStatus,
        phone_number: phoneNumber,
        email: email,
        address: address,
        address_2: address2,
        city: city,
        state: state,
        zip: zip,
        country: country,
      };
    });

    allOrderData = allOrderData.concat(extractOrderStatus);

    currentStart = currentEnd.clone().add(1, "millisecond");

    await new Promise((resolve) => setTimeout(resolve, delayBetweenRequests));
  }

  const todayDate = moment().format("YYYY-MM-DD");
  const jsonPath = `./operations/order_info_${todayDate}.json`;
  try {
    const jsonData = JSON.stringify(allOrderData, null, 2);
    fs.writeFileSync(jsonPath, jsonData, "utf8");
  } catch (error) {
    console.error("Error exporting to JSON:", error);
  }
}
