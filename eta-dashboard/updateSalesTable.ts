import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_URL = process.env.NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_URL;
const NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_ANON_KEY;

if (!NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_URL || !NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_ANON_KEY) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_URL, NEXT_PUBLIC_SUPABASE_DATA_PROCESSING_ANON_KEY);

export async function getSupabaseQuery() {
  const { data, error } = await supabase.from("sales").select(`*`);

  if (error) {
    console.error("Supabase query error:", error);
    return { data: [], error: error };
  }

  return { data: data, error: null };
}

export async function readCSV() {}

export async function main() {
  const { data } = await getSupabaseQuery();
  console.log(data);
}

main();
