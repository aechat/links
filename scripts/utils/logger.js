import { appendFileSync } from 'fs';
import { join } from 'path';
import { cwd } from 'process';

const logFilePath = join(cwd(), 'scripts', 'script_log.txt');

export function log(scriptName, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${scriptName}] ${message}\n`;
    appendFileSync(logFilePath, logMessage);
}
