import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();
const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!NEXT_PUBLIC_SUPABASE_URL || !NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("Missing Supabase environment variables: admin_panel_node");
}

export const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);

const NEXT_PUBLIC_SUPABASE_COVERLAND_DB_URL = process.env.NEXT_PUBLIC_SUPABASE_COVERLAND_DB_URL;
const NEXT_PUBLIC_SUPABASE_COVERLAND_DB_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_COVERLAND_DB_ANON_KEY;

if (!NEXT_PUBLIC_SUPABASE_COVERLAND_DB_URL || !NEXT_PUBLIC_SUPABASE_COVERLAND_DB_ANON_KEY) {
  throw new Error("Missing Supabase environment variables: coverland_db");
}

export const supabaseCoverlandDB = createClient(NEXT_PUBLIC_SUPABASE_COVERLAND_DB_URL, NEXT_PUBLIC_SUPABASE_COVERLAND_DB_ANON_KEY);

export const supabaseCoverlandSizeChart = createClient(NEXT_PUBLIC_SUPABASE_COVERLAND_DB_URL, NEXT_PUBLIC_SUPABASE_COVERLAND_DB_ANON_KEY, {
  db: { schema: "size_chart" },
});

const NEXT_PUBLIC_SUPABASE_COVERLAND_DB_STAGING_URL = process.env.NEXT_PUBLIC_SUPABASE_COVERLAND_DB_STAGING_URL;
const NEXT_PUBLIC_SUPABASE_COVERLAND_DB__STAGING_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_COVERLAND_DB__STAGING_ANON_KEY;

if (!NEXT_PUBLIC_SUPABASE_COVERLAND_DB_STAGING_URL || !NEXT_PUBLIC_SUPABASE_COVERLAND_DB__STAGING_ANON_KEY) {
  throw new Error("Missing Supabase environment variables: coverland_db_staging");
}

export const supabaseCoverlandDbStaging = createClient(NEXT_PUBLIC_SUPABASE_COVERLAND_DB_STAGING_URL, NEXT_PUBLIC_SUPABASE_COVERLAND_DB__STAGING_ANON_KEY);

export const supabaseCoverlandDbStagingSizeChart = createClient(NEXT_PUBLIC_SUPABASE_COVERLAND_DB_STAGING_URL, NEXT_PUBLIC_SUPABASE_COVERLAND_DB__STAGING_ANON_KEY, {
  db: { schema: "size_chart" },
});

export const LINNWORKS_EXT_API_BASE = "https://us-ext.linnworks.net/api";

export function getTimestamp() {
  const pad = (n: number) => String(n).padStart(2, "0");
  const now = new Date();

  const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  const time = `${pad(now.getHours())}${pad(now.getMinutes())}`;
  const timestamp = `${date}_${time}`;

  return timestamp;
}
