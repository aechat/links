# Скрипт `removeEmptyLines`

Файл: `scripts/removeEmptyLines.js`

## Назначение

Удаляет пустые строки и предлагает подтвердить запись изменений в каждый файл.

## Запуск

```bash
node scripts/removeEmptyLines.js
```

## Как работает

1. Для каждого файла удаляет строки, где `line.trim() === ""`.
2. Если текст изменился, спрашивает подтверждение через `confirmFileWrite`.
3. При подтверждении записывает результат.

## Важный нюанс

В скрипте задан широкий список текстовых расширений, но фактический список файлов приходит из `scriptRunner`, а он сейчас отдаёт только `.ts` и `.tsx`.

## Связанные утилиты

- [`script-runner-script.md`](./script-runner-script.md)
- [`interactive-utils-script.md`](./interactive-utils-script.md)
