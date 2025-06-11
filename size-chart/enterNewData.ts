import * as XLSX from "xlsx";
import path from "path";
import { supabaseCoverlandSizeChart } from "../constants/constants";

async function upsertNewEntries() {
  const filePath = path.resolve(__dirname, "new_data.xlsx");
  const workbook = XLSX.readFile(filePath);

  const sheetNames = ["car_cover", "seat_cover", "floor_mats"];

  const productVehicles: any[] = [];
  const carCoverSizeChart: any[] = [];
  const seatCoverSizeChart: any[] = [];
  const floorMatSizeChart: any[] = [];

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
        submodel_1: row.submodel_1,
        submodel_2: row.submodel_2,
        submodel_3: row.submodel_3,
        submodel_4: row.submodel_4,
        submodel_5: row.submodel_5,
        submodel_6: row.submodel_6,
      });

      if (sheet === "car_cover") {
        carCoverSizeChart.push({
          product_vehicle_id: row.id,
          size: row.size,
          custom_size: row.custom_size,
          vehicle_length: row.vehicle_length,
          notes: row.notes,
        });
      } else if (sheet === "seat_cover") {
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
        });
      } else if (sheet === "floor_mats") {
        floorMatSizeChart.push({
          product_vehicle_id: row.id,
          style: row.style,
          front_size: row.front_size,
          front_mold_status: row.front_mold_status,
          rear_size: row.rear_size,
          rear_mold_status: row.rear_mold_status,
          third_row_size: row.third_row_size,
          third_row_mold_status: row.third_row_mold_status,
        });
      }
    }

    const { error: vehicleError } = await supabaseCoverlandSizeChart.from("product_vehicle").upsert(productVehicles, { onConflict: "id" });

    if (vehicleError) {
      console.error("Product vehicle upsert error:", vehicleError);
    } else {
      console.log(`${sheet} product-vehicle upsert complete.`);
    }

    if (sheet === "car_cover") {
      const { error: sizeChartError } = await supabaseCoverlandSizeChart
        .from("car_cover_size_chart")
        .upsert(carCoverSizeChart, { onConflict: "product_vehicle_id" });

      if (sizeChartError) {
        console.error("Car cover size chart upsert error:", sizeChartError);
      } else {
        console.log("Car cover size chart upsert complete.");
      }
    }

    if (sheet === "seat_cover") {
      const { error: sizeChartError } = await supabaseCoverlandSizeChart
        .from("seat_cover_size_chart")
        .upsert(seatCoverSizeChart, { onConflict: "product_vehicle_id" });

      if (sizeChartError) {
        console.error("Seat cover size chart upsert error:", sizeChartError);
      } else {
        console.log("Seat cover size chart upsert complete.");
      }
    }

    if (sheet === "floor_mats") {
      const { error: sizeChartError } = await supabaseCoverlandSizeChart
        .from("floor_mats_size_chart")
        .upsert(floorMatSizeChart, { onConflict: "product_vehicle_id" });

      if (sizeChartError) {
        console.error("Floor mats size chart upsert error:", sizeChartError);
      } else {
        console.log("Floor mats size chart upsert complete.");
      }
    }
  }
}

upsertNewEntries().catch((error) => console.error("Error during upsert:", error));
