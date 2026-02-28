# Утилита `logger`

Файл: `scripts/utils/logger.js`

## Назначение

Пишет технический лог работы скриптов в `scripts/script_log.txt`.

## API

```ts
log(scriptName: string, message: string): void
```

## Формат строки

```text
[ISO_TIMESTAMP] [scriptName] message
```

Пример:

```text
[2026-02-28T10:15:33.512Z] [sortImports] ✔ Обновлено: src/pages/AeFaqPage.tsx
```
