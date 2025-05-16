import { google } from "googleapis";
import { supabaseCoverlandSizeChart } from "../constants/constants";
import { DateTime } from "luxon";
import { createContextLogger } from "../constants/logger";
import { authorize } from "../google-sheets/authClient";

async function getCarCoverSizeChart() {
  const { data, error } = await supabaseCoverlandSizeChart.from("car_cover_size_chart_shared_view").select("*").order("id", { ascending: true });

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

const logger = createContextLogger("size_chart_update");

async function updateCarCoverSizeChart(auth: any) {
  const sheets = google.sheets({ version: "v4", auth });

  const carCoverData = await getCarCoverSizeChart();
  const carCoverPayload = carCoverData.data.map(({ id, f_number, vehicle_type, concatenated, size, custom_size, vehicle_length, notes }) => [
    id,
    f_number,
    vehicle_type,
    concatenated,
    size,
    custom_size,
    vehicle_length,
    notes,
  ]);

  const timestamp = DateTime.now().setZone("America/Los_Angeles").toFormat("yyyy-MM-dd HH:mm:ss");

  try {
    // car cover
    await sheets.spreadsheets.values.update({
      spreadsheetId: "13tu-KiJFgiz0dD5GUPB6-AR6nh8BdD2MCNMem9aClys",
      range: "car_covers!J1",
      valueInputOption: "RAW",
      requestBody: {
        values: [[`Last updated: ${timestamp}`]],
      },
    });
    await sheets.spreadsheets.values.clear({
      spreadsheetId: "13tu-KiJFgiz0dD5GUPB6-AR6nh8BdD2MCNMem9aClys",
      range: "car_covers!A2:H",
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId: "13tu-KiJFgiz0dD5GUPB6-AR6nh8BdD2MCNMem9aClys",
      range: "car_covers!A2",
      valueInputOption: "RAW",
      requestBody: {
        values: carCoverPayload,
      },
    });

    logger.info("[success] car cover size chart updated successfully.");
  } catch (error: any) {
    logger.error(`[error] Failed to update car cover size chart: ${error}`);
  }
}

authorize().then(updateCarCoverSizeChart).catch(console.error);
