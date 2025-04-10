import { getTimestamp } from "../constants/constants";
import { logger } from "../constants/logger";
import { getSKUByItemIDs, getSkuLabsItemsMap } from "./skulabsInventory";
import fs from "fs";
import path from "path";

async function getSkuIDMapping() {
  const skuLabsItemsMap = await getSkuLabsItemsMap();
  const skuIDs: string[] = Object.keys(skuLabsItemsMap).filter((id) => /^[a-f\d]{24}$/i.test(id)); // only valid MongoDB ObjectIds

  const batchSize = 400;
  const results: any[] = [];
  const delayBetweenRequests = 500;

  logger.info(`[start] Getting SKU-ID Mapping...\n[INFO] Valid item IDs: ${skuIDs.length}`);

  for (let i = 0; i < skuIDs.length; i += batchSize) {
    const batch = skuIDs.slice(i, i + batchSize);

    await new Promise((resolve) => setTimeout(resolve, delayBetweenRequests));

    try {
      const batchData = await getSKUByItemIDs(batch);

      if (Array.isArray(batchData)) {
        results.push(...batchData);
        logger.info(`Successfully inserted batch ${i / batchSize}`);
      } else {
        logger.info(`Unexpected response at batch ${i / batchSize}:`, batchData);
      }
    } catch (error: any) {
      const status = error.response?.status;
      const apiMessage = error.response?.data?.message || JSON.stringify(error.response?.data);
      logger.error(`[error] Failed batch ${i / batchSize} (Status ${status}): ${apiMessage}`);
    }
  }

  const outputPath = path.resolve(__dirname, `sku-id-mapping_${getTimestamp()}.json`);
  const outputPathReuse = path.resolve(__dirname, `most-recent-sku-id-map.json`);
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), "utf-8");
  fs.writeFileSync(outputPathReuse, JSON.stringify(results, null, 2), "utf-8");

  logger.info(`[end] Finished SKU-ID Mapping and exporting json files.`);
  //   return inventoryBySkuName;
}

getSkuIDMapping();
