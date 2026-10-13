import fs from "node:fs";
import path from "node:path";

/** Returns true when a `/public` path points to an existing file. */
export function publicAssetExists(src: string): boolean {
  if (!src.startsWith("/")) {
    return false;
  }

  const filePath = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  return fs.existsSync(filePath);
}
