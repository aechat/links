# Скрипт `generateFontStyle`

Файл: `scripts/fonts/generateFontStyle.js`

## Назначение

Генерирует файл `src/styles/base/_fonts.scss` на основе шрифтов из `src/fonts`.

## Запуск

```bash
node scripts/fonts/generateFontStyle.js
```

## Параметры

- `--fonts-root src/fonts` — корень директорий шрифтов.
- `--output src/styles/base/_fonts.scss` — путь к выходному SCSS.
- `--dry-run` — вывести результат в консоль без записи в файл.
- `--help` — справка.

## Как работает

1. Собирает variable-шрифты (`*VariableFont*.ttf`) и статические `ttf` в `*/static/*`.
2. Определяет `font-style` и `font-weight` по имени файла.
3. Дедуплицирует одинаковые пары `style + weight`.
4. Генерирует два блока:
   - `@supports (font-variation-settings: normal)` для variable-шрифтов.
   - `@supports not (font-variation-settings: normal)` для статических fallback-версий.

## Особенности

- Variable-шрифты идут первыми по приоритету.
- Для variable `src` содержит `truetype-variations` и fallback `truetype`.
- Комментарий о том, что файл сгенерирован, не добавляется.
