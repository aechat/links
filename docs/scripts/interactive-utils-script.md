# Утилита `interactiveUtils`

Файл: `scripts/utils/interactiveUtils.js`

## Назначение

Общий слой интерактивного ввода для CLI-скриптов.

## Экспорт

```ts
rl
askForConfirmation(original: string, proposed: string): Promise<boolean>
confirmFileWrite(filePath: string): Promise<boolean>
```

## Поведение `askForConfirmation`

- `y` — подтвердить только это изменение.
- `n` — отклонить изменение.
- `a` — подтвердить и запомнить решение для такой пары `original -> proposed`.
- `s` — добавить `original` в whitelist и пропускать его дальше.

## Поведение `confirmFileWrite`

- `Y`/`Enter` — сохранить текущий файл.
- `n` — пропустить текущий файл.
- `a` — сохранить текущий и включить автоматическое сохранение для остальных файлов в этой сессии.

## Где используется

- [`fix-tokens-script.md`](./fix-tokens-script.md)
- [`lowercase-tags-script.md`](./lowercase-tags-script.md)
- [`remove-empty-lines-script.md`](./remove-empty-lines-script.md)
- [`sort-imports-script.md`](./sort-imports-script.md)
- [`script-runner-script.md`](./script-runner-script.md)
