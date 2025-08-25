# [links@aechat](https://aechat.ru) — ресурс с полезными ссылками и ответами на частые вопросы по программам Adobe

```plaintext
    ___       __        ______                  __          __
   / (_____  / /_______/ ____ \____ ____  _____/ /_  ____ _/ /_
  / / / __ \/ //_/ ___/ / __ `/ __ `/ _ \/ ___/ __ \/ __ `/ __/
 / / / / / / ,< (__  / / /_/ / /_/ /  __/ /__/ / / / /_/ / /_
/_/_/_/ /_/_/|_/____/\ \__,_/\__,_/\___/\___/_/ /_/\__,_/\__/
                      \____/
```

> Ресурс создан специально для участников [AEChat в Telegram](https://t.me/joinchat/F1DdXtG9LephYWUy)

## Поддержать автора статей копеечкой

На карту **Сбербанк**: `2202202357342488`

На электронный кошелёк **ЮМани**: `410016763684808`

## Рекомендации по использованию редакторов и плагинов к ним

Для редактирования этого проекта автор использует редактор кода `VS Code`, а также плагины `ESLint` и `Prettier`, конфигурации которого уже расположены в файлах. Однако вы можете редактировать проект и в своём любимом редакторе кода.

Для установки зависимостей выполните команду `npm install` или `yarn install`, в зависимости какой пакетный менеджер вы предпочитаете.

Для быстрого форматирования кода используйте команду ниже.

```shell
npm run format # если используете npm
yarn format # если используете yarn
```

Для локального разворачивания сайта используйте команду ниже.

```shell
npm run vite # если используете npm
yarn dev # если используете yarn
```

## Гайдлайн по написанию статей в ответах на частые вопросы

Все статьи обычно содержатся в директории `src/pages/sections` и разбиты на несколько директорий со статьями. Каждый файл равен какой-то категории статей.

Пустая и новая категория должна содержать следующий вид.

```typescript
import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
const SHORTNAME_SECTION: React.FC = () => {
  return (
    <div className="faq-content">
        /* остальной код */
    </div>
  );
};
export default SHORTNAME_SECTION;
```

В статьях обязательно должны быть спойлеры, которые содержат заголовок, теги и сам контент статьи. Если заголовок статьи окажется слишком длинным, например из-за текста ошибки, то часть текста можно перенести в теги. Теги должны быть разделены запятыми.

```typescript
import DetailsSummary from "../../../components/DetailsSummary";

<DetailsSummary title="Как отключить Windows Defender?" tag="helper.exe не найден, выключить дефендер, отрубить антивирус">
  <p>Ответ на вопрос.</p>
</DetailsSummary>
```

В статьях можно использовать списки, а также компоненты  `AdditionInfo`, `AdditionWarning` и `AdditionDanger` для того, чтобы обратить внимание читателя на какую-нибудь дополнительную информацию. Эти же компоненты можно использовать в списках.

```typescript
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";

import DetailsSummary from "../../../components/DetailsSummary";

<DetailsSummary title="Вопрос">
  <p>Причина поведения определённого действия.</p>
  <ul>
    <li>Решение 1.</li>
    <li>
      Решение 2.
      <AdditionWarning>
        Данное решение может привести к неожиданным резульатам.
      </AdditionWarning>
    </li>
    <li>Решение 3.</li>
  </ul>
  <AdditionInfo>
    Выноска с текстом на голубом фоне. Служит для дополнительной информации, например
    откуда скачать определённый плагин или рассказывает об особенностях работы конкретного
    действия.
  </AdditionInfo>
  <AdditionWarning>
    Выноска с текстом на жёлтом фоне. Служит для предупреждения пользователей о возможных
    рисках или о возможном получении неожиданных результатах.
  </AdditionWarning>
  <AdditionDanger>
    Выноска с текстом на красном фоне. Служит для оповещения пользователей о том, что
    действия делаются на свой страх и риск или о том, на что нужно обратить внимание в
    первую очередь.
  </AdditionDanger>
</DetailsSummary>
```

Иногда в тексте может встречаться `mark` с каким-нибудь классом. Это делается лишь для добавления уникальной иконки рядом с текстом и позволяет копировать текст в буфер обмена. Если у `mark` не будет класса - при нажатии на него текст не будет копироваться в буфер обмена.

Классы для `mark`:

- Иконка файла: `className="file"`
- Иконка кнопки: `className="key"`
- Иконка плагина: `className="plugin"`
- Иконка программы: `className="app"`
- Иконка пути до файла: `className="path"`
- Иконка копирования текста: `className="copy"`
- Иконка кнопки интерфейса: `className="select"`
- Иконка метки или же тега: `className="tag"`
- Иконка термина: `className="word"`
- Иконка видео файла: `className="video"`
- Иконка изображения: `className="image"`

```typescript
import DetailsSummary from "../../../components/DetailsSummary";
<DetailsSummary title="А можешь привести примеры использования тега «mark»?">
  <p>
    Конечно. Я могу рассказать об <mark className="app">Adobe After Effects</mark>, указывая на
    интерфейс с помощью тегов. Например я могу указать кнопку в интерфейсе: очистка
    кэша находится в <mark className="select">«Edit» → «Purge» → «All Memory and Cache»</mark>
    . Также могу сказать, что используя сторонние эффекты, например{" "}
    <mark className="plugin">Deep Glow</mark> вы можете замедлить
    производительность вашего проекта.
  </p>
</DetailsSummary>
```

### Как добавить медиа?

Для добавления изображения, видео или ссылку с предпросмотром на YouTube используется компонент `ContentFigure`.

```typescript
import {ImageFigure, VideoFigure} from "../../../components/ContentFigure";

import DetailsSummary from "../../../components/DetailsSummary";

<DetailsSummary title="Вопрос">
  <p>
    Кэш в <mark className="app">Adobe After Effects</mark> очищается таким образом, как показано
    на изображении ниже.
  </p>
  <ContentFigure
    caption="Очистка кэша и оперативной памяти"
    imgTitle="Очистка кэша и оперативной памяти"
    src="images/aftereffects/edit_purge_all-memory-and-disk-cache.png"
    theme="light"
    type="image"
    variant="windows"
  />
  <p>
    Если вы не понимаете куда нажимать по изображению - ниже приведён скринкаст действий
    для очистки кэша в <mark className="app">Adobe After Effects</mark>.
  </p>
  <ContentFigure
    caption="Настройка запуска от имени администратора"
    src="images/aftereffects/how_to_purge_cache.mp4"
    theme="dark"
    type="video"
    variant="macos"
  />
  Подробнее о новых функциях <mark className="app">Adobe After Effects> вы можете посмотреть в официальном канале <mark className="company">Adobe</mark> на <mark className="app">YouTube</mark>
  <ContentFigure
    caption="Новые функции в Adobe After Effects 2077"
    src="dQw4w9WgXcQ" // из ссылки https://www.youtube.com/watch?v=dQw4w9WgXcQ нам нужно взять значение после знака "равно"
    type="youtube"
  />
</DetailsSummary>
```
