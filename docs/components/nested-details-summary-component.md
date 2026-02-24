# Компонент `NestedDetailsSummary`

Файл: `src/components/content/NestedDetailsSummary.tsx`

## Назначение

Вложенные спойлеры внутри открытого `DetailsSummary` для длинных ответов и подтем.

## Интерфейс

```ts
interface NestedDetailsSummaryProperties {
  children: React.ReactNode;
  modifierClass?: string;
  startOpen?: boolean;
  title: string;
}
```

- `title` — заголовок вложенного спойлера;
- `startOpen` — открыть ли блок по умолчанию;
- `modifierClass` — дополнительный CSS-класс;
- `children` — содержимое.

Компонент должен использоваться только внутри `DetailsSummary`.

Практика и пример использования: [`nested-details-rules.md`](../content/nested-details-rules.md).
