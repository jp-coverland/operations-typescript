import { google } from "googleapis";
import { authorize } from "./authClient";
import { createContextLogger } from "../constants/logger";
import { supabaseCoverlandDB } from "../constants/constants";

const contextLogger = createContextLogger("update_container_dates");

async function getContainerDatesFromSheets(auth: any) {
  const sheets = google.sheets({ version: "v4", auth });

  contextLogger.info(`[start] Getting container dates from Production Schedule Sheets...`);
  const sheetID = "11UzJ_t-oikbh5uF1F5mKTtuIP-KsaZq1Igr3dMciMX0";
  const range = "Shipping Schedule (Final)!A2:C";

  try {
    const response = await sheets.spreadsheets.values.get({ spreadsheetId: sheetID, range: range });
    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      contextLogger.info("No data returned from Production Schedule sheets.");
      return [];
    }

    const headers = rows[0];
    const today = new Date();

    const data = rows
      .slice(1)
      .map((row) => {
        const rowObject: Record<string, string> = {};
        headers.forEach((header, i) => {
          const value = row[i] || "";

          if (header === "Container") {
            rowObject[header] = value.trim().toUpperCase();
          } else if (header === "ETA DATE") {
            const etaDate = new Date(value.trim());
            rowObject[header] = !isNaN(etaDate.getTime()) ? etaDate.toISOString().split("T")[0] : "";
          } else if (header !== "Most latest information") {
            rowObject[header] = value.trim();
          }
        });

        return rowObject;
      })
      .filter((row) => row["ETA DATE"] !== "" && new Date(row["ETA DATE"]) >= today);

    return data;
  } catch (error) {
    contextLogger.error(`Failed to read data:\n${JSON.stringify(error, null, 2)}`);
    return [];
  }
}

async function getSupabaseContainers() {
  const { data, error } = await supabaseCoverlandDB.from(`containers`).select("id, name, arrived_at_warehouse");

  if (error) {
    throw new Error(`Supabase query failed: ${JSON.stringify(error, null, 2)}`);
  }

  return { data: data, error: null };
}

async function updateEtaForSkus() {
  const { error } = await supabaseCoverlandDB.rpc("update_eta_for_all_skus");

  if (error) {
    contextLogger.error(`Update ETA RPC call failed: ${error.message}`);
  } else {
    contextLogger.info("Update ETA RPC executed successfully.");
  }
}

async function updateContainerDates() {
  const updates = [];
  const skipped = [];

  try {
    const containerInfoOnSupabase = await getSupabaseContainers();
    const containerMap = new Map<string, { id: number; arrived_at_warehouse: string | null }>();

    for (const row of containerInfoOnSupabase.data) {
      const name = row.name;
      if (name) {
        containerMap.set(name, {
          id: row.id,
          arrived_at_warehouse: row.arrived_at_warehouse || null,
        });
      }
    }
    const auth = await authorize();
    const containerDates = await getContainerDatesFromSheets(auth);

    for (const entry of containerDates) {
      const name = entry.Container.trim().toUpperCase();
      const eta = entry["ETA DATE"].trim();

      const match = containerMap.get(name);

      if (!match) {
        skipped.push(entry);
        contextLogger.warn(`skipped, no container in supabase for ${name}`);
      } else if (match.arrived_at_warehouse !== eta) {
        updates.push({
          id: match.id,
          name,
          arrived_at_warehouse: eta,
        });
      } else {
        skipped.push(entry);
      }
    }

    if (updates.length > 0) {
      const { error } = await supabaseCoverlandDB.from("containers").upsert(updates, { onConflict: "name" });

      if (error) {
        contextLogger.error(`[error] Upsert failed:\n${JSON.stringify(error, null, 2)}`);
      } else {
        contextLogger.info(`[success] ${updates.length} containers updated via upsert\n${JSON.stringify(updates, null, 2)}.`);
      }
    } else {
      contextLogger.info("[success] No rows updated.");
    }
  } catch (error) {
    contextLogger.error(`Execution failed:\n${JSON.stringify(error, null, 2)}`);
  }
}

async function updateContainerDatesRun() {
  await updateContainerDates();
  await updateEtaForSkus();
}

updateContainerDatesRun();
