import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure} from "../../../components/ContentFigure";
import {Divider} from "antd";

const PRWhereFind: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/WhereFind.tsx" />
      <DetailsSummary title="Где найти шаблоны, программы и плагины?">
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
            <a href="https://t.me/s/premtemp">PremTemp</a> - канал с переходами,
            шаблонами, расширениями и прочими ништяками для ваших проектов в{" "}
            <mark className="app">Premiere Pro</mark>.
          </li>
          <li>
            <a href="https://t.me/s/aetemp">AETemp</a> - как{" "}
            <a href="https://t.me/s/premtemp">PremTemp</a>, только для{" "}
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
            демократичным ценам для пользователей компьютеров на базе <mark>Windows</mark>
            .
          </li>
          <li>
            <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад</a> - аналогичный канал
            с программами, как склад, но для пользователей устройств на <mark>macOS</mark>
            .
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
          <a href="https://t.me/s/premtemp">PremTemp</a>,{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>,{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a> или{" "}
          <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a> - вы
          принимаете на себя все риски и берёте ответственность за использование
          нелегальных материалов. Мы не можем принимать вбросы по типу{" "}
          <mark className="quote">
            ой в складе, саду или премтемпе одни вирусы водятся
          </mark>{" "}
          на полном серьёзе без внятных доказательств. Ложное срабатывание антивируса
          также не является доказательством действительного наличия зловредов в том или
          ином архиве или программе. Если вы доверяете нашим источникам - отключайте
          антивирусное ПО при установке программ и плагинов, либо не предъявляйте
          претензии на основе вашей паранои и оформляйте покупку софта за свои кровные.
        </AdditionDanger>
      </DetailsSummary>
      <DetailsSummary
        tag="енвато, моушен аррей, фрипик, артлист"
        title="Как скачать нужный мне шаблон, если у меня есть на него ссылка?"
      >
        <p>
          Если вы не нашли то, что вам нужно из ссылок, то у нас имеется бот{" "}
          <a
            href="https://t.me/HiStockBot?start=509060394"
            title="Бот HiStock для покупки шаблонов в Telegram"
          >
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
      <DetailsSummary title="Где найти бесплатные стоковые видео для своих проектов?">
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
          используйте <mark className="app">VPN</mark> для доступа на данные ресурсы.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Где найти бесплатные звуки и звуковые эффекты для своих видео?">
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
      <DetailsSummary title="Где найти шрифт по имеющемуся фото?">
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
          caption="Главная страница LikeFont"
          imgSrc="images/likefont/likefont_mainpage.png"
          imgTitle="Главная страница LikeFont"
          styleClass="figure_windows-light"
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
          caption="Пример плохого исходника"
          imgSrc="images/likefont/prfaq_likefont_example.png"
          imgTitle="Пример плохого исходника"
          styleClass="figure_windows-light"
        />
        <p>
          Для этого нужно предварительно обработать изображение. После загрузки
          изображения сайт предлагает инструменты для обработки изображения, например{" "}
          <mark className="ui">Threshold</mark>. Мы его повышаем до максимально возможного
          значения, чтобы отделить текст от фона. Также есть инструменты для поворота,
          отзеркаливания и наклона изображения при необходимости.
        </p>
        <ImageFigure
          caption="Изображение после обработки средствами сайта"
          imgSrc="images/likefont/prfaq_likefont_fixed.png"
          imgTitle="Изображение после обработки средствами сайта"
          styleClass="figure_windows-light"
        />
        <p>
          Как мы видим, Threshold помог, но не сильно, так как фрактальный шум по яркости
          совпал с яркостью текста. Но не унываем, у нас есть как минимум три чистых
          буквы. После обработки пролистываем страницу ниже и мы видим несколько
          изображений к которым нужно вписать букву.
        </p>
        <ImageFigure
          caption="Изображения к которым нужно вписать букву"
          imgSrc="images/likefont/prfaq_likefont_recognition.png"
          imgTitle="Изображения к которым нужно вписать букву"
          styleClass="figure_windows-light"
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
          caption="Результат распознавания"
          imgSrc="images/likefont/prfaq_likefont_result.png"
          imgTitle="Результат распознавания"
          styleClass="figure_windows-light"
        />
        <p>
          В моём примере был использован шрифт <mark>Berlin Sans FB</mark> и с его
          нахождением сервис справился прекрасно.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Где найти таблицу перевода стандартных эффектов с русского интерфейса на английский?">
        <AdditionWarning>
          Перевод и наличие эффектов, а также способ их работы может отличаться в
          зависимости от версии <mark className="app">Premiere Pro</mark>. Также
          рекомендуем переключить интерфейс на английский язык, чтобы не возвращаться к
          этой таблице снова и снова. Перевод встроенных пресетов в данной таблице
          отсутствует.
        </AdditionWarning>
        <p>
          Пользователям, использующие русскоязычный интерфейс{" "}
          <mark className="app">Premiere Pro</mark>, иногда бывает трудно найти эффект,
          который обозначен на английском языке. В таких случаях можно обратиться к
          таблице перевода.
        </p>
        <AdditionDanger>
          В <mark className="app">Premiere Pro</mark> версии <mark>25.0</mark> и новее
          убрали папку <mark className="path">Obsolete</mark>, где были расположены
          устаревшие, по мнению Adobe, эффекты. Эффекты все ещё будут доступны для
          проектов, который были созданы в старых версиях{" "}
          <mark className="app">Premiere Pro</mark>, но без танцев с бубном их применить в
          новых проектах не получится.{" "}
          <a href="https://community.adobe.com/t5/premiere-pro-beta-discussions/now-released-obsolete-effects-transitions-and-presets-removed/td-p/14703879">
            Подробнее...
          </a>
        </AdditionDanger>
        <Divider>Аудиоэффекты (Audio Effects)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Баланс</td>
              <td>Balance</td>
            </tr>
            <tr>
              <td>Без звука</td>
              <td>Mute</td>
            </tr>
            <tr>
              <td>Бинауральный - Ambisonics</td>
              <td>Binauralizer - Ambisonics</td>
            </tr>
            <tr>
              <td>Громкость</td>
              <td>Volume</td>
            </tr>
            <tr>
              <td>Панорамирование - Ambisonics</td>
              <td>Panner - Ambisonics</td>
            </tr>
          </tbody>
        </table>
        <Divider>Амплитуда и сжатие (Amplitude and Compression)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>DeEsser</td>
            </tr>
            <tr>
              <td>Громкость канала</td>
              <td>Channel Volume</td>
            </tr>
            <tr>
              <td>Динамика</td>
              <td>Dynamics</td>
            </tr>
            <tr>
              <td>Жесткий Ограничитель</td>
              <td>Hard Limiter</td>
            </tr>
            <tr>
              <td>Компрессор с трубчатым моделированием</td>
              <td>Tube-modeled Compressor</td>
            </tr>
            <tr>
              <td>Микширование каналов</td>
              <td>Channel Mixer</td>
            </tr>
            <tr>
              <td>Многополосный компрессор</td>
              <td>Multiband Compressor</td>
            </tr>
            <tr>
              <td>Обработка динамических характеристик</td>
              <td>Dynamic Processing</td>
            </tr>
            <tr>
              <td>Однополосый компрессор</td>
              <td>Single-band Compressor</td>
            </tr>
            <tr>
              <td>Усилить</td>
              <td>Amplify</td>
            </tr>
          </tbody>
        </table>
        <Divider>Задержка и эхо (Delay and Echo)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Аналоговая задержка</td>
              <td>Analog Delay</td>
            </tr>
            <tr>
              <td>Задержка</td>
              <td>Delay</td>
            </tr>
            <tr>
              <td>Многократное эхо</td>
              <td>Multitap Delay</td>
            </tr>
          </tbody>
        </table>
        <Divider>Фильтр и эквалайзер (Filter and EQ)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Бас</td>
              <td>Bass</td>
            </tr>
            <tr>
              <td>Верхние частоты</td>
              <td>Treble</td>
            </tr>
            <tr>
              <td>Графический эквалайзер (10 полос)</td>
              <td>Graphic Equalizer (10 Bands)</td>
            </tr>
            <tr>
              <td>Графический эквалайзер (20 полос)</td>
              <td>Graphic Equalizer (20 Bands)</td>
            </tr>
            <tr>
              <td>Графический эквалайзер (30 полос)</td>
              <td>Graphic Equalizer (30 Bands)</td>
            </tr>
            <tr>
              <td>Научный фильтр</td>
              <td>Scientific Filter</td>
            </tr>
            <tr>
              <td>Параметрический эквалайзер</td>
              <td>Parametric Equalizer</td>
            </tr>
            <tr>
              <td>Полоса пропускания</td>
              <td>Bandpass</td>
            </tr>
            <tr>
              <td>Простой параметрический эквалайзер</td>
              <td>Simple Parametric EQ</td>
            </tr>
            <tr>
              <td>Простой узкополосный блокирующий фильтр</td>
              <td>Simple Notch Filter</td>
            </tr>
            <tr>
              <td>Узкополосный блокирующий фильтр</td>
              <td>Notch Filter</td>
            </tr>
            <tr>
              <td>Фильтр FFT</td>
              <td>FFT Filter</td>
            </tr>
            <tr>
              <td>Фильтр высоких частот</td>
              <td>Lowpass</td>
            </tr>
            <tr>
              <td>Фильтр низких частот</td>
              <td>Highpass</td>
            </tr>
          </tbody>
        </table>
        <Divider>Модуляция (Modulation)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Phaser</td>
            </tr>
            <tr>
              <td>Флэнжер</td>
              <td>Flanger</td>
            </tr>
            <tr>
              <td>Хор/флэнжер</td>
              <td>Chorus/Flanger</td>
            </tr>
          </tbody>
        </table>
        <Divider>Снижение шума/восстановление (Noise Reduction/Restoration)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>DeHummer</td>
            </tr>
            <tr>
              <td>Автоматическое удаление щелчков</td>
              <td>Automatic Click Remover</td>
            </tr>
            <tr>
              <td>Удалить эхо</td>
              <td>DeReverb</td>
            </tr>
            <tr>
              <td>Уменьшение шума</td>
              <td>DeNoise</td>
            </tr>
          </tbody>
        </table>
        <Divider>Реверберация (Reverb)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Реверберация витка</td>
              <td>Convolution Reverb</td>
            </tr>
            <tr>
              <td>Реверберация окружающего звучания</td>
              <td>Surround Reverb</td>
            </tr>
            <tr>
              <td>Студийная реверберация</td>
              <td>Studio Reverb</td>
            </tr>
          </tbody>
        </table>
        <Divider>Особый (Special)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Loudness Radar</td>
            </tr>
            <tr>
              <td>Заполнить левый правым</td>
              <td>Fill Left with Right</td>
            </tr>
            <tr>
              <td>Заполнить правый левым</td>
              <td>Fill Right with Left</td>
            </tr>
            <tr>
              <td>Измеритель громкости</td>
              <td>Loudness Meter</td>
            </tr>
            <tr>
              <td>Искажение</td>
              <td>Distortion</td>
            </tr>
            <tr>
              <td>Мастеринг</td>
              <td>Mastering</td>
            </tr>
            <tr>
              <td>Набор для гитары</td>
              <td>GuitarSuite</td>
            </tr>
            <tr>
              <td>Обратить</td>
              <td>Invert</td>
            </tr>
            <tr>
              <td>Поменять каналы</td>
              <td>Swap Channels</td>
            </tr>
            <tr>
              <td>Расширитель вокала</td>
              <td>Vocal Enhancer</td>
            </tr>
          </tbody>
        </table>
        <Divider>Стереоизображения (Stereo Imagery)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Расширение стерео</td>
              <td>Stereo Expander</td>
            </tr>
          </tbody>
        </table>
        <Divider>Время и тональность (Time and Pitch)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Изменение высоты звука</td>
              <td>Pitch Shifter</td>
            </tr>
          </tbody>
        </table>
        <Divider>Аудиопереходы (Audio Transitions)</Divider>
        <Divider>Перекрытие звуков (Crossfade)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Постоянная мощность</td>
              <td>Constant Power</td>
            </tr>
            <tr>
              <td>Постоянное усиление</td>
              <td>Constant Gain</td>
            </tr>
            <tr>
              <td>Экспоненциальное затухание</td>
              <td>Exponential Fade</td>
            </tr>
          </tbody>
        </table>
        <Divider>Видеоэффекты (Video Effects)</Divider>
        <Divider>Видео (Video)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Метаданные и вставка временного кода</td>
              <td>Metadata & Timecode Burn-in</td>
            </tr>
            <tr>
              <td>Простой текст</td>
              <td>Simple Text</td>
            </tr>
            <tr>
              <td>Согласование SDR</td>
              <td>SDR Conform</td>
            </tr>
          </tbody>
        </table>
        <Divider>Видео с погружением (Immersive Video)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Градиенты цвета VR</td>
              <td>VR Color Gradients</td>
            </tr>
            <tr>
              <td>Повернуть сферу VR</td>
              <td>VR Rotate Sphere</td>
            </tr>
            <tr>
              <td>Плоскость в сферу VR</td>
              <td>VR Plate to Sphere</td>
            </tr>
            <tr>
              <td>Понижение уровня шума VR</td>
              <td>VR De-Noise</td>
            </tr>
            <tr>
              <td>Проекция VR</td>
              <td>VR Projection</td>
            </tr>
            <tr>
              <td>Размытие VR</td>
              <td>VR Blur</td>
            </tr>
            <tr>
              <td>Свечение VR</td>
              <td>VR Glow</td>
            </tr>
            <tr>
              <td>Увеличить четкость VR</td>
              <td>VR Sharpen</td>
            </tr>
            <tr>
              <td>Фрактальный шум VR</td>
              <td>VR Fractal Noise</td>
            </tr>
            <tr>
              <td>Хроматические абберации VR</td>
              <td>VR Chromatic Aberrations</td>
            </tr>
            <tr>
              <td>Цифровой сбой VR</td>
              <td>VR Digital Glitch</td>
            </tr>
          </tbody>
        </table>
        <Divider>Время (Time)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Время постеризации</td>
              <td>Posterize Time</td>
            </tr>
            <tr>
              <td>Эхо</td>
              <td>Echo</td>
            </tr>
          </tbody>
        </table>
        <Divider>Генерировать (Generate)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4-цветный градиент</td>
              <td>4-Color Gradient</td>
            </tr>
            <tr>
              <td>Блики</td>
              <td>Lens Flare</td>
            </tr>
            <tr>
              <td>Градиент</td>
              <td>Ramp</td>
            </tr>
            <tr>
              <td>Молния</td>
              <td>Lightning</td>
            </tr>
          </tbody>
        </table>
        <Divider>Изменить (Adjust)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>ProcAmp</td>
            </tr>
            <tr>
              <td>Извлечь</td>
              <td>Extract</td>
            </tr>
            <tr>
              <td>Уровни</td>
              <td>Levels</td>
            </tr>
            <tr>
              <td>Эффекты освещения</td>
              <td>Lighting Effects</td>
            </tr>
          </tbody>
        </table>
        <Divider>Искажение</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Вихревое смещение</td>
              <td>Turbulent Displace</td>
            </tr>
            <tr>
              <td>Волнообразная деформация</td>
              <td>Wave Warp</td>
            </tr>
            <tr>
              <td>Зеркало</td>
              <td>Mirror</td>
            </tr>
            <tr>
              <td>Искажение линзы</td>
              <td>Lens Distortion</td>
            </tr>
            <tr>
              <td>Привязка по углам</td>
              <td>Corner Pin</td>
            </tr>
            <tr>
              <td>Скручивание</td>
              <td>Twirl</td>
            </tr>
            <tr>
              <td>Смещение</td>
              <td>Offset</td>
            </tr>
            <tr>
              <td>Стабилизатор деформации</td>
              <td>Warp Stabilizer</td>
            </tr>
            <tr>
              <td>Сферизация</td>
              <td>Spherize</td>
            </tr>
            <tr>
              <td>Увеличение</td>
              <td>Magnify</td>
            </tr>
            <tr>
              <td>Устранение эффекта плавающего затвора</td>
              <td>Rolling Shutter Repair</td>
            </tr>
          </tbody>
        </table>
        <Divider>Канал (Channel)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Обратить</td>
              <td>Invert</td>
            </tr>
          </tbody>
        </table>
        <Divider>Контроль изображения (Image Correction)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Гамма-коррекция</td>
              <td>Gamma Correction</td>
            </tr>
            <tr>
              <td>Замена цвета</td>
              <td>Color Replace</td>
            </tr>
            <tr>
              <td>Фильтр цвета</td>
              <td>Color Pass</td>
            </tr>
            <tr>
              <td>Черное и белое</td>
              <td>Black & White</td>
            </tr>
          </tbody>
        </table>
        <Divider>Коррекция цвета (Color Correction)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>ASC CDL</td>
            </tr>
            <tr>
              <td>Яркость и контрастность</td>
              <td>Brightness & Contrast</td>
            </tr>
            <tr>
              <td>Ограничитель видео</td>
              <td>Video Limiter</td>
            </tr>
            <tr>
              <td>Оттенок</td>
              <td>Tint</td>
            </tr>
            <tr>
              <td>Цвет Lumetri</td>
              <td>Lumetri Color</td>
            </tr>
            <tr>
              <td>Цветовой баланс</td>
              <td>Color Balance</td>
            </tr>
          </tbody>
        </table>
        <Divider>Переход (Transition)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Градиентное вытеснение</td>
              <td>Gradient Wipe</td>
            </tr>
            <tr>
              <td>Линейное вытеснение</td>
              <td>Linear Wipe</td>
            </tr>
            <tr>
              <td>Растворение блоков</td>
              <td>Block Dissolve</td>
            </tr>
          </tbody>
        </table>
        <Divider>Перспектива (Perspective)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Базовый 3D</td>
              <td>Basic 3D</td>
            </tr>
            <tr>
              <td>Тень</td>
              <td>Drop Shadow</td>
            </tr>
          </tbody>
        </table>
        <Divider>Преобразовать (Transform)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Автоматическое центрирование</td>
              <td>Auto Reframe</td>
            </tr>
            <tr>
              <td>Зеркальное отражение по вертикали</td>
              <td>Vertical Flip</td>
            </tr>
            <tr>
              <td>Зеркальное отражение по горизонтали</td>
              <td>Horizontal Flip</td>
            </tr>
            <tr>
              <td>Обрезать</td>
              <td>Crop</td>
            </tr>
            <tr>
              <td>Преобразовать</td>
              <td>Transform</td>
            </tr>
            <tr>
              <td>Растушевка границ</td>
              <td>Edge Feather</td>
            </tr>
          </tbody>
        </table>
        <Divider>Прозрачное наложение (Keying)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Изменение альфа-канала</td>
              <td>Alpha Adjust</td>
            </tr>
            <tr>
              <td>Ключ Ultra</td>
              <td>Ultra Key</td>
            </tr>
            <tr>
              <td>Ключ маски дорожки</td>
              <td>Track Matte Key</td>
            </tr>
            <tr>
              <td>Ключ яркости</td>
              <td>Luma Key</td>
            </tr>
            <tr>
              <td>Цветовой ключ</td>
              <td>Color Key</td>
            </tr>
          </tbody>
        </table>
        <Divider>Размытие и резкость (Blur & Sharpen)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Контурная резкость</td>
              <td>Unsharp Mask</td>
            </tr>
            <tr>
              <td>Направленное размытие</td>
              <td>Directional Blur</td>
            </tr>
            <tr>
              <td>Размытие камеры</td>
              <td>Camera Blur</td>
            </tr>
            <tr>
              <td>Размытие по Гауссу</td>
              <td>Gaussian Blur</td>
            </tr>
            <tr>
              <td>Увеличить четкость</td>
              <td>Sharpen</td>
            </tr>
            <tr>
              <td>Уменьшить мерцание в чересстрочной развертке</td>
              <td>Reduce Interlace Flicker</td>
            </tr>
          </tbody>
        </table>
        <Divider>Стилизация (Stylize)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Выделение краев</td>
              <td>Find Edges</td>
            </tr>
            <tr>
              <td>Мазки кистью</td>
              <td>Brush Strokes</td>
            </tr>
            <tr>
              <td>Мозаика</td>
              <td>Mosaic</td>
            </tr>
            <tr>
              <td>Постеризация</td>
              <td>Posterize</td>
            </tr>
            <tr>
              <td>Проблесковый свет</td>
              <td>Strobe Light</td>
            </tr>
            <tr>
              <td>Репликация</td>
              <td>Replicate</td>
            </tr>
            <tr>
              <td>Свечение альфа-канала</td>
              <td>Alpha Glow</td>
            </tr>
            <tr>
              <td>Цветовое тиснение</td>
              <td>Color Emboss</td>
            </tr>
            <tr>
              <td>Шерховатые края</td>
              <td>Roughen Edges</td>
            </tr>
          </tbody>
        </table>
        <Divider>Утилита (Utility)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>ToneMapper</td>
            </tr>
            <tr>
              <td>Конвертер Cineon</td>
              <td>Cineon Converter</td>
            </tr>
          </tbody>
        </table>
        <Divider>Шум и зерно (Noise & Grain)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Шум</td>
              <td>Noise</td>
            </tr>
          </tbody>
        </table>
        <Divider>Видеопереходы (Video Transitions)</Divider>
        <Divider>Видео с погружением (Immersive Video)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Вытеснение диафрагмы VR</td>
              <td>VR Iris Wipe</td>
            </tr>
            <tr>
              <td>Градиентное вытеснение VR</td>
              <td>VR Gradient Wipe</td>
            </tr>
            <tr>
              <td>Масштабирование Мебиуса VR</td>
              <td>VR Mobius Zoom</td>
            </tr>
            <tr>
              <td>Световые лучи VR</td>
              <td>VR Light Rays</td>
            </tr>
            <tr>
              <td>Случайные прямоугольники VR</td>
              <td>VR Random Blocks</td>
            </tr>
            <tr>
              <td>Сферическое размытие VR</td>
              <td>VR Spherical Blur</td>
            </tr>
            <tr>
              <td>Утечки света VR</td>
              <td>VR Light Leaks</td>
            </tr>
            <tr>
              <td>Утечки цветности VR</td>
              <td>VR Chroma Leaks</td>
            </tr>
          </tbody>
        </table>
        <Divider>Вытеснение (Wipe)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Barn Doors</td>
            </tr>
            <tr>
              <td>-</td>
              <td>Inset</td>
            </tr>
            <tr>
              <td>Вытеснение</td>
              <td>Wipe</td>
            </tr>
            <tr>
              <td>Вытеснение в шахматном порядке</td>
              <td>Checker Wipe</td>
            </tr>
            <tr>
              <td>Вытеснение полосами</td>
              <td>Band Wipe</td>
            </tr>
            <tr>
              <td>Жалюзи</td>
              <td>Venetian Blinds</td>
            </tr>
            <tr>
              <td>Зигзагообразные блоки</td>
              <td>Zig-Zag Blocks</td>
            </tr>
            <tr>
              <td>Квадраты по спирали</td>
              <td>Spiral Boxes</td>
            </tr>
            <tr>
              <td>Клиновидное вытеснение</td>
              <td>Wedge Wipe</td>
            </tr>
            <tr>
              <td>Колесо</td>
              <td>Pinwheel</td>
            </tr>
            <tr>
              <td>Радиальное вытеснение</td>
              <td>Radial Wipe</td>
            </tr>
            <tr>
              <td>Разбрызгивание краски</td>
              <td>Paint Splatter</td>
            </tr>
            <tr>
              <td>Случайное вытеснение</td>
              <td>Random Wipe</td>
            </tr>
            <tr>
              <td>Случайные прямоугольники</td>
              <td>Random Blocks</td>
            </tr>
            <tr>
              <td>Циферблат</td>
              <td>Clock Wipe</td>
            </tr>
            <tr>
              <td>Шахматная доска</td>
              <td>CheckerBoard</td>
            </tr>
          </tbody>
        </table>
        <Divider>Диафрагма (Iris)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Диафрагма в виде квадрата</td>
              <td>Iris Box</td>
            </tr>
            <tr>
              <td>Диафрагма в виде креста</td>
              <td>Iris Cross</td>
            </tr>
            <tr>
              <td>Диафрагма в виде круга</td>
              <td>Iris Round</td>
            </tr>
            <tr>
              <td>Диафрагма в виде ромба</td>
              <td>Iris Diamond</td>
            </tr>
          </tbody>
        </table>
        <Divider>Листание страницы (Page Peel)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Листание страницы</td>
              <td>Page Peel</td>
            </tr>
            <tr>
              <td>Переворачивание страницы</td>
              <td>Page Turn</td>
            </tr>
          </tbody>
        </table>
        <Divider>Масштаб (Zoom)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Взаимное масштабирование</td>
              <td>Cross Zoom</td>
            </tr>
          </tbody>
        </table>
        <Divider>Растворение (Dissolve)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Аддитивный наплыв</td>
              <td>Additive Dissolve</td>
            </tr>
            <tr>
              <td>Монтаж морфа</td>
              <td>Morph Cut</td>
            </tr>
            <tr>
              <td>Неаддитивное растворение</td>
              <td>Non-Additive Dissolve</td>
            </tr>
            <tr>
              <td>Перекрестный наплыв</td>
              <td>Cross Dissolve</td>
            </tr>
            <tr>
              <td>Погружение в белый</td>
              <td>Dip to White</td>
            </tr>
            <tr>
              <td>Погружение в черный</td>
              <td>Dip to Black</td>
            </tr>
            <tr>
              <td>Растворение пленки</td>
              <td>Film Dissolve</td>
            </tr>
          </tbody>
        </table>
        <Divider>Скольжение (Slide)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Center Split</td>
            </tr>
            <tr>
              <td>-</td>
              <td>Split</td>
            </tr>
            <tr>
              <td>Выталкивание</td>
              <td>Push</td>
            </tr>
            <tr>
              <td>Лассо</td>
              <td>Whip</td>
            </tr>
            <tr>
              <td>Скольжение</td>
              <td>Slide</td>
            </tr>
            <tr>
              <td>Слайд-шоу по полосам</td>
              <td>Band Slide</td>
            </tr>
          </tbody>
        </table>
      </DetailsSummary>
    </div>
  );
};

export default PRWhereFind;
