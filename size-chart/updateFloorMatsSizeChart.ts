import { google } from "googleapis";
import { supabaseCoverlandSizeChart } from "../constants/constants";
import { DateTime } from "luxon";
import { logger } from "../constants/logger";
import { authorize } from "../google-sheets/authClient";

async function getFloorMatsSizeChart() {
  const { data, error } = await supabaseCoverlandSizeChart.rpc("get_floor_mats_size_chart");

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

async function updateFloorMatsSizeChart(auth: any) {
  const sheets = google.sheets({ version: "v4", auth });
  const timestamp = DateTime.now().setZone("America/Los_Angeles").toFormat("yyyy-MM-dd HH:mm:ss");
  const SHEETS_ID = "18ZBKzka3TuzscHJYbtiyXEeOXvBds9DvDl2lO-6Bi40";
  const sheetName = "floor_mats_size_chart";

  logger.info("Retrieving floor mats size chart data...");
  const floorMatsSizeChartData = await getFloorMatsSizeChart();

  const headers = [
    "id",
    "f_number",
    "vehicle_type",
    "year_generation",
    "make",
    "model",
    "model_2",
    "submodel_1_label",
    "submodel_1",
    "submodel_2_label",
    "submodel_2",
    "submodel_3_label",
    "submodel_3",
    "submodel_4_label",
    "submodel_4",
    "submodel_5_label",
    "submodel_5",
    "submodel_6_label",
    "submodel_6",
    "concatenated",
    "style",
    "front_size",
    "front_mold_status",
    "rear_size",
    "rear_mold_status",
    "third_row_size",
    "third_row_mold_status",
  ];

  const payload = [
    headers,
    ...(floorMatsSizeChartData.data as any[]).map(
      ({
        id,
        f_number,
        vehicle_type,
        year_generation,
        make,
        model,
        model_2,
        submodel_1_label,
        submodel_1,
        submodel_2_label,
        submodel_2,
        submodel_3_label,
        submodel_3,
        submodel_4_label,
        submodel_4,
        submodel_5_label,
        submodel_5,
        submodel_6_label,
        submodel_6,
        concatenated,
        style,
        front_size,
        front_mold_status,
        rear_size,
        rear_mold_status,
        third_row_size,
        third_row_mold_status,
      }) => [
        id,
        f_number,
        vehicle_type,
        year_generation,
        make,
        model,
        model_2,
        submodel_1_label,
        submodel_1,
        submodel_2_label,
        submodel_2,
        submodel_3_label,
        submodel_3,
        submodel_4_label,
        submodel_4,
        submodel_5_label,
        submodel_5,
        submodel_6_label,
        submodel_6,
        concatenated,
        style,
        front_size,
        front_mold_status,
        rear_size,
        rear_mold_status,
        third_row_size,
        third_row_mold_status,
      ]
    ),
  ];
  try {
    logger.info("Uploading size info to google sheets...");

    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!AB1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [[`Last updated: ${timestamp}`]],
      },
    });
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A1:AA`,
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A1`,
      valueInputOption: "RAW",
      requestBody: {
        values: payload,
      },
    });
    logger.info("[success] floor mats size chart updated successfully.");
  } catch (error) {
    logger.error(`[error] failed to update floor mats size chart: ${error}`);
  }
}

authorize().then(updateFloorMatsSizeChart).catch(console.error);
