# Компонент `BrowserWarning`

Файл: `src/components/modals/BrowserWarning.tsx`

## Назначение

Показывает модальное предупреждение для пользователей устаревших браузеров и предлагает ссылки на актуальные браузеры. Позволяет продолжить работу и передаёт решение в родительский компонент.

## Интерфейс

```ts
interface BrowserWarningProperties {
  onClose: (dontShowAgain: boolean) => void;
  open: boolean;
}
```

- `open` — управляет видимостью предупреждения;
- `onClose` — вызывается при нажатии «Продолжить», получает состояние флага «Больше не показывать».

## Пример из проекта

`src/App.tsx`:

```tsx
import BrowserWarning from "./components/modals/BrowserWarning";

<BrowserWarning
  open={isOldBrowserWarningOpen}
  onClose={(dontShowAgain) => {
    if (dontShowAgain) {
      localStorage.setItem("oldBrowserWarningDismissed", "true");
    } else {
      localStorage.setItem("oldBrowserWarningLastShown", Date.now().toString());
    }
    setIsOldBrowserWarningOpen(false);
  }}
/>;
```

## Технические особенности

- при `open={false}` ничего не рендерит;
- хранит внутреннее состояние чекбокса «Больше не показывать»;
- использует локальные стили `BrowserWarning.module.scss` и внешний контейнер с классом `.flexible-links` для кнопки действия.

Общие правила: [`coding-rules.md`](../coding-rules.md).
