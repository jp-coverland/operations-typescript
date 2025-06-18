import { google } from "googleapis";
import { supabaseCoverlandSizeChart } from "../constants/constants";
import { DateTime } from "luxon";
import { createContextLogger } from "../constants/logger";
import { authorize } from "../google-sheets/authClient";

async function getMatrixifyDevVersion(start: number, end: number) {
  const { data, error } = await supabaseCoverlandSizeChart.rpc("get_shopify_matrixify_dev").range(start, end);

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

async function updateMatrixifyDevVersion(auth: any) {
  console.info("[start] get combined matrixify dev version data...");
  const sheets = google.sheets({ version: "v4", auth });
  const timestamp = DateTime.now().setZone("America/Los_Angeles").toFormat("yyyy-MM-dd HH:mm:ss");
  const SHEETS_ID = "1RrzcTJGxg38desmdzwFJKyfD3bbOMfU6miMUnBX7NSY";
  const sheetName = "combined_matrixify_dev";

  const BATCH_SIZE = 15000;
  let start = 0;
  let matrixifyPaginated: any[] = [];

  while (true) {
    console.info(`getting data from ${start} to ${start + BATCH_SIZE - 1}`);
    const { data, error } = await getMatrixifyDevVersion(start, start + BATCH_SIZE - 1);

    if (error) {
      throw error;
    }

    if (!data || data.length === 0) {
      break;
    }

    matrixifyPaginated.push(...data);
    console.info(`inserting data from ${start} to ${start + BATCH_SIZE - 1}`);
    start += BATCH_SIZE;
  }

  const payload = (matrixifyPaginated as any[]).map(({ id, variant_sku, make, model, year_generation, variant_barcode, handle, master_sku }) => [
    id,
    variant_sku,
    make,
    model,
    year_generation,
    variant_barcode,
    handle,
    master_sku,
  ]);

  try {
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A2:H`,
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEETS_ID,
      range: `${sheetName}!A2`,
      valueInputOption: "RAW",
      requestBody: {
        values: payload,
      },
    });

    console.info("[success] combined matrixify chart for devs updated successfully.");
  } catch (error: any) {
    console.error(`[error] Failed to update matrixify chart for devs: ${error}`);
  }
}

authorize().then(updateMatrixifyDevVersion).catch(console.error);
