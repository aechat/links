# aechat.ru: полезные ссылки и ответы на вопросы по программам Adobe для участников [AEChat в Telegram](https://t.me/joinchat/F1DdXtG9LephYWUy)

```plaintext
    ___       __        ______                  __          __
   / (_____  / /_______/ ____ \____ ____  _____/ /_  ____ _/ /_
  / / / __ \/ //_/ ___/ / __ `/ __ `/ _ \/ ___/ __ \/ __ `/ __/
 / / / / / / ,< (__  / / /_/ / /_/ /  __/ /__/ / / / /_/ / /_
/_/_/_/ /_/_/|_/____/\ \__,_/\__,_/\___/\___/_/ /_/\__,_/\__/
                      \____/
```

## Поддержать автора копеечкой

На карту **Сбербанк**: `2202202357342488`

На электронный кошелёк **ЮМани**: `410016763684808`

## Рекомендации по использованию редакторов и плагинов

Для редактирования этого проекта использую редактор кода `VS Code`, а также плагины `ESLint` и `Prettier`, конфигурации которого уже расположены в файлах.

Для установки зависимостей выполните команду `npm install` или `yarn install`, в зависимости какой пакетный менеджер вы предпочитаете.

Для форматирования кода используйте команду ниже.

```shell
npm run format # если используете npm
yarn format # если используете yarn
```

Для локального разворачивания сайта используйте команду ниже.

```shell
npm run vite # если используете npm
yarn dev # если используете yarn
```

## Небольшая документация по написанию секций в \*\*faq

Каждая пустая секция должна содержать вид, как в коде ниже.

В `SHORTNAME_SECTION` должно быть название в формате "первые две буквы программы, о котором идёт речь (AE, PR или PS) и название темы секции на английском языке. Например: `AETips`, `PRExport`, `PSImport`".

```typescript
import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
const SHORTNAME_SECTION: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="SECTION_NAME"
    >
      <GithubUpdateInfo filePath="src/pages/sections/ПУТЬ_ДО_СЕКЦИИ/СЕКЦИЯ.tsx" />
    </div>
  );
};
export default SHORTNAME_SECTION;
```

В файле с определённой секцией обязательно должен быть спойлер. Для этого используем компонент `DetailsSummary` с обязательным значением `title`. В `title` обычно пишем вопрос, на который мы отвечаем. В `title` не должен содержаться ответ, если в самой описании ошибки программы это не указано явно.

```typescript
import DetailsSummary from "../../../components/DetailsSummary";
<DetailsSummary title="Название спойлера в виде вопроса в стиле 'Как сделать коммит в Github?' или похожее">
  <p>Ответ на вопрос. Если возможно - отвечаем минимум в два абзаца: причина и решение.</p>
</DetailsSummary>
```

Иногда в секциях можно использовать дополнительные теги, чтобы лучше индексировать поиск для нахождения нужного пункта. Для этого есть необязательный атрибут `tag`, которая принимает строку. Теги должны быть разделены с помощью запятых.

```typescript
import DetailsSummary from "../../../components/DetailsSummary";
<DetailsSummary title="Как отключить Windows Defender?" tag="выключить дефендер, отрубить антивирус">
  <p>Ответ на вопрос.</p>
</DetailsSummary>
```

В спойлерах допустимо использовать списки и компоненты `AdditionInfo`, `AdditionWarning` и `AdditionDanger`. Эти же компоненты можно использовать в списках. Пока что не рекомендуется вставлять изображения в списки. Результат вёрстки от таких действий временно не удовлетворяют качеству сайта. Внутри этих компонентов текст пишем без тега `<p>`.

Компоненты `AdditionInfo`, `AdditionWarning` и `AdditionDanger` служат для дополнительной информации.

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
- Иконка кнопки интерфейса: `className="ui"`
- Иконка метки или же тега: `className="tag"`
- Иконка термина: `className="word"`
- Иконка видео файла: `className="video"`
- Иконка изображения: `className="image"`

```typescript
import DetailsSummary from "../../../components/DetailsSummary";
<DetailsSummary title="А можешь привести примеры использования тега mark?">
  <p>
    Конечно. Я могу рассказать об <mark className="app">After Effects</mark>, указывая на
    интерфейс с помощью тегов. Например я могу указать кнопку в интерфейсе: очистка
    кэша находится в <mark className="ui">Edit &gt; Purge &gt; All Memory and Cache</mark>
    . Также могу сказать, что используя сторонние эффекты, например{" "}
    <mark className="plugin">Trapcode Particular</mark> вы можете замедлить
    производительность вашего проекта.
  </p>
</DetailsSummary>
```

Изображения добавляются через компонент `ImageFigure`. Видео файлы добавляются через компонент `VideoFigure`. Этот компонент стилизован компонент нужными классами, которые нужно ввести вручную:

Фигура окна аля Windows:

- Светлая тема: класс `figure_windows-light`
- Тёмная тема: класс `figure_windows-dark`

Фигура окна аля macOS:

- Светлая тема: класс `figure_macos-light`
- Тёмная тема: класс `figure_macos-dark`

```typescript

import {ImageFigure, VideoFigure} from "../../../components/ContentFigure";
import DetailsSummary from "../../../components/DetailsSummary";
<DetailsSummary title="Вопрос">
  <p>
    Кэш в <mark className="app">After Effects</mark> очищается таким образом, как показано
    на изображении ниже.
  </p>
  <ImageFigure
    styleClass="figure_windows-light"
    imgSrc="images/aftereffects/edit_purge_all-memory-and-disk-cache.png"
    imgTitle="Очистка кэша и освобождение оперативной памяти"
    caption="Очистка кэша и освобождение оперативной памяти"
  />
  <p>
    Если вы не понимаете куда нажимать по изображению - ниже приведён скринкаст действий
    для очистки кэша в <mark className="app">After Effects</mark>.
  </p>
  <VideoFigure
    styleClass="figure_macos-dark"
    videoSrc="images/aftereffects/purge_cache.mp4"
    caption="Очистка кэша и освобождение оперативной памяти"
  />
</DetailsSummary>
```

Для добавления видео из сервиса YouTube используется компонент `YouTubeVideo`. Использует два аттрибута: `link` и `caption`. Если надо добавить из другого сервиса, который позволяет ссылаться на сам видео файл - можно сделать это через компонент `VideoFigure`.

```typescript
import {YouTubeVideo} from "../../../components/ContentFigure";
import DetailsSummary from "../../../components/DetailsSummary";
<DetailsSummary title="Как легко зарикроллить своего друга?">
  <p>
    Достаточно просто. Вам нужно будет вписать компонент с легендарной ссылкой, убрав всё
    лишнее и оставив только ID видео.
  </p>
  <YouTubeVideo
    link="dQw4w9WgXcQ" // из ссылки https://www.youtube.com/watch?v=dQw4w9WgXcQ нам нужно взять значение после знака "равно"
    caption="Rick Astley - Never Gonna Give You Up"
  />
</DetailsSummary>
```
