import * as XLSX from "xlsx";
import path from "path";
import { supabaseCoverlandSizeChart } from "../constants/constants";

async function upsertCarCovers() {
  const filePath = path.resolve(__dirname, "size_chart_final.xlsx");
  const workbook = XLSX.readFile(filePath);

  const sheetNames = ["car_cover", "suv_cover", "truck_cover"];

  const productVehicles: any[] = [];
  const sizeCharts: any[] = [];

  for (const sheet of sheetNames) {
    const rows: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

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
  }

  const { error: vehicleError } = await supabaseCoverlandSizeChart.from("product_vehicle").upsert(productVehicles, { onConflict: "id" });

  if (vehicleError) {
    console.error("Vehicle upsert error:", vehicleError);
  } else {
    console.log("Vehicle upsert complete.");
  }

  const { error: sizeChartError } = await supabaseCoverlandSizeChart.from("car_cover_size_chart").upsert(sizeCharts, { onConflict: "product_vehicle_id" });

  if (sizeChartError) {
    console.error("Size chart upsert error:", sizeChartError);
  } else {
    console.log("Size chart upsert complete.");
  }
}

upsertCarCovers().catch((error) => console.error("Error during upsert:", error));
