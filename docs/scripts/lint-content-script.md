# Скрипт `lintContent`

Файл: `scripts/content/lintContent.js`

## Назначение

Единая проверка служебной разметки статей в `src/pages/sections`.

## Запуск

```bash
yarn lint:content
```

или напрямую:

```bash
node scripts/content/lintContent.js
```

Строгий режим:

```bash
node scripts/content/lintContent.js --strict
```

## Что проверяет

- строковые props `title`, `caption`, `tag`, `anchor` не содержат HTML/JSX;
- `Divider` не содержит непомеченные названия приложений и плагинов;
- вопросительный знак в `Divider` остаётся предупреждением, а в `--strict` становится ошибкой;
- `DetailsSummary` содержит `anchor` и `title` (в обычном режиме это предупреждение, в `--strict` - ошибка);
- `anchor` написан в `kebab-case` и не выглядит временным (`kebab-case` в обычном режиме предупреждение, в `--strict` - ошибка);
- `tag` разделяется запятой и пробелом и не содержит дублей;
- `NestedDetailsSummary` содержит `title`, а его опциональный `anchor` написан в `kebab-case` (в обычном режиме предупреждение, в `--strict` - ошибка).

## Связанные проверки

- [`lint-no-html-in-strings-script.md`](./lint-no-html-in-strings-script.md)
- [`lint-divider-style-script.md`](./lint-divider-style-script.md)
