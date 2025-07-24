import fs from "fs";
import path from "path";
import Papa from "papaparse";

async function getIndividualSkus() {
  const csvFile = fs.readFileSync(path.resolve(__dirname, "composite_skus.csv"), "utf-8");
  const result = Papa.parse<any>(csvFile, {
    header: true,
  });

  const output = result.data.map((row) => {
    const matches = row.ItemNumber.match(/F-([A-Z0-9]+)-(F|B)-([A-Z0-9]+)/);
    if (!matches) return { ...row, component_1: null, component_2: null };

    const [_, frontSize, frontOrBack, rearSize] = matches;
    const parts = row.ItemNumber.split("-");

    const prefix = parts.slice(0, 3).join("-"); // e.g. CA-SC-10
    const color = parts.slice(7).join("-"); // e.g. BK-1TO

    const component_1 = `${prefix}-F-${frontSize}-${color}`;
    const component_2 = `${prefix}-${frontOrBack}-${rearSize}-${color}`;

    return {
      ...row,
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
