import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { shopifyClient } from "./client";
import { HANDLE_QUERY } from "./graphQL";

async function getHandlesFromCSV() {
  const filePath = path.resolve(__dirname, "handles.csv");
  const csvData = fs.readFileSync(filePath, "utf-8");

  const rows = Papa.parse(csvData, {
    header: true,
    skipEmptyLines: true,
  }).data;

  return rows;
}

async function getProductDataByHandle(handle: string) {
  const { data, errors } = await shopifyClient.request(HANDLE_QUERY, {
    variables: {
      handle: handle,
    },
  });

  return data;
}

async function separateProductArchives() {
  const rows: any = await getHandlesFromCSV();
  const output = [];

  for (const row of rows) {
    const productData = await getProductDataByHandle(row.handle);
    console.info(`Processing ${row.handle}...`);

    if (!productData.productByHandle) {
      console.info(`Handle ${row.handle} not found.`);

      output.push({
        Handle: row.handle,
        ID: "HANDLE NOT FOUND",
        Status: "NOT FOUND",
        Command: "NOT FOUND",
      });
    } else {
      const gid = productData.productByHandle.id;
      const id = gid.split("/").pop();

      const variantCount = productData.productByHandle.variants.edges.length;

      const status = variantCount === Number(row.row_count) ? "ARCHIVED" : "MANUAL";
      console.info(`row_count from supabase: ${row.row_count}, variantCount from Shopify: ${variantCount}, status: ${status}`);

      output.push({
        Handle: row.handle,
        ID: id,
        Status: status,
        Command: "UPDATE",
      });
    }
  }

  const csv = Papa.unparse(output);
  const outputPath = path.resolve(__dirname, "separated_product_archives.csv");
  fs.writeFileSync(outputPath, csv);
  console.log("CSV succesfully written...");
}

separateProductArchives();
