import { getCombinedInventory } from "../linnworks/inventory";
import Papa from "papaparse";
import fs from "fs";
import path from "path";

async function getSkus() {
  const warehouseInventory = await getCombinedInventory();

  const skus = warehouseInventory.map((item) => ({ ItemNumber: item.ItemNumber }));

  const csv = Papa.unparse(skus, {
    header: true,
  });

  fs.writeFileSync(path.join(__dirname, "item_numbers.csv"), csv, "utf-8");
}

getSkus();
