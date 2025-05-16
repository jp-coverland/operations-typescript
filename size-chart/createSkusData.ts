import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

const skus = XLSX.readFile(path.resolve(__dirname, "master_skus.xlsx"));
const skuRows: any[] = XLSX.utils.sheet_to_json(skus.Sheets["skus"]);

console.log(skuRows);
