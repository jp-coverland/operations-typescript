import * as XLSX from "xlsx";
import path from "path";
import { supabaseCoverlandSizeChart } from "../constants/constants";

async function updateExceptionVariations() {
  const workbook = XLSX.readFile(path.resolve(__dirname, "update_exceptions.xlsx"));

  const sheetName = "exceptions";
  const exceptionVariants: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  const upsertPayload: any[] = [];

  for (const row of exceptionVariants) {
    upsertPayload.push({
      id: row.id,
      handle: row.handle,
      option_1_name: row.option_1_name,
      option_1_value: row.option_1_value,
      option_2_name: row.option_2_name,
      option_2_value: row.option_2_value,
    });
  }

  const { error: upsertError } = await supabaseCoverlandSizeChart.from("shopify_db").upsert(upsertPayload, { onConflict: "id" });

  if (upsertError) {
    console.error("[error] upsert error:", upsertError);
  } else {
    console.log(`[successful] upsert successful`);
  }
}

updateExceptionVariations();
