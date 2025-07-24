import * as XLSX from "xlsx";
import path from "path";
import { supabaseCoverlandSizeChart } from "../constants/constants";

async function updateSizeChartDB() {
  const filePath = path.resolve(__dirname, "update_size_chart.xlsx");
  const workbook = XLSX.readFile(filePath);

  const sheetNames = ["seat_cover"];

  const productVehicles: any[] = [];
  const seatCoverSizeChart: any[] = [];

  for (const sheet of sheetNames) {
    const rows: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

    if (!rows.length) {
      console.log(`No data, skipping sheet: ${sheet}`);
      continue;
    }

    for (const row of rows) {
      productVehicles.push({
        id: row.id,
        year_generation: row.year_generation,
        make: row.make,
        model: row.model,
        submodel_1: row.submodel_1,
        submodel_2: row.submodel_2,
        submodel_3: row.submodel_3,
        submodel_4: row.submodel_4,
        submodel_5: row.submodel_5,
        submodel_6: row.submodel_6,
      });

      if (sheet === "seat_cover") {
        seatCoverSizeChart.push({
          product_vehicle_id: row.id,
          front_seat_type: row.front_seat_type,
          front_size_code: row.front_size_code,
          rear_seat_type: row.rear_seat_type,
          rear_size_code: row.rear_size_code,
          third_seat_type: row.third_seat_type,
          third_size_code: row.third_size_code,
          front_seat_size: row.front_seat_size,
          rear_seat_size: row.rear_seat_size,
          third_seat_size: row.third_seat_size,
          google_drive_image_url: row.google_drive_image_url,
        });
      }
    }

    const { error: vehicleError } = await supabaseCoverlandSizeChart.from("product_vehicle").upsert(productVehicles, { onConflict: "id" });

    if (vehicleError) {
      console.error(`${sheet} product vehicle update error:`, vehicleError);
    } else {
      console.log(`${sheet} product-vehicle update complete.`);
    }

    if (sheet === "seat_cover") {
      const { error: sizeChartError } = await supabaseCoverlandSizeChart
        .from("seat_cover_size_chart")
        .upsert(seatCoverSizeChart, { onConflict: "product_vehicle_id" });

      if (sizeChartError) {
        console.error("Seat cover size chart update error:", sizeChartError);
      } else {
        console.log("Seat cover size chart update complete.");
      }
    }
  }
}

updateSizeChartDB().catch((error) => console.error("Error during update:", error));
