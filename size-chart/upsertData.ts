import * as XLSX from "xlsx";
import path from "path";
import { supabaseCoverlandSizeChart } from "../constants/constants";

function batchArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

async function upsertBatches() {
  const workbook = XLSX.readFile(path.resolve(__dirname, "upsert_data.xlsx"));

  const sheetName = "match";
  const rows: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  const upsertPayload: any[] = [];

  const sizeChartPayload: any[] = [];

  for (const row of rows) {
    upsertPayload.push({
      id: row.id,
      product_vehicle_id: row.product_vehicle_id,
      color_id: row.color_id,
      gtin: row.gtin,
      website_sku: row.website_sku,
      variant_hash: row.variant_hash,
      seat_set: row.seat_set,
    });

    // sizeChartPayload.push({
    //   product_vehicle_id: row.id,
    //   front_seat_type: row.front_seat_type,
    //   front_size_code: row.front_size_code,
    //   rear_seat_type: row.rear_seat_type,
    //   rear_size_code: row.rear_size_code,
    //   third_seat_type: row.third_seat_type,
    //   third_size_code: row.third_size_code,
    //   front_seat_size: row.front_seat_size,
    //   rear_seat_size: row.rear_seat_size,
    //   third_seat_size: row.third_seat_size,
    //   google_drive_image_url: row.google_drive_image_url,
    // });
  }

  // console.log(upsertPayload);

  const { error: upsertError } = await supabaseCoverlandSizeChart.from("product_gtin").upsert(upsertPayload, { onConflict: "id" });

  if (upsertError) {
    console.error("Upsert error:", upsertError);
  } else {
    console.log(`upsert successful`);
  }

  // const { error: scUpsertError } = await supabaseCoverlandSizeChart.from("seat_cover_size_chart").upsert(sizeChartPayload, { onConflict: "product_vehicle_id" });

  // if (scUpsertError) {
  //   console.error("Size chart upsert error:", upsertError);
  // } else {
  //   console.log(`Size chart upsert successful`);
  // }

  // // Batching
  // const batches = batchArray(upsertPayload, 1200);
  // let batchCount = 1;
  // for (const batch of batches) {
  //   const { error: upsertError } = await supabaseCoverlandSizeChart.from("product_vehicle").upsert(batch, { onConflict: "id" });

  //   if (upsertError) {
  //     console.error("Batch upsert error:", upsertError);
  //     break;
  //   } else {
  //     console.log(`Batch ${batchCount} upserted successfully.`);
  //     batchCount++;
  //   }
  // }
}

upsertBatches();
