
import { fileURLToPath } from "node:url";
import fs from "fs/promises";
import csv from "async-csv";
import path from "node:path";





const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const CSV_PATH = path.join(dirname, "..", "data", "terrorData.csv");
// const RESULTS_PATH = path.join(__dirname, '..', 'results.json');
export async function loadData() {
  // Read file from disk:
  const csvString = await fs.readFile(CSV_PATH, "utf-8");
  
  // Convert CSV string into rows:
  const rows = await csv.parse(csvString);
  // console.log(rows);
  
  return rows
}


// console.log( await loadData());

