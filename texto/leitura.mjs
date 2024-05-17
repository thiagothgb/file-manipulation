import path from "node:path";
import { fileURLToPath } from "url";
import { open } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

let arquivo;
try {
  /**
   * função open tem como segundo parâmetro uma flag
   * Flag | Descrição                               | Cria o arquivo se não existir
   * r+   | Abre o arquivo para leitura e escrita   | não
   * w+   | Abre o arquivo para leitura e escrita   | sim
   *      | posiciona o cursor no início do arquivo |
   * a    | Abre o arquivo para escrita e posiciona | sim
   *      | o cursor no final do arquivo            |
   * a+   | Abre o arquivo para leitura e escrita   | sim
   *      | posicionando o curso no final do arquivo|
   *
   */

  arquivo = await open(path.resolve(__dirname, "texto.txt"), "r");
  const conteudoDoArquivo = await arquivo.readFile({ encoding: "utf8" });
  console.log(arquivo.fd);
  console.log(conteudoDoArquivo.split("\n")[1]);
} catch (error) {
  console.error(error);
  if (arquivo) await arquivo.close();
}
