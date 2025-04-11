import { google } from "googleapis";
import { authorize } from "./authClient";
import { getInventoryBySkuName, getSkuLabsItemsMap } from "../eta-dashboard/skulabsInventory";
import { logger } from "../constants/logger";
import { DateTime } from "luxon";

async function updateGoogleSheetsInventory(auth: any) {
  const sheets = google.sheets({ version: "v4", auth });

  logger.info(`[start] Getting SKU-ID Mapping...`);

  const itemsMap = await getSkuLabsItemsMap();
  const inventoryBySkuName = await getInventoryBySkuName(itemsMap);

  const sortedSKUs = Object.keys(inventoryBySkuName).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase(), "en", {
      numeric: true,
      sensitivity: "base",
    })
  );

  logger.info(`[info] Number of SKUs: ${sortedSKUs.length}`);

  const dataToWrite = sortedSKUs.map((sku: any) => {
    const { on_hand, reserved, free } = inventoryBySkuName[sku];
    return [sku, on_hand, reserved, free];
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

authorize().then(updateGoogleSheetsInventory).catch(console.error);
