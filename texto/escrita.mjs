import path from "node:path";
import { fileURLToPath } from "url";
import fs from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

let arquivo;
try {
  const content = "Olá turma!";
  await fs.writeFile(path.resolve(__dirname, "novo-arquivo.txt"), content, {
    encoding: "utf8",
  });
} catch (error) {
  console.error(error);
  if (arquivo) await arquivo.close();
}
