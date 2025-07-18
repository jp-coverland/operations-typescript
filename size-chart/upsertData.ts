import * as XLSX from "xlsx";
import path from "path";
import { supabaseCoverlandSizeChart } from "../constants/constants";

async function upsertBatches() {
  const workbook = XLSX.readFile(path.resolve(__dirname, "car_cover_media_files.xlsx"));

  const sheetName = "media_files";
  const mediaUrls: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  const upsertPayload: any[] = [];

  for (const row of mediaUrls) {
    upsertPayload.push({
      id: row.id,
      image_src: row.image_src,
      variant_image: row.variant_image,
      product_video_360: row.product_video_360,
      product_video_zoom: row.product_video_zoom,
      product_video_carousel: row.product_video_carousel,
      product_video_carousel_thumbnail: row.product_video_carousel_thumbnail,
    });
  }

  const batches = chunkArray(upsertPayload, 3000);

  let batchCount = 1;
  for (const batch of batches) {
    const { error: upsertError } = await supabaseCoverlandSizeChart.from("shopify_db").upsert(batch, { onConflict: "id" });

    if (upsertError) {
      console.error("Batch upsert error:", upsertError);
      break;
    } else {
      console.log(`Batch ${batchCount} upserted successfully.`);
      batchCount++;
    }
  }
}

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

upsertBatches();
