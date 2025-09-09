import { google } from "googleapis";
import { supabaseCoverlandSizeChart } from "../constants/constants";
import { DateTime } from "luxon";
import { logger } from "../constants/logger";
import { authorize } from "../google-sheets/authClient";

async function getCarCoverSizeChart() {
  const { data, error } = await supabaseCoverlandSizeChart.rpc("get_grouped");

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

async function updateCarCoverSizeChart(auth: any) {
  const sheets = google.sheets({ version: "v4", auth });
  const timestamp = DateTime.now().setZone("America/Los_Angeles").toFormat("yyyy-MM-dd HH:mm:ss");
  const SHEETS_ID = "13tu-KiJFgiz0dD5GUPB6-AR6nh8BdD2MCNMem9aClys";
  const sheetName = "car_cover_size_chart";

  logger.info("Retrieving car cover size chart data...");
  const groupedData = await getCarCoverSizeChart();
  let lastGroupedFNumber: any = null;

  const header1 = [
    "vehicle_type",
    "id",
    "f_number",
    "year_generation",
    "make",
    "model",
    "submodel_1",
    "submodel_2",
    "submodel_3",
    "submodel_4",
    "concatenated",
    "notes",
    "size",
    "custom_size",
    "vehicle_length",
  ];

  const header2 = ["grouped_id", "grouped_f_number", "grouped_info", "grouped_size", "grouped_custom_size", "grouped_notes", "keyword"];

  const groupedPayload1 = [
    header1,
    ...(groupedData.data as any[]).map(
      ({
        id,
        f_number,
        vehicle_type,
        year_generation,
        make,
        model,
        submodel_1,
        submodel_2,
        submodel_3,
        submodel_4,
        concatenated,
        notes,
        size,
        custom_size,
        vehicle_length,
      }) => [
        vehicle_type,
        id,
        f_number,
        year_generation,
        make,
        model,
        submodel_1,
        submodel_2,
        submodel_3,
        submodel_4,
        concatenated,
        notes,
        size,
        custom_size,
        vehicle_length,
      ]
    ),
  ];

  const groupedPayload2 = [
    header2,
    ...(groupedData.data as any[]).map(({ grouped_id, grouped_f_number, grouped_info, grouped_size, grouped_custom_size, grouped_notes, keyword }) => {
      const isFirstInGroup = grouped_f_number !== lastGroupedFNumber;
      lastGroupedFNumber = grouped_f_number;

      // if first in group, include the actual variable data, otherwise empty string
      return [
        isFirstInGroup ? grouped_id : "",
        isFirstInGroup ? grouped_f_number : "",
        isFirstInGroup ? grouped_info : "",
        isFirstInGroup ? grouped_size : "",
        isFirstInGroup ? grouped_custom_size : "",
        isFirstInGroup ? grouped_notes : "",
        isFirstInGroup ? keyword : "",
      ];
    }),
  ];

  try {
    logger.info("Uploading size info to google sheets...");
    // car covers
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!X1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [[`Last updated: ${timestamp}`]],
      },
    });
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A2:W`,
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A2`,
      valueInputOption: "RAW",
      requestBody: {
        values: groupedPayload1,
      },
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!Q2`,
      valueInputOption: "RAW",
      requestBody: {
        values: groupedPayload2,
      },
    });

    logger.info("[success] car cover size chart updated successfully.");
  } catch (error: any) {
    logger.error(`[error] Failed to update car cover size chart: ${error}`);
  }
}

authorize().then(updateCarCoverSizeChart).catch(console.error);
