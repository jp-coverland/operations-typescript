import dotenv from "dotenv";
import moment from "moment-timezone";
import fs from "fs";
import path from "path";

dotenv.config();
const SKU_LABS_API_KEY = process.env.SKU_LABS_API_KEY;

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${SKU_LABS_API_KEY}`,
  },
};
const BASE_URL = "https://api.skulabs.com/order/get_all";

async function fetchOrderInfoByDates(startDate: string, endDate: string, tags: string[]) {
  const requestBody = JSON.stringify({
    start: startDate,
    end: endDate,
    // 636d54d28addf561d93ad576: PHONE tag ID | 6328f5c3c3ea0aede729f817: Coverland tag ID
    tags: tags,
  });

  const response = await fetch(`${BASE_URL}?request_body=${requestBody}`, options);
  const responseData = (await response.json()) as { orders: any[] };

  return responseData.orders || [];
}

export function getSkuCountFromOrders(orders: any[], startDate: any) {
  const filtered = [];

  for (const order of orders) {
    const orderDate = moment(order.date);
    if (orderDate.isBefore(startDate) || order.order_number.includes("TEST") || /^RE-/.test(order.order_number)) {
      continue;
    }

    filtered.push({ date: order.date, order_number: order.order_number });
  }

  return filtered;
}

export async function fetchOrderInfo() {
  const endDate = moment().startOf("day");
  const startDate28 = endDate.clone().subtract(28, "days").startOf("day");
  const intervalDays = 14;
  const delayBetweenRequests = 1300;
  const preorderTag = ["6691657a10b91213fbebbecb"];

  let preorderData: any[] = [];

  // const request = await fetchOrderInfoByDates(startDate28.format(), endDate.format(), preorderTag);
  // console.log(`Query from ${startDate28.format()} to ${endDate.format()} | ${request.length}`);

  for (let currentStart = startDate28.clone(); currentStart.isBefore(endDate); ) {
    const currentEnd = currentStart.clone().add(intervalDays, "days").subtract(1, "millisecond");

    const request = await fetchOrderInfoByDates(currentStart.format(), currentEnd.format(), preorderTag);

    console.log(`Query from ${currentStart.format()} to ${currentEnd.format()} | ${request.length}`);
    preorderData = preorderData.concat(request);

    currentStart = currentEnd.clone().add(1, "millisecond");
  }

  return { preorderData, startDate28: startDate28.format() };
}
