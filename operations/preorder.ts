import Papa from "papaparse";
import momentTimezone from "moment-timezone";
import dotenv from "dotenv";
import { writeFileSync } from "fs";

dotenv.config();
const SKU_LABS_API_KEY = process.env.SKU_LABS_API_KEY;

// UTC DATE CONVERT EXAMPLE:
// start=2024-07-20T07:00:00 | end=2024-07-21T07:00:00
// the above is equivalent to 2024-07-20 at midnight all the way to 11:59pm
// IN DAYLIGHT SAVING = 8:00:00, NON DAYLIGHT SAVING = 7:00:00

async function getPreorderInfo() {
  let count = 1;

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${SKU_LABS_API_KEY}`,
    },
  };

  const url = "https://api.skulabs.com/order/get_all";
  const requestBody = 'request_body={"start":"2025-03-19T08:00:00","end":"2025-03-25T08:00:00","tags":["6691657a10b91213fbebbecb"]}';
  const apiUrl = `${url}?${requestBody}`;

  const responseGET = await fetch(apiUrl, options);
  const data = (await responseGET.json()) as { orders: any[] };

  //   console.log(data);

  const rows = [["Date", "Order Number", "Name", "Size", "Quantity", "ETA", "Vehicle Info", "Helper"]];

  const allPreOrders = data.orders;
  for (const preOrder of allPreOrders) {
    try {
      if (preOrder.status !== "cancelled") {
        const notes = preOrder.stash.notes;

        // Extract Seat/Car/Floor Mat SKU
        const coversRegex = /SC-[A-Z0-9-]+-(?:1TO|CM)|[A-Z]{2,3}-\d{2}-[A-Z0-9-]+-STR|FM-[A-Z0-9-]+(?=-\d+)/g;
        const coversMatch = notes.match(coversRegex);

        // Quantity
        const quantityRegex = /Quantity:\s*(\d+)/g;
        const allQuantityMatches = [...notes.matchAll(quantityRegex)];
        const quantityMatch = allQuantityMatches.map((match) => match[1]);

        // Car Model
        const carModelRegex = /\d{4}-\d{4} [A-Za-z0-9-/ .+()]+(?= Seat|Car|Floor)/g;
        const carModelMatch = notes.match(carModelRegex);

        // Car model w/ single years
        const singleYearCarModel = /\b\d{4}\b [A-Za-z0-9/ .-]+(?= (Seat|Car|Floor))/g;
        const singleYearCarModelMatch = notes.match(singleYearCarModel);

        // ETA
        const etaRegex = /Preorder \/ Ship Date:\s*(\d{1,2}\/\d{1,2}\/\d{4}|null)/g;
        const allETAMatches = [...notes.matchAll(etaRegex)];
        const etaMatch = allETAMatches.map((match) => match[1]);

        // console.log(etaMatch);

        for (let i = 0; i < coversMatch.length; i++) {
          let extractedSKU = coversMatch ? coversMatch[i] : "n/a";
          if (extractedSKU.includes("STR")) {
            extractedSKU = "CC-" + extractedSKU;
          }

          const quantity = quantityMatch ? quantityMatch[i] : "n/a";

          const carModel = (carModelMatch && carModelMatch[i]) || (singleYearCarModelMatch && singleYearCarModelMatch[i]) || "n/a";

          const extractedETA = Array.isArray(etaMatch) && i < etaMatch.length ? etaMatch[i] : "null";

          const dateUTC = preOrder.stash.date;
          const datePST = momentTimezone.utc(dateUTC).tz("America/Los_Angeles").format("M/D/YYYY");

          rows.push([datePST, preOrder.order_number, preOrder.stash.shipping_information.name, extractedSKU, quantity, extractedETA, carModel, count]);
          console.log(
            datePST.padEnd(11, " "),
            " | ",
            preOrder.order_number.padEnd(21, " "),
            " | ",
            preOrder.stash.shipping_information.name.padEnd(25, " "),
            " | ",
            extractedSKU.padEnd(30, " "),
            " | ",
            quantity,
            " | ",
            extractedETA.padEnd(10, " "),
            " | ",
            carModel.padEnd(45, " "),
            " | ",
            count
          );
        }

        count++;
      }
    } catch (error) {
      console.log(error);
    }
  }

  const header = rows[0];
  const entries = rows.slice(1);
  entries.reverse();
  const reversedData = [header, ...entries];

  const csv = Papa.unparse(reversedData);
  writeFileSync("./operations/preorders.csv", csv);

  //   const ws = xlsx.utils.aoa_to_sheet(reversedData);
  //   const wb = xlsx.utils.book_new();
  //   xlsx.utils.book_append_sheet(wb, ws, "Orders");

  //   // Write the workbook to a file
  //   xlsx.writeFile(wb, "preorders.xlsx");

  console.log("Total entries:", count);
}

getPreorderInfo();
