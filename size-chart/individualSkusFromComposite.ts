import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { supabaseCoverlandDbStagingSizeChart } from "../constants/constants";

async function getCompositeSkus() {
  const { data, error } = await supabaseCoverlandDbStagingSizeChart.rpc("get_component_skus_missing_price_weight");

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

async function getIndividualSkus() {
  const result = await getCompositeSkus();

  const output = result.data.map((row: any) => {
    const matches = row.master_sku.match(/F-([A-Z0-9]+)-(F|B|R)-([A-Z0-9]+)/);
    if (!matches) return { ...row, component_1: null, component_2: null };

    const [_, frontSize, frontOrBack, rearSize] = matches;
    const parts = row.master_sku.split("-");

    const prefix = parts.slice(0, 3).join("-"); // e.g. CA-SC-10
    const color = parts.slice(7).join("-"); // e.g. BK-1TO

    const component_1 = `${prefix}-F-${frontSize}-${color}`;
    const component_2 = `${prefix}-${frontOrBack}-${rearSize}-${color}`;

    return {
      ...row,
      product_type: "seat covers",
      component_1,
      component_2,
    };
  });

  const outputCSV = Papa.unparse(output);
  const outputPath = path.resolve(__dirname, "composite_with_individual.csv");
  fs.writeFileSync(outputPath, outputCSV, "utf-8");

  console.log("CSV written");
}

getIndividualSkus();
