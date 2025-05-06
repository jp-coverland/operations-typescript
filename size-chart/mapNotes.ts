import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

const workbook = XLSX.readFile(path.resolve(__dirname, "carcover-sizechart-5-5-25.xlsx"));

const originalSheet = XLSX.utils.sheet_to_json<any>(workbook.Sheets["original"]);
const newSizeChartSheet = XLSX.utils.sheet_to_json<any>(workbook.Sheets["new_size_chart"]);

const generateKey = (row: any) =>
  [row.year, row.make, row.model, row.submodel1, row.submodel2, row.submodel3]
    .filter((v) => v != null && v.toString().trim() !== "")
    .map((v) => v.toString().trim().toLowerCase())
    .join(" ");

const originalMap = new Map<string, { length: any; notes: string }>();
originalSheet.forEach((row) => {
  const key = generateKey(row);
  originalMap.set(key, {
    length: row["length"],
    notes: row["notes"],
  });
});

console.log(originalMap);

const updatedSheet = newSizeChartSheet.map((row) => {
  const key = generateKey(row);
  if (originalMap.has(key)) {
    const match = originalMap.get(key)!;
    return {
      ...row,
      length: match.length,
      notes: match.notes,
    };
  }
  return row;
});

const newWorksheet = XLSX.utils.json_to_sheet(updatedSheet);
workbook.Sheets["new_size_chart"] = newWorksheet;
XLSX.writeFile(workbook, path.resolve(__dirname, "carcover-sizechart-UPDATED.xlsx"));

console.log("Update complete.");
