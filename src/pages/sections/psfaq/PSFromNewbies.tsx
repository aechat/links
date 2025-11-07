import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/Addition";

import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";

import DetailsSummary from "../../../components/DetailsSummary";

const PSFromNewbies: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary
        tag="для новичка, первый раз, только открыл"
        title="Первый раз установил Photoshop, с чего бы мне начать обучение?"
      >
        <p>
          <mark className="app">Adobe Photoshop</mark> сейчас широко применяется во многих
          сферах, включая графический дизайн, фотографию, веб-дизайн и иллюстрации. Если
          вы ещё не определились с вектором направления работы с программой, хотите просто
          изучить его функционал и посмотреть примеры работы в нём - советую пройти курс{" "}
          <a href="https://www.youtube.com/playlist?list=PL_jKgaFUK_61p1yXULw7KPi6HGpyXKTWx">
            Фотошоп с нуля
          </a>{" "}
          от <a href="https://www.youtube.com/@Photofoxchannel">PhotoFox</a>.
        </p>
        <YouTubeVideo
          caption='Курс "Фотошоп с нуля"'
          link="-IqjBmVaApg"
        />
        <p>
          Если вы уже уверенно обрабатываете и создаёте изображения в{" "}
          <mark className="app">Adobe Photoshop</mark>, и хотите узнать что-то новое, то
          рекомендую заглянуть на каналы и плейлисты ниже.
        </p>
        <div className="flexible-links">
          <a href="https://www.youtube.com/playlist?list=PL3ysV0s8Gs4UpuSH_wx2vchA-HzRXNcFv">
            &quot;Уроки Photoshop для продвинутых&quot; от Study Kvo
          </a>
          <a href="https://www.youtube.com/playlist?list=PLrsq-o51mMFHXOE0wRrDpb0l4mj9EjTkS">
            Фишки и лайфхаки от VideoSmile
          </a>
          <a href="https://www.youtube.com/@grafon/videos">GRAFON Уроки фотошопа</a>
          <a href="https://www.youtube.com/@ps-master/videos">
            Фотошопер - уроки фотошопа
          </a>
          <a href="https://www.youtube.com/@IntuitiveDesigns/videos">Intuitive Designs</a>
          <a href="https://www.youtube.com/@Texturelabs/videos">Texturelabs</a>
          <a href="https://www.youtube.com/@PANTERvision/videos">P A N T E R</a>
          <a href="https://www.youtube.com/@thazero/videos">ThaZero</a>
        </div>
        <p style={{textAlign: "center", fontSize: "0.95rem", fontWeight: "700"}}>
          Надеюсь, вы найдёте что-то полезное для себя. Удачи в ваших начинаниях!
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="сленг, жаргон, сокращения, словосочетания, говор"
        title="Какие популярные термины есть у пользователей программы?"
      >
        <p>{/* FIXME: написать!! по аналогии как с терминами в аефаке */}</p>
      </DetailsSummary>
      >
        <p>
        </p>
      </DetailsSummary>
      <DetailsSummary title="А есть список популярных комбинаций клавиш для работы в Photoshop?">
      <DetailsSummary
        tag="хоткеи, горячие клавиши, шорткаты, ускорение работы"
        title="А есть список популярных комбинаций клавиш?"
      >
        <p>
          Горячие клавиши могут помочь ускорить рутинный процесс нахождения нужной функции
          программы, поэтому в этой статье в таблицах собраны популярные у многих
          пользователей комбинации.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              В таблице приведены комбинации для устройств на <mark>Windows</mark>. На{" "}
              <mark>macOS</mark> <mark className="key">Ctrl</mark> равен{" "}
              <mark className="key">Command</mark>, а <mark className="key">Alt</mark>{" "}
              равен <mark className="key">Option</mark>.
            </li>
            <li>
              Более подробный список комбинаций клавиш вы можете прочесть на{" "}
              <a href="https://helpx.adobe.com/ru/photoshop/using/default-keyboard-shortcuts.html">
                официальном сайте Adobe
              </a>{" "}
              или в <mark className="ui">Edit &gt; Keyboard Shortcuts</mark>.
            </li>
          </ul>
        </AdditionInfo>
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        tag="что нового, фишки, обновления, апдейты, патчноуты"
        title="Где я могу узнать о нововведениях в обновлениях программы?"
      >
        <p>
          Обычно на сайте <mark>Adobe</mark> в день выхода публичной стабильной версии
          выкладываются основные нововведения. Это сделано для того, чтобы каждый прохожий
          не спрашивал из каждого угла <mark className="quote">А что обновилось то?</mark>
          . Ещё время от времени <mark>Adobe</mark> выкладывает на сайт список выявленных
          неполадок и старается приложить к ним временное решение.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/photoshop/using/whats-new.html">
            Что нового в Photoshop последних выпусков
          </a>
          <a href="https://helpx.adobe.com/photoshop/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/photoshop/kb/known-issues.html">
            Выявленные неполадки в Photoshop
          </a>
        </div>
      </DetailsSummary>
      <DetailsSummary
        tag="изменить язык, смена языка, установка английской версии"
        title="Почему мне с каждого угла советуют поставить английский язык программы и как это сделать?"
      >
        <p>
          Удивительно, но в <mark className="app">Adobe Photoshop</mark> можно сменить
          язык интерфейса, и многие оставляют его на русском по двум причинам. Первая -
          пользователю может быть удобно, что весь интерфейс программы переведено. Вторая
          - в некоторых <mark className="word">народных</mark> версиях программы, в
          частности при установке репака от <mark>KpoJluK</mark> при смене языка при
          установке на английский он попросту не применяется.
        </p>
        <p>
          На практике русская локализация <mark className="app">Adobe Photoshop</mark>{" "}
          может вставить палки в колёса пользователю. Почему? Например, многие{" "}
          <mark className="plugin">Actions</mark> жёстко завязаны на английские названия
          слоёв и команд - если названия не совпадают, скрипт ломается. Также бывают
          случаи, когда сторонние плагины и эффекты тоже могут ломаться из-за русской
          локализации. Ещё в большинстве обучающих видео часто используется английская
          локализация, это тоже решающий фактор, особенно если вы только начинаете изучать
          программу.{" "}
          <i style={{opacity: "0.5"}}>
            Конечно, не в такой степени часто, как для{" "}
            <mark className="app">Adobe After Effects</mark> и{" "}
            <mark className="app">Adobe Premiere Pro</mark>, но всё же.
          </i>
        </p>
        <Divider>Меняем язык в &quot;народной&quot; версии программы</Divider>
        <p>
          Для быстрой смены языка - откройте контекстное меню{" "}
          <mark className="ui">Редактирование &gt; Настройки</mark> и выберите в нём{" "}
          <mark className="ui">Интерфейс</mark>.
        </p>
        <ImageFigure
          caption="Adobe Photoshop"
          imgSrc="images/photoshop/редактирование_настройки_интерфейс.png"
          imgTitle="Открытие настроек интерфейса"
          styleClass="figure_windows-light"
        />
        <p>
          Затем в открывшемся окне выберите в параметре <mark className="ui">Язык</mark>{" "}
          значение <mark className="ui">English</mark>. После этого перезагрузите
          программу и теперь вы можете работать с английской локализацией{" "}
          <mark className="app">Adobe Photoshop</mark>.
        </p>
        <ImageFigure
          caption="Установки"
          imgSrc="images/photoshop/change_language.png"
          imgTitle="Выбор языка в настройках программы"
          styleClass="figure_windows-light"
        />
        <Divider>
          Альтернативный способ смены языка для &quot;народной&quot; версии программы
        </Divider>
        <Divider>Меняем язык программы с помощью Creative Cloud</Divider>
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Для чего нужно использовать Photoshop, а для чего Illustrator?">
        <p>{/* FIXME: написать!! фотошоп - растр, люстра - вектор */}</p>
        <p>Некоторые новички...</p>
        <ul>
          <li>
            <mark className="app">Adobe Photoshop</mark> - это прежде всего программа для
            редактирования растровых изображений, которые состоят из пикселей. Он идеально
            подходит для обработки фотографий, ретуши и создания композиций из различных
            изображений.
          </li>
          <li>
            <mark className="app">Adobe Illustrator</mark> - это векторный редактор,
            который работает с графикой, состоящей из линий и кривых. Векторная графика
            может масштабироваться до любого размера без потери качества, что делает{" "}
            <mark className="app">Adobe Illustrator</mark> идеальным для создания
            логотипов, иконок, шрифтов и инфографики, которые должны оставаться четкими
            при изменении размера. В отличие от{" "}
            <mark className="app">Adobe Photoshop</mark>,{" "}
            <mark className="app">Adobe Illustrator</mark> не предназначен для детальной
            обработки фотографий и сложного редактирования растровых изображений.
          </li>
          <li></li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title="Как я могу быстро изменить размер изображения или холста?">
        <p>{/* FIXME: */}</p>
        <VideoFigure
          caption="Adobe Photoshop"
          styleClass="figure_windows-light"
          videoSrc="images/photoshop/change_image_size.mp4"
        />
        <VideoFigure
          caption="Adobe Photoshop"
          styleClass="figure_windows-light"
          videoSrc="images/photoshop/change_canvas_size.mp4"
        />
        <p>
          Разница между <mark className="ui">Image Size</mark> и{" "}
          <mark className="ui">Canvas Size</mark> заключается в том, что в...
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PSFromNewbies;
