import axios from "axios";
import { LINNWORKS_EXT_API_BASE } from "../constants/constants";
import dotenv from "dotenv";
import { getAuthToken } from "./authorize";
import { trackApiCall } from "../constants/throttle";
import { logger } from "../constants/logger";

dotenv.config();

export async function getLinnworksInventory(entriesPerPage: number, pageNumber: number, locationID: any, excludeComposites: boolean, authorization: string) {
  try {
    await trackApiCall();

    const response = await axios.post(
      `${LINNWORKS_EXT_API_BASE}/Stock/GetStockItems`,
      {
        entriesPerPage: entriesPerPage,
        pageNumber: pageNumber,
        locationId: locationID,
        excludeComposites: excludeComposites,
      },
      {
        headers: {
          Authorization: `${authorization}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      logger.error("Error fetching open orders:", error.response?.data || error.message);
    } else {
      logger.error("Unknown error:", error);
    }

    throw error;
  }
}

export async function getDefaultWarehouseInventory() {
  const entriesPerPage = 400;
  const startPage = 1;
  const DEFAULT_WAREHOUSE_ID = process.env.DEFAULT_WAREHOUSE_ID;
  const excludeComposites = true;
  const AUTH_TOKEN = await getAuthToken();

  let totalData: any[] = [];

  const firstPage = await getLinnworksInventory(entriesPerPage, startPage, DEFAULT_WAREHOUSE_ID, excludeComposites, AUTH_TOKEN);
  totalData = totalData.concat(firstPage.Data);
  const totalPages = firstPage.TotalPages;

  logger.info(`[start] Getting Complete Linnworks Inventory...`);

  for (let page = 2; page <= totalPages; page++) {
    logger.info(`[info] Getting Inventory Page ${page}/${totalPages}`);
    const result = await getLinnworksInventory(entriesPerPage, page, DEFAULT_WAREHOUSE_ID, excludeComposites, AUTH_TOKEN);
    totalData = totalData.concat(result.Data);
  }

  return totalData;
}

export async function getCombinedInventory() {
  const entriesPerPage = 400;
  const startPage = 1;
  const WAREHOUSE_IDS = [process.env.DEFAULT_WAREHOUSE_ID, process.env.VIRTUAL_WAREHOUSE_ID];
  const excludeComposites = true;
  const AUTH_TOKEN = await getAuthToken();

  const combinedInventoryMap = new Map<string, { ItemNumber: string; Quantity: number; InOrder: number; Available: number }>();

  logger.info(`[start] Getting Complete Linnworks Inventory...`);

  for (const locationID of WAREHOUSE_IDS) {
    const firstPage = await getLinnworksInventory(entriesPerPage, startPage, locationID, excludeComposites, AUTH_TOKEN);
    const totalPages = firstPage.TotalPages;

    logger.info(`[info] Getting Inventory ${locationID} Page 1/${totalPages}`);
    accumulateInventory(firstPage.Data, combinedInventoryMap);

    for (let page = 2; page <= totalPages; page++) {
      logger.info(`[info] Getting Inventory ${locationID} Page ${page}/${totalPages}`);
      const pageData = await getLinnworksInventory(entriesPerPage, page, locationID, excludeComposites, AUTH_TOKEN);
      accumulateInventory(pageData.Data, combinedInventoryMap);
    }
  }

  return Array.from(combinedInventoryMap.values());
}

function accumulateInventory(data: any[], map: Map<string, { ItemNumber: string; Quantity: number; InOrder: number; Available: number }>) {
  for (const item of data) {
    const { ItemNumber, Quantity = 0, InOrder = 0, Available = 0 } = item;

    if (!map.has(ItemNumber)) {
      map.set(ItemNumber, { ItemNumber, Quantity: 0, InOrder: 0, Available: 0 });
    }

    const agg = map.get(ItemNumber)!;
    agg.Quantity += Quantity;
    agg.InOrder += InOrder;
    agg.Available += Available;
  }
}
