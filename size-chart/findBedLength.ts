import { supabaseCoverlandSizeChart } from "../constants/constants";
import path from "path";
import fs from "fs";

type Vehicle = {
  id: number;
  make: string;
  model: string;
  submodel_1: string | null;
  submodel_2: string | null;
  submodel_3: string | null;
};

function getGroupKey(vehicle: Vehicle): string {
  return `${vehicle.make}||${vehicle.model}||${vehicle.submodel_1}||${vehicle.submodel_2}`;
}

function getBedType(value: string): string {
  const parts = value.split(" ");
  return parts.slice(2).join(" "); // removes "8.1 ft." and keeps "Long Bed"
}

function mapToObject(map: Map<any, any>): any {
  const obj: any = {};
  for (const [key, value] of map.entries()) {
    if (value instanceof Map) {
      obj[key] = mapToObject(value);
    } else {
      obj[key] = value;
    }
  }
  return obj;
}

async function getBedLengths() {
  const { data, error } = await supabaseCoverlandSizeChart.from("product_vehicle").select("*").eq("product_type", "car cover").eq("vehicle_type", "truck");

  if (error) {
    console.error("Supabase error:", error);
  } else {
    console.log("Data successfully retrieved.");
  }

  //   const grouped = new Map<string, Map<string, Set<string>>>();
  const grouped = new Map<string, Map<string, Map<string, number[]>>>();

  for (const row of data as Vehicle[]) {
    const key = getGroupKey(row);
    const value = row.submodel_3;

    if (!value) continue;

    if (!grouped.has(key)) {
      grouped.set(key, new Map());
    }

    const bedType = getBedType(value);

    const innerMap = grouped.get(key)!;

    if (!innerMap.has(bedType)) {
      innerMap.set(bedType, new Map());
    }

    const submodelMap = innerMap.get(bedType)!;

    if (!submodelMap.has(value)) {
      submodelMap.set(value, []);
    }

    submodelMap.get(value)!.push(row.id);
  }

  const filtered = new Map<string, Map<string, Map<string, number[]>>>();

  for (const [groupKey, bedTypeMap] of grouped.entries()) {
    const filteredBedTypes = new Map<string, Map<string, number[]>>();

    for (const [bedType, submodelMap] of bedTypeMap.entries()) {
      if (submodelMap.size > 1) {
        filteredBedTypes.set(bedType, submodelMap);
      }
    }

    if (filteredBedTypes.size > 0) {
      filtered.set(groupKey, filteredBedTypes);
    }
  }

  console.dir(mapToObject(filtered), { depth: null });

  const outputLines: string[] = [];

  for (const [groupKey, bedTypeMap] of filtered.entries()) {
    const idSet = new Set<number>();

    for (const submodelMap of bedTypeMap.values()) {
      for (const ids of submodelMap.values()) {
        ids.forEach((id) => idSet.add(id));
      }
    }

    const idList = Array.from(idSet);
    const line = `${groupKey}: ${idList.join(",")}`;
    outputLines.push(line);
  }

  const outputPath = path.join(__dirname, "filtered_ids.txt");
  fs.writeFileSync(outputPath, outputLines.join("\n"), "utf-8");
}

getBedLengths();
