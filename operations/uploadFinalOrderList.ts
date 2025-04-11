import fs from "fs";
import path from "path";
import { parse } from "papaparse";
import { logger } from "../constants/logger";
import { supabaseDataProcessing } from "../constants/constants";

interface FinalOrderItem {
  container: string;
  sku: string;
  quantity: number;
}

function readFinalOrderListCSV(csvFilePath: string) {
  //   logger.info(`[start] Reading Final Order List CSV...`);
  const finalOrderListData: FinalOrderItem[] = [];

  const csvFile = fs.readFileSync(csvFilePath, "utf-8");
  const parsed = parse(csvFile, {
    header: true,
    skipEmptyLines: true,
  });

  const rawRows = parsed.data as Record<string, string>[];
  if (rawRows.length === 0) return finalOrderListData;

  //   // Check by SKU
  //   rawRows.forEach((row) => {
  //     const sku = row["SKU"];
  //     if (!sku) return;

  //     Object.entries(row).forEach(([key, value]) => {
  //       if (key === "SKU") return;

  //       const quantity = parseInt(value);

  //       if (!isNaN(quantity)) {
  //         finalOrderListData.push({
  //           container: key,
  //           sku,
  //           quantity,
  //         });
  //       }
  //     });
  //   });

  // Check by Container
  const headers = Object.keys(rawRows[0]).filter((key) => key !== "SKU");
  for (const container of headers) {
    for (const row of rawRows) {
      const sku = row["SKU"];
      const quantity = parseInt(row[container]);

      if (sku && !isNaN(quantity)) {
        finalOrderListData.push({
          container: container,
          sku,
          quantity,
        });
      }
    }
  }

  // logger.info(`[info] Parsed CSV data:\n${JSON.stringify(finalOrderListData, null, 2)}`);
  return finalOrderListData;
}

async function updateToSupabase(csvData: any) {
  logger.info(`[start] Starting update final order list to Supabase...`);

  try {
    const { data, error } = await supabaseDataProcessing.rpc("upload_final_order_list", {
      data: csvData,
    });

    if (error) {
      logger.error(`[error] Failed to upload:`, error.message);
      throw error;
    }

    logger.info("[success] Final Order List uploaded successfully.");
  } catch (error) {
    logger.error("[exception] Upload process crashed:", error);
  }
}

async function main() {
  const csvFilePath = path.resolve(__dirname, "final_order_list.csv");
  const csv: any = readFinalOrderListCSV(csvFilePath);

  await updateToSupabase(csv);
}

main();
