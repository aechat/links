# Компонент `EasingEditor`

Файл: `src/components/features/EasingEditor.tsx`

## Назначение

Интерактивный редактор easing-кривых для анимации: показывает Value Graph и Speed Graph, позволяет перетаскивать ручки кривой, управлять режимом воспроизведения и анализировать поведение движения.

## Интерфейс

Компонент не принимает props и экспортируется по умолчанию:

```tsx
const EasingEditor: React.FC = () => { ... };
export default EasingEditor;
```

## Пример из проекта

`src/pages/sections/aefaq/AeFromNewbies.tsx`:

```tsx
import EasingEditor from "../../../components/features/EasingEditor";

<EasingEditor />;
```

## Технические особенности

- поддерживает несколько режимов воспроизведения (`ping-pong`, `loop`, `once`);
- объединяет 2 графика: `Value Graph` и `Speed Graph`;
- обновляет preview-анимацию в реальном времени с управлением `FPS`, `duration`, режимами свойств и отображением trail;
- поддерживает drag мышью и touch для ручек кривой;
- вычисляет производные кривой Безье для отображения графика скорости.

Общие правила для feature-компонентов: [`feature-components-rules.md`](../content/feature-components-rules.md). Обзор: [`features-component.md`](./features-component.md).
