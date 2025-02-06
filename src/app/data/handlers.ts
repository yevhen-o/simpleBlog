import fs from "fs";
import path from "path";
import { PostInterface } from "../types/PostInterface";

const filePath = "src/app/data/posts.json";

export function readJsonFile() {
  try {
    const absolutePath = path.join(process.cwd(), filePath);
    const data = fs.readFileSync(absolutePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return null;
  }
}

export function writeJsonFile(data: PostInterface[]) {
  try {
    const absolutePath = path.join(process.cwd(), filePath);
    fs.writeFileSync(absolutePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error writing to JSON file:", error);
    return false;
  }
}
