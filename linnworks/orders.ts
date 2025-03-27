import axios from "axios";
import { LINNWORKS_EXT_API_BASE } from "./constants";
import dotenv from "dotenv";
import { getAuthToken } from "./authorize";

dotenv.config();

let API_CALL_COUNT = 0;

async function trackApiCall() {
  API_CALL_COUNT++;

  // Define delay based on API call thresholds
  let delayMs = 0;
  if (API_CALL_COUNT >= 120) {
    delayMs = 20000; // 20s delay
  } else if (API_CALL_COUNT >= 90) {
    delayMs = 10000; // 10s delay
  } else if (API_CALL_COUNT >= 60) {
    delayMs = 5000; // 5s delay
  } else if (API_CALL_COUNT >= 30) {
    delayMs = 1000; // 1s delay
  }

  if (delayMs > 0) {
    console.log(`API call count: ${API_CALL_COUNT} - Applying ${delayMs / 1000}s delay...`);
    await new Promise((resolve) => setTimeout(resolve, delayMs));

    // 🔹 Reset counter after applying delay to prevent indefinite throttling
    API_CALL_COUNT = 0;
  }
}

async function getOpenOrders(entriesPerPage = 100, pageNumber = 1, fulfilmentCenter: string) {
  const AUTH_TOKEN = await getAuthToken();
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
          Authorization: `${AUTH_TOKEN}`,
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

async function fetchAllOpenOrders(entriesPerPage, warehouseId: string, maxPages = 10) {
  let allOrders = [];
  let pageNumber = 1;

  while (true) {
    console.log(`Fetching Open Orders - Page ${pageNumber}`);
    const openOrders = await getOpenOrders(entriesPerPage, pageNumber, warehouseId, 1);
    if (!openOrders.length) break; // Stop if no more orders
    allOrders.push(...openOrders);
    pageNumber++;
    if (pageNumber > maxPages) break; // Safety stop after max pages
  }

  return allOrders;
}
