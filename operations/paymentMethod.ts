import Papa from "papaparse";
import dotenv from "dotenv";
import { readFileSync, writeFileSync } from "fs";

dotenv.config();
const SKU_LABS_API_KEY = process.env.SKU_LABS_API_KEY;

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${SKU_LABS_API_KEY}`,
  },
};

const filePath = "C:/Users/Coverland/Desktop/repo/operations-typescript/operations/payment_method.csv";
const fileContent = readFileSync(filePath, "utf-8");

const parsedCSV = Papa.parse(fileContent, { header: true });

// Convert sheet to JSON
const data = parsedCSV.data as { [key: string]: string }[];

const orderNumbers = new Set(data.map((row) => row["order_number"]).filter((order_number) => order_number));

// UTC DATE CONVERT EXAMPLE:
// start=2024-07-20T07:00:00 | end=2024-07-21T07:00:00
// the above is equivalent to 2024-07-20 at midnight all the way to 11:59pm

// 'https://api.skulabs.com/order/get_all?sort={"end_date": "-1"}&start=2024-08-09T07:00:00&end=2024-08-22T07:00:00'
// 6328f5c3c3ea0aede729f817 -> Coverland TAG ID

async function getPaymentMethod() {
  const url = "https://api.skulabs.com/order/get_all";
  const requestBody = 'request_body={"start":"2025-03-15T07:00:00","end":"2025-03-22T07:00:00","tags":["6328f5c3c3ea0aede729f817","636d54d28addf561d93ad576"]}';
  const apiUrl = `${url}?${requestBody}`;

  const responseGET = await fetch(apiUrl, options);

  const orderData = await responseGET.json();
  let successCount = 0;
  let errorCount = 0;

  console.log(orderData.orders.length);

  const output_rows = [["Order Number", "Name", "Payment"]];

  for (const orderNumber of orderNumbers) {
    try {
      const matchingOrder = orderData.orders.find((item: any) => item.order_number === orderNumber);

      const notes = matchingOrder.stash.notes;
      const paymentRegex = /Payment Method:\s*(Stripe|Paypal|Heartland)/i;
      const paymentMatch = notes.match(paymentRegex);

      if (matchingOrder) {
        const paymentMethod = paymentMatch[1];
        console.log(orderNumber.padEnd(21, " "), " | ", matchingOrder.stash.shipping_information.name.padEnd(25, " "), " | ", paymentMethod);
        output_rows.push([orderNumber, matchingOrder.stash.shipping_information.name, paymentMethod]);
        successCount++;
      }
    } catch (error) {
      errorCount++;
      output_rows.push([orderNumber, "N/A", "N/A"]);
      console.log(orderNumber.padEnd(21, " "), " | ", "N/A".padEnd(25, " "), " | ", "N/A");
    }
  }
  console.log(`Results: ${successCount} / ${successCount + errorCount} orders succeeded.`);

  const csvOutput = Papa.unparse(output_rows);
  writeFileSync("./operations/payment_output.csv", csvOutput);
}

getPaymentMethod();
