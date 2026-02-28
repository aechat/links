# Скрипт `sortImports`

Файл: `scripts/sortImports.js`

## Назначение

Сортирует `import`-ы в `.ts`/`.tsx`-файлах и спрашивает подтверждение перед записью.

## Запуск

```bash
node scripts/sortImports.js
```

## Правила сортировки

1. Если блок импортов не в начале файла, скрипт пропускает файл.
2. Не сортирует:
   - импорты из `react`;
   - импорты из `react-router-dom`;
   - импорты стилей (`.css`/`.scss`).
3. Остальные импорты сортируются по группам:
   - внешние пакеты;
   - абсолютные пути (`src/` и `@/`);
   - относительные пути.

## Связанные утилиты

- [`script-runner-script.md`](./script-runner-script.md)
- [`interactive-utils-script.md`](./interactive-utils-script.md)
