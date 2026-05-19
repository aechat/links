import {appendFileSync} from "node:fs";

import {join} from "node:path";

import {cwd} from "node:process";

const logFilePath = join(cwd(), "scripts", "script_log.txt");

export function log(scriptName, message) {
  const timestamp = new Date().toISOString();

  const logMessage = `[${timestamp}] [${scriptName}] ${message}\n`;

  appendFileSync(logFilePath, logMessage);
}
