# Правила для `mark` и семантических классов

Стили: `src/styles/components/_mark.scss`.

## Зачем использовать `mark`

- выделение сущностей, которые проще читать с визуальным маркером;
- единый стиль для файлов, путей, приложений, кнопок и терминов.

## Основные классы

- `file`, `path`, `copy`;
- `app`, `plugin`, `company`, `user`;
- `select`, `key`, `tag`, `word`, `quote`, `code`;
- `image`, `video`, `audio`;
- `info`, `warning`, `danger`.

## Практика

- выбирайте класс по смыслу, а не по «красивой» иконке;
- не делайте длинные абзацы из сплошных `mark`;
- для обычного текста оставляйте обычный `p`.

## Пример

```tsx
<p>
  Откройте <mark className="path">Edit -> Preferences -> Media & Disk Cache</mark> и
  очистите <mark className="file">Disk Cache</mark>.
</p>
<p>
  Для выражения используйте <mark className="code">wiggle(3, 20)</mark>.
</p>
```
