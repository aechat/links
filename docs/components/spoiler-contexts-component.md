# Модуль `spoilerContexts`

Файл: `src/components/detailsSummary/spoilerContexts.ts`

## Назначение

Набор React-контекстов для связи `DetailsSummary` и `NestedDetailsSummary`: передаёт информацию о вложенности и состоянии открытия спойлера.

## Экспорт

```ts
export const DetailsSummaryContext = createContext(false);
export const NestedDetailsSummaryContext = createContext(false);
export const SpoilerContext = createContext(false);
export const useSpoiler = () => useContext(SpoilerContext);
```

## Пример из проекта

`src/components/detailsSummary/DetailsSummary.tsx`:

```tsx
import {DetailsSummaryContext, SpoilerContext} from "./spoilerContexts";

<SpoilerContext.Provider value={isOpen}>
  <DetailsSummaryContext.Provider value={true}>
    <section>{children}</section>
  </DetailsSummaryContext.Provider>
</SpoilerContext.Provider>;
```

`src/components/detailsSummary/NestedDetailsSummary.tsx`:

```tsx
import {
  DetailsSummaryContext,
  NestedDetailsSummaryContext,
  SpoilerContext,
} from "./spoilerContexts";

const isInDetailsSummary = useContext(DetailsSummaryContext);
const isParentOpen = useContext(SpoilerContext);
```

## Технические особенности

- `DetailsSummaryContext` помогает проверить, что вложенный спойлер используется внутри родительского `DetailsSummary`;
- `SpoilerContext` передаёт `isOpen` вниз по дереву для синхронизации поведения;
- `NestedDetailsSummaryContext` помечает вложенные уровни спойлеров.

Связанный компонент: [`details-summary-component.md`](./details-summary-component.md), [`nested-details-summary-component.md`](./nested-details-summary-component.md).
