import axios from "axios";
import { LINNWORKS_EXT_API_BASE } from "../constants/constants";
import dotenv from "dotenv";
import { getAuthToken } from "./authorize";
import { trackApiCall } from "../constants/throttle";
import { logger } from "../constants/logger";

dotenv.config();

async function getLinnworksInventory(entriesPerPage: number, pageNumber: number, locationID: any, excludeComposites: boolean, authorization: string) {
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

export async function getLinnworksInventoryComplete() {
  const entriesPerPage = 400;
  const pageNumber = 1;
  const DEFAULT_WAREHOUSE_ID = process.env.DEFAULT_WAREHOUSE_ID;
  const excludeComposites = true;
  const AUTH_TOKEN = await getAuthToken();

  let totalData: any[] = [];

  const firstPage = await getLinnworksInventory(entriesPerPage, pageNumber, DEFAULT_WAREHOUSE_ID, excludeComposites, AUTH_TOKEN);
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
