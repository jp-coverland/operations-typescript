import dotenv from "dotenv";

dotenv.config();
const SKULABS_API_KEY = process.env.SKULABS_API_KEY;

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${SKULABS_API_KEY}`,
  },
};

async function find(startDate: string, endDate: string) {
  const responseGET = await fetch(
    `https://api.skulabs.com/order/get_all?request_body={"start":"${startDate}T07:00:00","end":"${endDate}T07:00:00","tags":["6328f5c3c3ea0aede729f817"]}`,
    options
  );

  const data = await responseGET.json();

  for (const order of data.orders) {
    if (order.shipments.length > 2) {
      const mostRecentShipmentStatus =
        order.shipments
          ?.slice()
          ?.reverse()
          ?.find((item: any) => item.return_label === false)?.tracking_status || "Not Started";
      console.log(`${order.order_number}: ${mostRecentShipmentStatus}`);
    }
  }
}

find("2025-01-10", "2025-01-30");
