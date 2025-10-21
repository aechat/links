import { readFileSync, writeFileSync } from 'fs';
import { cwd } from 'process';
import { walk } from './fileUtils.js';
import { log } from './logger.js';
import { rl, askForConfirmation, confirmFileWrite } from './interactiveUtils.js';

export async function runScript(scriptName, processor) {
    log(scriptName, '--- Script started ---');
    console.log(`\nЗапуск скрипта: ${scriptName}`);

    try {
        const allFiles = [];
        await walk(cwd(), (filePath) => {
            if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) { // Include .ts for sortImports
                allFiles.push(filePath);
            }
        });

        for (const filePath of allFiles) {
            const originalContent = readFileSync(filePath, 'utf8');
            let fixedContent = originalContent;

            console.log(`\n--- Обработка файла: ${filePath} ---`);

            // The processor function is responsible for making changes and handling its own interactivity
            // It receives the content, rl, askForConfirmation, and confirmFileWrite
            fixedContent = await processor(filePath, originalContent, rl, askForConfirmation, confirmFileWrite);

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
        console.error('Произошла ошибка:', e);
        log(scriptName, `ERROR: ${e.message}`);
    } finally {
        rl.close();
        log(scriptName, '--- Script finished ---');
        console.log('\nГотово!');
    }
}
