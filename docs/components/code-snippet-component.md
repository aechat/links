# Компонент `CodeSnippet`

Файл: `src/components/content/CodeSnippet.tsx`

## Назначение

Показывает код с подсветкой синтаксиса и копированием по клику.

## Интерфейс

```ts
interface CodeSnippetProperties {
  children: React.ReactNode;
  className?: string;
  language?: string;
}
```

- `children` — код как строка или JSX-контент, который приводится к строке;
- `language` — язык для подсветки, по умолчанию `javascript`;
- `className` — дополнительный CSS-класс.

Компонент использует `highlight.js`.

Практика и примеры: [`code-snippet-rules.md`](../content/code-snippet-rules.md).
