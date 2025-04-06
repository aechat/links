import React from "react";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import DetailsSummary from "../../../components/DetailsSummary";
import {ImageFigure} from "../../../components/ContentFigure";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {Divider} from "antd";

const AEWhereFind: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/WhereFind.tsx" />
      <DetailsSummary
        title="Где можно найти и скачать шаблоны, программы и плагины?"
        tag="адоб, download, афтер эффектс, фотошоп, премьер"
      >
        <p>
          На <a href="/">главной странице</a>, в закреплённом сообщении в чате{" "}
          <a
            href="https://t.me/joinchat/F1DdXtG9LephYWUy"
            title="AEChat в Telegram"
          >
            AEChat
          </a>{" "}
          и в списке ниже вы всегда сможете найти ссылки на наши каналы с полезным
          контентом.
        </p>
        <ul>
          <li>
            <a href="https://t.me/s/aetemp">AETemp</a> - канал с переходами, шаблонами,
            расширениями и прочими ништяками для ваших композиций в{" "}
            <mark className="app">After Effects</mark>.
          </li>
          <li>
            <a href="https://t.me/s/designworld">Design World</a> - канал с статичной
            графикой, эффектами и кистями для <mark className="app">Photoshop</mark>,
            которые в дальнейшем можно использовать в Ваших композициях{" "}
            <mark className="app">After Effects</mark>.
          </li>
        </ul>
        <AdditionWarning>
          Контент, предоставленный по ссылкам выше,{" "}
          <b>
            <u>не должен использоваться</u>
          </b>{" "}
          в коммерческих целях!
        </AdditionWarning>
        <ul>
          <li>
            <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> - канал с
            творческими программами, утилитами и плагинами к различным программам по
            демократичным ценам для пользователей компьютеров на базе Windows.
          </li>
          <li>
            <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад</a> - аналогичный канал
            с программами, как склад, но для пользователей устройств на macOS.
          </li>
        </ul>
        <AdditionInfo>
          Если у вас возникли проблемы с установкой программ или плагинов - прочтите
          раздел <mark>Проблемы с установкой</mark> или обратитесь к нам в{" "}
          <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a>.
        </AdditionInfo>
        <AdditionWarning>
          При установке программ с пометкой <mark>репак от кролика</mark> из{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склада стройматериалов (Windows)</a> не
          забывайте убирать галочку с пункта &quot;Реклама&quot; и отключать антивирус
          перед установкой, иначе можете наткнуться на проблему{" "}
          <mark className="ui">helper.exe не найден</mark>.
        </AdditionWarning>
        <AdditionDanger>
          Устанавливая содержимое на ваше устройство из каналов{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>,{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a> или{" "}
          <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a> - вы
          принимаете на себя все риски и берёте ответственность за использование
          нелегальных материалов. Мы не можем принимать вбросы по типу{" "}
          <mark className="quote">ой в складе, саду или аетемпе одни вирусы водятся</mark>{" "}
          на полном серьёзе без внятных доказательств. Ложное срабатывание антивируса
          также не является доказательством действительного наличия зловредов в том или
          ином архиве или программе. Если вы доверяете нашим источникам - отключайте
          антивирусное ПО при установке программ и плагинов, либо не предъявляйте
          претензии на основе вашей паранои и оформляйте покупку софта за свои кровные.
        </AdditionDanger>
      </DetailsSummary>
      <DetailsSummary
        title="Как скачать нужный мне шаблон, если у меня есть на него ссылка?"
        tag="енвато, моушен аррей, фрипик, артлист"
      >
        <p>
          Если вы не нашли то, что вам нужно из ссылок, то у нас имеется бот{" "}
          <a
            href="https://t.me/HiStockBot?start=509060394"
            title="Бот HiStock для покупки шаблонов в Telegram"
          >
            {" "}
            HiStock в Telegram
          </a>{" "}
          для оперативной покупки шаблонов с платформ{" "}
          <a
            href="https://elements.envato.com"
            title="Envato Elements"
          >
            Envato Elements
          </a>
          ,{" "}
          <a
            href="https://freepik.com/"
            title="Freepik"
          >
            Freepik
          </a>
          ,{" "}
          <a
            href="https://motionarray.com/"
            title="Motion Array"
          >
            Motion Array
          </a>{" "}
          и{" "}
          <a
            href="https://artlist.io/"
            title="Artlist"
          >
            Artlist
          </a>{" "}
          по выгодным ценам.
        </p>
        <AdditionWarning>
          Файлы из Videohive, Shutter Stock и других сервисов, которые не используют
          подписочную модель распространения файлов, не поддерживаются ботом.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Где можно найти и скачать бесплатные стоковые видео для своих проектов?">
        <p>
          Существует множество бесплатных видео-стоков онлайн, среди которых многие
          предоставляют материалы с лицензией <mark>Creative Commons Zero (CC0)</mark>,
          что означает возможность использования их в своих коммерческих проектах, не
          указывая авторство. Перед использованием материалов, необходимо внимательно
          ознакомиться с условиями использования на каждом конкретном ресурсе. Ниже
          перечислены популярные источники видео.
        </p>
        <div className="flexible-links">
          <a
            href="https://www.pexels.com/videos/"
            title="Pexels"
          >
            Pexels
          </a>
          <a
            href="https://pixabay.com/videos/"
            title="Pixabay"
          >
            Pixabay
          </a>
          <a
            href="https://www.videvo.net/"
            title="Videvo"
          >
            Videvo
          </a>
          <a
            href="https://coverr.co/"
            title="Coverr"
          >
            Coverr
          </a>
          <a
            href="https://www.splitshire.com"
            title="SplitShire"
          >
            SplitShire
          </a>
          <a
            href="https://mazwai.com/"
            title="Mazvai"
          >
            Mazvai
          </a>
          <a
            href="https://www.videezy.com/"
            title="Videezy"
          >
            Videezy
          </a>
          <a
            href="https://www.vidsplay.com/"
            title="Vidsplay"
          >
            Vidsplay
          </a>
          <a
            href="https://cutestockfootage.com/"
            title="CuteStockFootage"
          >
            CuteStockFootage
          </a>
          <a
            href="https://mitchmartinez.com/free-4k-red-epic-stock-footage/"
            title="Mitch Martinez"
          >
            Mitch Martinez
          </a>
          <a
            href="https://mixkit.co/"
            title="Mixkit"
          >
            Mixkit
          </a>
          <a
            href="https://www.xstockvideo.com/"
            title="XStockVideos"
          >
            XStockVideos
          </a>
          <a
            href="https://www.clipstill.com/"
            title="Clipstill"
          >
            Clipstill
          </a>
          <a
            href="https://vimeo.com/groups/freehd/"
            title="Пользователь Phil Fred на Vimeo"
          >
            Phil Fred на Vimeo
          </a>
          <a
            href="https://www.ignitemotion.com/"
            title="IgniteMotion"
          >
            IgniteMotion
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLTDgOUcX23hZdwKWhKhWp3H2D5nmWhpvv"
            title="Плейлист на YouTube c абстрактными фонами"
          >
            Абстрактные фоны на YouTube
          </a>
        </div>
        <AdditionWarning>
          Некоторые ресурсы могут быть заблокированы на территории РФ или других стран,
          используйте VPN для доступа на данные ресурсы.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Где можно найти и скачать бесплатную статичную графику для своих проектов?">
        {" "}
        <p>
          У нас есть канал{" "}
          <a
            href="https://t.me/s/DesignWorld"
            title="Канал Design World в Telegram"
          >
            Design World
          </a>{" "}
          в Telegram с полезными материалами для графических редакторов, как Photoshop и
          Illustrator. В данном канале есть навигация по каналу для нахождения всякой
          всячины, например: <mark className="tag">#текстуры</mark>,{" "}
          <mark className="tag">#шрифты</mark>, <mark className="tag">#кисти</mark>,{" "}
          <mark className="tag">#паттерны</mark>.
        </p>
        <p>
          Если вам не хватает контента из{" "}
          <a
            href="https://t.me/s/DesignWorld"
            title="Канал Design World в Telegram"
          >
            Design World
          </a>
          , то ниже предоставлен список различных сайтов с бесплатными графическими
          материалами.
        </p>
        <div className="flexible-links">
          <a
            href="https://unsplash.com/"
            title="Unsplash"
          >
            Unsplash
          </a>
          <a
            href="https://pickupimage.com/ru/"
            title="Pickup Image"
          >
            Pickup Image
          </a>
          <a
            href="https://www.flaticon.com/ru/"
            title="Flaticon"
          >
            Flaticon
          </a>
          <a
            href="https://www.stockio.com/"
            title="Stockio"
          >
            Stockio
          </a>
          <a
            href="https://creazilla.com/ru"
            title="Creazilla"
          >
            Creazilla
          </a>
          <a
            href="https://www.uidownload.com/ru"
            title="UIDownload"
          >
            UIDownload
          </a>
          <a
            href="https://stock.adobe.com/ru/free"
            title="Adobe Stock"
          >
            Adobe Stock
          </a>
        </div>
        <AdditionWarning>
          Перед использованием графики в коммерческих целях - обязательно прочтите условия
          использования и лицензии, чтобы не попасть в неприятную ситуацию.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Где можно найти и скачать бесплатные звуки и звуковые эффекты для своих видео?">
        <p>
          В канале <a href="https://t.me/s/aetemp">AETemp</a> вы можете найти звуковые
          эффекты в поиске по хештегу <mark className="tag">#звуки</mark>. Если же вам не
          хватает ассортимента из канала, то ниже предоставлен список сайтов, откуда вы
          можете достать бесплатные звуковые эффекты.
        </p>
        <div className="flexible-links">
          <a
            href="https://www.audiomicro.com/free-sound-effects"
            title="Audiomicro"
          >
            Audiomicro
          </a>
          <a
            href="https://www.zapsplat.com/"
            title="Zapsplat"
          >
            Zapsplat
          </a>
          <a
            href="https://www.freesfx.co.uk/"
            title="FreeSFX"
          >
            FreeSFX
          </a>
          <a
            href="https://www.freesoundslibrary.com/"
            title="FreeSoundLibrary"
          >
            FreeSoundLibrary
          </a>
          <a
            href="https://soundbible.com/"
            title="SoundBible"
          >
            SoundBible
          </a>
          <a
            href="https://www.soundeffectsplus.com/"
            title="soundeffects+"
          >
            soundeffects+
          </a>
          <a
            href="https://freesound.org/"
            title="freesound"
          >
            freesound
          </a>
        </div>
        <AdditionWarning>
          Перед использованием звуков в коммерческих целях - обязательно прочтите условия
          использования и лицензии, чтобы не попасть в неприятную ситуацию.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Где я могу найти шрифт по имеющемуся фото?">
        <p>
          Вы можете воспользоваться сервисом{" "}
          <a
            href="https://en.likefont.com"
            title="Сервис по нахождению шрифтов LikeFont"
          >
            LikeFont
          </a>{" "}
          для определения шрифта по фотографии. Этот сервис способен распознавать шрифты
          как на латинице, так и на кириллице.
        </p>
        <p>
          Как начать им пользоваться? Всё просто: зайдите на сайт и загрузите своё
          изображение с помощью проводника или <mark className="key">Ctrl + V</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/likefont_mainpage.png"
          imgTitle="Главная страница LikeFont"
          caption="Главная страница LikeFont"
        />
        <AdditionDanger>
          Учтите, что по умолчанию на странице стоит чекбокс напротив{" "}
          <mark className="ui">I agree to post it in Identification Community</mark>,
          которая выкладывает ваш скриншот на общее обозрение. Если не хотите выкладывать
          скриншот в сеть - уберите галочку.
        </AdditionDanger>
        <p>
          Предположим, что на вход мы дали скриншот. Но вот незадача: он неконтрастный и
          весь контент сливается. Что же делать?
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/aefaq_likefont_example.png"
          imgTitle="Пример плохого исходника"
          caption="Пример плохого исходника"
        />
        <p>
          Для этого нужно предварительно обработать изображение. После загрузки
          изображения сайт предлагает инструменты для обработки изображения, например{" "}
          <mark className="ui">Threshold</mark>. Мы его повышаем до максимально возможного
          значения, чтобы отделить текст от фона. Также есть инструменты для поворота,
          отзеркаливания и наклона изображения при необходимости.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/aefaq_likefont_fixed.png"
          imgTitle="Изображение после обработки средствами сайта"
          caption="Изображение после обработки средствами сайта"
        />
        <p>
          После этого пролистайте страницу ниже и вы увидите несколько изображений,
          поделённых на буквы. К каждому такому изображению нужно вписать нужную букву для
          точности распознавания.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/aefaq_likefont_recognition.png"
          imgTitle="Изображения к которым нужно вписать букву"
          caption="Изображения к которым нужно вписать букву"
        />
        <p>
          Если на таких изображениях нет букв или символа, то такие ячейки можно
          пропустить. После того как вы вписали буквы, нажмите на{" "}
          <mark className="ui">Identify Now</mark> и сервис начнёт распознавать шрифт, а
          затем выдаст результат.
        </p>
        <AdditionInfo>
          Чем больше вы впишете букв, тем лучше будет результат распознавания шрифта!
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/aefaq_likefont_result.png"
          imgTitle="Результат распознавания"
          caption="Результат распознавания"
        />
        <p>
          В моём примере был использован шрифт <mark>JetBrains Mono</mark> и с его
          нахождением сервис справился прекрасно.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="русский афтер, английский"
        title="Где найти таблицу перевода стандартных эффектов?"
      >
        <AdditionWarning>
          Перевод и наличие эффектов, а также способ их работы может отличаться в
          зависимости от версии <mark className="app">After Effects</mark>. Также
          рекомендуем переключить интерфейс на английский язык, чтобы не возвращаться к
          этой таблице снова и снова.
        </AdditionWarning>
        <p>
          Пользователям, использующие русскоязычный интерфейс{" "}
          <mark className="app">After Effects</mark>, иногда бывает трудно найти эффект,
          который обозначен на английском языке. В таких случаях можно обратиться к
          таблице перевода.
        </p>
        <Divider>Эффекты для работы с 3D-каналами (3D Channel Effects)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Извлечение канала 3D</td>
              <td>3D Channel Extract</td>
              <td>
                <a
                  href="https://youtu.be/qAKdcIeku3Q&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Cryptomatte</td>
              <td>
                <a
                  href="https://youtu.be/_cOG53NWJj4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Подложка глубины</td>
              <td>Depth Matte</td>
              <td>
                <a
                  href="https://youtu.be/qAKdcIeku3Q&t=278"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Глубина поля</td>
              <td>Depth of Field</td>
              <td>
                <a
                  href="https://youtu.be/qAKdcIeku3Q&t=216"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>EXtractoR</td>
              <td>
                <a
                  href="https://youtu.be/7DW84Vt5gvQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>3D туман</td>
              <td>Fog 3D</td>
              <td>
                <a
                  href="https://youtu.be/qAKdcIeku3Q&t=318"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Подложка идентификатора</td>
              <td>ID Matte</td>
              <td>
                <a
                  href="https://youtu.be/qAKdcIeku3Q&t=457"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>IDentifier</td>
              <td>IDentifier</td>
              <td>
                <a
                  href="https://youtu.be/7DW84Vt5gvQ&t=195"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для работы с аудио (Audio)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Назад</td>
              <td>Backwards</td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=46"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>ВЧ и НЧ</td>
              <td>Bass &amp; Treble</td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=79"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Задержка</td>
              <td>Delay</td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=101"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Фланджер и хор</td>
              <td>Flange &amp; Chorus</td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=139"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Фильтр НЧ и ВЧ</td>
              <td>High-Low Pass</td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=158"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Модулятор</td>
              <td>Modulator</td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=177"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Параметрическая коррекция</td>
              <td>Parametric EQ</td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=191"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Реверберация</td>
              <td>Reverb</td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=211"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Стереомикшер</td>
              <td>Stereo Mixer</td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=224"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Тон</td>
              <td>Tone</td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=242"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для размытия и резкости (Blur &amp; Sharpen)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Двухстороннее размытие</td>
              <td>Bilateral Blur</td>
              <td>
                <a
                  href="https://youtu.be/oq0FC5UuE7M&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Размытие при малой глубине резкости камеры</td>
              <td>Camera Lens Blur</td>
              <td>
                <a
                  href="https://youtu.be/EPw0nMrhP8E&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Восстановление резкости при дрожании камеры</td>
              <td>Camera-Shake Deblur</td>
              <td>
                <a
                  href="https://youtu.be/28L2XalNr5A&t=1178"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Cross Blur</td>
              <td>
                <a
                  href="https://youtu.be/UOEFos3tyHs&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Radial Blur</td>
              <td>
                <a
                  href="https://youtu.be/4hpvPSexGOg&t=161"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Radial Fast Blur</td>
              <td>
                <a
                  href="https://youtu.be/4hpvPSexGOg&t=248"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Vector Blur</td>
              <td>
                <a
                  href="https://youtu.be/tWF41oySk3U&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Размытие каналов</td>
              <td>Channel Blur</td>
              <td>
                <a
                  href="https://youtu.be/x4jHZoUk2uc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Сложное размытие</td>
              <td>Compound Blur</td>
              <td>
                <a
                  href="https://youtu.be/JGkoDPa1XEw&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Направл. разм.</td>
              <td>Directonal Blur</td>
              <td>
                <a
                  href="https://youtu.be/7BUnCtU9ARY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Быстрое размытие по рамке</td>
              <td>Fast Box Blur</td>
              <td>
                <a
                  href="https://youtu.be/MyEZcFBwloY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Размытие по Гауссу</td>
              <td>Gaussian Blur</td>
              <td>
                <a
                  href="https://youtu.be/MyEZcFBwloY&t=76"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Радиальное размытие</td>
              <td>Radial Blur</td>
              <td>
                <a
                  href="https://youtu.be/4hpvPSexGOg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Увеличить резкость</td>
              <td>Sharpen</td>
              <td>
                <a
                  href="https://youtu.be/2HwYIQWSQb8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Умное размытие</td>
              <td>Smart Blur</td>
              <td>
                <a
                  href="https://youtu.be/oq0FC5UuE7M&t=104"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Контурная резкость</td>
              <td>Unsharp Mask</td>
              <td>
                <a
                  href="https://youtu.be/QhKqU1ZHUJ4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для работы с цветовыми каналами (Channel)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Арифметический</td>
              <td>Arithmetic</td>
              <td>
                <a
                  href="https://youtu.be/fV_6S9hF3as&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Смешение</td>
              <td>Blend</td>
              <td>
                <a
                  href="https://youtu.be/fV_6S9hF3as&t=176"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Вычисления</td>
              <td>Calculations</td>
              <td>
                <a
                  href="https://youtu.be/fV_6S9hF3as&t=223"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Composite</td>
              <td>
                <a
                  href="https://youtu.be/trNkh341o6s&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Инструмент комбинирования каналов</td>
              <td>Channel Combiner</td>
              <td>
                <a
                  href="https://youtu.be/fV_6S9hF3as&t=310"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Сложный арифметический</td>
              <td>Compound Arithmetic</td>
              <td>
                <a
                  href="https://youtu.be/fV_6S9hF3as&t=116"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Обратить</td>
              <td>Invert</td>
              <td>
                <a
                  href="https://youtu.be/1hhA-21q8Xw&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Минимакс</td>
              <td>Minimax</td>
              <td>
                <a
                  href="https://youtu.be/ibfYiy--9Hs&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Удалить обработку краев цветом</td>
              <td>Remove Color Matting</td>
              <td>
                <a
                  href="https://youtu.be/8u8uJkSl9Uw&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Задать каналы</td>
              <td>Set Channels</td>
              <td>
                <a
                  href="https://youtu.be/IKah5aJHwmg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Настроить подложку</td>
              <td>Set Matte</td>
              <td>
                <a
                  href="https://youtu.be/zfmuXUgATpo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Сдвинуть каналы</td>
              <td>Shift Channels</td>
              <td>
                <a
                  href="https://youtu.be/-pqGYehO-4s&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Сплошной совмещенный</td>
              <td>Solid Composite</td>
              <td>
                <a
                  href="https://youtu.be/ZZiabVb-OEg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для коррекции цвета (Color Correction)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Автоцвет</td>
              <td>Auto Color</td>
              <td>
                <a
                  href="https://youtu.be/NW4VGAt5x4g&t=198"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Автоконтраст</td>
              <td>Auto Contrast</td>
              <td>
                <a
                  href="https://youtu.be/NW4VGAt5x4g&t=166"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Автоуровни</td>
              <td>Auto Levels</td>
              <td>
                <a
                  href="https://youtu.be/NW4VGAt5x4g&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Черное и белое</td>
              <td>Black &amp; White</td>
              <td>
                <a
                  href="https://youtu.be/fmN2-L0NG6o&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Яркость и контрастность</td>
              <td>Brightness &amp; Contrast</td>
              <td>
                <a
                  href="https://youtu.be/s4bAXwpcj-0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Цвета телетрансляции</td>
              <td>Broadcast Colors</td>
              <td>
                <a
                  href="https://youtu.be/pE58Xz1wXxI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Color Neutralizer</td>
              <td>
                <a
                  href="https://youtu.be/earDDwlY5IE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Color Offset</td>
              <td>
                <a
                  href="https://youtu.be/1-vGTVngKRw&t=10"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>СС Kernel</td>
              <td>
                <a
                  href="https://youtu.be/H1cXvYYM_0U&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Toner</td>
              <td>
                <a
                  href="https://youtu.be/euIDwp4bsi0&t=186"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Изменить цвет</td>
              <td>Change Color</td>
              <td>
                <a
                  href="https://youtu.be/LfbBtfbRFo8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Заменить на цвет</td>
              <td>Change to Color</td>
              <td>
                <a
                  href="https://youtu.be/LfbBtfbRFo8&t=154"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Микширование каналов</td>
              <td>Channel Mixer</td>
              <td>
                <a
                  href="https://youtu.be/pkPBKtVumaQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Цветовой баланс</td>
              <td>Color Balance</td>
              <td>
                <a
                  href="https://youtu.be/pkPBKtVumaQ&t=139"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Цветовой баланс (HLS)</td>
              <td>Color Balance (HLS)</td>
              <td>
                <a
                  href="https://youtu.be/pkPBKtVumaQ&t=180"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Привязка цвета</td>
              <td>Color Link</td>
              <td>
                <a
                  href="https://youtu.be/Vq6FpcCtSd0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Стабилизатор цвета</td>
              <td>Color Stabilizer</td>
              <td>
                <a
                  href="https://youtu.be/8-16s24iBy8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Colorama</td>
              <td>
                <a
                  href="https://youtu.be/85XJHcAydVU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Кривые</td>
              <td>Curves</td>
              <td>
                <a
                  href="https://youtu.be/nP47ynBc3B8&t=398"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Выровнять</td>
              <td>Equalize</td>
              <td>
                <a
                  href="https://youtu.be/_S4N3PEvaws&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Экспозиция</td>
              <td>Exposure</td>
              <td>
                <a
                  href="https://youtu.be/PciM7SLWu40&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Гамма/Основа/Усиление</td>
              <td>Gamma/Pedestal/Gain</td>
              <td>
                <a
                  href="https://youtu.be/yJyHkxTTlc4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Цветовой тон/Насыщенность</td>
              <td>Hue/Saturation</td>
              <td>
                <a
                  href="https://youtu.be/76LQhG-nl_0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Оставить цвет</td>
              <td>Leave Color</td>
              <td>
                <a
                  href="https://youtu.be/LfbBtfbRFo8&t=314"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Уровни</td>
              <td>Levels</td>
              <td>
                <a
                  href="https://youtu.be/nP47ynBc3B8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Уровни (отдельные элементы управления)</td>
              <td>Levels (Individual Controls)</td>
              <td>
                <a
                  href="https://youtu.be/nP47ynBc3B8&t=372"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Цвет Lumetri</td>
              <td>Lumetri Color</td>
              <td>
                <a
                  href="https://youtu.be/y4fuhIPxmJg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Фотофильтр</td>
              <td>Photo Filter</td>
              <td>
                <a
                  href="https://youtu.be/LwdOCzlVHe4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Произвольная карта PS</td>
              <td>PS Arbitrary Map</td>
              <td>
                <a
                  href="https://youtu.be/POK5dgZh6zQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Выборочная коррекция цвета</td>
              <td>Selective Color</td>
              <td>
                <a
                  href="https://youtu.be/R__aeOjw2Ms&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Тень/подсветка</td>
              <td>Shadow/Highlight</td>
              <td>
                <a
                  href="https://youtu.be/D8FOw8fUbSg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Оттенок</td>
              <td>Tint</td>
              <td>
                <a
                  href="https://youtu.be/euIDwp4bsi0&t=87"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Трехкрасочный</td>
              <td>Tritone</td>
              <td>
                <a
                  href="https://youtu.be/euIDwp4bsi0&t=134"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Красочность</td>
              <td>Vibrance</td>
              <td>
                <a
                  href="https://youtu.be/o9O-SK4j5yc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Видеоограничитель</td>
              <td>Video Limiter</td>
              <td>
                <a
                  href="https://youtu.be/iuNNcEmuJI8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для искажения (Distort)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Деформация по Безье</td>
              <td>Bezier Warp</td>
              <td>
                <a
                  href="https://youtu.be/J77LkU-aiIM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Выпуклость</td>
              <td>Bulge</td>
              <td>
                <a
                  href="https://youtu.be/03JF-PxF1gE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Bend It</td>
              <td>
                <a
                  href="https://youtu.be/L46aRRGkb58&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Bender</td>
              <td>
                <a
                  href="https://youtu.be/L46aRRGkb58&t=440"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Blobbylize</td>
              <td>
                <a
                  href="https://youtu.be/WPo-dkPiynI&t=470"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Flo Motion</td>
              <td>
                <a
                  href="https://youtu.be/8prrshDN0eo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Griddler</td>
              <td>
                <a
                  href="https://youtu.be/SN6yteIc88k&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Lens</td>
              <td>
                <a
                  href="https://youtu.be/HhY6NqWRU_M&t=228"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Page Turn</td>
              <td>
                <a
                  href="https://youtu.be/fybg41bOoLE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Power Pin</td>
              <td>
                <a
                  href="https://youtu.be/NeUrbL0oadc&t=146"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Ripple Pulse</td>
              <td>
                <a
                  href="https://youtu.be/k5b_kRqgky8&t=369"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Slant</td>
              <td>
                <a
                  href="https://youtu.be/wxOL7Cjm-is&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Smear</td>
              <td>
                <a
                  href="https://youtu.be/w6PkkWRpZpQ&t=84"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Split</td>
              <td>
                <a
                  href="https://youtu.be/sZjtBJX_Its&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Split 2</td>
              <td>
                <a
                  href="https://youtu.be/sZjtBJX_Its&t=62"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Tiler</td>
              <td>
                <a
                  href="https://youtu.be/uAc5sToN5DM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Привязка по углам</td>
              <td>Corner Pin</td>
              <td>
                <a
                  href="https://youtu.be/NeUrbL0oadc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Увеличение с сохранением уровня детализации</td>
              <td>Detail-preserving Upscale</td>
              <td>
                <a
                  href="https://youtu.be/njLTViB1dTk&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Карта смещения</td>
              <td>Displacement Map</td>
              <td>
                <a
                  href="https://youtu.be/4N2xvjYoLTM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Пластика</td>
              <td>Liquify</td>
              <td>
                <a
                  href="https://youtu.be/EHlmVsp-JPs&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Увеличение</td>
              <td>Magnify</td>
              <td>
                <a
                  href="https://youtu.be/c_dn9kPHmhA&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Деформация сетки</td>
              <td>Mesh Warp</td>
              <td>
                <a
                  href="https://youtu.be/2_nRHBNmCuQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Зеркало</td>
              <td>Mirror</td>
              <td>
                <a
                  href="https://youtu.be/9XMohV-HL-0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Смещение</td>
              <td>Offset</td>
              <td>
                <a
                  href="https://youtu.be/3DYJQO70B7M&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Компенсация оптики</td>
              <td>Optics Compensation</td>
              <td>
                <a
                  href="https://youtu.be/HhY6NqWRU_M&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Полярные координаты</td>
              <td>Polar Coordinates</td>
              <td>
                <a
                  href="https://youtu.be/9do6TuDBYEQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Изменить форму</td>
              <td>Reshape</td>
              <td>
                <a
                  href="https://youtu.be/Rp6iKBfOfgg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Рябь</td>
              <td>Ripple</td>
              <td>
                <a
                  href="https://youtu.be/k5b_kRqgky8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Устранение эффекта плавающего затвора</td>
              <td>Rolling Shutter Repair</td>
              <td>
                <a
                  href="https://youtu.be/28L2XalNr5A&t=1363"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Пятно</td>
              <td>Smear</td>
              <td>
                <a
                  href="https://youtu.be/w6PkkWRpZpQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Сферизация</td>
              <td>Spherize</td>
              <td>
                <a
                  href="https://youtu.be/MUAStb2uULc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Преобразовать</td>
              <td>Transform</td>
              <td>
                <a
                  href="https://youtu.be/JChsjyYSA2A&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Вихревое смещение</td>
              <td>Turbulent Displace</td>
              <td>
                <a
                  href="https://youtu.be/HiKTFo-PYAg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Скручивание</td>
              <td>Twirl</td>
              <td>
                <a
                  href="https://youtu.be/Jb9YMWrVHLk&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Деформация</td>
              <td>Warp</td>
              <td>
                <a
                  href="https://youtu.be/Qg9eeziEpJo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Стабилизатор деформации</td>
              <td>Warp Stabilizer</td>
              <td>
                <a
                  href="https://youtu.be/28L2XalNr5A&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Волнообразная деформация</td>
              <td>Wave Warp</td>
              <td>
                <a
                  href="https://youtu.be/AbY7V6bJITA&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для контроля выражений (Expression Controls)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Элемент управления 3D-точки</td>
              <td>3D Point Control</td>
              <td rowSpan={8}>
                <a
                  href="https://youtu.be/zW3Oj2X9oEY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Элемент управления углами</td>
              <td>Angle Control</td>
            </tr>
            <tr>
              <td>Элемент управления &quot;Флажок&quot;</td>
              <td>Checkbox Control</td>
            </tr>
            <tr>
              <td>Элемент управления цветом</td>
              <td>Color Control</td>
            </tr>
            <tr>
              <td>Управление раскрывающимся меню</td>
              <td>Dropdown Menu Control</td>
            </tr>
            <tr>
              <td>Элемент управления слоями</td>
              <td>Layer Control</td>
            </tr>
            <tr>
              <td>Элемент управления точкой</td>
              <td>Point Control</td>
            </tr>
            <tr>
              <td>Элемент управления &quot;Ползунок&quot;</td>
              <td>Slider Control</td>
            </tr>
          </tbody>
        </table>
        <Divider>Генераторы изображения (Generate)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4-цветный градиент</td>
              <td>4-Color Gradient</td>
              <td>
                <a
                  href="https://youtu.be/MfyN1bBe8rE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Расширенное освещение</td>
              <td>Advanced Lightning</td>
              <td>
                <a
                  href="https://youtu.be/YJ8jXYU9lYs&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Спектр аудио</td>
              <td>Audio Spectrum</td>
              <td>
                <a
                  href="https://youtu.be/1MCQ2JvExyE&t=510"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Форма звуковой волны</td>
              <td>Audio Waveform</td>
              <td>
                <a
                  href="https://youtu.be/1MCQ2JvExyE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Луч</td>
              <td>Beam</td>
              <td>
                <a
                  href="https://youtu.be/ESaxBxvt6Us&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Glue Gun</td>
              <td>
                <a
                  href="https://youtu.be/RjClIwbbV04&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Light Burst 2.5</td>
              <td>
                <a
                  href="https://youtu.be/rNJ5SRrWqyo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Light Rays</td>
              <td>
                <a
                  href="https://youtu.be/lUyIpM4aRwU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Light Sweep</td>
              <td>
                <a
                  href="https://youtu.be/0n0pZp_BA2w&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Threads</td>
              <td>
                <a
                  href="https://youtu.be/fn2Yx3YjlS0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Мозаичная текстура</td>
              <td>Cell Pattern</td>
              <td>
                <a
                  href="https://youtu.be/y6R1_9E0tPo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Шахматная доска</td>
              <td>Checkerboard</td>
              <td>
                <a
                  href="https://youtu.be/xhIJdj_dA7U&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Круг</td>
              <td>Circle</td>
              <td>
                <a
                  href="https://youtu.be/yb-wbWtJnng&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Эллипс</td>
              <td>Ellipse</td>
              <td>
                <a
                  href="https://youtu.be/yb-wbWtJnng&t=312"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Заливка пипеткой</td>
              <td>Eyedropper Fill</td>
              <td>
                <a
                  href="https://youtu.be/bNsQ0RCT2l4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Заливка</td>
              <td>Fill</td>
              <td>
                <a
                  href="https://youtu.be/euIDwp4bsi0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Фрактал</td>
              <td>Fractal</td>
              <td>
                <a
                  href="https://youtu.be/Rl2CpXgDgok&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Цветовая шкала градиента</td>
              <td>Gradient Ramp</td>
              <td>
                <a
                  href="https://youtu.be/JhdhSF2ibgQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Сетка</td>
              <td>Grid</td>
              <td>
                <a
                  href="https://youtu.be/5Ug1sVc7uYE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Блики</td>
              <td>Lens Flare</td>
              <td>
                <a
                  href="https://youtu.be/bgiA3_-9abw&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Заливка</td>
              <td>Paint Bucket</td>
              <td>
                <a
                  href="https://youtu.be/bNsQ0RCT2l4&t=192"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Радиоволны</td>
              <td>Radio Waves</td>
              <td>
                <a
                  href="https://youtu.be/wf8XFPvUptc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Каракули</td>
              <td>Scribble</td>
              <td>
                <a
                  href="https://youtu.be/2l4ao-cXlxM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Обводка</td>
              <td>Stroke</td>
              <td>
                <a
                  href="https://youtu.be/NZAcHdOaUH4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Vegas</td>
              <td>
                <a
                  href="https://youtu.be/FQ0oTGpHbBs&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Надпись</td>
              <td>Write-on</td>
              <td>
                <a
                  href="https://youtu.be/NZAcHdOaUH4&t=179"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для VR-видео (Immersive Video)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Размытие VR</td>
              <td>VR Blur</td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=320"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Хроматические аберрации VR</td>
              <td>VR Chromatic Abberations</td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=435"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Градиенты цвета VR</td>
              <td>VR Color Gradients</td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=538"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Конвертер VR</td>
              <td>VR Converter</td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=621"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Понижение уровня шума VR</td>
              <td>VR De-Noise</td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=648"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Цифровое сбой VR</td>
              <td>VR Digital Glitch</td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=680"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Фрактальный шум VR</td>
              <td>VR Fractal Noise</td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=927"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Свечение VR</td>
              <td>VR Glow</td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=1011"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Плоскость VR в сферу</td>
              <td>VR Plane to Sphere</td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=1037"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Повернуть сферу VR</td>
              <td>VR Rotate Sphere</td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=1131"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Увеличить четкость VR</td>
              <td>VR Sharpen</td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=1153"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Сфера VR в плоскость</td>
              <td>VR Sphere to Plane</td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=1167"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для кеинга (Keying)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Advanced Spill Suppressor</td>
              <td>
                <a
                  href="https://youtu.be/tK_Z1dYgtxs&t=112"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Simple Wire Removal</td>
              <td>
                <a
                  href="https://youtu.be/ALAoNGXvLC4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Ключ разности цвета</td>
              <td>Color Difference Key</td>
              <td>
                <a
                  href="https://youtu.be/kO-HrJ1su-0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Цветовой диапазон</td>
              <td>Color Range</td>
              <td>
                <a
                  href="https://youtu.be/W6vIw8_bZHM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Подложка разницы</td>
              <td>Difference Matte</td>
              <td>
                <a
                  href="https://youtu.be/ciX-roxC4oQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Извлечь</td>
              <td>Extract</td>
              <td>
                <a
                  href="https://youtu.be/v7pqZ9gtn8I&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Внутренний/внешний ключ</td>
              <td>Inner/Outer Key</td>
              <td>
                <a
                  href="https://youtu.be/z1Ji43Sg5bk&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Key Cleaner</td>
              <td>
                <a
                  href="https://youtu.be/tK_Z1dYgtxs&t=334"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Keylight (1.2)</td>
              <td>
                <a
                  href="https://youtu.be/tK_Z1dYgtxs&t=443"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Линейный цветовой ключ</td>
              <td>Linear Color Key</td>
              <td>
                <a
                  href="https://youtu.be/8RjOe6cO-cY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для изменения подложек (Matte)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Подавление подложки</td>
              <td>Matte Choker</td>
              <td>
                <a
                  href="https://youtu.be/rGmc9rrf5pc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Форма Mocha</td>
              <td>Mocha shape</td>
              <td>
                <a
                  href="https://youtu.be/wmV2p5DprI8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Уточнить жесткую подложку</td>
              <td>Refine Hard Matte</td>
              <td>
                <a
                  href="https://youtu.be/0m5b7Qs6Ido&t=423"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Уточнить мягкую подложку</td>
              <td>Refine Soft Matte</td>
              <td>
                <a
                  href="https://youtu.be/0m5b7Qs6Ido&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Упрощенное подавление</td>
              <td>Simple Choker</td>
              <td>
                <a
                  href="https://youtu.be/8lCEc-H3JJU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для генерации шума и зерна (Noise &amp; Grain)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Добавить зернистость</td>
              <td>Add Grain</td>
              <td>
                <a
                  href="https://youtu.be/FmSTOXu2V6I&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Пыль и царапины</td>
              <td>Dust &amp; Scratches</td>
              <td>
                <a
                  href="https://youtu.be/Q1BBpMxmbXU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Фрактальный шум</td>
              <td>Fractal Noise</td>
              <td>
                <a
                  href="https://youtu.be/kdttSozSLG4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Соответствие зернистости</td>
              <td>Match Grain</td>
              <td>
                <a
                  href="https://youtu.be/FmSTOXu2V6I&t=621"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Медиана</td>
              <td>Median</td>
              <td rowSpan={2}>
                <a
                  href="https://youtu.be/x-m_B8qThhI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Median (предыдущая версия)</td>
              <td>Median (Legacy)</td>
            </tr>
            <tr>
              <td>Шум</td>
              <td>Noise</td>
              <td>
                <a
                  href="https://youtu.be/pWSNY7XvN-A&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Альфа-канал шума</td>
              <td>Noise Alpha</td>
              <td>
                <a
                  href="https://youtu.be/jZj0hioZYoM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Шум HLS</td>
              <td>Noise HLS</td>
              <td>
                <a
                  href="https://youtu.be/pWSNY7XvN-A&t=55"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Автошум HLS</td>
              <td>Noise HLS Auto</td>
              <td>
                <a
                  href="https://youtu.be/pWSNY7XvN-A&t=165"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Удалить зернистость</td>
              <td>Remove Grain</td>
              <td>
                <a
                  href="https://youtu.be/FmSTOXu2V6I&t=835"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Турбулентный шум</td>
              <td>Turbulent Noise</td>
              <td>
                <a
                  href="https://youtu.be/kdttSozSLG4&t=262"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Устаревшие эффекты (Obsolete или Legacy)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Базовый 3D</td>
              <td>Basic 3D</td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=45"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Основной текст</td>
              <td>Basic Text</td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=85"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Цветовой ключ</td>
              <td>Color Key</td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=249"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Размытие по Гауссу (из прежней версии)</td>
              <td>Gaussian Blur (Legacy)</td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=167"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Молния</td>
              <td>Lightning</td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=135"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Ключ яркости</td>
              <td>Luma Key</td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=339"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Текст по контуру</td>
              <td>Path Text</td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=112"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Уменьшить мерцание в чересстрочной развертке</td>
              <td>Reduce Interlace Flicker</td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=205"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Подавление разлития</td>
              <td>Spill Suppressor</td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=403"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для перспективы (Perspective)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Функция 3D Camera Tracker</td>
              <td>3D Camera Tracker</td>
              <td>
                <a
                  href="https://youtu.be/yaT3YwIK-BI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>3D-очки</td>
              <td>3D Glasses</td>
              <td>
                <a
                  href="https://youtu.be/hLLcg1xE7Mo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Скос альфа-канала</td>
              <td>Bevel Alpha</td>
              <td>
                <a
                  href="https://youtu.be/Y217431eGeM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Скошенные края</td>
              <td>Bevel Edges</td>
              <td>
                <a
                  href="https://youtu.be/Y217431eGeM&t=36"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Cylinder</td>
              <td>
                <a
                  href="https://youtu.be/Y205itPnJCc&t=627"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Environment</td>
              <td>
                <a
                  href="https://youtu.be/WFwbm0kOzRQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Sphere</td>
              <td>
                <a
                  href="https://youtu.be/Y205itPnJCc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Spotlight</td>
              <td>
                <a
                  href="https://youtu.be/vagmclmkMU4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Тень</td>
              <td>Drop Shadow</td>
              <td>
                <a
                  href="https://youtu.be/nzapxMlX74A&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Радиальная тень</td>
              <td>Radial Shadow</td>
              <td>
                <a
                  href="https://youtu.be/Bx-T-8Vjm2k&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для имитации чего-либо (Simulation)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Танец карт</td>
              <td>Card Dance</td>
              <td>
                <a
                  href="https://youtu.be/XC-Pd_wNbbM&t=695"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Каустические кривые</td>
              <td>Caustics</td>
              <td>
                <a
                  href="https://youtu.be/20keMi3bDqc&t=440"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Ball Action</td>
              <td>
                <a
                  href="https://youtu.be/uV83WKGQw8Q&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Bubbles</td>
              <td>
                <a
                  href="https://youtu.be/B-6XRRtxdSE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Drizzle</td>
              <td>
                <a
                  href="https://youtu.be/jJ5MJoL2X_I&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Hair</td>
              <td>
                <a
                  href="https://youtu.be/Jw6P4lnFT6I&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Mr. Mercury</td>
              <td>
                <a
                  href="https://youtu.be/QwzDqLmIKSI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Particle Systems II</td>
              <td>
                <a
                  href="https://youtu.be/7Fp9207Ds5I&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Particle World</td>
              <td>
                <a
                  href="https://youtu.be/7Fp9207Ds5I&t=2503"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Pixel Polly</td>
              <td>
                <a
                  href="https://youtu.be/Wtsws9nN4jM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Rainfall</td>
              <td>
                <a
                  href="https://youtu.be/c2TT33Vn0OU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Scatterize</td>
              <td>
                <a
                  href="https://youtu.be/2XrcDJI8dhc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Snowfall</td>
              <td>
                <a
                  href="https://youtu.be/c2TT33Vn0OU&t=483"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Star Burst</td>
              <td>
                <a
                  href="https://youtu.be/G9qbU1ifWWc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Пена</td>
              <td>Foam</td>
              <td>
                <a
                  href="https://youtu.be/74iePAKBQrg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Площадка для частиц</td>
              <td>Particle Playground</td>
              <td>
                <a
                  href="https://youtu.be/qzzEy76cCXo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Разброс</td>
              <td>Shatter</td>
              <td>
                <a
                  href="https://youtu.be/UJI7cbilZYA&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Мир волн</td>
              <td>Wave World</td>
              <td>
                <a
                  href="https://youtu.be/20keMi3bDqc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для стилизации (Stylize)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Мазки кисти</td>
              <td>Brush Strokes</td>
              <td>
                <a
                  href="https://youtu.be/2sQ0R6zQeYY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Мультипликация</td>
              <td>Cartoon</td>
              <td>
                <a
                  href="https://youtu.be/QS9QFYnvRi4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Block Load</td>
              <td>
                <a
                  href="https://youtu.be/YQRdM_hus4k&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Burn Film</td>
              <td>
                <a
                  href="https://youtu.be/HNu77TCadtE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Glass</td>
              <td>
                <a
                  href="https://youtu.be/WPo-dkPiynI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC HexTile</td>
              <td>
                <a
                  href="https://youtu.be/oqwCF_U3fBo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Kaleida</td>
              <td>
                <a
                  href="https://youtu.be/TwiP0uHa4WI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Mr. Shoothie</td>
              <td>
                <a
                  href="https://youtu.be/8hk95dMWk4k&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Plastic</td>
              <td>
                <a
                  href="https://youtu.be/WPo-dkPiynI&t=335"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC RepeTile</td>
              <td>
                <a
                  href="https://youtu.be/UptUlJdoS0M&t=161"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Threshold</td>
              <td>
                <a
                  href="https://youtu.be/OGEENhaGDL8&t=79"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Threshold RGB</td>
              <td>
                <a
                  href="https://youtu.be/OGEENhaGDL8&t=186"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Vignette</td>
              <td>
                <a
                  href="https://youtu.be/eBtk3tN_91o&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Цветовое тиснение</td>
              <td>Color Emboss</td>
              <td>
                <a
                  href="https://youtu.be/X-SpnyETdEA&t=143"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Тиснение</td>
              <td>Emboss</td>
              <td>
                <a
                  href="https://youtu.be/X-SpnyETdEA&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Выделение краев</td>
              <td>Find Edges</td>
              <td>
                <a
                  href="https://youtu.be/gEWfYGCejsU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Свечение</td>
              <td>Glow</td>
              <td>
                <a
                  href="https://youtu.be/t40ZTEBr_M0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Мозаика</td>
              <td>Mosaic</td>
              <td>
                <a
                  href="https://youtu.be/luVfpqT_rYg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Мозаика движения</td>
              <td>Motion Tile</td>
              <td>
                <a
                  href="https://youtu.be/UptUlJdoS0M&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Постеризация</td>
              <td>Posterize</td>
              <td>
                <a
                  href="https://youtu.be/vNWMxYpv6js&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Шероховатые края</td>
              <td>Roughen Edges</td>
              <td>
                <a
                  href="https://youtu.be/DbMCkyMg0sw&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Рассеивание</td>
              <td>Scatter</td>
              <td>
                <a
                  href="https://youtu.be/oGw-o6eMbgI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Проблесковый цвет</td>
              <td>Strobe Light</td>
              <td>
                <a
                  href="https://youtu.be/N1to_8jgnjQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Текстуризация</td>
              <td>Texturize</td>
              <td>
                <a
                  href="https://youtu.be/u9KJs9q-6es&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Пороговое значение</td>
              <td>Threshold</td>
              <td>
                <a
                  href="https://youtu.be/OGEENhaGDL8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для генерации текста (Text)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Нумерация</td>
              <td>Numbers</td>
              <td>
                <a
                  href="https://youtu.be/EMHcq7YOhfQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Тайм-код</td>
              <td>Timecode</td>
              <td>
                <a
                  href="https://youtu.be/EMHcq7YOhfQ&t=360"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для манипуляции временем (Time)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>CC Force Motion Blur</td>
              <td>
                <a
                  href="https://www.youtube.com/watch?v=ANG3iMQVHVo"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Wide Time</td>
              <td>
                <a
                  href="https://youtu.be/IQxvw91sOB4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Эхо</td>
              <td>Echo</td>
              <td>
                <a
                  href="https://youtu.be/N2qxF8V57FE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Размытие пикселей в движении</td>
              <td>Pixel Motion Blur</td>
              <td>
                <a
                  href="https://youtu.be/DZAakVlJoGU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Время постеризации</td>
              <td>Posterize Time</td>
              <td>
                <a
                  href="https://youtu.be/Iu1E9M1EDHY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Разница во времени</td>
              <td>Time Difference</td>
              <td>
                <a
                  href="https://youtu.be/AzKAVI6KT18&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Смещение по времени</td>
              <td>Time Displacement</td>
              <td>
                <a
                  href="https://youtu.be/vjXP8Hyj4XE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Искажение времени</td>
              <td>Timewarp</td>
              <td>
                <a
                  href="https://youtu.be/JsyuG98HZMo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для создания переходов (Transition)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Растворение блоков</td>
              <td>Block Dissolve</td>
              <td>
                <a
                  href="https://youtu.be/6O2I2oLgw4E&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Вытеснение карт</td>
              <td>Card Wipe</td>
              <td>
                <a
                  href="https://youtu.be/XC-Pd_wNbbM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Glass Wipe</td>
              <td>
                <a
                  href="https://youtu.be/QcLSKGk7G4s&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Grid Wipe</td>
              <td>
                <a
                  href="https://youtu.be/BC30h50BHqo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Image Wipe</td>
              <td>
                <a
                  href="https://youtu.be/QcLSKGk7G4s&t=195"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Jaws</td>
              <td>
                <a
                  href="https://youtu.be/BC30h50BHqo&t=119"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Light Wipe</td>
              <td>
                <a
                  href="https://youtu.be/YEiAz-BddNs&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Line Sweep</td>
              <td>
                <a
                  href="https://youtu.be/BC30h50BHqo&t=97"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Radial ScaleWipe</td>
              <td>
                <a
                  href="https://youtu.be/u0Eru4q2qek&t=132"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Scale Wipe</td>
              <td>
                <a
                  href="https://youtu.be/u0Eru4q2qek&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Twister</td>
              <td>
                <a
                  href="https://youtu.be/F0FRc-oORS0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC WarpoMatic</td>
              <td>
                <a
                  href="https://youtu.be/QcLSKGk7G4s&t=292"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Градиентное вытеснение</td>
              <td>Gradient Wipe</td>
              <td>
                <a
                  href="https://youtu.be/acYRLZGEYmc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Вытеснение диафрагмы</td>
              <td>Iris Wipe</td>
              <td>
                <a
                  href="https://youtu.be/VoyS7UsjZTY&t=68"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Линейное стирание</td>
              <td>Linear Wipe</td>
              <td>
                <a
                  href="https://youtu.be/VoyS7UsjZTY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Радиальное вытеснение</td>
              <td>Radial Wipe</td>
              <td>
                <a
                  href="https://youtu.be/VoyS7UsjZTY&t=36"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Жалюзи</td>
              <td>Venetian Blinds</td>
              <td>
                <a
                  href="https://youtu.be/1Bcq4j69RBg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Технические эффекты (Utility)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th style={{width: "15%"}}>
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на YouTube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Применить цвета LUT</td>
              <td>Apply Color LUT</td>
              <td>
                <a
                  href="https://youtu.be/S1GUo46T2H8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>CC Overbrights</td>
              <td>
                <a
                  href="https://youtu.be/2Akn5zdDMgM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Конвертер Cineon</td>
              <td>Cineon Converter</td>
              <td>
                <a
                  href="https://youtu.be/EPxpRkz5Q1Y&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Конвертер профиля цвета</td>
              <td>Color Profile Converter</td>
              <td>
                <a
                  href="https://youtu.be/xJ8JFqNW07Q&t=8"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Нарастить границы</td>
              <td>Grow Bounds</td>
              <td>
                <a
                  href="https://youtu.be/-JzYpi6Uyb4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Расширитель HDR</td>
              <td>HDR Compander</td>
              <td>
                <a
                  href="https://youtu.be/VvH1JOdd_Cw&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>Сжатие подсветки HDR</td>
              <td>HDR Highlight Compression</td>
              <td>
                <a
                  href="https://youtu.be/npeUQbpaZbA&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </DetailsSummary>
      <DetailsSummary
        tag="русский афтер, английский"
        title="Где найти таблицу перевода стандартных пресетов?"
      >
        <AdditionWarning>
          Перевод и наличие пресетов, а также способ их работы может отличаться в
          зависимости от версии <mark className="app">After Effects</mark>. Также
          рекомендуем переустановить программу сразу на английском языке, чтобы не
          возвращаться к этой таблице снова и снова.
        </AdditionWarning>
        <p>
          Порой иногда пользователю требуется перевод и стандартных пресетов, так как их
          названия тоже зависят от локализации программы при первой установке.
        </p>
        <Divider>Adobe Express - In</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Возникновение возгоранием</td>
              <td>Flicker In</td>
            </tr>
            <tr>
              <td>Возникновение вскакиванием</td>
              <td>Pop In</td>
            </tr>
            <tr>
              <td>Возникновение вырастанием</td>
              <td>Grow In</td>
            </tr>
            <tr>
              <td>Возникновение кручением</td>
              <td>Spin In</td>
            </tr>
            <tr>
              <td>Возникновение прыжками</td>
              <td>Tumble In</td>
            </tr>
            <tr>
              <td>Возникновение сдвигом</td>
              <td>Slide In</td>
            </tr>
            <tr>
              <td>Возникновение тряской</td>
              <td>Bungee In</td>
            </tr>
            <tr>
              <td>Возникновение уменьшением</td>
              <td>Shrink In</td>
            </tr>
            <tr>
              <td>Постепенное возникновение</td>
              <td>Fade In</td>
            </tr>
          </tbody>
        </table>{" "}
        <Divider>Adobe Express - Looping</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Цикл вращения</td>
              <td>Spin Loop</td>
            </tr>
            <tr>
              <td>Цикл дрожания</td>
              <td>Jitter Loop</td>
            </tr>
            <tr>
              <td>Цикл дыхания</td>
              <td>Breathe Loop</td>
            </tr>
            <tr>
              <td>Цикл извивания</td>
              <td>Wiggle Loop</td>
            </tr>
            <tr>
              <td>Цикл качания</td>
              <td>Bob Loop</td>
            </tr>
            <tr>
              <td>Цикл мерцания</td>
              <td>Flicker Loop</td>
            </tr>
            <tr>
              <td>Цикл мигания</td>
              <td>Blinking Loop</td>
            </tr>
            <tr>
              <td>Цикл подпрыгивания</td>
              <td>Yoyo Loop</td>
            </tr>
            <tr>
              <td>Цикл пульса</td>
              <td>Pulse Loop</td>
            </tr>
          </tbody>
        </table>
        <Divider>Adobe Express - Out</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Исчезновение вырастанием</td>
              <td>Grow Out</td>
            </tr>
            <tr>
              <td>Исчезновение выскакиванием</td>
              <td>Pop Out</td>
            </tr>
            <tr>
              <td>Исчезновение кручением</td>
              <td>Spin Out</td>
            </tr>
            <tr>
              <td>Исчезновение прыжками</td>
              <td>Tumble Out</td>
            </tr>
            <tr>
              <td>Исчезновение сдвигом</td>
              <td>Slide Out</td>
            </tr>
            <tr>
              <td>Исчезновение тряской</td>
              <td>Bungee Out</td>
            </tr>
            <tr>
              <td>Исчезновение угасанием</td>
              <td>Flicker Out</td>
            </tr>
            <tr>
              <td>Исчезновение уменьшением</td>
              <td>Shrink Out</td>
            </tr>
            <tr>
              <td>Постепенное исчезновение</td>
              <td>Fade Out</td>
            </tr>
          </tbody>
        </table>
        <Divider>Backgrounds</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Аниме - быстрые линии</td>
              <td>Anime Speed Lines</td>
            </tr>
            <tr>
              <td>Аниме - радиальные линии</td>
              <td>Anime Radial</td>
            </tr>
            <tr>
              <td>Видение</td>
              <td>Apparition</td>
            </tr>
            <tr>
              <td>Глубокие ткани</td>
              <td>Deep Tissue</td>
            </tr>
            <tr>
              <td>Гонки прямоугольников</td>
              <td>Racing Rectangles</td>
            </tr>
            <tr>
              <td>Жуть</td>
              <td>Creepy</td>
            </tr>
            <tr>
              <td>Занавес</td>
              <td>Curtain</td>
            </tr>
            <tr>
              <td>Green Crystals</td>
              <td>Зеленые кристалы</td>
            </tr>
            <tr>
              <td>Зигзаг молнии</td>
              <td>Lightning Bend</td>
            </tr>
            <tr>
              <td>Инфекция</td>
              <td>Infection</td>
            </tr>
            <tr>
              <td>Кирпичи</td>
              <td>Blocks</td>
            </tr>
            <tr>
              <td>Космическая мощь</td>
              <td>Cosmic Power</td>
            </tr>
            <tr>
              <td>Красная скорость</td>
              <td>Red Speed</td>
            </tr>
            <tr>
              <td>Магма</td>
              <td>Magma</td>
            </tr>
            <tr>
              <td>Несварение</td>
              <td>Indigestion</td>
            </tr>
            <tr>
              <td>Огни в тумане</td>
              <td>Fog Lights</td>
            </tr>
            <tr>
              <td>Поднимающийся дым</td>
              <td>Smoke Rising</td>
            </tr>
            <tr>
              <td>Река</td>
              <td>River</td>
            </tr>
            <tr>
              <td>Розовый свет</td>
              <td>Rose Light</td>
            </tr>
            <tr>
              <td>Стремительные изгибы</td>
              <td>Sweeping Curves</td>
            </tr>
            <tr>
              <td>Сфера</td>
              <td>Orb</td>
            </tr>
            <tr>
              <td>Угольки</td>
              <td>Cinders</td>
            </tr>
            <tr>
              <td>Шелк</td>
              <td>Silk</td>
            </tr>
            <tr>
              <td>Электрическая цепь</td>
              <td>Circuit</td>
            </tr>
          </tbody>
        </table>
        <Divider>Behaviors</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Автопрокрутка - по вертикали</td>
              <td>Autoscroll - vertical</td>
            </tr>
            <tr>
              <td>Автопрокрутка - по горизонтали</td>
              <td>Autoscroll - horizontal</td>
            </tr>
            <tr>
              <td>Генерация значения волны</td>
              <td>Wave Value Generator</td>
            </tr>
            <tr>
              <td>Затухание поверх нижнего слоя</td>
              <td>Fade Out Over Layer Below</td>
            </tr>
            <tr>
              <td>Колебания</td>
              <td>Wigglerama</td>
            </tr>
            <tr>
              <td>Масштаб по осям XYZ</td>
              <td>Separate XYZ Scale</td>
            </tr>
            <tr>
              <td>Масштабирование одиночного отражения сигнала - по маркерам слоя</td>
              <td>Scale Bounce - layer markers</td>
            </tr>
            <tr>
              <td>Масштабирование одиночного отражения сигнала - произвольно</td>
              <td>Scale Bounce - random</td>
            </tr>
            <tr>
              <td>Мигание непрозрачности - по маркерам слоя</td>
              <td>Opacity Flash - layer markers</td>
            </tr>
            <tr>
              <td>Мигание непрозрачности - произвольно</td>
              <td>Opacity Flash - random</td>
            </tr>
            <tr>
              <td>Моргание непрозрачности</td>
              <td>Blinking Opacity</td>
            </tr>
            <tr>
              <td>Нарастание + затухание - кадры</td>
              <td>Fade In+Out - frames</td>
            </tr>
            <tr>
              <td>Нарастание + затухание - мс</td>
              <td>Fade In+Out - msec</td>
            </tr>
            <tr>
              <td>Нарастание поверх нижнего слоя</td>
              <td>Fade In Over Layer Below</td>
            </tr>
            <tr>
              <td>Обрезать контуры - на слой в кадр</td>
              <td>Trim Paths - at layer in</td>
            </tr>
            <tr>
              <td>Обрезать контуры - на слой из кадра</td>
              <td>Trim Paths - at layer out</td>
            </tr>
            <tr>
              <td>Поворот со временем</td>
              <td>Rotate Over Time</td>
            </tr>
            <tr>
              <td>Покачивания - желе</td>
              <td>Wiggle - gelatin</td>
            </tr>
            <tr>
              <td>Покачивания - наклон</td>
              <td>Wiggle - shear</td>
            </tr>
            <tr>
              <td>Покачивания - поворот</td>
              <td>Wiggle - rotation</td>
            </tr>
            <tr>
              <td>Покачивания - позиция</td>
              <td>Wiggle - position</td>
            </tr>
            <tr>
              <td>Покачивания - шкала</td>
              <td>Wiggle - scale</td>
            </tr>
            <tr>
              <td>Принудительное использование опорной точки</td>
              <td>Lock Anchor Point</td>
            </tr>
            <tr>
              <td>Случайное вкл.-выкл.</td>
              <td>Random On-Off</td>
            </tr>
            <tr>
              <td>Случайные цвета</td>
              <td>Random Colors</td>
            </tr>
            <tr>
              <td>Случайные целые числа</td>
              <td>Random Whole Numbers</td>
            </tr>
            <tr>
              <td>Смещение со временем</td>
              <td>Drift Over Time</td>
            </tr>
          </tbody>
        </table>
        <Divider>Image - Creative</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Виньетированная подсветка</td>
              <td>Vignette Lighting</td>
            </tr>
            <tr>
              <td>Декоративная подсветка - аморфная</td>
              <td>Mood Lighting - amorphous</td>
            </tr>
            <tr>
              <td>Декоративная подсветка - полосы</td>
              <td>Mood Lighting - streaks</td>
            </tr>
            <tr>
              <td>Декоративная подсветка - цифровая</td>
              <td>Mood Lighting - digital</td>
            </tr>
            <tr>
              <td>Зашумленное виньетирование</td>
              <td>Noisy Vignette</td>
            </tr>
            <tr>
              <td>Контрастность - насыщенность</td>
              <td>Contrast - saturation</td>
            </tr>
            <tr>
              <td>Контрастность - яркость</td>
              <td>Contrast - luminance</td>
            </tr>
            <tr>
              <td>Наложенные тени</td>
              <td>Stacked Drop Shadows</td>
            </tr>
            <tr>
              <td>Оттенки серого 1</td>
              <td>Grayscale 1</td>
            </tr>
            <tr>
              <td>Оттенки серого 2</td>
              <td>Grayscale 2</td>
            </tr>
            <tr>
              <td>Оттенки серого 3</td>
              <td>Grayscale 3</td>
            </tr>
            <tr>
              <td>Оттенки серого 4</td>
              <td>Grayscale 4</td>
            </tr>
            <tr>
              <td>Размер - свечение+тень</td>
              <td>Dimension - glow+shadow</td>
            </tr>
            <tr>
              <td>Размер - фаска+тень</td>
              <td>Dimension - bevel+shadow</td>
            </tr>
            <tr>
              <td>Тонирование - голубое небо</td>
              <td>Colorize - sky blue</td>
            </tr>
            <tr>
              <td>Тонирование - градиент заката</td>
              <td>Colorize - sunset gradient</td>
            </tr>
            <tr>
              <td>Тонирование - инфракрасный</td>
              <td>Colorize - infrared</td>
            </tr>
            <tr>
              <td>Тонирование - королевский пурпур</td>
              <td>Colorize - royal purple</td>
            </tr>
            <tr>
              <td>Тонирование - красный отпечаток руки</td>
              <td>Colorize - red hand tint</td>
            </tr>
            <tr>
              <td>Тонирование - лунные тени</td>
              <td>Colorize - moonshadows</td>
            </tr>
            <tr>
              <td>Тонирование - оранжевое небо</td>
              <td>Colorize - sky orange</td>
            </tr>
            <tr>
              <td>Тонирование - погружение в золото</td>
              <td>Colorize - gold dip</td>
            </tr>
            <tr>
              <td>Тонирование - сепия</td>
              <td>Colorize - sepia</td>
            </tr>
            <tr>
              <td>Тонирование - синяя акварель</td>
              <td>Colorize - blue wash</td>
            </tr>
            <tr>
              <td>Цветение - кристаллизация 1</td>
              <td>Bloom - crystallize 1</td>
            </tr>
            <tr>
              <td>Цветение - кристаллизация 2</td>
              <td>Bloom - crystallize 2</td>
            </tr>
            <tr>
              <td>Цветение - светлые+темные</td>
              <td>Bloom - brights+darks</td>
            </tr>
            <tr>
              <td>Цветение - яркие краски</td>
              <td>Bloom - brights</td>
            </tr>
            <tr>
              <td>Эффект мерцания VHS</td>
              <td>VHS Flicker Effect</td>
            </tr>
            <tr>
              <td>Эффект отрисовки вручную</td>
              <td>Hand Drawn Effect</td>
            </tr>
          </tbody>
        </table>
        <Divider>Image - Special Effects</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ночное видение</td>
              <td>Night Vision</td>
            </tr>
            <tr>
              <td>Ошибки регистрации движения</td>
              <td>Motion Registration Errors</td>
            </tr>
            <tr>
              <td>Плохой телевизор 1 - деформация</td>
              <td>Bad TV 1 - warp</td>
            </tr>
            <tr>
              <td>Плохой телевизор 2 - старый</td>
              <td>Bad TV 2 - old</td>
            </tr>
            <tr>
              <td>Плохой телевизор 3 - слабый</td>
              <td>Bad TV 3 - weak</td>
            </tr>
            <tr>
              <td>Треснутый кафель</td>
              <td>Cracked Tiles</td>
            </tr>
            <tr>
              <td>Утечки света - по маркерам слоя</td>
              <td>Light Leaks - layer markers</td>
            </tr>
            <tr>
              <td>Утечки света - произвольно</td>
              <td>Light Leaks - random</td>
            </tr>
          </tbody>
        </table>
        <Divider>Image - Utilities</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Keylight + Ключевая очистка + Расширенное подавление пропуска цвета</td>
              <td>Keylight + Key Cleaner + Advanced Spill Suppressor</td>
            </tr>
            <tr>
              <td>Альфа-каналы из освещенности (Unmult)</td>
              <td>Alpha From Lightness (Unmult)</td>
            </tr>
            <tr>
              <td>Альфа-увеличение и выделение</td>
              <td>Magnify & Preserve Alpha</td>
            </tr>
            <tr>
              <td>Динамический диапазон сжатия-расширения</td>
              <td>Compress-Expand Dynamic Range</td>
            </tr>
            <tr>
              <td>Инверсия альфа-канала</td>
              <td>Invert Alpha</td>
            </tr>
            <tr>
              <td>Обрезка краев</td>
              <td>Crop Edges</td>
            </tr>
            <tr>
              <td>Отражение + переворот</td>
              <td>Flip + Flop</td>
            </tr>
            <tr>
              <td>Отражение</td>
              <td>Flip</td>
            </tr>
            <tr>
              <td>Переворот</td>
              <td>Flop</td>
            </tr>
            <tr>
              <td>Пример выражения образа</td>
              <td>Sample Image Expression</td>
            </tr>
            <tr>
              <td>Прозрачное наложение - размытие зеленого</td>
              <td>Keying - green blur</td>
            </tr>
            <tr>
              <td>Прозрачное наложение - размытие синего</td>
              <td>Keying - blue blur</td>
            </tr>
            <tr>
              <td>Уровни - из видео на компьютер</td>
              <td>Levels - Video to Computer</td>
            </tr>
            <tr>
              <td>Уровни - с компьютера в видео</td>
              <td>Levels - computer to video</td>
            </tr>
          </tbody>
        </table>
        <Divider>Legacy</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3D - поворот по окружности</td>
              <td>3D Rotate around Circle</td>
            </tr>
            <tr>
              <td>3D - увеличение масштаба строк</td>
              <td>3D Lines Zoom In</td>
            </tr>
            <tr>
              <td>Вертишка</td>
              <td>Pinwheel</td>
            </tr>
            <tr>
              <td>Возгорание</td>
              <td>Inflammation</td>
            </tr>
            <tr>
              <td>Вспыхивающие слова</td>
              <td>Word Flash</td>
            </tr>
            <tr>
              <td>Вставка видео - рваные края</td>
              <td>Inset Video - torn edges</td>
            </tr>
            <tr>
              <td>Вставка видео - с рамкой</td>
              <td>Inset Video - framed</td>
            </tr>
            <tr>
              <td>Входящие</td>
              <td>Incoming</td>
            </tr>
            <tr>
              <td>Вьющиеся ленты 2</td>
              <td>Twisty Ribbons 2</td>
            </tr>
            <tr>
              <td>Вьющиеся ленты</td>
              <td>Twisty Ribbons</td>
            </tr>
            <tr>
              <td>Голубые вспышки</td>
              <td>Blue Flash</td>
            </tr>
            <tr>
              <td>Замещение</td>
              <td>Outgoing - Incoming</td>
            </tr>
            <tr>
              <td>Звездная дорожка</td>
              <td>Walk Of Stars</td>
            </tr>
            <tr>
              <td>Зеленые точки</td>
              <td>Green Dots</td>
            </tr>
            <tr>
              <td>Зумер-США</td>
              <td>DialTone-US</td>
            </tr>
            <tr>
              <td>Изменчивость</td>
              <td>Fluctuate</td>
            </tr>
            <tr>
              <td>Иступление</td>
              <td>Frenzy</td>
            </tr>
            <tr>
              <td>Капли</td>
              <td>Drop Bounce</td>
            </tr>
            <tr>
              <td>Левая треть - маска ковша NTSC</td>
              <td>Left Third - scoop mask NTSC</td>
            </tr>
            <tr>
              <td>Левая треть - маска ковша PAL</td>
              <td>Left Third - scoop mask PAL</td>
            </tr>
            <tr>
              <td>Мигающие полосы</td>
              <td>Bars Blinky</td>
            </tr>
            <tr>
              <td>Многократная экспозиция с тиснением</td>
              <td>Embossed Multiple Exposure</td>
            </tr>
            <tr>
              <td>Многоножка</td>
              <td>Centipede</td>
            </tr>
            <tr>
              <td>Молния - по вертикали</td>
              <td>Lightning - Vertical</td>
            </tr>
            <tr>
              <td>Молния - по горизонтали</td>
              <td>Lightning - Horizontal</td>
            </tr>
            <tr>
              <td>Нижняя треть - маска ковша NTSC</td>
              <td>Lower Third - scoop mask NTSC</td>
            </tr>
            <tr>
              <td>Нижняя треть - маска ковша PAL</td>
              <td>Lower Third - scoop mask PAL</td>
            </tr>
            <tr>
              <td>Обрезка белого</td>
              <td>White Trim</td>
            </tr>
            <tr>
              <td>Овалы - концентрические NTSC</td>
              <td>Ovals - concentric NTSC</td>
            </tr>
            <tr>
              <td>Овалы - концентрические PAL</td>
              <td>Ovals - concentric PAL</td>
            </tr>
            <tr>
              <td>Овалы - произвольно 1 NTSC</td>
              <td>Ovals - random 1 NTSC</td>
            </tr>
            <tr>
              <td>Овалы - произвольно 1 PAL</td>
              <td>Ovals - random 1 PAL</td>
            </tr>
            <tr>
              <td>Овалы - произвольно 2 NTSC</td>
              <td>Ovals - random 2 NTSC</td>
            </tr>
            <tr>
              <td>Овалы - произвольно 2 PAL</td>
              <td>Ovals - random 2 PAL</td>
            </tr>
            <tr>
              <td>Окна - заштрихованные NTSC</td>
              <td>Boxes - stroked NTSC</td>
            </tr>
            <tr>
              <td>Окна - заштрихованные PAL</td>
              <td>Boxes - stroked PAL</td>
            </tr>
            <tr>
              <td>Окна - концентрические NTSC</td>
              <td>Boxes - concentric NTSC</td>
            </tr>
            <tr>
              <td>Окна - концентрические PAL</td>
              <td>Boxes - concentric PAL</td>
            </tr>
            <tr>
              <td>Окна - произвольные 1 NTSC</td>
              <td>Boxes - random 1 NTSC</td>
            </tr>
            <tr>
              <td>Окна - произвольные 1 PAL</td>
              <td>Boxes - random 1 PAL</td>
            </tr>
            <tr>
              <td>Окна - произвольные 2 NTSC</td>
              <td>Boxes - random 2 NTSC</td>
            </tr>
            <tr>
              <td>Окна - произвольные 2 PAL</td>
              <td>Boxes - random 2 PAL</td>
            </tr>
            <tr>
              <td>Окна - произвольные 3 NTSC</td>
              <td>Boxes - random 3 NTSC</td>
            </tr>
            <tr>
              <td>Окна - произвольные 3 PAL</td>
              <td>Boxes - random 3 PAL</td>
            </tr>
            <tr>
              <td>Организм</td>
              <td>Organism</td>
            </tr>
            <tr>
              <td>Отдельная позиция XYZ</td>
              <td>Separate XYZ Position</td>
            </tr>
            <tr>
              <td>Отражение по нескольким линиям</td>
              <td>Multi-Line Flip</td>
            </tr>
            <tr>
              <td>Оттягивание нижней трети - затемнение</td>
              <td>Lower Third Holldout - darken</td>
            </tr>
            <tr>
              <td>Оттягивание нижней трети - насыщение</td>
              <td>Lower Third Holddout - saturate</td>
            </tr>
            <tr>
              <td>Передний план - задний план</td>
              <td>Front - Back</td>
            </tr>
            <tr>
              <td>Переход к вставке</td>
              <td>Fly to Inset</td>
            </tr>
            <tr>
              <td>Петарды</td>
              <td>Spin Flash</td>
            </tr>
            <tr>
              <td>Появление</td>
              <td>Emerge</td>
            </tr>
            <tr>
              <td>Пульсация</td>
              <td>Pulse Exposure</td>
            </tr>
            <tr>
              <td>С обеих сторон</td>
              <td>Frontside - Backside</td>
            </tr>
            <tr>
              <td>Сжатие - расширение</td>
              <td>Contract - Expand</td>
            </tr>
            <tr>
              <td>Силуэты</td>
              <td>Silhouettes</td>
            </tr>
            <tr>
              <td>Скрепка</td>
              <td>Paper Clip</td>
            </tr>
            <tr>
              <td>Спирограф</td>
              <td>Spirograph</td>
            </tr>
            <tr>
              <td>Тени</td>
              <td>Shadows</td>
            </tr>
            <tr>
              <td>Уменьшение блочности DV</td>
              <td>Reduce DV blockiness</td>
            </tr>
            <tr>
              <td>Цифровой</td>
              <td>Digital</td>
            </tr>
            <tr>
              <td>Элегия</td>
              <td>Lyrical</td>
            </tr>
            <tr>
              <td>Эфирный</td>
              <td>Ethereal</td>
            </tr>
            <tr>
              <td>Эхо-локация</td>
              <td>Sonar Ping</td>
            </tr>
          </tbody>
        </table>
        <Divider>Shapes - Backgrounds</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Граница композиции</td>
              <td>Composition Border</td>
            </tr>
            <tr>
              <td>Калейдоскоп</td>
              <td>Kaleidoscopic</td>
            </tr>
            <tr>
              <td>Нейронная сеть - круговая</td>
              <td>Nerve Net - Circular</td>
            </tr>
            <tr>
              <td>Нейронная сеть - пента</td>
              <td>Nerve Net - Penta</td>
            </tr>
            <tr>
              <td>Скопление рамок</td>
              <td>Box Swarm</td>
            </tr>
            <tr>
              <td>Солнечные лучи</td>
              <td>Sunburst</td>
            </tr>
          </tbody>
        </table>
        <Divider>Shapes - Elements</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Аналоговые часы</td>
              <td>Analogue Clock</td>
            </tr>
            <tr>
              <td>Бегущая строка - рамки</td>
              <td>Chasing Line - Boxes</td>
            </tr>
            <tr>
              <td>Булавка для карты</td>
              <td>Popping Map Pin</td>
            </tr>
            <tr>
              <td>Всплеск</td>
              <td>Burst Pop</td>
            </tr>
            <tr>
              <td>Гистограмма</td>
              <td>Bar Graph</td>
            </tr>
            <tr>
              <td>Двумерное текстовое окно (форма)</td>
              <td>2D Text Box (Shape)</td>
            </tr>
            <tr>
              <td>Значки карты колебаний</td>
              <td>Bouncing Map Icons</td>
            </tr>
            <tr>
              <td>Изменяемый курсор</td>
              <td>Switchable Cursor Element</td>
            </tr>
            <tr>
              <td>Инструменты отслеживания области</td>
              <td>Marquee Chasers</td>
            </tr>
            <tr>
              <td>Каркасный червь</td>
              <td>Wireframe Worm</td>
            </tr>
            <tr>
              <td>Кольцевая диаграмма</td>
              <td>Ring Chart</td>
            </tr>
            <tr>
              <td>Линейная диаграмма</td>
              <td>Line Graph</td>
            </tr>
            <tr>
              <td>Надпись на стрелке</td>
              <td>Write On Arrow</td>
            </tr>
            <tr>
              <td>Наклейка с вырубкой</td>
              <td>Crinkle Cut Sticker</td>
            </tr>
            <tr>
              <td>Ограничительная рамка</td>
              <td>Bounding Box</td>
            </tr>
            <tr>
              <td>Повторяющиеся линии</td>
              <td>Repeating Lines</td>
            </tr>
            <tr>
              <td>Почтовая марка</td>
              <td>Postage Stamp</td>
            </tr>
            <tr>
              <td>Простой маркер для карты</td>
              <td>Simple Map Marker</td>
            </tr>
            <tr>
              <td>Радиальная диаграмма</td>
              <td>Radial Graph</td>
            </tr>
            <tr>
              <td>Рамка с зубчиками</td>
              <td>Scalloped Frame</td>
            </tr>
            <tr>
              <td>Решетка из крестов</td>
              <td>Grid of Crosses</td>
            </tr>
            <tr>
              <td>Спираль ДНК</td>
              <td>DNA Helix</td>
            </tr>
          </tbody>
        </table>
        <Divider>Shapes - Sprites - Animated</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Винтажная звездочка</td>
              <td>Vintage Star</td>
            </tr>
            <tr>
              <td>Круговой - ячеистое разделение</td>
              <td>Circular - cellular divvision</td>
            </tr>
            <tr>
              <td>Лицо пришельца - с анимацией</td>
              <td>Alien Face - animated</td>
            </tr>
            <tr>
              <td>Мандала - с анимацией</td>
              <td>Mandala - animated</td>
            </tr>
            <tr>
              <td>Область стадии</td>
              <td>Phase Scope</td>
            </tr>
            <tr>
              <td>Сверкающая_звезда</td>
              <td>TwinkleStar</td>
            </tr>
            <tr>
              <td>Спирограф_мандала</td>
              <td>SpiroMandala</td>
            </tr>
            <tr>
              <td>Танцевальный узел</td>
              <td>Dancing Knot</td>
            </tr>
          </tbody>
        </table>
        <Divider>Shapes - Sprites - Still</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Благодатный огонь</td>
              <td>Holy Light</td>
            </tr>
            <tr>
              <td>Власть цветам</td>
              <td>Flower Power</td>
            </tr>
            <tr>
              <td>Индейское солнце</td>
              <td>Indian Sun</td>
            </tr>
            <tr>
              <td>Иноземные письмена</td>
              <td>Alien Calligraphy</td>
            </tr>
            <tr>
              <td>Круговой - полукруг</td>
              <td>Circular - half round</td>
            </tr>
            <tr>
              <td>Кругovoй - тройной пунктир</td>
              <td>Circular - tri dash</td>
            </tr>
            <tr>
              <td>Лицо пришельца</td>
              <td>Alien Face</td>
            </tr>
            <tr>
              <td>Лопасти вентилятора</td>
              <td>Fan Blades</td>
            </tr>
            <tr>
              <td>Лучистая звезда-4</td>
              <td>RayStar-4</td>
            </tr>
            <tr>
              <td>Лучистая звезда-8</td>
              <td>RayStar-8</td>
            </tr>
            <tr>
              <td>Мандала</td>
              <td>Mandala</td>
            </tr>
            <tr>
              <td>Мишень</td>
              <td>Bullseye</td>
            </tr>
            <tr>
              <td>Перекрестие - квадратное</td>
              <td>Crosshair - square</td>
            </tr>
            <tr>
              <td>Перекрестие - квадратные скобки</td>
              <td>Crosshair - brackets</td>
            </tr>
            <tr>
              <td>Перекрестие - круглое</td>
              <td>Crosshair - round</td>
            </tr>
            <tr>
              <td>Рамка - пунктирные линии</td>
              <td>Box - dashed lines</td>
            </tr>
            <tr>
              <td>Скругленная скобка - двойная</td>
              <td>Rounded Bracket - double</td>
            </tr>
            <tr>
              <td>Скругленная скобка - с фаской</td>
              <td>Rounded Bracket - bevelled</td>
            </tr>
            <tr>
              <td>Тризуб</td>
              <td>Tri Cog</td>
            </tr>
            <tr>
              <td>Шестеренка 1</td>
              <td>Gear 1</td>
            </tr>
            <tr>
              <td>Шестеренка 2</td>
              <td>Gear 2</td>
            </tr>
            <tr>
              <td>Эригерон</td>
              <td>Seaside Daisy</td>
            </tr>
          </tbody>
        </table>
        <Divider>Sound Effects</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Бластер</td>
              <td>Blaster</td>
            </tr>
            <tr>
              <td>Занят</td>
              <td>Busy</td>
            </tr>
            <tr>
              <td>Звонок телефона-США</td>
              <td>Phone-US</td>
            </tr>
            <tr>
              <td>Позвонить в Adobe</td>
              <td>CallAdobe</td>
            </tr>
            <tr>
              <td>Телефонная компания</td>
              <td>PhoneCompany</td>
            </tr>
            <tr>
              <td>Тональный набор</td>
              <td>DTMF</td>
            </tr>
          </tbody>
        </table>
        <Divider>Synthetics</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Голографическая пленка</td>
              <td>Holographic Foil</td>
            </tr>
            <tr>
              <td>Дым - сносимый ветром</td>
              <td>Smoke - Drifting</td>
            </tr>
            <tr>
              <td>Звездная спираль</td>
              <td>Starburst Spin</td>
            </tr>
            <tr>
              <td>Золотая атмосфера</td>
              <td>Gold Ambiance</td>
            </tr>
            <tr>
              <td>Мозаика</td>
              <td>Mosaic</td>
            </tr>
            <tr>
              <td>Мозаичная пленка</td>
              <td>Chip Foil</td>
            </tr>
            <tr>
              <td>Оборотная сторона компакт-диска</td>
              <td>CD Back</td>
            </tr>
            <tr>
              <td>Оранжевые прожилки</td>
              <td>Orange Streaks</td>
            </tr>
            <tr>
              <td>Синие полосы</td>
              <td>Blue Bars</td>
            </tr>
            <tr>
              <td>Топографические линии</td>
              <td>Topographic Lines</td>
            </tr>
            <tr>
              <td>Ячейки</td>
              <td>Cells</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - 3D Text</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3D база, вращение вокруг оси X, каскад (возн.)</td>
              <td>3D Basic Rotate X Cascade In</td>
            </tr>
            <tr>
              <td>3D база, вращение вокруг оси Y, каскад (возн.)</td>
              <td>3D Basic Rotate Y Cascade In</td>
            </tr>
            <tr>
              <td>3D база, позиция по оси Z, каскад (возн.)</td>
              <td>3D Basic Position Z Cascade In</td>
            </tr>
            <tr>
              <td>3D база, позиция по оси Z, печать (возн.)</td>
              <td>3D Basic Position Z Type In</td>
            </tr>
            <tr>
              <td>3D волна на дорожке (возн.)</td>
              <td>3D Swing In On Path</td>
            </tr>
            <tr>
              <td>3D дождь по словам (возн.)</td>
              <td>3D Rain In By Word</td>
            </tr>
            <tr>
              <td>3D опускание по спирали и развертывание</td>
              <td>3D Spiral Down & Unfold</td>
            </tr>
            <tr>
              <td>3D падение, масштаб и наклон (возн.)</td>
              <td>3D Fall Back Scale & Skew In</td>
            </tr>
            <tr>
              <td>3D падение, перемешивание и размытие (возн.)</td>
              <td>3D Fall Back Scramble & Blur In</td>
            </tr>
            <tr>
              <td>3D полет и развертывание (возн.)</td>
              <td>3D Fly In & Unfold</td>
            </tr>
            <tr>
              <td>3D полет из-за камеры (возн.)</td>
              <td>3D Fly In From Behind Camera</td>
            </tr>
            <tr>
              <td>3D полет, случайный порядок, вращение вокруг оси Y (возн.)</td>
              <td>3D Fly In Random & Rotate Y</td>
            </tr>
            <tr>
              <td>3D разворот и цветные символы</td>
              <td>3D Twist & color characters</td>
            </tr>
            <tr>
              <td>3D случайные символы, кувыркание (возн.)</td>
              <td>3D Random Spike Tumble In</td>
            </tr>
            <tr>
              <td>3D случайные слова, кувыркание (возн.)</td>
              <td>3D Random Tumble In By Word</td>
            </tr>
            <tr>
              <td>3D установка на позиции (возн.)</td>
              <td>3D Resolve Position In</td>
            </tr>
            <tr>
              <td>3D - колебание внутрь - в случайном порядке</td>
              <td>3D Flutter In Random Order</td>
            </tr>
            <tr>
              <td>3D - колебание внутрь - слева</td>
              <td>3D Flutter In From Left</td>
            </tr>
            <tr>
              <td>3D - колебание наружу - справа</td>
              <td>3D Flutter Out From Right</td>
            </tr>
            <tr>
              <td>3D - колебание - по центру</td>
              <td>3D Bouncing In Centered</td>
            </tr>
            <tr>
              <td>3D - отразить вверх - отражение</td>
              <td>3D Flip Up Reflection</td>
            </tr>
            <tr>
              <td>3D - отразить внутрь - поворот по оси X</td>
              <td>3D Flip In Rotate X</td>
            </tr>
            <tr>
              <td>3D - отразить наружу - поворот по оси X</td>
              <td>3D Flip Out Rotate X</td>
            </tr>
            <tr>
              <td>3D - поворот внутрь по символу X</td>
              <td>3D Rotate in by Character X</td>
            </tr>
            <tr>
              <td>3D - поворот внутрь по символу</td>
              <td>3D Rotate in by Character</td>
            </tr>
            <tr>
              <td>3D - поворот наружу по символу X</td>
              <td>3D Rotate out by Character X</td>
            </tr>
            <tr>
              <td>3D - поворот наружу по слову</td>
              <td>3D Rotate out by Word</td>
            </tr>
            <tr>
              <td>3D - скремблирование в положении по оси Z</td>
              <td>3D Scramble in Position Z</td>
            </tr>
            <tr>
              <td>3D - спиральный поворот внутри по строке</td>
              <td>3D Spiral Rotate In by Line</td>
            </tr>
            <tr>
              <td>3D - спиральный поворот наружу по строке</td>
              <td>3D Spiral Rotate Out by Line</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Animate In</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Вброс с прокруткой</td>
              <td>Fly In With A Twist</td>
            </tr>
            <tr>
              <td>Вброс снизу</td>
              <td>Fly In From Bottom</td>
            </tr>
            <tr>
              <td>Всплывающие словечки</td>
              <td>Pop Buzz Words</td>
            </tr>
            <tr>
              <td>Выезд в случайном порядке</td>
              <td>Random Shuffle In</td>
            </tr>
            <tr>
              <td>Высыпание символов</td>
              <td>Raining Characters In</td>
            </tr>
            <tr>
              <td>Вытеснение к центру</td>
              <td>Wipe In To Center</td>
            </tr>
            <tr>
              <td>Генерирующая таблица</td>
              <td>Espresso Eye Chart</td>
            </tr>
            <tr>
              <td>Декодирование в кадр по случайным символам</td>
              <td>Decode In By Random Character</td>
            </tr>
            <tr>
              <td>Закручивание пословно</td>
              <td>Spin In By Word</td>
            </tr>
            <tr>
              <td>Медленное затухание - вкл</td>
              <td>Slow Fade On</td>
            </tr>
            <tr>
              <td>Мерцание непрозрачности в кадр</td>
              <td>Opacity Flicker In</td>
            </tr>
            <tr>
              <td>Мигающий курсор телетайпа</td>
              <td>Blinking Cursor Typewriter Console</td>
            </tr>
            <tr>
              <td>Печатная машинка</td>
              <td>Typewriter</td>
            </tr>
            <tr>
              <td>Плавный выезд</td>
              <td>Smooth Move In</td>
            </tr>
            <tr>
              <td>Посимвольное вбрасывание</td>
              <td>Drop In By Character</td>
            </tr>
            <tr>
              <td>Посимвольное всплывание</td>
              <td>Fade Up Characters</td>
            </tr>
            <tr>
              <td>Посимвольный ввод с прокруткой</td>
              <td>Spin In By Character</td>
            </tr>
            <tr>
              <td>Посимвольный выезд</td>
              <td>Characters Shuffle In</td>
            </tr>
            <tr>
              <td>Последовательно посимвольно</td>
              <td>Straight In By Character</td>
            </tr>
            <tr>
              <td>Последовательно пословно</td>
              <td>Straight In By Word</td>
            </tr>
            <tr>
              <td>Последовательный многострочный ввод 2</td>
              <td>Straight In Multi-Line 2</td>
            </tr>
            <tr>
              <td>Пословное проявление</td>
              <td>Fade Up Words</td>
            </tr>
            <tr>
              <td>Пословный выезд в случайном порядке</td>
              <td>Random Word Shuffle In</td>
            </tr>
            <tr>
              <td>Построчное растяжение</td>
              <td>Stretch In Each Line</td>
            </tr>
            <tr>
              <td>Построчный ввод</td>
              <td>Straight In Multi-Line</td>
            </tr>
            <tr>
              <td>Прокрутка каждого слова</td>
              <td>Twirl On Each Word</td>
            </tr>
            <tr>
              <td>Прокрутка каждой строки</td>
              <td>Twirl On Each Line</td>
            </tr>
            <tr>
              <td>Проявление с отражением</td>
              <td>Fade Up And Flip</td>
            </tr>
            <tr>
              <td>Проявление с эффектом декодирования</td>
              <td>Decoder Fade In</td>
            </tr>
            <tr>
              <td>Проявляющиеся строки</td>
              <td>Fade Up Lines</td>
            </tr>
            <tr>
              <td>Растяжение каждого слова</td>
              <td>Stretch In Each Word</td>
            </tr>
            <tr>
              <td>Скольжение в кадр по границе композиции</td>
              <td>Slide In From Comp Edge</td>
            </tr>
            <tr>
              <td>Скольжение в кадр по линии</td>
              <td>Slide In By Line</td>
            </tr>
            <tr>
              <td>Скольжение вверх по символу</td>
              <td>Slide Up By Character</td>
            </tr>
            <tr>
              <td>Скольжение вверх по слову</td>
              <td>Slide Up By Word</td>
            </tr>
            <tr>
              <td>Скольжение вниз по символу</td>
              <td>Slide Down By Character</td>
            </tr>
            <tr>
              <td>Скольжение и всплывание в кадр</td>
              <td>Slide and Pop In</td>
            </tr>
            <tr>
              <td>Случайное появление (возн.)</td>
              <td>Random Fade In</td>
            </tr>
            <tr>
              <td>Спираль в центр (возн.)</td>
              <td>Center Spiral In</td>
            </tr>
            <tr>
              <td>Чередующиеся символы в кадр</td>
              <td>Alternating Characters In</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Animate Out</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Декодирование из кадра по случайным символам</td>
              <td>Decode Out By Random Character</td>
            </tr>
            <tr>
              <td>Затухание с эффектом кодирования</td>
              <td>Encoder Fade Out</td>
            </tr>
            <tr>
              <td>Медленное затухание</td>
              <td>Fade Out Slow</td>
            </tr>
            <tr>
              <td>Мерцание непрозрачности из кадра</td>
              <td>Opacity Flicker Out</td>
            </tr>
            <tr>
              <td>Посимвольное затухание</td>
              <td>Fade Out By Character</td>
            </tr>
            <tr>
              <td>Посимвольное осыпание</td>
              <td>Raining Characters Out</td>
            </tr>
            <tr>
              <td>Посимвольное стирание со скольжением вправо</td>
              <td>Slide Off Right By Character</td>
            </tr>
            <tr>
              <td>Пословная скрутка</td>
              <td>Twirl Off Each Word</td>
            </tr>
            <tr>
              <td>Пословное рассыпание в случайном порядке</td>
              <td>Random Word Fly Off</td>
            </tr>
            <tr>
              <td>Пословное убегание вправо</td>
              <td>Slide Off Right By Word</td>
            </tr>
            <tr>
              <td>Построчное растяжение</td>
              <td>Stretch Out Each Line</td>
            </tr>
            <tr>
              <td>Рассыпание в случайном порядке</td>
              <td>Random Fly Off</td>
            </tr>
            <tr>
              <td>Растяжение каждого слова</td>
              <td>Stretch Out Each Word</td>
            </tr>
            <tr>
              <td>Скольжение и всплывание из кадра</td>
              <td>Slide and Pop Out</td>
            </tr>
            <tr>
              <td>Скольжение из кадра по границе композиции</td>
              <td>Slide Out To Comp Edge</td>
            </tr>
            <tr>
              <td>Скольжение из кадра по линии</td>
              <td>Slide Out By Line</td>
            </tr>
            <tr>
              <td>Скрутка по линиям</td>
              <td>Twirl Off Each Line</td>
            </tr>
            <tr>
              <td>Чередующиеся символы из кадра</td>
              <td>Alternating Characters Out</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Blurs</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Испарение (исч.)</td>
              <td>Evaporate Out</td>
            </tr>
            <tr>
              <td>Каретка (возн.)</td>
              <td>Transporter In</td>
            </tr>
            <tr>
              <td>Размытие и наплывание в кадр</td>
              <td>Blur and Fade In</td>
            </tr>
            <tr>
              <td>Размытие и наплывание из кадра</td>
              <td>Blur and Fade Out</td>
            </tr>
            <tr>
              <td>Размытие по словам (возн.)</td>
              <td>Blur In By Word</td>
            </tr>
            <tr>
              <td>Размытие с помехами</td>
              <td>Blur Glitch</td>
            </tr>
            <tr>
              <td>Резкое размытие в кадр по символу</td>
              <td>Harsh Blur In By Character</td>
            </tr>
            <tr>
              <td>Резкое размытие из кадра по символу</td>
              <td>Harsh Blur Out By Character</td>
            </tr>
            <tr>
              <td>Скоростной поезд (возн.)</td>
              <td>Bullet Train In</td>
            </tr>
            <tr>
              <td>Туман (возн.)</td>
              <td>Foggy In</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Curver and Spins</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Быстрое вращение (возн.)</td>
              <td>Spin Fast In</td>
            </tr>
            <tr>
              <td>Вброс с прокруткой по часовой стрелке</td>
              <td> Clockwise Entry</td>
            </tr>
            <tr>
              <td>Ввод спиралью</td>
              <td>Spiral In</td>
            </tr>
            <tr>
              <td>Кто успел</td>
              <td>Musical Chairs</td>
            </tr>
            <tr>
              <td>Лассо (возн.)</td>
              <td>Lasso In</td>
            </tr>
            <tr>
              <td>Лассо по словам (возн.)</td>
              <td>Lasso Tumble In</td>
            </tr>
            <tr>
              <td>Ньютон</td>
              <td>Newton</td>
            </tr>
            <tr>
              <td>Обод колеса (возн.)</td>
              <td>Tire Rim In</td>
            </tr>
            <tr>
              <td>Обратное вращение</td>
              <td>Retrograde</td>
            </tr>
            <tr>
              <td>Пикирование (возн.)</td>
              <td>Swoop In</td>
            </tr>
            <tr>
              <td>Поворот против часовой стрелки</td>
              <td>Counter Rotate</td>
            </tr>
            <tr>
              <td>Поворот</td>
              <td>Rotate</td>
            </tr>
            <tr>
              <td>Появление с прокруткой</td>
              <td>Whirl In</td>
            </tr>
            <tr>
              <td>Пылевой дьявол (исч.)</td>
              <td>Dust Devil Out</td>
            </tr>
            <tr>
              <td>Радиальное сверкание (возн.)</td>
              <td>Radial Flare In</td>
            </tr>
            <tr>
              <td>Раскрывающийся цветок (возн.)</td>
              <td>Bloom Flower In</td>
            </tr>
            <tr>
              <td>Сальто (возн.)</td>
              <td>Somersault In</td>
            </tr>
            <tr>
              <td>Спираль (исч.)</td>
              <td>Spiral Out</td>
            </tr>
            <tr>
              <td>Чаинки (возн.)</td>
              <td>Tea Leaves In</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Expressions</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Выделение списка слов</td>
              <td>Word List Highlight</td>
            </tr>
            <tr>
              <td>Двумерное текстовое окно (маска и эффекты)</td>
              <td>2D Text Box (Mask &amp; Effects)</td>
            </tr>
            <tr>
              <td>Номер кадра</td>
              <td>Frame Number</td>
            </tr>
            <tr>
              <td>Отображение компьютерного времени</td>
              <td>Display Comp Time</td>
            </tr>
            <tr>
              <td>Скачущий текст</td>
              <td>Text Bounce</td>
            </tr>
            <tr>
              <td>Цикл списка слов</td>
              <td>Cycle Word List</td>
            </tr>
            <tr>
              <td>Червячок</td>
              <td>Inch Worm</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Fill and Stroke</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Вымывание цвета</td>
              <td>Color Wash Behavior</td>
            </tr>
            <tr>
              <td>Вытеснение заливки</td>
              <td>Fill Color Wipe</td>
            </tr>
            <tr>
              <td>Мигающая обводка - построчно по ширине</td>
              <td>Wiggly Stroke Width By Line</td>
            </tr>
            <tr>
              <td>Ниспадающая дорожка</td>
              <td>Stroke Ease Down</td>
            </tr>
            <tr>
              <td>Оранжевая пульсация</td>
              <td>Pulse Orange</td>
            </tr>
            <tr>
              <td>Последовательное выделение</td>
              <td>Chasing Stroke</td>
            </tr>
            <tr>
              <td>Пульсирующие дорожки</td>
              <td>Pulsing Strokes</td>
            </tr>
            <tr>
              <td>Скользящее мерцание цвета</td>
              <td>Sliding Color Flicker</td>
            </tr>
            <tr>
              <td>Смещение в холодный оттенок</td>
              <td>Chill Hue Shift</td>
            </tr>
            <tr>
              <td>Цветное мигание</td>
              <td>Flicker Color</td>
            </tr>
            <tr>
              <td>Циклическая заливка оттенка</td>
              <td>Cycle Fill Hue</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Graphical</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Голубой фон</td>
              <td>Blue Note</td>
            </tr>
            <tr>
              <td>Желтые кубики</td>
              <td>Yellow Boxes</td>
            </tr>
            <tr>
              <td>Красные круги</td>
              <td>Red Circles</td>
            </tr>
            <tr>
              <td>Нарезка</td>
              <td>Cut Shapes</td>
            </tr>
            <tr>
              <td>Опасность</td>
              <td>Hazard</td>
            </tr>
            <tr>
              <td>Поцарапанная пленка</td>
              <td>Scratchy Film</td>
            </tr>
            <tr>
              <td>Размен</td>
              <td>Exchange</td>
            </tr>
            <tr>
              <td>Снежинки</td>
              <td>Snowflakes</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Lights and Optical</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Бродвей</td>
              <td>Broadway</td>
            </tr>
            <tr>
              <td>Вспышки</td>
              <td>Flash</td>
            </tr>
            <tr>
              <td>Лампа дневного света</td>
              <td>Fluorescent Light</td>
            </tr>
            <tr>
              <td>Легкое мигание</td>
              <td>Office Light</td>
            </tr>
            <tr>
              <td>Наложение</td>
              <td>Overlay</td>
            </tr>
            <tr>
              <td>Проявление с мерцанием</td>
              <td>Flicker Exposure</td>
            </tr>
            <tr>
              <td>Пульсирующие пузырьки</td>
              <td>Bubble Pulse</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Mechanical</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Автоматика</td>
              <td>Automation</td>
            </tr>
            <tr>
              <td>Автомобильная поездка 2</td>
              <td>Roadtrip 2</td>
            </tr>
            <tr>
              <td>Автомобильная поездка</td>
              <td>Roadtrip</td>
            </tr>
            <tr>
              <td>Алгоритм (возн.)</td>
              <td>Algorithm In</td>
            </tr>
            <tr>
              <td>Вертолет (возн.)</td>
              <td>Helicopter In</td>
            </tr>
            <tr>
              <td>Вставка текста (возн.)</td>
              <td>Insert Text In</td>
            </tr>
            <tr>
              <td>Гиперпространственный двигатель 9.8</td>
              <td>Warp 9.8</td>
            </tr>
            <tr>
              <td>Кинематика (возн.)</td>
              <td>Kinematic In</td>
            </tr>
            <tr>
              <td>Кольцевой алгоритм</td>
              <td>Algorithm Loop</td>
            </tr>
            <tr>
              <td>Лестница</td>
              <td>Stairstep</td>
            </tr>
            <tr>
              <td>Механика (возн.)</td>
              <td>Mechanical In</td>
            </tr>
            <tr>
              <td>Поворот экрана</td>
              <td>Screen Roll</td>
            </tr>
            <tr>
              <td>Подлодка</td>
              <td>Submarine</td>
            </tr>
            <tr>
              <td>Подчеркивание (возн.)</td>
              <td>Underscore In</td>
            </tr>
            <tr>
              <td>Поршни</td>
              <td>Pistons</td>
            </tr>
            <tr>
              <td>Прыжки с увеличением</td>
              <td>Scale Bounce</td>
            </tr>
            <tr>
              <td>Сбой сигнала</td>
              <td>Bad Reception</td>
            </tr>
            <tr>
              <td>Стеллаж и перо</td>
              <td>Rack & Pinion</td>
            </tr>
            <tr>
              <td>Электромагнит (возн.)</td>
              <td>Electro Magnet In</td>
            </tr>
            <tr>
              <td>Эффект Доплера</td>
              <td>Doppler</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Miscellaneous</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Вброс углом</td>
              <td>Angle Fly-In</td>
            </tr>
            <tr>
              <td>Взрыв (исч.)</td>
              <td>Explode Out</td>
            </tr>
            <tr>
              <td>Волнистые линии (возн.)</td>
              <td>Wiggly Lines In</td>
            </tr>
            <tr>
              <td>Вопрос</td>
              <td>Question</td>
            </tr>
            <tr>
              <td>Впрыгивание</td>
              <td>Bounce In</td>
            </tr>
            <tr>
              <td>Выдувание (исч.)</td>
              <td>Blow Away Out</td>
            </tr>
            <tr>
              <td>Выжимка</td>
              <td>Squeeze</td>
            </tr>
            <tr>
              <td>Декодер текста со сбоями</td>
              <td>Glitchy Text Decoder</td>
            </tr>
            <tr>
              <td>Дымок</td>
              <td>Smokey</td>
            </tr>
            <tr>
              <td>Йо-йо</td>
              <td>Yo-Yo</td>
            </tr>
            <tr>
              <td>Качение и прыжок (возн.)</td>
              <td>Roll Bounce In</td>
            </tr>
            <tr>
              <td>Маятник (возн.)</td>
              <td>Pendulum In</td>
            </tr>
            <tr>
              <td>Прыжки на веревке</td>
              <td>Bungee</td>
            </tr>
            <tr>
              <td>Равномерные скачки</td>
              <td>Sequential Jump</td>
            </tr>
            <tr>
              <td>Сальто назад</td>
              <td>Back Flip</td>
            </tr>
            <tr>
              <td>Скольжение и прыжок (возн.)</td>
              <td>Slide Bounce In</td>
            </tr>
            <tr>
              <td>Смывающаяся точка (возн.)</td>
              <td>Vanishing Point In</td>
            </tr>
            <tr>
              <td>Соскальзывание (возн.)</td>
              <td>Slip In</td>
            </tr>
            <tr>
              <td>Суматоха</td>
              <td>Rattle</td>
            </tr>
            <tr>
              <td>Супергерой (возн.)</td>
              <td>Superhero In</td>
            </tr>
            <tr>
              <td>Хаос (возн.)</td>
              <td>Chaotic In</td>
            </tr>
            <tr>
              <td>Швырок (исч.)</td>
              <td>Clay Pigeons Out</td>
            </tr>
            <tr>
              <td>Шестизарядный револьвер (возн.)</td>
              <td>Six-Shooter in</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Multi-line</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Вброс по символам</td>
              <td>Fly In By Characters</td>
            </tr>
            <tr>
              <td>Вброс по словам</td>
              <td>Fly In By Words</td>
            </tr>
            <tr>
              <td>Договор (возн.)</td>
              <td>Deal In</td>
            </tr>
            <tr>
              <td>Живчик (возн.)</td>
              <td>Zippy In</td>
            </tr>
            <tr>
              <td>Идеи</td>
              <td>Ideas</td>
            </tr>
            <tr>
              <td>Пакет данных</td>
              <td>Data Packet</td>
            </tr>
            <tr>
              <td>Пневматика (возн.)</td>
              <td>Pneumatic In</td>
            </tr>
            <tr>
              <td>Поток данных (возн.)</td>
              <td>Data Stream In</td>
            </tr>
            <tr>
              <td>Реактивная струя (возн.)</td>
              <td>Jetstream In</td>
            </tr>
            <tr>
              <td>Сбор стопки (возн.)</td>
              <td>Alternating Stack In</td>
            </tr>
            <tr>
              <td>Суп из букв</td>
              <td>Alphabet Soup</td>
            </tr>
            <tr>
              <td>Текстовый редактор (возн.)</td>
              <td>Word Processor In</td>
            </tr>
            <tr>
              <td>Течения (возн.)</td>
              <td>Currents In</td>
            </tr>
            <tr>
              <td>Шифрование (возн.)</td>
              <td>Encryption In</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Number Counters</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Обратный отсчет с фиксированной шириной</td>
              <td>Counter Countdown Monospaced</td>
            </tr>
            <tr>
              <td>Отсчет времени с фиксированной шириной</td>
              <td>Timer Countdown Monospaced</td>
            </tr>
            <tr>
              <td>Счетчик валюты с фиксированной шириной</td>
              <td>Currency Counter Monospaced</td>
            </tr>
            <tr>
              <td>Счетчик процентов с фиксированной шириной</td>
              <td>Percentage Counter Monospaced</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Organic</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Амплитудные прыжки</td>
              <td>Dip-Bounce</td>
            </tr>
            <tr>
              <td>Бумеранг (возн.)</td>
              <td>Boomerang In</td>
            </tr>
            <tr>
              <td>Вдоль и поперек (возн.)</td>
              <td>Slice and Dice In</td>
            </tr>
            <tr>
              <td>Выезд</td>
              <td>Shuffle</td>
            </tr>
            <tr>
              <td>Двойная спираль</td>
              <td>Double-Helix</td>
            </tr>
            <tr>
              <td>Диагональный прыжок (возн.)</td>
              <td>Diagonal Bounce In</td>
            </tr>
            <tr>
              <td>Дрожание</td>
              <td>Quiver</td>
            </tr>
            <tr>
              <td>Жвачка (возн.)</td>
              <td>Chewing Gum In</td>
            </tr>
            <tr>
              <td>Кипяток</td>
              <td>Boiling</td>
            </tr>
            <tr>
              <td>Колебание (возн.)</td>
              <td>Wobble In</td>
            </tr>
            <tr>
              <td>Колибри (возн.)</td>
              <td>Hummingbird In</td>
            </tr>
            <tr>
              <td>Командная борьба</td>
              <td>Tag Team</td>
            </tr>
            <tr>
              <td>Лабрадор (возн.)</td>
              <td>Labrador In</td>
            </tr>
            <tr>
              <td>Летающие формы</td>
              <td>Flying Formation</td>
            </tr>
            <tr>
              <td>Медленное кипение</td>
              <td>Simmer</td>
            </tr>
            <tr>
              <td>Морская болезнь</td>
              <td>Sea-Sick</td>
            </tr>
            <tr>
              <td>Насекомые (возн.)</td>
              <td>Insects In</td>
            </tr>
            <tr>
              <td>Океанский прилив</td>
              <td>Ocean Tide</td>
            </tr>
            <tr>
              <td>Осень</td>
              <td>Autumn</td>
            </tr>
            <tr>
              <td>Подъем (возн.)</td>
              <td>Climb In</td>
            </tr>
            <tr>
              <td>Поток ветра</td>
              <td>Wind Current</td>
            </tr>
            <tr>
              <td>Приманка</td>
              <td>Fish Bait</td>
            </tr>
            <tr>
              <td>Прорастание (возн.)</td>
              <td>Sprouts In</td>
            </tr>
            <tr>
              <td>Пульсация (возн.)</td>
              <td>Ripple In</td>
            </tr>
            <tr>
              <td>Пшеничное поле</td>
              <td>Wheatfield</td>
            </tr>
            <tr>
              <td>Разреженная строка</td>
              <td>Loose Line</td>
            </tr>
            <tr>
              <td>Резинка</td>
              <td>Rubber</td>
            </tr>
            <tr>
              <td>Резиновый пол</td>
              <td>Rubber Floor</td>
            </tr>
            <tr>
              <td>Салфетка от насекомых</td>
              <td>Insect Wipe</td>
            </tr>
            <tr>
              <td>Слепень (возн.)</td>
              <td>Horsefly In</td>
            </tr>
            <tr>
              <td>Чехарда</td>
              <td>Leapfrog</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Paths</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Антилопа</td>
              <td>Antelope</td>
            </tr>
            <tr>
              <td>Барьеры</td>
              <td>Hurdles</td>
            </tr>
            <tr>
              <td>Безделушка</td>
              <td>Tchotchke</td>
            </tr>
            <tr>
              <td>В объезд</td>
              <td>Bump And Slide On</td>
            </tr>
            <tr>
              <td>Вниз и наружу</td>
              <td>Down And Out</td>
            </tr>
            <tr>
              <td>Воздушный шар</td>
              <td>Balloon</td>
            </tr>
            <tr>
              <td>Всплывание пузыря (исч.)</td>
              <td>Bubble Pop Out</td>
            </tr>
            <tr>
              <td>Двойная спираль</td>
              <td>Double Spiral</td>
            </tr>
            <tr>
              <td>Длинная спираль (исч.)</td>
              <td>Long Spiral Out</td>
            </tr>
            <tr>
              <td>Зигзаг</td>
              <td>Zig-Zag</td>
            </tr>
            <tr>
              <td>Змейка</td>
              <td>Serpent</td>
            </tr>
            <tr>
              <td>Канатный мост</td>
              <td>Rope Bridge</td>
            </tr>
            <tr>
              <td>Катушки 2</td>
              <td>Reel-To-Reel 2</td>
            </tr>
            <tr>
              <td>Катушки</td>
              <td>Reel To Reel</td>
            </tr>
            <tr>
              <td>Колебание</td>
              <td>Bouncing</td>
            </tr>
            <tr>
              <td>Конвейер</td>
              <td>Conveyor Belt</td>
            </tr>
            <tr>
              <td>Крысиное гнездо</td>
              <td>Rat Nest</td>
            </tr>
            <tr>
              <td>Муравьи</td>
              <td>Ants</td>
            </tr>
            <tr>
              <td>Оборот на 360</td>
              <td>360 Loop</td>
            </tr>
            <tr>
              <td>Печатная плата (исч.)</td>
              <td>Circuit Board Out</td>
            </tr>
            <tr>
              <td>Равновесие</td>
              <td>Balance</td>
            </tr>
            <tr>
              <td>Симметрия</td>
              <td>Symmetry</td>
            </tr>
            <tr>
              <td>Скольжение под гору - выкл</td>
              <td>Downhill Slide Off</td>
            </tr>
            <tr>
              <td>Трубы</td>
              <td>Pipes</td>
            </tr>
            <tr>
              <td>Удар каратиста</td>
              <td>Karate Chop</td>
            </tr>
            <tr>
              <td>Цикл возникновения-исчезновения</td>
              <td>Loop In and Out</td>
            </tr>
            <tr>
              <td>Эластичный</td>
              <td>Springy</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Rotation</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Водоворот</td>
              <td>Swirly Rotation</td>
            </tr>
            <tr>
              <td>Вращение каждого символа</td>
              <td>Rotate Per Character</td>
            </tr>
            <tr>
              <td>Закручивание</td>
              <td>Spin In</td>
            </tr>
            <tr>
              <td>Огромная петля</td>
              <td>Loopy Loop</td>
            </tr>
            <tr>
              <td>Отразить вверх</td>
              <td>Flip Up</td>
            </tr>
            <tr>
              <td>Поворот по словам</td>
              <td>Rotate Per Word</td>
            </tr>
            <tr>
              <td>Полный оборот</td>
              <td>Full Rotation</td>
            </tr>
            <tr>
              <td>Случайные вращения</td>
              <td>Random Rotation</td>
            </tr>
            <tr>
              <td>Смерч</td>
              <td>Whirlwind</td>
            </tr>
            <tr>
              <td>Стекание</td>
              <td>Drip Down</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Scale</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Давайте танцевать</td>
              <td>Lets Dance</td>
            </tr>
            <tr>
              <td>Масштаб (возн.)</td>
              <td>Scale In</td>
            </tr>
            <tr>
              <td>Масштаб (исч.)</td>
              <td>Scale Out</td>
            </tr>
            <tr>
              <td>Масштаб по словам (возн.)</td>
              <td>Scale In By Word</td>
            </tr>
            <tr>
              <td>Масштаб по словам (исч.)</td>
              <td>Scale Out By Word</td>
            </tr>
            <tr>
              <td>Масштабирование в кадр от точки</td>
              <td>Scale In From Point</td>
            </tr>
            <tr>
              <td>Масштабирование из кадра от точки</td>
              <td>Scale Out From Point</td>
            </tr>
            <tr>
              <td>Мигающее вытеснение с масштабированием</td>
              <td>Wiggly Scale Wipe</td>
            </tr>
            <tr>
              <td>Произвольное масштабирование (возн.)</td>
              <td>Random Scale In</td>
            </tr>
            <tr>
              <td>Увеличение вперед</td>
              <td>Zoom Forward</td>
            </tr>
            <tr>
              <td>Удаление с уменьшением</td>
              <td>Zoom Away</td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Tracking</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Растяжение</td>
              <td>Increase Tracking</td>
            </tr>
            <tr>
              <td>Растянутый</td>
              <td>Stretchy</td>
            </tr>
            <tr>
              <td>Расширение</td>
              <td>Extend</td>
            </tr>
            <tr>
              <td>Сжатие</td>
              <td>Contract</td>
            </tr>
            <tr>
              <td>Смещение в кадр по трекингу</td>
              <td>Shift In By Tracking</td>
            </tr>
            <tr>
              <td>Смещение из кадра по трекингу</td>
              <td>Shift Out By Tracking</td>
            </tr>
            <tr>
              <td>Судорога</td>
              <td>Spasm</td>
            </tr>
            <tr>
              <td>Сужение</td>
              <td>Decrease Tracking</td>
            </tr>
            <tr>
              <td>Увеличение</td>
              <td>Magnify</td>
            </tr>
          </tbody>
        </table>
        <Divider>Transitions - Dissolves</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Затухание блока - построчное</td>
              <td>Block Dissolve - scanlines</td>
            </tr>
            <tr>
              <td>Затухание блока - цифровое</td>
              <td>Block Dissolve - digital</td>
            </tr>
            <tr>
              <td>Затухание - мигание в белый</td>
              <td>Fade - flash to white</td>
            </tr>
            <tr>
              <td>Затухание - погружение в черный</td>
              <td>Fade - dip to black</td>
            </tr>
            <tr>
              <td>Мерцающая непрозрачность - на слой в кадр</td>
              <td>Flickering Opacity - at layer in</td>
            </tr>
            <tr>
              <td>Мерцающая непрозрачность - на слой из кадра</td>
              <td>Flickering Opacity - at layer out</td>
            </tr>
            <tr>
              <td>Нарастание - переэкспонированное</td>
              <td>Fade - overexposed</td>
            </tr>
            <tr>
              <td>Пиксельное растворение</td>
              <td>Pixelated Dissolve</td>
            </tr>
            <tr>
              <td>Растворение блока - произвольно</td>
              <td>Block Dissolve - random</td>
            </tr>
            <tr>
              <td>Растворение - большие двоичные объекты</td>
              <td>Dissolve - blobs</td>
            </tr>
            <tr>
              <td>Растворение - дизеринг</td>
              <td>Dissolve - dither</td>
            </tr>
            <tr>
              <td>Растворение - нерастаявший</td>
              <td>Dissolve - unmelt</td>
            </tr>
            <tr>
              <td>Растворение - пар</td>
              <td>Dissolve - vapor</td>
            </tr>
            <tr>
              <td>Растворение - песок</td>
              <td>Dissolve - sand</td>
            </tr>
            <tr>
              <td>Растворение - рябь</td>
              <td>Dissolve - ripple</td>
            </tr>
            <tr>
              <td>Чернильное растворение</td>
              <td>Inky Dissolve</td>
            </tr>
          </tbody>
        </table>
        <Divider>Transitions - Movement</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Всплывание и отражение в кадр</td>
              <td>Pop and Wobble In</td>
            </tr>
            <tr>
              <td>Вытеснение карт - 2D дробные</td>
              <td>Card Wipe - 2D fractured</td>
            </tr>
            <tr>
              <td>Вытеснение карт - 3D качание</td>
              <td>Card Wipe - 3D swing</td>
            </tr>
            <tr>
              <td>Вытеснение карт - 3D пиксельная буря</td>
              <td>Card Wipe - 3D pixelstorm</td>
            </tr>
            <tr>
              <td>Масштаб полный</td>
              <td>Scale - Cardinal</td>
            </tr>
            <tr>
              <td>Масштаб - 2D-вращение</td>
              <td>Zoom - 2D spin</td>
            </tr>
            <tr>
              <td>Масштаб - 3D-переворот</td>
              <td>Zoom - 3D tumble</td>
            </tr>
            <tr>
              <td>Масштаб - пузырь</td>
              <td>Zoom - bubble</td>
            </tr>
            <tr>
              <td>Масштаб - раскачивание</td>
              <td>Zoom - wobbling</td>
            </tr>
            <tr>
              <td>Масштаб - спираль</td>
              <td>Zoom - spiral</td>
            </tr>
            <tr>
              <td>Растягивание из линии - по горизонтали</td>
              <td>Stretch Over - horizontal</td>
            </tr>
            <tr>
              <td>Растягивание по вертикали</td>
              <td>Stretch Over - vertical</td>
            </tr>
            <tr>
              <td>Растяжение и размытие</td>
              <td>Stretch & Blur</td>
            </tr>
            <tr>
              <td>Растяжение и скольжение</td>
              <td>Stretch & Slide</td>
            </tr>
            <tr>
              <td>Растяжение с края</td>
              <td>Stretch - Edge</td>
            </tr>
            <tr>
              <td>Слайд - обвал</td>
              <td>Slide - swoop</td>
            </tr>
            <tr>
              <td>Слайд - падение</td>
              <td>Slide - drop</td>
            </tr>
            <tr>
              <td>Слайд - прямо</td>
              <td>Slide - straight</td>
            </tr>
          </tbody>
        </table>
        <Divider>Transitions - Wipes</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Двери сарая</td>
              <td>Barn Doors</td>
            </tr>
            <tr>
              <td>Жалюзи</td>
              <td>Venetian Blinds</td>
            </tr>
            <tr>
              <td>Закрашивание сверху</td>
              <td>Paint On</td>
            </tr>
            <tr>
              <td>Заполнение - шашки HD</td>
              <td>Checker Wipe HD</td>
            </tr>
            <tr>
              <td>Ленты - встречное заполнение HD</td>
              <td>Band Wipe - crossing HD</td>
            </tr>
            <tr>
              <td>Ленты - заклеивание HD</td>
              <td>Band Wipe - Build HD</td>
            </tr>
            <tr>
              <td>Ленты - зигзаг HD</td>
              <td>Band Wipe - Zig Zag HD</td>
            </tr>
            <tr>
              <td>Линейное вытеснение</td>
              <td>Linear Wipe</td>
            </tr>
            <tr>
              <td>Пиксельное вытеснение из центра</td>
              <td>Pixelated Iris Wipe</td>
            </tr>
            <tr>
              <td>Пиксельное линейное вытеснение</td>
              <td>Pixelated Linear Wipe</td>
            </tr>
            <tr>
              <td>Раскладушка</td>
              <td>Clam Shell</td>
            </tr>
            <tr>
              <td>Сетка_Вытеснение</td>
              <td>Grid Wipe</td>
            </tr>
            <tr>
              <td>Стирание - радиальное полное</td>
              <td>Radial Wipe - Cardinal</td>
            </tr>
            <tr>
              <td>Угол_Отображение</td>
              <td>Corner Reveal</td>
            </tr>
            <tr>
              <td>Часы_Вытеснение</td>
              <td> Clock Wipe</td>
            </tr>
            <tr>
              <td>Чернильное вытеснение из центра</td>
              <td>Inky Iris Wipe</td>
            </tr>
            <tr>
              <td>Чернильное линейное вытеснение</td>
              <td>Inky Linear Wipe</td>
            </tr>
          </tbody>
        </table>
      </DetailsSummary>
    </div>
  );
};
export default AEWhereFind;
