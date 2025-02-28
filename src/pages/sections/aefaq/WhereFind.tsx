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
          раздел <a href="#install-problems">Проблемы с установкой</a> или обратитесь к
          нам в <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a>.
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
          Вы можете использовать сервисом{" "}
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
          Учтите, что по умолчанию на странице стоит галка на{" "}
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
        title="Где найти таблицу перевода стандартных эффектов?"
        tag="русский афтер, английский"
      >
        <AdditionWarning>
          Перевод и наличие эффектов, а также способ их работы может отличаться в
          зависимости от версии <mark className="app">After Effects</mark>. Также
          рекомендуем переключить интерфейс на английский язык, чтобы не возвращаться к
          этой таблице снова и снова. Перевод встроенных пресетов в данной таблице
          отсутствует.
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/qAKdcIeku3Q&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/_cOG53NWJj4&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/qAKdcIeku3Q&t=278"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/qAKdcIeku3Q&t=216"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/7DW84Vt5gvQ&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/qAKdcIeku3Q&t=318"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/qAKdcIeku3Q&t=457"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/7DW84Vt5gvQ&t=195"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/lNYgKQPU2Pk&t=46"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/lNYgKQPU2Pk&t=79"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/lNYgKQPU2Pk&t=101"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/lNYgKQPU2Pk&t=139"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/lNYgKQPU2Pk&t=158"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/lNYgKQPU2Pk&t=177"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/lNYgKQPU2Pk&t=191"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/lNYgKQPU2Pk&t=211"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/lNYgKQPU2Pk&t=224"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/lNYgKQPU2Pk&t=242"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/oq0FC5UuE7M&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/EPw0nMrhP8E&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/28L2XalNr5A&t=1178"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/UOEFos3tyHs&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/4hpvPSexGOg&t=161"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/4hpvPSexGOg&t=248"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/tWF41oySk3U&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/x4jHZoUk2uc&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/JGkoDPa1XEw&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/7BUnCtU9ARY&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/MyEZcFBwloY&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/MyEZcFBwloY&t=76"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/4hpvPSexGOg&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/2HwYIQWSQb8&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/oq0FC5UuE7M&t=104"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/QhKqU1ZHUJ4&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/fV_6S9hF3as&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/fV_6S9hF3as&t=176"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/fV_6S9hF3as&t=223"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/trNkh341o6s&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/fV_6S9hF3as&t=310"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/fV_6S9hF3as&t=116"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/1hhA-21q8Xw&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/ibfYiy--9Hs&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/8u8uJkSl9Uw&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/IKah5aJHwmg&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/zfmuXUgATpo&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/-pqGYehO-4s&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/ZZiabVb-OEg&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/NW4VGAt5x4g&t=198"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/NW4VGAt5x4g&t=166"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/NW4VGAt5x4g&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/fmN2-L0NG6o&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/s4bAXwpcj-0&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/pE58Xz1wXxI&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/earDDwlY5IE&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/1-vGTVngKRw&t=10"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/H1cXvYYM_0U&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/euIDwp4bsi0&t=186"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/LfbBtfbRFo8&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/LfbBtfbRFo8&t=154"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/pkPBKtVumaQ&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/pkPBKtVumaQ&t=139"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/pkPBKtVumaQ&t=180"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Vq6FpcCtSd0&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/8-16s24iBy8&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/85XJHcAydVU&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/nP47ynBc3B8&t=398"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/_S4N3PEvaws&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/PciM7SLWu40&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/yJyHkxTTlc4&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/76LQhG-nl_0&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/LfbBtfbRFo8&t=314"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/nP47ynBc3B8&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/nP47ynBc3B8&t=372"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/y4fuhIPxmJg&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/LwdOCzlVHe4&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/POK5dgZh6zQ&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/R__aeOjw2Ms&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/D8FOw8fUbSg&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/euIDwp4bsi0&t=87"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/euIDwp4bsi0&t=134"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/o9O-SK4j5yc&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/iuNNcEmuJI8&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/J77LkU-aiIM&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/03JF-PxF1gE&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/L46aRRGkb58&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/L46aRRGkb58&t=440"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/WPo-dkPiynI&t=470"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/8prrshDN0eo&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/SN6yteIc88k&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/HhY6NqWRU_M&t=228"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/fybg41bOoLE&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/NeUrbL0oadc&t=146"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/k5b_kRqgky8&t=369"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/wxOL7Cjm-is&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/w6PkkWRpZpQ&t=84"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/sZjtBJX_Its&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/sZjtBJX_Its&t=62"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/uAc5sToN5DM&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/NeUrbL0oadc&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/njLTViB1dTk&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/4N2xvjYoLTM&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/EHlmVsp-JPs&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/c_dn9kPHmhA&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/2_nRHBNmCuQ&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/9XMohV-HL-0&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/3DYJQO70B7M&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/HhY6NqWRU_M&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/9do6TuDBYEQ&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Rp6iKBfOfgg&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/k5b_kRqgky8&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/28L2XalNr5A&t=1363"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/w6PkkWRpZpQ&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/MUAStb2uULc&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/JChsjyYSA2A&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/HiKTFo-PYAg&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Jb9YMWrVHLk&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Qg9eeziEpJo&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/28L2XalNr5A&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/AbY7V6bJITA&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/zW3Oj2X9oEY&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/MfyN1bBe8rE&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/YJ8jXYU9lYs&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/1MCQ2JvExyE&t=510"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/1MCQ2JvExyE&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/ESaxBxvt6Us&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/RjClIwbbV04&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/rNJ5SRrWqyo&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/lUyIpM4aRwU&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/0n0pZp_BA2w&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/fn2Yx3YjlS0&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/y6R1_9E0tPo&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/xhIJdj_dA7U&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/yb-wbWtJnng&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/yb-wbWtJnng&t=312"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/bNsQ0RCT2l4&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/euIDwp4bsi0&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Rl2CpXgDgok&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/JhdhSF2ibgQ&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/5Ug1sVc7uYE&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/bgiA3_-9abw&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/bNsQ0RCT2l4&t=192"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/wf8XFPvUptc&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/2l4ao-cXlxM&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/NZAcHdOaUH4&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/FQ0oTGpHbBs&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/NZAcHdOaUH4&t=179"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/cXv70dpIQJw&t=320"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/cXv70dpIQJw&t=435"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/cXv70dpIQJw&t=538"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/cXv70dpIQJw&t=621"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/cXv70dpIQJw&t=648"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/cXv70dpIQJw&t=680"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/cXv70dpIQJw&t=927"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/cXv70dpIQJw&t=1011"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/cXv70dpIQJw&t=1037"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/cXv70dpIQJw&t=1131"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/cXv70dpIQJw&t=1153"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/cXv70dpIQJw&t=1167"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/tK_Z1dYgtxs&t=112"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/ALAoNGXvLC4&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/kO-HrJ1su-0&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/W6vIw8_bZHM&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/ciX-roxC4oQ&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/v7pqZ9gtn8I&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/z1Ji43Sg5bk&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/tK_Z1dYgtxs&t=334"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/tK_Z1dYgtxs&t=443"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/8RjOe6cO-cY&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/rGmc9rrf5pc&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/wmV2p5DprI8&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/0m5b7Qs6Ido&t=423"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/0m5b7Qs6Ido&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/8lCEc-H3JJU&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/FmSTOXu2V6I&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Q1BBpMxmbXU&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/kdttSozSLG4&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/FmSTOXu2V6I&t=621"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/x-m_B8qThhI&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/pWSNY7XvN-A&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/jZj0hioZYoM&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/pWSNY7XvN-A&t=55"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/pWSNY7XvN-A&t=165"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/FmSTOXu2V6I&t=835"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/kdttSozSLG4&t=262"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/sQFUGX_Of84&t=45"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/sQFUGX_Of84&t=85"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/sQFUGX_Of84&t=249"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/sQFUGX_Of84&t=167"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/sQFUGX_Of84&t=135"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/sQFUGX_Of84&t=339"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/sQFUGX_Of84&t=112"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/sQFUGX_Of84&t=205"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/sQFUGX_Of84&t=403"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/yaT3YwIK-BI&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/hLLcg1xE7Mo&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Y217431eGeM&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Y217431eGeM&t=36"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Y205itPnJCc&t=627"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/WFwbm0kOzRQ&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Y205itPnJCc&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/vagmclmkMU4&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/nzapxMlX74A&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Bx-T-8Vjm2k&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/XC-Pd_wNbbM&t=695"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/20keMi3bDqc&t=440"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/uV83WKGQw8Q&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/B-6XRRtxdSE&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/jJ5MJoL2X_I&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Jw6P4lnFT6I&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/QwzDqLmIKSI&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/7Fp9207Ds5I&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/7Fp9207Ds5I&t=2503"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Wtsws9nN4jM&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/c2TT33Vn0OU&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/2XrcDJI8dhc&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/c2TT33Vn0OU&t=483"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/G9qbU1ifWWc&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/74iePAKBQrg&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/qzzEy76cCXo&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/UJI7cbilZYA&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/20keMi3bDqc&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/2sQ0R6zQeYY&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/QS9QFYnvRi4&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/YQRdM_hus4k&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/HNu77TCadtE&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/WPo-dkPiynI&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/oqwCF_U3fBo&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/TwiP0uHa4WI&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/8hk95dMWk4k&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/WPo-dkPiynI&t=335"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/UptUlJdoS0M&t=161"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/OGEENhaGDL8&t=79"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/OGEENhaGDL8&t=186"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/eBtk3tN_91o&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/X-SpnyETdEA&t=143"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/X-SpnyETdEA&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/gEWfYGCejsU&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/t40ZTEBr_M0&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/luVfpqT_rYg&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/UptUlJdoS0M&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/vNWMxYpv6js&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/DbMCkyMg0sw&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/oGw-o6eMbgI&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/N1to_8jgnjQ&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/u9KJs9q-6es&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/OGEENhaGDL8&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/EMHcq7YOhfQ&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/EMHcq7YOhfQ&t=360"
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
                  title="Видео от Jake In Motion"
                  href="https://www.youtube.com/watch?v=ANG3iMQVHVo"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/IQxvw91sOB4&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/N2qxF8V57FE&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/DZAakVlJoGU&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/Iu1E9M1EDHY&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/AzKAVI6KT18&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/vjXP8Hyj4XE&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/JsyuG98HZMo&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/6O2I2oLgw4E&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/XC-Pd_wNbbM&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/QcLSKGk7G4s&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/BC30h50BHqo&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/QcLSKGk7G4s&t=195"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/BC30h50BHqo&t=119"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/YEiAz-BddNs&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/BC30h50BHqo&t=97"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/u0Eru4q2qek&t=132"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/u0Eru4q2qek&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/F0FRc-oORS0&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/QcLSKGk7G4s&t=292"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/acYRLZGEYmc&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/VoyS7UsjZTY&t=68"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/VoyS7UsjZTY&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/VoyS7UsjZTY&t=36"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/1Bcq4j69RBg&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/S1GUo46T2H8&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/2Akn5zdDMgM&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/EPxpRkz5Q1Y&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/xJ8JFqNW07Q&t=8"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/-JzYpi6Uyb4&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/VvH1JOdd_Cw&t=6"
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
                  title="Видео от Jake In Motion"
                  href="https://youtu.be/npeUQbpaZbA&t=6"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </DetailsSummary>
    </div>
  );
};
export default AEWhereFind;
