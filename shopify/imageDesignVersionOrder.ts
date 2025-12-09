import { supabaseCoverlandDbStagingSizeChart } from "../constants/constants";
import fs from "fs";
import path from "path";
import Papa from "papaparse";

type RpcData = {
  seat_type: string;
  image_design_version: string;
  image_order: string;
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
  "Definition:Handle": "image_design_version_order",
} as const;

const RPC_FIELDS: Array<keyof RpcData> = ["seat_type", "image_design_version", "image_order"];

function buildHandle(item: RpcData) {
  const handle = [item.seat_type]
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return handle;
}

async function getSubmodelSeatTypeUrlMapping() {
  const { data, error } = await supabaseCoverlandDbStagingSizeChart.rpc("get_image_design_orders");

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

function prepareMetaobjectMatrixify(rows: RpcData[]): MatrixifyColumns[] {
  return rows.flatMap((rows: RpcData) => {
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
  console.info("[start] get submodel-seat-type-url mapping...");

  const { data, error } = await getSubmodelSeatTypeUrlMapping();

  const matrixifyRows = prepareMetaobjectMatrixify(data);
  const outputCSV = Papa.unparse(matrixifyRows);
  const outputPath = path.resolve(__dirname, "metaobject_image_design.csv");
  fs.writeFileSync(outputPath, outputCSV, "utf-8");

  console.info("[end] produced matrixify csv file");
}

produceMetaObjectMatrixify();
