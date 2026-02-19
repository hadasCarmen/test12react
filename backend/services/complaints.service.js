import { fileURLToPath } from "node:url";
import fs from "fs/promises";
import csv from "async-csv";
import path from "node:path";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const CSV_PATH = path.join(dirname, "..", "data", "terrorData.csv");

export async function loadData() {
  const csvString = await fs.readFile(CSV_PATH, "utf-8");

  const rows = await csv.parse(csvString ,{columns:true});

  return rows;
}
