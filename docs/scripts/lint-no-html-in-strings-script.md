# Скрипт `lintNoHtmlInStrings`

Файл: `scripts/lintNoHtmlInStrings.js`

## Назначение

Запрещает HTML/JSX-разметку внутри строковых JSX-props, которые должны оставаться обычным текстом.

## Запуск

```bash
yarn lint:no-html-strings
```

или напрямую:

```bash
node scripts/lintNoHtmlInStrings.js
```

## Что проверяет

1. Обходит `src/pages/sections`.
2. Проверяет файлы `.tsx`, `.ts`, `.jsx`, `.js`.
3. Ищет строковые props:
   - `title`;
   - `caption`;
   - `tag`;
   - `anchor`.
4. Завершает работу с ошибкой, если внутри строки найден HTML-подобный тег.

## Зачем это нужно

`title`, `caption`, `tag` и `anchor` используются не только для отображения, но и для поиска, ссылок, hash-навигации и служебной логики. Разметку нужно передавать как JSX в тело компонента, а не прятать в строку.

## Пример ошибки

```tsx
<DetailsSummary
  anchor="export"
  title="Экспорт через <mark>Media Encoder</mark>"
>
  <p>...</p>
</DetailsSummary>
```

Корректный вариант — оставить `title` текстовым, а оформленный текст перенести в содержимое ответа.
