import { google } from "googleapis";
import { authorize } from "./authClient";
import { getInventoryBySkuName, getSkuLabsItemsMap } from "../eta-dashboard/skulabsInventory";
import { logger } from "../constants/logger";

async function updateGoogleSheetsInventory(auth: any) {
  const sheets = google.sheets({ version: "v4", auth });

  logger.info(`[START] Getting SKU-ID Mapping...`);

  const itemsMap = await getSkuLabsItemsMap();
  const inventoryBySkuName = await getInventoryBySkuName(itemsMap);

  const sortedSKUs = Object.keys(inventoryBySkuName).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase(), "en", {
      numeric: true,
      sensitivity: "base",
    })
  );

  logger.info(`[INFO] Number of SKUs: ${sortedSKUs.length}`);

  const dataToWrite = sortedSKUs.map((sku: any) => {
    const { on_hand, reserved, free } = inventoryBySkuName[sku];
    return [sku, on_hand, reserved, free];
  });

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId: "18xtUfZuTRhJ91nfSZstk_Jn28luXhRUfiZjiB_WOiIo",
      range: "SKULabs Inventory (Pauline Only)!N5",
      valueInputOption: "RAW",
      requestBody: {
        values: dataToWrite,
      },
    });

    logger.info("[SUCCESS] Inventory updated successfully.");
  } catch (error: any) {
    logger.error("[ERROR] Failed to update:", error);
  }
}

authorize().then(updateGoogleSheetsInventory).catch(console.error);
