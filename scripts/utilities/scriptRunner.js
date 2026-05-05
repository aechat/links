import {readFileSync, writeFileSync} from "node:fs";

import {SCRIPT_EXTENSIONS, walkFiles} from "./fileUtilities.js";
import {log} from "./logger.js";
import {rl, askForConfirmation, confirmFileWrite} from "./interactiveUtilities.js";

export async function runScript(
  scriptName,
  processor,
  {extensions = SCRIPT_EXTENSIONS} = {}
) {
  log(scriptName, "--- Script started ---");
  console.log(`\nЗапуск скрипта: ${scriptName}`);

  try {
    const allFiles = walkFiles({extensions});

    for (const filePath of allFiles) {
      const originalContent = readFileSync(filePath, "utf8");
      let fixedContent = originalContent;

      console.log(`\n--- Обработка файла: ${filePath} ---`);

      fixedContent = await processor(
        filePath,
        originalContent,
        rl,
        askForConfirmation,
        confirmFileWrite
      );

      if (originalContent !== fixedContent) {
        writeFileSync(filePath, fixedContent);
        const message = `✔ Обновлено: ${filePath}`;
        console.log(message);
        log(scriptName, message);
      } else {
        const message = `- Нет изменений: ${filePath}`;
        console.log(message);
        log(scriptName, message);
      }
    }
  } catch (e) {
    console.error("Произошла ошибка:", e);
    log(scriptName, `ERROR: ${e.message}`);
  } finally {
    rl.close();
    log(scriptName, "--- Script finished ---");
    console.log("\nГотово!");
  }
}
