import * as XLSX from "xlsx";
import path from "path";
import { supabaseCoverlandSizeChart } from "../constants/constants";

async function upsertNewEntries() {
  const filePath = path.resolve(__dirname, "new_data.xlsx");
  const workbook = XLSX.readFile(filePath);

  const sheetNames = ["car_cover", "seat_covers"];

  const productVehicles: any[] = [];
  const sizeCharts: any[] = [];

  for (const sheet of sheetNames) {
    const rows: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

    if (!rows.length) {
      console.log(`No data, skipping sheet: ${sheet}`);
      continue;
    }

    for (const row of rows) {
      productVehicles.push({
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
      });

      sizeCharts.push({
        product_vehicle_id: row.id,
        size: row.size,
        custom_size: row.custom_size,
        vehicle_length: row.vehicle_length,
        notes: row.notes,
      });
    }

    const { error: vehicleError } = await supabaseCoverlandSizeChart.from("product_vehicle").upsert(productVehicles, { onConflict: "id" });

    if (vehicleError) {
      console.error("Product vehicle upsert error:", vehicleError);
    } else {
      console.log(`${sheet} product-vehicle upsert complete.`);
    }

    if (sheet === "car_cover") {
      const { error: sizeChartError } = await supabaseCoverlandSizeChart.from("car_cover_size_chart").upsert(sizeCharts, { onConflict: "product_vehicle_id" });

      if (sizeChartError) {
        console.error("Car cover size chart upsert error:", sizeChartError);
      } else {
        console.log("Car cover size chart upsert complete.");
      }
    }
  }
}

upsertNewEntries().catch((error) => console.error("Error during upsert:", error));
