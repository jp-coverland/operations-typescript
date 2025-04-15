import { google } from "googleapis";
import path from "path";
import fs from "fs/promises";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const KEY_PATH = path.join(process.cwd(), "google-sheets", "service-account.json");

export async function authorize(): Promise<any> {
  const keyFile = await fs.readFile(KEY_PATH, "utf-8");
  const credentials = JSON.parse(keyFile);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });

  return auth.getClient();
}
