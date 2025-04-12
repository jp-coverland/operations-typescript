import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();
const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!NEXT_PUBLIC_SUPABASE_URL || !NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);

const NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_URL = process.env.NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_URL;
const NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_ANON_KEY;

if (!NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_URL || !NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_ANON_KEY) {
  throw new Error("Missing Supabase environment variables");
}

export const supabaseDataProcessing = createClient(NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_URL, NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_ANON_KEY);

export const authPayload = {
  ApplicationId: "4fd8bf98-d222-48de-a50b-8fd7aa3b8015",
  ApplicationSecret: "725f7757-5cae-462a-86cf-04b4c4deef08",
  Token: "f35578b2-4ca6-20d3-16b1-f37a6646628a",
};

export const LINNWORKS_EXT_API_BASE = "https://us-ext.linnworks.net/api";

export function getTimestamp() {
  const pad = (n: number) => String(n).padStart(2, "0");
  const now = new Date();

  const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  const time = `${pad(now.getHours())}${pad(now.getMinutes())}`;
  const timestamp = `${date}_${time}`;

  return timestamp;
}
