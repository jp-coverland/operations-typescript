import path from "path";
import Papa from "papaparse";
import fs from "fs";

const csvPath = path.resolve(__dirname, "year_end.csv");
const csvFile = fs.readFileSync(csvPath, "utf-8");

const result = Papa.parse(csvFile, {
  header: true,
  skipEmptyLines: true,
});

console.log(result.data);
