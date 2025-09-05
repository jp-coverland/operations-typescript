import { google } from "googleapis";
import { supabaseCoverlandSizeChart } from "../constants/constants";
import { DateTime } from "luxon";
import { logger } from "../constants/logger";
import { authorize } from "../google-sheets/authClient";

async function getSeatCoverSizeChart() {
  const { data, error } = await supabaseCoverlandSizeChart.rpc("get_seat_covers_size_chart");

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

async function updateSeatCoverSizeChart(auth: any) {
  const sheets = google.sheets({ version: "v4", auth });
  const timestamp = DateTime.now().setZone("America/Los_Angeles").toFormat("yyyy-MM-dd HH:mm:ss");
  const SHEETS_ID = "1FmYf8w2CdUqYDPgpeHZEBh7UujLwtmyWD_wfXxB5pQk";
  const sheetName = "seat_cover_size_chart";

  logger.info("Retrieving seat cover size chart data...");
  const seatCoverSizeChartData = await getSeatCoverSizeChart();
  const payload = (seatCoverSizeChartData.data as any[]).map(
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
      front_seat_type,
      rear_seat_type,
      third_seat_type,
      front_seat_size,
      rear_seat_size,
      third_seat_size,
      google_drive_image_url,
      direct_link,
    }) => [
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
      front_seat_type,
      rear_seat_type,
      third_seat_type,
      front_seat_size,
      rear_seat_size,
      third_seat_size,
      google_drive_image_url,
      direct_link,
    ]
  );

  try {
    logger.info("Uploading size info to google sheets...");

    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!T1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [[`Last updated: ${timestamp}`]],
      },
    });
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A2:T`,
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A2`,
      valueInputOption: "RAW",
      requestBody: {
        values: payload,
      },
    });
    logger.info("[success] seat cover size chart updated successfully.");
  } catch (error: any) {
    logger.error(`[error] failed to update seat cover size chart: ${error}`);
  }
}

authorize().then(updateSeatCoverSizeChart).catch(console.error);
