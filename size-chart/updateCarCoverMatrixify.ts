import { google } from "googleapis";
import { supabaseCoverlandSizeChart } from "../constants/constants";
import { DateTime } from "luxon";
import { createContextLogger } from "../constants/logger";
import { authorize } from "../google-sheets/authClient";

async function getMatrixifyCarCovers(start: number, end: number) {
  const { data, error } = await supabaseCoverlandSizeChart.rpc("get_shopify_matrixify_car_covers").range(start, end);

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

const logger = createContextLogger("car_cover_matrixify_chart_update");

async function updateCarCoverMatrixifyChart(auth: any) {
  logger.info("[start] get matrixify car cover data...");
  const sheets = google.sheets({ version: "v4", auth });
  const SHEETS_ID = "1iYW9IKmqGtm1ybeevKgghL1XoqsErYyfbXK3eH_cLfU";
  const sheetName = "car_cover_matrixify";

  const BATCH_SIZE = 15000;
  let start = 0;
  let matrixifyPaginated: any[] = [];

  while (true) {
    logger.info(`getting data from ${start} to ${start + BATCH_SIZE - 1}`);
    const { data, error } = await getMatrixifyCarCovers(start, start + BATCH_SIZE - 1);

    if (error) {
      throw error;
    }

    if (!data || data.length === 0) {
      break;
    }

    matrixifyPaginated.push(...data);
    logger.info(`inserting data from ${start} to ${start + BATCH_SIZE - 1}`);
    start += BATCH_SIZE;
  }

  const matrixifyPaylod = (matrixifyPaginated as any[]).map(
    ({
      id,
      product_vehicle_id,
      color_code,
      f_number,
      vehicle_type,
      year_generation,
      make,
      model,
      submodel1,
      submodel2,
      submodel3,
      submodel4,
      size,
      custom_size,
      handle,
      command,
      title,
      body_html,
      vendor,
      type,
      tags,
      tags_command,
      status,
      published,
      gift_card,
      category,
      custom_collections,
      image_attachment,
      image_src,
      image_command,
      image_alt_text,
      variant_id,
      variant_command,
      option_1_name,
      option_1_value,
      option_2_name,
      option_2_value,
      option_3_name,
      option_3_value,
      variant_generate_from_options,
      variant_sku,
      variant_barcode,
      variant_weight,
      variant_weight_unit,
      variant_price,
      variant_compare_at_price,
      variant_requires_shipping,
      variant_taxable,
      variant_tax_code,
      variant_image,
      variant_inventory_tracker,
      variant_inventory_policy,
      variant_fulfillment_service,
      variant_inventory_qty,
      master_sku,
    }) => [
      id,
      product_vehicle_id,
      color_code,
      f_number,
      vehicle_type,
      year_generation,
      make,
      model,
      submodel1,
      submodel2,
      submodel3,
      submodel4,
      size,
      custom_size,
      handle,
      command,
      title,
      body_html,
      vendor,
      type,
      tags,
      tags_command,
      status,
      published,
      gift_card,
      category,
      custom_collections,
      image_attachment,
      image_src,
      image_command,
      image_alt_text,
      variant_id,
      variant_command,
      option_1_name,
      option_1_value,
      option_2_name,
      option_2_value,
      option_3_name,
      option_3_value,
      variant_generate_from_options,
      variant_sku,
      variant_barcode,
      variant_weight,
      variant_weight_unit,
      variant_price,
      variant_compare_at_price,
      variant_requires_shipping,
      variant_taxable,
      variant_tax_code,
      variant_image,
      variant_inventory_tracker,
      variant_inventory_policy,
      variant_fulfillment_service,
      variant_inventory_qty,
      master_sku,
    ]
  );

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A2`,
      valueInputOption: "RAW",
      requestBody: {
        values: matrixifyPaylod,
      },
    });

    logger.info("[success] car cover matrixify size chart updated successfully.");
  } catch (error: any) {
    logger.error(`[error] Failed to update car cover matrixify size chart: ${error}`);
  }
}

authorize().then(updateCarCoverMatrixifyChart).catch(console.error);
