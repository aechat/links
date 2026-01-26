import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

export const rl = readline.createInterface({input, output});

// Белый список слов, которые не нужно преобразовывать (заполняется в процессе работы).
const whitelist = new Set();
// Кеш решений пользователя, чтобы не спрашивать одно и то же.
const decisionCache = new Map();

export async function askForConfirmation(original, proposed) {
  const cacheKey = `${original}->${proposed}`;
  if (decisionCache.has(cacheKey)) {
    return decisionCache.get(cacheKey);
  }
  if (whitelist.has(original)) {
    return false;
  }

  const answer = await rl.question(
    `  Заменить "${original}" на "${proposed}"? (y/n/a/s) `
  );
  switch (answer.toLowerCase()) {
    case "y":
      return true;
    case "a":
      decisionCache.set(cacheKey, true);
      return true;
    case "s":
      whitelist.add(original);
      return false;
    case "n":
    default:
      decisionCache.set(cacheKey, false);
      return false;
  }
}

let processAll = false;

export async function confirmFileWrite(filePath) {
  if (processAll) {
    console.log(`Сохранение изменений в ${filePath} (пакетная обработка)`);
    return true;
  }

  const answer = await rl.question(`Сохранить изменения в файле ${filePath}? (Y/n/a) `);
  const response = answer.toLowerCase();

  if (response === "a") {
    console.log("Все последующие файлы будут сохранены автоматически.");
    processAll = true;
    return true;
  }

  const shouldWrite = response === "" || response === "y";
  if (shouldWrite) {
    console.log(`Сохранение изменений в ${filePath}`);
  } else {
    console.log(`Пропуск файла ${filePath}`);
  }

  return shouldWrite;
}
