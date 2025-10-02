import { supabaseCoverlandSizeChart, supabaseCoverlandDbStagingSizeChart } from "../constants/constants";
import fs from "fs";
import path from "path";
import Papa from "papaparse";

type CabRpcData = {
  label: string;
  name: string;
  product_type: string;
  image_url: string;
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
  "Definition:Handle": "submodel_variations",
} as const;

const RPC_FIELDS: Array<keyof CabRpcData> = ["label", "name", "product_type", "image_url"];

function buildHandle(item: CabRpcData) {
  const handle = [item.label, item.name, item.product_type]
    .filter((part) => part != null)
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return handle;
}

async function getFloorMatsVariations() {
  const { data, error } = await supabaseCoverlandDbStagingSizeChart.rpc("get_floor_mats_submodel_variation_images");

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
  console.info("[start] get floor mats variation-url data...");

  const { data, error } = await getFloorMatsVariations();
  const filtered = data.filter((item: any) => item.image_url !== null && item.image_url !== undefined);

  const matrixifyRows = prepareMetaobjectMatrixify(filtered);
  const outputCSV = Papa.unparse(matrixifyRows);
  const outputPath = path.resolve(__dirname, "floor_mats_variation_images.csv");
  fs.writeFileSync(outputPath, outputCSV, "utf-8");

  console.info("[end] produced matrixify csv file");
}

produceMetaObjectMatrixify();
