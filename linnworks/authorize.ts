import { authPayload } from "./constants";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export async function getAuthToken(): Promise<any> {
  try {
    const response = await axios.post("https://api.linnworks.net/api/Auth/AuthorizeByApplication", authPayload);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function main() {
  const data = await getAuthToken();
  console.log(data.Token);
}

main();
