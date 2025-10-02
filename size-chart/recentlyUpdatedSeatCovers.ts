import { google } from "googleapis";
import { supabaseCoverlandSizeChart } from "../constants/constants";
import { DateTime } from "luxon";
import { logger } from "../constants/logger";
import { authorize } from "../google-sheets/authClient";

async function getRecentlyUpdatedSeatCovers() {
  const { data, error } = await supabaseCoverlandSizeChart.rpc("get_recently_updated_seat_cover_size");

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

async function updateSheet(auth: any) {
  const sheets = google.sheets({ version: "v4", auth });
  const timestamp = DateTime.now().setZone("America/Los_Angeles").toFormat("yyyy-MM-dd HH:mm:ss");
  const SHEETS_ID = "1FzOrJzKVGcN4YyfREiGy7DuKqvgA-yfOLtGzquFINDM";
  const sheetName = "recent_updates";

  logger.info("Retrieving recent data...");
  const recentUpdates = await getRecentlyUpdatedSeatCovers();

  const headers = [
    "f_number",
    "year_generation",
    "make",
    "model",
    "model_2",
    "submodel_1",
    "submodel_2",
    "submodel_3",
    "front_seat_size",
    "rear_seat_size",
    "third_seat_size",
    "updated_at",
  ];

  const payload = [
    headers,
    ...(recentUpdates.data as any[]).map(
      ({ f_number, year_generation, make, model, model_2, submodel_1, submodel_2, submodel_3, front_seat_size, rear_seat_size, third_seat_size, updated_at }) => [
        f_number,
        year_generation,
        make,
        model,
        model_2,
        submodel_1,
        submodel_2,
        submodel_3,
        front_seat_size,
        rear_seat_size,
        third_seat_size,
        updated_at,
      ]
    ),
  ];

  try {
    logger.info("Uploading info to google sheets...");
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!M1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [[`Last updated: ${timestamp}`]],
      },
    });
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A1:L`,
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A1`,
      valueInputOption: "RAW",
      requestBody: {
        values: payload,
      },
    });
    logger.info("[success] google sheets updated successfully");
  } catch (error: any) {
    logger.error(`[error] failed to update google sheets: ${error}`);
  }
}

authorize().then(updateSheet).catch(console.error);
