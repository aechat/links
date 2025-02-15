import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {YouTubeVideo} from "../../../components/ContentFigure";

const PSFromNewbies: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/FromNewbies.tsx" />
      <DetailsSummary
        title="Первый раз установил Photoshop, с чего бы мне начать обучение?"
        tag="для новичка, первый раз, только открыл"
      >
        <p>
          <mark className="app">Photoshop</mark> сейчас широко применяется во многих
          сферах, включая графический дизайн, фотографию, веб-дизайн и иллюстрации. Если
          вы ещё не определились с вектором направления работы с программой и хотите
          просто изучить его функционал и посмотреть примеры работы в нём, то советую
          пройти курс{" "}
          <a href="https://www.youtube.com/playlist?list=PL_jKgaFUK_61p1yXULw7KPi6HGpyXKTWx">
            Фотошоп с нуля
          </a>{" "}
          от <a href="https://www.youtube.com/@Photofoxchannel">PhotoFox</a>.
        </p>
        <YouTubeVideo
          link="-IqjBmVaApg"
          caption='Курс "Фотошоп с нуля"'
        />
        <p>
          Если вы уже уверенно обрабатываете и создаёте изображения в{" "}
          <mark className="app">Photoshop</mark>, и хотите узнать что-то новое, то
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
        title="Не понимаю термины от других пользователей Photoshop, проясните!"
        tag="сленг, жаргон, сокращения, словосочетания, говор"
      >
        <p>{/* FIXME: написать!! по аналогии как с терминами в аефаке */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="Где я могу узнать об нововведениях в обновлениях Photoshop?"
        tag="что нового, фишки, обновления, апдейт"
      >
        <p>
          Обычно на сайте Adobe в день выхода публичной стабильной версии выкладываются
          основные нововведения. Это сделано для того, чтобы каждый прохожий не спрашивал
          из каждого угла <mark>&quot;А что обновилось то?&quot;</mark>. Ещё время от
          времени Adobe выкладывает на сайт список выявленных неполадок и старается
          приложить к ним временное решение.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/ru/photoshop/using/whats-new.html">
            Что нового в Photoshop последних выпусков
          </a>
          <a href="https://helpx.adobe.com/ru/photoshop/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/ru/photoshop/kb/known-issues.html">
            Выявленные неполадки в Photoshop
          </a>
        </div>
      </DetailsSummary>
      <DetailsSummary title="А есть список популярных комбинаций клавиш для работы в Photoshop?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="Зачем мне с каждого угла советуют поставить английский язык программы и как мне это сделать?"
        tag="изменить язык, смена языка, установка английской версии"
      >
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Для чего нужно использовать Photoshop, а для чего Illustrator?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PSFromNewbies;
