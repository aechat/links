# Компонент `ContentFilter`

Файл: `src/components/content/ContentFilter.tsx`

## Назначение

Показывает разные инструкции для Windows и macOS в рамках одного ответа. Платформа выбирается автоматически по `navigator.userAgent`, при необходимости доступно ручное переключение.

## Интерфейс

```ts
type ContentFilterProperties =
  | {windowsContent: React.ReactNode; macContent?: React.ReactNode}
  | {windowsContent?: React.ReactNode; macContent: React.ReactNode};
```

- `windowsContent` — контент для Windows;
- `macContent` — контент для macOS.

Если передан только один вариант, переключатель не отображается.

Правила применения: [`content-filter-rules.md`](../content/content-filter-rules.md).
