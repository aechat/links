# Утилита `fileUtils`

Файл: `scripts/utils/fileUtils.js`

## Назначение

Даёт функцию рекурсивного обхода файловой системы с фильтрацией по игнор-правилам.

## API

```ts
walk(dir: string, callback: (filePath: string) => void): void
```

- `dir` — директория, с которой начинается обход.
- `callback` — вызывается для каждого найденного файла.

## Особенности

- Пропускает пути, которые попадают под `shouldIgnore(...)` из [`ignore-script.md`](./ignore-script.md).
- Используется как базовый обходчик в [`script-runner-script.md`](./script-runner-script.md).
