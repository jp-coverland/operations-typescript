import { supabaseCoverlandSizeChart } from "../constants/constants";
import Papa from "papaparse";
import fs from "fs";
import path from "path";

async function getProductVehicle() {
  const { data, error } = await supabaseCoverlandSizeChart.from("product_vehicle").select("*").order("id", { ascending: true });

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

async function uploadfNumber() {
  const productVehicle = await getProductVehicle();
  const productVehicleMap = productVehicle.data;

  const csv = fs.readFileSync(path.resolve(__dirname, "f_number_upload.csv"), "utf-8");
  const parsed = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
  });

  const updates = parsed.data
    .map((row: any) => {
      const id = row["id"];
      const f_number = row["f_number"];

      if (!id || !f_number) return null;

      return {
        id: parseInt(id, 10),
        f_number: f_number,
      };
    })
    .filter(Boolean);

  const { error } = await supabaseCoverlandSizeChart.from("product_vehicle").upsert(updates, {
    onConflict: "id",
    ignoreDuplicates: false,
  });

  if (error) {
    console.error(`Chunk update failed:`, error.message);
  }
}

uploadfNumber();
