# Компонент `CopyButton`

Файл: `src/components/ui/CopyButton/CopyButton.tsx`

## Назначение

Компактная кнопка копирования (иконка `ShareRounded`) для заголовков разделов и спойлеров.

## Интерфейс

```ts
interface CopyButtonProperties {
  className?: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
```

- `onClick` — обработчик копирования;
- `disabled` — блокирует кнопку;
- `className` — дополнительный CSS-класс.

## Пример из проекта

`src/pages/ChatRules.tsx`:

```tsx
import {CopyButton} from "../components/ui/CopyButton/CopyButton";

<CopyButton onClick={() => handleCopyAnchor("about")} />;
```

## Технические особенности

- сам компонент не копирует текст, только делегирует действие в `onClick`;
- собирает классы кнопки из базового класса, `disabled`-состояния и внешнего `className`;
- стили: `src/components/ui/CopyButton/CopyButton.module.scss`.

Общие правила: [`coding-rules.md`](../coding-rules.md).
