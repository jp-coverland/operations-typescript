import { authOptions } from "./constants";
import dotenv from "dotenv";

dotenv.config();

async function getAuthToken(): Promise<any> {
  try {
    const response = await fetch("https://api.linnworks.net/api/Auth/AuthorizeByApplication", authOptions);
    if (!response.ok) {
      throw new Error(`Returned Not Ok: ${response.status}`);
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function main() {
  const data = await getAuthToken();
  process.env.LINNWORKS_TOKEN = data.Token;
}

main();
