# Компонент `ThemeChanger`

Файл: `src/components/modals/ThemeChanger.tsx`

## Назначение

Модуль управления оформлением приложения. Содержит:

- `ThemeProvider` — контекст темы и визуальных настроек;
- `useTheme` — хук доступа к настройкам;
- `ThemeToggleButton` — кнопка открытия модального окна с настройками.

## Публичный интерфейс

```ts
type Theme = "light" | "dark" | "system";

export const ThemeProvider: React.FC<{children: React.ReactNode}>;

export const useTheme: () => ThemeContextProperties;

interface ThemeToggleButtonProperties {
  className?: string;
}

export const ThemeToggleButton: React.FC<ThemeToggleButtonProperties>;
```

`ThemeContextProperties` включает текущую тему, акцентный оттенок, насыщенность, ширину контента, флаги анимаций и методы их изменения.

## Примеры из проекта

`src/App.tsx`:

```tsx
import {ThemeProvider, useTheme} from "./components/modals/ThemeChanger";

export const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};
```

`src/components/layout/Header.tsx`:

```tsx
import {ThemeToggleButton} from "../modals/ThemeChanger";

<ThemeToggleButton className={styles.icon} />;
```

## Технические особенности

- настройки сохраняются в `localStorage` (`theme`, `accentHue`, `saturateRatio`, `maxWidth`, флаги анимаций);
- `ThemeProvider` пишет CSS-переменные в `document.documentElement` и переключает классы темы (`dark` / `light`);
- переключатель вибрации показывается только на мобильных устройствах;
- переключатель анимации снега доступен только зимой (декабрь, январь, февраль);
- часть опций отображается только на определённых страницах (`/aefaq`, `/prfaq`, `/psfaq`, `/aeexpr`, `/rules`).

Общие правила: [`coding-rules.md`](../coding-rules.md).
