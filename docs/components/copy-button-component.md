# Компонент `CopyButton`

Файл: `src/components/ui/CopyButton.tsx`

## Назначение

Компактная кнопка с иконкой `ShareRounded`.

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

Пример импорта:

```tsx
import {CopyButton} from "../components/ui/CopyButton";

<CopyButton onClick={() => handleCopyAnchor("about")} />;
```

## Технические особенности

- сам компонент не копирует текст, только делегирует действие в `onClick`;
- клик обёрнут в `withSoftHaptic`;
- собирает классы кнопки из базового класса, `disabled`-состояния и внешнего `className`;
- `aria-label`: `Copy`;
- стили: `src/components/ui/CopyButton.module.scss`.

Общие правила: [`coding-rules.md`](../coding-rules.md).
