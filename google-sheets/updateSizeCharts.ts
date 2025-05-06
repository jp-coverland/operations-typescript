import { google } from "googleapis";
import { supabaseCoverlandSizeChart } from "../constants/constants";
import { DateTime } from "luxon";
import { createContextLogger } from "../constants/logger";
import { authorize } from "./authClient";

async function getCarCoverSizeChart() {
  const { data, error } = await supabaseCoverlandSizeChart.from("car_cover_size_chart_shared_view").select("*").order("id", { ascending: true });

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

async function getSuvCoverSizeChart() {
  const { data, error } = await supabaseCoverlandSizeChart
    .from("car_cover_size_chart_shared_view")
    .select("id, f_number, vehicle_type, concatenated, car_cover_size, car_cover_custom_size, vehicle_length")
    .eq("vehicle_type", "suv")
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

async function getTruckCoverSizeChart() {
  const { data, error } = await supabaseCoverlandSizeChart
    .from("product_vehicle_size")
    .select("*")
    .eq("product_type", "car cover")
    .eq("vehicle_type", "truck")
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

const logger = createContextLogger("size_chart_update");

async function updateCarCoverSizeChart(auth: any) {
  const sheets = google.sheets({ version: "v4", auth });

  const carCoverData = await getCarCoverSizeChart();
  const carCoverPayload = carCoverData.data
    .filter((row) => row.vehicle_type === "car")
    .map(({ id, f_number, vehicle_type, concatenated, size, custom_size, vehicle_length, notes }) => [
      id,
      f_number,
      vehicle_type,
      concatenated,
      size,
      custom_size,
      vehicle_length,
      notes,
    ]);
  const suvCoverPayload = carCoverData.data
    .filter((row) => row.vehicle_type === "suv")
    .map(({ id, f_number, vehicle_type, concatenated, size, custom_size, vehicle_length, notes }) => [
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
    await sheets.spreadsheets.values.update({
      spreadsheetId: "13tu-KiJFgiz0dD5GUPB6-AR6nh8BdD2MCNMem9aClys",
      range: "car_covers!J1",
      valueInputOption: "RAW",
      requestBody: {
        values: [[`Last updated: ${timestamp}`]],
      },
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId: "13tu-KiJFgiz0dD5GUPB6-AR6nh8BdD2MCNMem9aClys",
      range: "car_covers!A2",
      valueInputOption: "RAW",
      requestBody: {
        values: carCoverPayload,
      },
    });

    logger.info("[success] Size chart updated successfully.");
  } catch (error: any) {
    logger.error(`[error] Failed to update: ${error}`);
  }
}

authorize().then(updateCarCoverSizeChart).catch(console.error);
