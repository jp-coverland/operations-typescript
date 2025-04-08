let API_CALL_COUNT = 0;

export async function trackApiCall() {
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
