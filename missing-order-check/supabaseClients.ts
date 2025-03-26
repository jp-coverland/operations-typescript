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
