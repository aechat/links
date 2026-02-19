# Компонент `Addition`

Файл: `src/components/content/Addition.tsx`

## Назначение

Выделенный блок внутри ответа: ремарка, предупреждение или краткая выжимка.

## Интерфейс и режимы

```ts
interface AdditionProperties {
  children: React.ReactNode;
  type: "info" | "warning" | "danger" | "tldr";
}
```

- `info` — справка и уточнения;
- `warning` — предупреждение об ограничениях или рисках;
- `danger` — критичное предупреждение;
- `tldr` — короткий итог ответа с подписью `TL;DR`.

Правила применения: [`addition-rules.md`](../content/addition-rules.md).
