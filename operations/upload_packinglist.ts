import fs, { readFile } from "fs/promises";
import path from "path";
import { parse } from "papaparse";
import { logger } from "../constants/logger";
import { supabaseDataProcessing } from "../constants/constants";

interface PackingList {
  pi_number: string;
  sku: string;
  quantity: number;
}

async function readPackingListCSV(csvFilePath: string) {
  logger.info(`[start] Reading CSV...`);
  const fileContent = await readFile(csvFilePath, "utf-8");
  const parsed = parse<PackingList>(fileContent, {
    header: true,
    skipEmptyLines: true,
    transform: (value, column) => (column === "quantity" ? Number(value) : value),
  });

  if (parsed.errors.length) {
    logger.error("Parsing errors:", parsed.errors);
    return;
  }

  logger.info(`[info] Returned CSV:\n${JSON.stringify(parsed.data, null, 2)}`);
  return parsed.data;
}

async function updatePackingListToSupabase(csvData: PackingList[]) {
  logger.info(`[start] Starting update packing list to Supabase...`);

  const { data: folData, error } = await supabaseDataProcessing.rpc("get_final_order_list");

  if (error) {
    logger.error("Failed to fetch final order list info from Supabase", error);
    return;
  }

  logger.info(`Retrieved rows from Supabase:\n${JSON.stringify(folData, null, 2)}`);

  const updates: { id: number; received_quantity: number }[] = [];

  for (const csvRow of csvData) {
    try {
      const matchedRow = folData.find((rpcRow: any) => rpcRow.container_name === csvRow.pi_number && rpcRow.master_sku === csvRow.sku);

      if (!matchedRow) {
        logger.warn(`No match found for pi_number: ${csvRow.pi_number}, sku: ${csvRow.sku}`);
        continue;
      }

      updates.push({ id: matchedRow.id, received_quantity: csvRow.quantity });
    } catch (error) {
      logger.error(`Error during iteration of csv rows:`, error);
    }
  }

  logger.info(`[info] map data:\n${JSON.stringify(updates, null, 2)}`);

  //   const { error: updateError } = await supabaseDataProcessing.rpc("update_received_quantities", {
  //     updates,
  //   });

  //   if (updateError) {
  //     logger.error("Failed to update Supabase data:", updateError);
  //   } else {
  //     logger.info(`[end] Finished updating received quantities to Supabase.`);
  //   }
}

async function main() {
  const csvFilePath = path.resolve(__dirname, "packing_list.csv");
  const csv: any = await readPackingListCSV(csvFilePath);

  updatePackingListToSupabase(csv);
}

main();
