import fs from "fs";
import path from "path";

const jsonData = JSON.parse(fs.readFileSync("eta-dashboard/most-recent-sku-id-map.json", "utf-8"));

const headers = ["id", "sku"];
const rows = jsonData.map((item: any) => [item._id, item.sku].join(","));
const csv = [headers.join(","), ...rows].join("\n");

fs.writeFileSync(path.resolve(__dirname, "output.csv"), csv, "utf-8");
