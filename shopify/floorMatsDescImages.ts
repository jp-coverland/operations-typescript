import fs, { read } from "fs";
import path from "path";
import Papa from "papaparse";

type FloorMatsDescriptionImages = {
  style: string;
  ultimate_fit: string;
  buckle_up: string;
  texture_ours: string;
  texture_others: string;
  icons_1: string;
  icons_2: string;
  icons_3: string;
  icons_4: string;
  icons_5: string;
  icons_6: string;
  family: string;
  no_odor: string;
  eco_friendly: string;
  lifestyle: string;
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
  "Definition:Handle": "floor_mats_description_images",
} as const;

const RPC_FIELDS: Array<keyof FloorMatsDescriptionImages> = [
  "style",
  "ultimate_fit",
  "buckle_up",
  "texture_ours",
  "texture_others",
  "icons_1",
  "icons_2",
  "icons_3",
  "icons_4",
  "icons_5",
  "icons_6",
  "family",
  "no_odor",
  "eco_friendly",
  "lifestyle",
];

function buildHandle(item: FloorMatsDescriptionImages) {
  const handle = item.style
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return handle;
}

function readCSV() {
  const filePath = path.resolve(__dirname, "floor_mats_desc_images.csv");
  const csvData = fs.readFileSync(filePath, "utf-8");

  const rows = Papa.parse(csvData, {
    header: true,
    skipEmptyLines: true,
  }).data;

  return rows as FloorMatsDescriptionImages[];
}

function prepareMetaobjectMatrixify(rows: FloorMatsDescriptionImages[]): MatrixifyColumns[] {
  return rows.flatMap((rows: FloorMatsDescriptionImages) => {
    const handle = buildHandle(rows);
    return RPC_FIELDS.map((field) => ({
      Handle: handle,
      ...MATRIXIFY_DEFAULTS,
      Field: field,
      Value: rows[field],
    }));
  });
}

function produceMetaObjectMatrixify() {
  console.info("[start] get submodel-seat-type-url mapping...");

  const data = readCSV();

  // filter out rows, in which image_urls are null

  const matrixifyRows = prepareMetaobjectMatrixify(data);
  const outputCSV = Papa.unparse(matrixifyRows);
  const outputPath = path.resolve(__dirname, "floor_mats_desc_images_matrixify.csv");
  fs.writeFileSync(outputPath, outputCSV, "utf-8");

  console.info("[end] produced matrixify csv file");
}

produceMetaObjectMatrixify();
