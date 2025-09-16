import { supabaseCoverlandSizeChart } from "../constants/constants";
import fs from "fs";
import path from "path";
import Papa from "papaparse";

type RpcData = {
  submodel_value: string;
  seat_type_value: string;
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
  "Definition:Handle": "seat_type_variations",
} as const;

const RPC_FIELDS: Array<keyof RpcData> = ["submodel_value", "seat_type_value", "image_url"];

function buildHandle(item: RpcData) {
  const handle = [item.submodel_value, item.seat_type_value]
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return handle;
}

async function getSubmodelSeatTypeUrlMapping() {
  const { data, error } = await supabaseCoverlandSizeChart.rpc("map_submodel_seat_type_image_url");

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

  // filter out rows, in which image_urls are null
  const filtered = data.filter((item: any) => item.image_url !== null && item.image_url !== undefined);

  const matrixifyRows = prepareMetaobjectMatrixify(filtered);
  const outputCSV = Papa.unparse(matrixifyRows);
  const outputPath = path.resolve(__dirname, "metaobjects_images.csv");
  fs.writeFileSync(outputPath, outputCSV, "utf-8");

  console.info("[end] produced matrixify csv file");
}

produceMetaObjectMatrixify();
