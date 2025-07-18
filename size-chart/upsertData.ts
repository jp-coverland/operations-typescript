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

  const sheetName = "size_chart_match";
  const mediaUrls: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  const upsertPayload: any[] = [];

  for (const row of mediaUrls) {
    upsertPayload.push({
      product_vehicle_id: row.product_vehicle_id,
      front_size: row.front_size,
      rear_size: row.rear_size,
      third_row_size: row.third_row_size,
    });
  }

  const { error: upsertError } = await supabaseCoverlandSizeChart.from("floor_mats_size_chart").upsert(upsertPayload, { onConflict: "product_vehicle_id" });

  if (upsertError) {
    console.error("Upsert error:", upsertError);
  } else {
    console.log(`upsert successful`);
  }

  // Batching
  // const batches = batchArray(upsertPayload, 3000);
  // let batchCount = 1;
  // for (const batch of batches) {
  //   const { error: upsertError } = await supabaseCoverlandSizeChart.from("floor_mats_size_chart").upsert(batch, { onConflict: "product_vehicle_id" });

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
