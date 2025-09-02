import { google } from "googleapis";
import { supabaseCoverlandSizeChart } from "../constants/constants";
import { DateTime } from "luxon";
import { logger } from "../constants/logger";
import { authorize } from "../google-sheets/authClient";

async function getMatrixifySeatCovers(start: number, end: number) {
  const { data, error } = await supabaseCoverlandSizeChart.rpc("get_shopify_matrixify_seat_covers").range(start, end);

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

async function updateSeatCoverMatrixifyChart(auth: any) {
  logger.info("[start] get matrixify seat cover data...");
  const sheets = google.sheets({ version: "v4", auth });
  const timestamp = DateTime.now().setZone("America/Los_Angeles").toFormat("yyyy-MM-dd HH:mm:ss");
  const SHEETS_ID = "1fB5L3TWp1isLUAKR8eB87P2c7Duc-2yqw9b_eAusQto";
  const sheetName = "seat_cover_matrixify";

  const BATCH_SIZE = 15000;
  let start = 0;
  let matrixifyPaginated: any[] = [];

  while (true) {
    logger.info(`getting data from ${start} to ${start + BATCH_SIZE - 1}`);
    const { data, error } = await getMatrixifySeatCovers(start, start + BATCH_SIZE - 1);

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

  const matrixifyPayload = (matrixifyPaginated as any[]).map(
    ({
      id,
      product_vehicle_id,
      color_code,
      f_number,
      vehicle_type,
      year_generation,
      make,
      model,
      submodel_1,
      submodel_2,
      submodel_3,
      submodel_4,
      front_seat_size,
      rear_seat_size,
      third_seat_size,
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
      variant_hash,
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
      front_seat_type,
      rear_seat_type,
      third_seat_type,
      website_true,
      can_delete,
    }) => [
      id,
      product_vehicle_id,
      color_code,
      f_number,
      vehicle_type,
      year_generation,
      make,
      model,
      submodel_1,
      submodel_2,
      submodel_3,
      submodel_4,
      front_seat_size,
      rear_seat_size,
      third_seat_size,
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
      variant_hash,
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
      front_seat_type,
      rear_seat_type,
      third_seat_type,
      website_true,
      can_delete,
    ]
  );

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [[`Last updated: ${timestamp}`]],
      },
    });
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A3:BJ`,
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A3`,
      valueInputOption: "RAW",
      requestBody: {
        values: matrixifyPayload,
      },
    });

    logger.info("[success] seat cover matrixify size chart updated successfully.");
  } catch (error: any) {
    logger.error(`[error] failed to update seat cover matrixify size chart: ${error}`);
  }
}

authorize().then(updateSeatCoverMatrixifyChart).catch(console.error);
