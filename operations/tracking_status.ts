import path from "path";
import Papa from "papaparse";
import { readFileSync, writeFileSync } from "fs";

const filePath = "./operations/tracking_status.csv";
const csvText = readFileSync(filePath, "utf-8");
const parsed = Papa.parse<{ [key: string]: string }>(csvText, { header: true, skipEmptyLines: true });
const orderData = parsed.data;

const jsonPath = path.join(__dirname, "./order_info_2025-03-21.json");
const jsonData = JSON.parse(readFileSync(jsonPath, "utf-8"));

const orderNumbers = orderData.map((row) => row["Order Number"]).filter((orderNumber) => orderNumber);

async function getTrackingStatus() {
  let hasMovement = 0;
  let noMovement = 0;
  let orderNotFound = 0;

  for (const row of orderData) {
    try {
      const orderNumber = row["Order Number"];
      const matchingOrder = jsonData.find((item: any) => item.order_number === orderNumber);

      if (matchingOrder) {
        row["Tracking Status"] = matchingOrder.tracking_status;
        row["Tracking Number"] = `="${matchingOrder.tracking_number}"`;

        if (matchingOrder.tracking_status === "Delivered" || matchingOrder.tracking_status === "Transit") {
          hasMovement++;
        } else {
          noMovement++;
        }
      } else {
        row["Tracking Status"] = "Not Found";
        row["Tracking Number"] = `"Not Found"`;
        orderNotFound++;
      }
    } catch (error) {
      console.error(`Error processing order ${row["Order Number"]}:`, error);
    }
  }

  const updatedCSV = Papa.unparse(orderData, { header: true });
  writeFileSync(filePath, updatedCSV);

  console.log(`Total Order Numbers: ${orderNumbers.length}`);
  console.log(`Orders with movement: ${hasMovement}`);
  console.log(`Orders with no movement: ${noMovement}`);
  console.log(`Orders not found: ${orderNotFound}`);
}

getTrackingStatus();
