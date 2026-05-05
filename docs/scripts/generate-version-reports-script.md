# Скрипт `generateVersionReports`

Файл: `scripts/reports/generateVersionReports.js`

## Назначение

Создаёт два отчёта по упоминаниям версий в статьях:

- сырой список всех version-like совпадений;
- actionable-чек-лист для ручной правки `mark.app` и `version-only` в `<mark>...</mark>`.

## Запуск

```bash
yarn report:versions
```

или напрямую:

```bash
node scripts/reports/generateVersionReports.js
```

## Параметры

```bash
node scripts/reports/generateVersionReports.js --sections aefaq,prfaq --out scripts/logs/custom-version-report
```

- `--sections` — список директорий внутри `src/pages/sections`, по умолчанию `aefaq,prfaq,psfaq,aeexpr`;
- `--out` — директория для отчётов, по умолчанию `scripts/logs/version-report-<timestamp>`.

## Результат

Скрипт создаёт:

- `version-occurrences.txt` — все строки с version-like совпадениями;
- `version-actionable-checklist.md` — сгруппированный чек-лист для ручной редакторской правки.

## Что попадает в чек-лист

- `mark.app` с Adobe-годом без major-версии, например `Adobe After Effects 2026`;
- связка `mark.app + mark.version`, где у Adobe-приложения рядом стоит только год или `20XX`;
- `mark.app` или связка `mark.app + mark.version` с `Cinema 4D 2023.X.X` или `Cinema 4D R25.X.X`;
- `version-only` в обычном `<mark>...</mark>` и `mark.version`;
- приоритетные `version-only`, рядом с которыми есть упоминание Adobe-приложения без версии.

## Важный нюанс

Скрипт ничего не исправляет в статьях. Он нужен для ревью и ручного планирования правок. Отчёты создаются в `scripts/logs`, эта директория игнорируется git.
