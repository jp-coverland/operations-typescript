import { supabaseCoverlandSizeChart, supabaseCoverlandDbStagingSizeChart } from "../constants/constants";
import fs from "fs";
import path from "path";
import Papa from "papaparse";

type CabRpcData = {
  name: string;
  make: string;
  model: string;
  product_type: string;
  image_url: string;
  style: string;
  color_code: string;
  color_id: string;
  year_generation: string;
};

type MatrixifyColumns = {
  Handle: string;
  Command: string;
  Status: string;
  "Definition:Handle": string;
  Field: string;
  Value: string;
};

const MATRIXIFY_DEFAULTS = {
  Command: "MERGE",
  Status: "Active",
  "Definition:Handle": "extra_marketplace",
} as const;

const RPC_FIELDS: Array<keyof CabRpcData> = ["style", "make", "model", "product_type", "image_url", "color_code" , "color_id", "year_generation"];

function buildHandle(item: CabRpcData) {
  const handle = [item.style, item.make, item.model, item.product_type, item.color_code]
    .filter((part) => part != null)
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return handle;
}

async function getCabVariations() {
  const { data, error } = await supabaseCoverlandDbStagingSizeChart.rpc("get_extra_marketplace_images");

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

function prepareMetaobjectMatrixify(rows: CabRpcData[]): MatrixifyColumns[] {
  return rows.flatMap((rows: CabRpcData) => {
    const handle = buildHandle(rows);
    return RPC_FIELDS.map((field) => ({
      Handle: handle,
      ...MATRIXIFY_DEFAULTS,
      Field: field,
      Value: rows[field],
    }));
  });
}

async function produceMetaObjectMatrixify() {
  console.info("[start] get cab-url mapping...");

  const { data, error } = await getCabVariations();
  const filtered = data.filter((item: any) => item.image_url !== null && item.image_url !== undefined);

  const matrixifyRows = prepareMetaobjectMatrixify(filtered);
  const outputCSV = Papa.unparse(matrixifyRows);
  const outputPath = path.resolve(__dirname, "extra_marketplace_images.csv");
  fs.writeFileSync(outputPath, outputCSV, "utf-8");

  console.info("[end] produced matrixify csv file");
}

produceMetaObjectMatrixify();
