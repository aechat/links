# Компонент `Header`

Файл: `src/components/layout/Header.tsx`

## Назначение

Верхняя панель страниц сайта: кнопка возврата на главную, заголовок текущей страницы, индикатор `WIP`, кнопка прокрутки вверх, кнопка поиска по странице и кнопка настроек темы.

## Интерфейс

```ts
interface HeaderProperties {
  title: string;
}
```

- `title` — короткое имя страницы (`aefaq`, `prfaq`, `psfaq`, `aeexpr`, `rules`, `links`).

## Пример из проекта

`src/pages/AeFaqPage.tsx`:

```tsx
import Header from "../components/layout/Header";

<Header title="aefaq" />;
```

## Технические особенности

- использует `useLocation` для определения текущего пути и поведения UI;
- на FAQ/expr-страницах показывает `SearchButton` из `SearchEngine`;
- на страницах из `WIP_PATHS` отображает предупреждающий бейдж;
- кнопка прокрутки вверх появляется после порога скролла;
- анимация появления шапки реализована через `framer-motion`;
- внутри рендерится кнопка поддержки (`SupportDonut`) и `ThemeToggleButton`.

Общие правила: [`coding-rules.md`](../coding-rules.md).
