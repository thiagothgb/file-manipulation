import path from "node:path";
import { fileURLToPath } from "url";
import fs from "node:fs/promises";
import { convertToBinary } from "./util/index.mjs";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

let arquivo;
try {
  const bufferData = Buffer.from(
    await convertToBinary("Hello World"),
    "binary"
  );
  console.log(bufferData);
  await fs.writeFile(path.resolve(__dirname, "novo-binario.bin"), bufferData);
} catch (error) {
  console.error(error);
  if (arquivo) await arquivo.close();
}
