import { linnworksAuthPayload } from "../constants/constants";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export async function getAuthToken(): Promise<any> {
  try {
    const response = await axios.post("https://api.linnworks.net/api/Auth/AuthorizeByApplication", linnworksAuthPayload);
    return response.data.Token;
  } catch (error) {
    throw error;
  }
}
