import axios from "axios";
import { LINNWORKS_EXT_API_BASE } from "../constants/constants";
import dotenv from "dotenv";
import { getAuthToken } from "./authorize";
import { trackApiCall } from "../constants/throttle";

dotenv.config();

async function getOpenOrders(entriesPerPage: number, pageNumber: number, fulfilmentCenter: any, viewID: number, authorization: string) {
  try {
    await trackApiCall(); // Throttles requests based on count

    const response = await axios.post(
      `${LINNWORKS_EXT_API_BASE}/Orders/GetOpenOrders`,
      {
        EntriesPerPage: entriesPerPage,
        PageNumber: pageNumber,
        FulfilmentCenter: fulfilmentCenter,
      },
      {
        headers: {
          Authorization: `${authorization}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(`Fetched ${response.data.Data.length} open orders.`);

    return response.data.Data; // Return order data if needed
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching open orders:", error.response?.data || error.message);
    } else {
      console.error("Unknown error:", error);
    }

    throw error;
  }
}

async function fetchAllOpenOrders(entriesPerPage: number, warehouseId: any, maxPages: number, authorization: string) {
  let allOrders = [];
  let pageNumber = 1;

  while (true) {
    console.log(`Fetching Open Orders - Page ${pageNumber}`);
    const openOrders = await getOpenOrders(entriesPerPage, pageNumber, warehouseId, 1, authorization);
    if (!openOrders.length) break; // Stop if no more orders
    allOrders.push(...openOrders);
    pageNumber++;
    if (pageNumber > maxPages) break; // Safety stop after max pages
  }

  return allOrders;
}

async function getOpenOrdersByID(fulfilmentCenter: any, authorization: string) {
  try {
    const response = await axios.post(
      `${LINNWORKS_EXT_API_BASE}/Orders/GetAllOpenOrders`,
      { FulfilmentCenter: fulfilmentCenter },
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
      console.error("Error fetching open orders by ID:", error.response?.data || error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

async function getOrderDetailsByID(orderIDs: string[], authorization: string): Promise<any> {
  // Need to batch by 200.
  const batch_size = 200;
  const batches = [];

  for (let i = 0; i < orderIDs.length; i += batch_size) {
    batches.push(orderIDs.slice(i, i + batch_size));
  }

  const results = [];

  try {
    await trackApiCall();

    for (const batch of batches) {
      const response = await axios.post(
        `${LINNWORKS_EXT_API_BASE}/Orders/GetOrdersById`,
        { pkOrderIds: batch },
        {
          headers: {
            Authorization: `${authorization}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(`Fetching batch: ${response.data.length}`);

      results.push(...response.data);
    }

    return results;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching order details by ID:", error.response?.data || error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}
