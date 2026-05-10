# Утилита `scriptRunner`

Файл: `scripts/utilities/scriptRunner.js`

## Назначение

Общий раннер для интерактивных скриптов, который:

1. обходит проект;
2. передаёт файлы в пользовательский `processor`;
3. пишет изменения на диск;
4. ведёт лог выполнения.

## API

```ts
runScript(
  scriptName: string,
  processor: (
    filePath: string,
    originalContent: string,
    rl: unknown,
    askForConfirmation: unknown,
    confirmFileWrite: unknown
  ) => Promise<string>
): Promise<void>
```

## Текущий алгоритм

1. Логирует старт (`scripts/script_log.txt`).
2. Через `walk(cwd(), ...)` собирает файлы.
3. Сейчас в обработку попадают только `.ts` и `.tsx`.
4. Для каждого файла вызывает `processor(...)`.
5. Если контент изменился, перезаписывает файл и логирует результат.
6. Закрывает `readline`-интерфейс и логирует завершение.

## Связанные утилиты

- [`file-utilities-script.md`](./file-utilities-script.md)
- [`interactive-utilities-script.md`](./interactive-utilities-script.md)
- [`logger-script.md`](./logger-script.md)
