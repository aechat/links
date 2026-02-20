# Компонент `LoadingAnimation`

Файл: `src/components/ui/LoadingAnimation.tsx`

## Назначение

Экран загрузки приложения с анимированным логотипом и progress-bar. Управляет показом интро при переходах по страницам и может быть временно подавлен внешним флагом.

## Интерфейс

```ts
interface LoadingAnimationProperties {
  isLoading: boolean;
  isSuppressed?: boolean;
}
```

- `isLoading` — признак активной загрузки;
- `isSuppressed` — принудительно скрывает анимацию (по умолчанию `false`).

## Пример из проекта

`src/App.tsx`:

```tsx
import LoadingAnimation from "./components/ui/LoadingAnimation";

<LoadingAnimation
  isLoading={isLoading}
  isSuppressed={isSafariWarningOpen}
/>;
```

## Технические особенности

- работает вместе с `LoadingContext` и обновляет состояние загрузки при смене `location.pathname`;
- интро (`aefaq/prfaq/psfaq/aeexpr/rules`) показывается не чаще одного раза в 10 минут (`localStorage: introLastShown`);
- сначала загружает шрифты, затем запускает текстовую анимацию;
- поддерживает fade-in/fade-out и отдельную задержку появления progress-bar;
- стили и keyframes находятся в `src/components/ui/LoadingAnimation.module.scss`.

Общие правила: [`coding-rules.md`](../coding-rules.md).
