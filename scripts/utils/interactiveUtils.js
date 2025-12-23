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

export async function confirmFileWrite(filePath) {
  const answer = await rl.question(`Сохранить изменения в файле ${filePath}? (y/n) `);
  return answer.toLowerCase() === "y";
}
