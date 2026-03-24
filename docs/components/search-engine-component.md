# Компонент `SearchEngine`

Файл оркестратор и экспортов: `src/components/features/searchEngine/SearchEngine.tsx`  
Основные модули: `src/components/features/searchEngine/searchState.tsx`, `src/components/features/searchEngine/SearchUi.tsx`, `src/components/features/searchEngine/useSearchLogic.ts`, `src/components/features/searchEngine/searchTypes.ts`

## Назначение

Поиск по текущей странице FAQ/expr. Модуль состоит из провайдера состояния, кнопки открытия и модального интерфейса с результатами, навигацией по совпадениям и внешним поиском при отсутствии результатов.

`SearchEngine.tsx` выступает как оркестратор поиска и точка публичных экспортов. Вспомогательные хуки состояния и поведения находятся в `searchState.tsx`. UI-компоненты собираются через `SearchUi.tsx`. Общие типы поиска вынесены в `searchTypes.ts`.

## Публичный интерфейс

```ts
export interface SearchContextType {
  closeModal: () => void;
  isModalOpen: boolean;
  isPageLoaded: boolean;
  openModal: () => void;
}

export type SearchSection = {
  id: string;
  title: string;
  icon?: React.ReactNode;
};

export const SearchProvider: React.FC<{
  children: React.ReactNode;
  isPageLoaded: boolean;
}>;

export const SearchInPage: React.FC<{sections: SearchSection[]}>;
```

Дополнительно экспортируется `SearchButton` для открытия поиска из шапки.

## Пример из проекта

`src/pages/AeFaqPage.tsx`:

```tsx
import {
  SearchInPage,
  SearchProvider,
} from "../components/features/searchEngine/SearchEngine";

<SearchProvider isPageLoaded={isPageLoaded}>
  {/* контент страницы */}
  <SearchInPage sections={sections} />
</SearchProvider>;
```

## Технические особенности

- индексирует заголовки, теги, абзацы, списки, таблицы и ссылки, включая `.flexible-links`;
- при ранжировании учитывает порядок слов запроса и более раннюю позицию совпадений в поле;
- для коротких запросов (`<= 3`) снижает приоритет слабых совпадений только в контенте;
- поддерживает hotkeys и навигацию по результатам с клавиатуры;
- long-press/контекстное меню на результатах и категориях копирует ссылку на конкретный якорь;
- при нулевом результате показывает fallback с внешним поиском (Яндекс / Perplexity);
- нормализует разделители в запросе (`en_us`, `en-us`, `en us`) в единый вид для стабильной выдачи;
- использует собственный `SearchContext` и модальное окно на `antd/Modal`.

Общие правила для feature-компонентов: [`feature-components-rules.md`](../content/feature-components-rules.md). Обзор: [`features-component.md`](./features-component.md). Настройка ранжирования и веса: [`search-ranking-weights.md`](./search-ranking-weights.md).
