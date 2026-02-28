# Скрипт `generateStaticFonts`

Файл: `scripts/fonts/generateStaticFonts.js`

## Назначение

Генерирует статические `ttf`-инстансы из variable-шрифтов (`*VariableFont*.ttf`) в директории `src/fonts/*/static`.

## Запуск

```bash
node scripts/fonts/generateStaticFonts.js
```

## Параметры

- `--weights 100,400,700` — явный список весов.
- `--fonts-root src/fonts` — корень директорий шрифтов.
- `--scan-root src` — где искать используемые веса (`font-weight` / `fontWeight`) для автогенерации.
- `--family Inter,Onest` — ограничение по семействам.
- `--overwrite` — перезаписывать уже созданные файлы.
- `--dry-run` — показать план, не создавая файлы.
- `--local-cache` — локальный npm-кэш в `.npm-cache`.
- `--help` — справка.

## Как работает

1. Ищет variable-шрифты рекурсивно в `fonts-root`.
2. Определяет список весов (из `--weights` или автосканом кода).
3. Для каждого веса запускает `varLib.instancer`.
4. Кладёт результат в `static` с именем `Family-<weight>[-Italic].ttf`.

## Backend и fallback

- Сначала пробует Python (`.venv-font`, `py`, `python`) через `fontTools.varLib.instancer`.
- Затем пробует `npx`/`npm exec` с `@web-alchemy/fonttools`.

Если ни один backend не доступен, скрипт завершится ошибкой с подсказкой по установке `fonttools`.
