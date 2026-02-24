# Компонент `Footer`

Файл: `src/components/layout/Footer.tsx`

## Назначение

Подвал страницы с копирайтом, ссылкой на GitHub и дополнительным инфоблоком для FAQ/expr-страниц. Для FAQ/expr также показывает «индикатор свежести» на основе последнего коммита в соответствующей папке раздела.

## Интерфейс

```ts
interface FooterProperties {
  initialYear: number;
  title: string;
}
```

- `initialYear` — стартовый год в копирайте;
- `title` — название проекта в подписи.

## Пример из проекта

`src/pages/AeFaqPage.tsx`:

```tsx
import Footer from "../components/layout/Footer";

<Footer
  initialYear={2023}
  title="aechat"
/>;
```

## Технические особенности

- для путей `/aefaq`, `/prfaq`, `/psfaq`, `/aeexpr` делает запрос к GitHub API;
- берёт последний немерж-коммит для папки раздела и выводит относительное время обновления;
- при недоступности API показывает fallback-текст «Индикатор свежести временно недоступен.»;
- формат относительного времени вычисляется через `formatRelativeTime`.

Общие правила: [`coding-rules.md`](../coding-rules.md).
