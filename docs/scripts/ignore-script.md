# Утилита `ignore`

Файл: `scripts/utils/ignore.js`

## Назначение

Хранит правила игнорирования файлов и директорий для сервисных скриптов.

## Экспорт

- `IGNORED_DIRS` — список игнорируемых директорий (`.git`, `node_modules`, `dist`, `.yarn`, `public` и др.).
- `IGNORED_FILES` — список игнорируемых файлов (`.env`, lock-файлы и др.).
- `IGNORED_PATTERNS` — маски (`*.log`, `*.local`, `*.sw?` и др.).
- `shouldIgnore(path)` — проверка пути по всем правилам.

## Как используется

Главный потребитель — [`file-utils-script.md`](./file-utils-script.md), который на базе `shouldIgnore` фильтрует обход дерева файлов.
