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

> Вы можете поддержать автора ресурса копеечкой: на карту **Сбербанк**: `2202202357342488` или на электронный кошелёк **ЮMoney**: `410016763684808`

## Рекомендации по использованию редакторов и плагинов к ним

Для редактирования этого проекта автор использует редактор кода `VS Code`, а также плагины `ESLint` и `Prettier`, конфигурации которого уже расположены в файлах. Однако вы можете редактировать проект и в своём любимом редакторе кода. Для установки зависимостей выполните команду `yarn install`, если вы используете пакетный менеджер `yarn`. Он используется в этом проекте. Для быстрого форматирования кода используйте команду ниже.

```shell
yarn format # если используете yarn
```

Для локального разворачивания сайта используйте команду ниже.

```shell
yarn dev # если используете yarn
```

Для корректного использования pnp-модулей в VS Code, возможно, потребуется выполнить команду ниже, чтобы не отображались куча ошибок.

```shell
yarn dlx @yarnpkg/sdks vscode
```

Для тех, кто не хочет заморачиваться с пакетными менеджерами, но имеет установленный Docker на устройстве — вы можете запустить сервер для разработки командой ниже.

```shell
docker-compose up
```

## Гайдлайн по написанию статей в ответах на частые вопросы

Все статьи обычно содержатся в директории `src/pages/sections` и разбиты на несколько директорий со статьями. Каждый файл равен какой-то категории статей. Пустая и новая категория должна содержать следующий вид.

```typescript
import React from "react";

const SHORTNAME_SECTION: React.FC = () => {
  return (
    <div className="article-content">
        /* остальной код */
    </div>
  );
};

export default SHORTNAME_SECTION;
```

В статьях обязательно должны быть спойлеры, которые содержат заголовок, теги и сам контент статьи. Если заголовок статьи окажется слишком длинным, например из-за текста ошибки, то часть текста можно перенести в теги. Теги должны быть разделены запятыми.

```typescript
import DetailsSummary from "../../../components/content/DetailsSummary";

<DetailsSummary
  anchor="disable-defender"
  tag="выключить дефендер, отрубить антивирус, ложное срабатывание, вирусы, трояны"
  title="«Не удаётся найти „..\install\helper.exe“» или как отключить Windows Defender и Windows SmartScreen?"
>
  <p>Ответ на вопрос.</p>
</DetailsSummary>
```

В статьях можно использовать списки, а также компоненты `Addition` для того, чтобы обратить внимание читателя на какую-нибудь дополнительную информацию. Эти же компоненты можно использовать в списках. Тип компонента задаётся через `type` и может быть задан четырьмя значениями: `info`, `warning`, `danger` и `tldr`.

```typescript
import Addition from "../../../components/content/Addition";
import DetailsSummary from "../../../components/content/DetailsSummary";

<DetailsSummary
  anchor="example-question"
  tag="как, зачем, на$&я"
  title="Вопрос"
>
  <p>Причина поведения определённого действия.</p>
  <ul>
    <li>Решение 1.</li>
    <li>
      Решение 2.
      <Addition type="warning">
        Данное решение может привести к неожиданным резульатам.
      </Addition>
    </li>
    <li>Решение 3.</li>
  </ul>
  <Addition type="info">
    Выноска с текстом на голубом фоне. Служит для дополнительной информации, например
    откуда скачать определённый плагин или рассказывает об особенностях работы конкретного
    действия.
  </Addition>
  <Addition type="warning">
    Выноска с текстом на жёлтом фоне. Служит для предупреждения пользователей о возможных
    рисках или о возможном получении неожиданных результатах.
  </Addition>
  <Addition type="danger">
    Выноска с текстом на красном фоне. Служит для оповещения пользователей о том, что
    действия делаются на свой страх и риск или о том, на что нужно обратить внимание в
    первую очередь.
  </Addition>
  <Addition type="tldr">
    Выноска с текстом на зелёном фоне. Служит для краткого пересказа статьи.
  </Addition>
</DetailsSummary>
```

Иногда в тексте может встречаться `mark` с каким-нибудь классом. Это делается лишь для добавления уникальной иконки рядом с текстом и позволяет копировать текст в буфер обмена. Если у `mark` не будет класса - при нажатии на него текст не будет копироваться в буфер обмена. Классы для `mark`:

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
import DetailsSummary from "../../../components/content/DetailsSummary";

<DetailsSummary
  anchor="mark-examples"
  title="А можешь привести примеры использования тега «mark»?"
>
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

Для добавления изображения, видео или ссылку с предпросмотром на YouTube используется компонент `ArticleMedia`.

```typescript
import {ArticleMedia} from "../../../components/content/ArticleMedia";
import DetailsSummary from "../../../components/content/DetailsSummary";

<DetailsSummary
  anchor="media-example"
  title="Вопрос"
>
  <p>
    Кэш в <mark className="app">Adobe After Effects</mark> очищается таким образом, как показано
    на изображении ниже.
  </p>
  <ArticleMedia
    caption="Очистка кэша и оперативной памяти"
    src="aftereffects/edit_purge_all-memory-and-disk-cache.png"
    type="image"
  />
  <p>
    Если вы не понимаете куда нажимать по изображению - ниже приведён скринкаст действий
    для очистки кэша в <mark className="app">Adobe After Effects</mark>.
  </p>
  <ArticleMedia
    caption="Настройка запуска от имени администратора"
    src="aftereffects/open_ae_as_admin.mp4"
    type="video"
  />
  <p>
    Подробнее о новых функциях <mark className="app">Adobe After Effects</mark> вы можете
    посмотреть в официальном канале <mark className="company">Adobe</mark> на{" "}
    <mark className="app">YouTube</mark>.
  </p>
  <ArticleMedia
    src="dQw4w9WgXcQ" // из ссылки https://www.youtube.com/watch?v=dQw4w9WgXcQ нам нужно взять значение после знака "равно"
    type="youtube"
  />
</DetailsSummary>
```
