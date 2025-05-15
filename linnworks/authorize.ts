import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const linnworksAuthPayload = {
  ApplicationId: process.env.LINNWORKS_APPLICATION_ID,
  ApplicationSecret: process.env.LINNWORKS_APPLICATION_SECRET,
  Token: process.env.LINNWORKS_API_TOKEN,
};

export async function getAuthToken(): Promise<any> {
  try {
    const response = await axios.post("https://api.linnworks.net/api/Auth/AuthorizeByApplication", linnworksAuthPayload);
    return response.data.Token;
  } catch (error) {
    throw error;
  }
}
