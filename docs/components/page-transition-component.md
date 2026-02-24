# Компонент `PageTransition`

Файл: `src/components/layout/PageTransition.tsx`

## Назначение

Обёртка для анимации появления/скрытия содержимого страницы при навигации.

## Интерфейс

```ts
interface PageTransitionProperties {
  children: React.ReactNode;
  className?: string;
}
```

- `children` — контент страницы;
- `className` — дополнительный класс для `motion.main`.

## Пример из проекта

`src/pages/AeFaqPage.tsx`:

```tsx
import PageTransition from "../components/layout/PageTransition";

<PageTransition className="main">
  <div className="article-container-flex">{/* контент страницы */}</div>
</PageTransition>;
```

## Технические особенности

- рендерит `motion.main` из `framer-motion`;
- использует fade + смещение по оси `y` при входе/выходе;
- длительность анимации — `0.3s`, easing — `[0.25, 0, 0, 1]`.

Общие правила: [`coding-rules.md`](../coding-rules.md).
