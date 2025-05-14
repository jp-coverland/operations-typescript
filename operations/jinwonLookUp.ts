import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

function lookUpOrdersJinwon() {
  const workbookPath = path.resolve(__dirname, "shipping_detail_jinwon.xlsx");
  const workbook = XLSX.readFile(workbookPath);

  const lookUpSheet = XLSX.utils.sheet_to_json(workbook.Sheets["look_up"]);
  const sheet1 = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"]);

  const lookUpMap = new Map<string, string>();
  lookUpSheet.forEach((row: any) => {
    const ref = String(row["Order #"]).trim();
    const sku = String(row["SKU"]).trim();
    const tracking = row["Tracking Number"];

    if (ref && sku && tracking) {
      lookUpMap.set(`${ref}|${sku}`, tracking);
    }
  });
  const selectedColumns = ["Order Id", "Reference number", "SKU", "Composite parent SKU", "Item title", "Quantity", "Unit cost", "Order Notes"];

  const matches = sheet1.flatMap((row: any) => {
    const ref = String(row["Reference number"]).trim();
    const sku = String(row["SKU"]).trim();
    const key = `${ref}|${sku}`;
    const tracking = lookUpMap.get(key);

    if (tracking) {
      // Create an object with only the selected columns + the Tracking Number
      const selectedData = selectedColumns.reduce((acc: any, col: string) => {
        acc[col] = row[col] || ""; // Add data from selected columns
        return acc;
      }, {});
      selectedData["Tracking Number"] = tracking; // Add the tracking number
      return selectedData;
    }
    return [];
  });

  const headers = ["Tracking Number", ...selectedColumns];

  const csv = [
    headers.join(","),
    ...matches.map((row) =>
      headers
        .map((header) => JSON.stringify(row[header] || "")) // Ensure proper CSV formatting for all columns
        .join(",")
    ),
  ].join("\n");

  fs.writeFileSync(path.resolve(__dirname, "jinwon_output.csv"), csv);
}

lookUpOrdersJinwon();
