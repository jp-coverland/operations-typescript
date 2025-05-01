import { google } from "googleapis";
import { authorize } from "./authClient";
import { logger } from "../constants/logger";
import { DateTime } from "luxon";
import { getLinnworksInventoryComplete } from "../linnworks/inventory";

async function updateGoogleSheetsLinnworks(auth: any) {
  const sheets = google.sheets({ version: "v4", auth });

  logger.info(`[start] Getting Linnworks Inventory...`);

  const linnworksInventory = await getLinnworksInventoryComplete();

  logger.info(`[info] Number of SKUs: ${linnworksInventory.length}`);

  const dataToWrite = linnworksInventory.map((item) => {
    const { ItemNumber, Quantity, InOrder, Available } = item;
    return [ItemNumber, Quantity, InOrder, Available];
  });

  const timestamp = DateTime.now().setZone("America/Los_Angeles").toFormat("yyyy-MM-dd hh:mm:ss a");

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId: "18xtUfZuTRhJ91nfSZstk_Jn28luXhRUfiZjiB_WOiIo",
      range: "SKULabs Inventory (Pauline Only)!A1",
      valueInputOption: "RAW",
      requestBody: {
        values: [[`Last updated: ${timestamp}`]],
      },
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId: "18xtUfZuTRhJ91nfSZstk_Jn28luXhRUfiZjiB_WOiIo",
      range: "SKULabs Inventory (Pauline Only)!A5",
      valueInputOption: "RAW",
      requestBody: {
        values: dataToWrite,
      },
    });

    logger.info("[success] Inventory updated successfully.");
  } catch (error: any) {
    logger.error("[error] Failed to update:", error);
  }
}

authorize().then(updateGoogleSheetsLinnworks).catch(console.error);
