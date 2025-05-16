import * as XLSX from "xlsx";
import path from "path";
import Papa from "papaparse";
import fs from "fs";

function matchLengthNotes() {
  const lookupFile = path.resolve(__dirname, "size_chart_final.xlsx");
  const matchFile = path.resolve(__dirname, "match_notes.csv");

  const lookup = XLSX.readFile(lookupFile);
  const sheetNames = ["car_cover", "suv_cover", "truck_cover"];
  const sizeChartLookUp: any[] = [];

  for (const sheet of sheetNames) {
    const rows: any[] = XLSX.utils.sheet_to_json(lookup.Sheets[sheet]);

    for (const row of rows) {
      sizeChartLookUp.push({
        id: row.id,
        f_number: row.f_number,
        vehicle_type: row.vehicle_type,
        product_type: row.product_type,
        year_generation: row.year_generation,
        make: row.make,
        model: row.model,
        submodel1: row.submodel1,
        submodel2: row.submodel2,
        submodel3: row.submodel3,
        submodel4: row.submodel4,
        size: row.size,
        custom_size: row.custom_size,
        vehicle_length: row.vehicle_length,
        notes: row.notes,
      });
    }
  }

  const csvData = fs.readFileSync(matchFile, "utf-8");
  const parsed = Papa.parse(csvData, { header: true, skipEmptyLines: true });
  const updatedRows = parsed.data.map((row: any) => {
    const fNumber = row.f_number.toString().trim();
    const match = sizeChartLookUp.find((entry) => entry.f_number.toString().trim() === fNumber);

    return {
      ...row,
      size: match && match.size ? match.size : row.size,
      custom_size: match?.custom_size || "",
      vehicle_length: match?.vehicle_length || "",
      notes: match?.notes || "",
    };
  });

  const updatedCSV = Papa.unparse(updatedRows);
  fs.writeFileSync(matchFile, updatedCSV, "utf-8");
  console.log("match_notes.csv updated successfully.");
}

matchLengthNotes();
