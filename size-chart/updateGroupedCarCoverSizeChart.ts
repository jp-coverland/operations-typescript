import { google } from "googleapis";
import { supabaseCoverlandSizeChart } from "../constants/constants";
import { DateTime } from "luxon";
import { createContextLogger } from "../constants/logger";
import { authorize } from "../google-sheets/authClient";

async function getgroupedCarCoverSizeChart() {
  const { data, error } = await supabaseCoverlandSizeChart.rpc("get_grouped");

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

const logger = createContextLogger("grouped_car_cover_size_chart_update");

async function updateGroupedCarCoverSizeChart(auth: any) {
  const sheets = google.sheets({ version: "v4", auth });
  const timestamp = DateTime.now().setZone("America/Los_Angeles").toFormat("yyyy-MM-dd HH:mm:ss");
  const SHEETS_ID = "13tu-KiJFgiz0dD5GUPB6-AR6nh8BdD2MCNMem9aClys";

  const groupedData = await getgroupedCarCoverSizeChart();
  let lastGroupedFNumber: any = null;

  const groupedPayload1 = (groupedData.data as any[]).map(
    ({
      f_number,
      vehicle_type,
      year_generation,
      make,
      model,
      submodel1,
      submodel2,
      submodel3,
      submodel4,
      concatenated,
      notes,
      size,
      custom_size,
      vehicle_length,
    }) => [f_number, vehicle_type, year_generation, make, model, submodel1, submodel2, submodel3, submodel4, concatenated, notes, size, custom_size, vehicle_length]
  );

  const groupedPayload2 = (groupedData.data as any[]).map(({ grouped_f_number, grouped_info, grouped_size, grouped_custom_size, grouped_notes }) => {
    const isFirstInGroup = grouped_f_number !== lastGroupedFNumber;
    lastGroupedFNumber = grouped_f_number;

    return [
      isFirstInGroup ? grouped_f_number : "",
      isFirstInGroup ? grouped_info : "",
      isFirstInGroup ? grouped_size : "",
      isFirstInGroup ? grouped_custom_size : "",
      isFirstInGroup ? grouped_notes : "",
    ];
  });

  try {
    // grouped car covers
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: "grouped_car_covers_size_chart!U1",
      valueInputOption: "RAW",
      requestBody: {
        values: [[`Last updated: ${timestamp}`]],
      },
    });
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SHEETS_ID,
      range: "grouped_car_covers_size_chart!A2:T",
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: "grouped_car_covers_size_chart!A2",
      valueInputOption: "RAW",
      requestBody: {
        values: groupedPayload1,
      },
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: "grouped_car_covers_size_chart!P2",
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

authorize().then(updateGroupedCarCoverSizeChart).catch(console.error);
