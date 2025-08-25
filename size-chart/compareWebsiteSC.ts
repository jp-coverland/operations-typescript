import fs from "fs";
import Papa from "papaparse";
import path from "path";

function compareWebsiteAndSizeChartSkus() {
  const readCSV = fs.readFileSync(path.resolve(__dirname, "sc_website.csv"), "utf-8");

  const parsed = Papa.parse(readCSV, {
    header: true,
    skipEmptyLines: true,
  });

  const websiteLookUp: Record<string, { sku: string; seat_set: string }> = {};
  const sizeChartLookUp: Record<string, { sku: string; seat_set: string }> = {};

  parsed.data.forEach((row: any) => {
    const variantSku = row["variant_sku"]?.trim();
    const fNumber = row["f_number"]?.trim();
    const seatSet = row["seat_set"]?.trim();

    const webSku = row["web_sku"]?.trim();
    const webFNumber = row["web_f_number"]?.trim();
    const webSeatSet = row["web_seat_set"]?.trim();

    if (fNumber && variantSku) {
      sizeChartLookUp[fNumber] = {
        sku: variantSku,
        seat_set: seatSet,
      };
    }

    if (webFNumber && webSku) {
      websiteLookUp[webFNumber] = {
        sku: webSku,
        seat_set: webSeatSet,
      };
    }
  });

  console.log("Mismatches:");
  Object.keys(websiteLookUp).forEach((fNumber) => {
    const web = websiteLookUp[fNumber];
    const chart = sizeChartLookUp[fNumber];

    if (!chart) {
      return;
    }

    if (web.seat_set === chart.seat_set && web.sku !== chart.sku) {
      console.log(`f_number: ${fNumber}`);
      console.log(`  ✅ Seat Set matched: ${web.seat_set}`);
      console.log(`  🔁 SKU mismatch → Website: ${web.sku} | SizeChart: ${chart.sku}`);
    }
  });
}

compareWebsiteAndSizeChartSkus();
