import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/Addition";

import {VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";

import DetailsSummary from "../../../components/DetailsSummary";

import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

const PSActions: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/PSActions.tsx" />
      <DetailsSummary
        tag="апскейл, топаз, качество, 4к, резкость, восстановить четкость"
        title="Какими средствами я могу улучшить качество изображений?"
      >
        <p>
          В настоящее время существует множество способов улучшить качество фото с помощью
          нейросетей. Описанные здесь методы работают локально на вашем компьютере,
          поэтому для начала запаситесь производительной видеокартой и процессором.
        </p>
        <Divider>Улучшаем качество фотографий</Divider>
        <p>
          Первым в списке программ для апскейла изображений будет{" "}
          <mark className="app">Topaz Photo AI</mark> или{" "}
          <mark className="app">Topaz Gigapixel AI</mark>. По своей задаче эти программы
          похожи, а результаты могут сильно отличаться, поэтому время от времени
          приходится использовать обе программы. Для{" "}
          <mark className="app">Topaz Photo AI</mark> вам понадобится около 15 Гб на
          жестком диске, а для <mark className="app">Topaz Gigapixel AI</mark> - около 25
          Гб. И это без учета будущих обновлений.
        </p>
        <AdditionInfo>
          Про различия <mark className="app">Topaz Photo AI</mark> и{" "}
          <mark className="app">Topaz Gigapixel AI</mark> можно узнать{" "}
          <a href="https://www.topazlabs.com/pai-vs-gp">на официальном сайте</a>.
        </AdditionInfo>
        <YouTubeVideo
          caption="Topaz Gigapixel AI"
          link="VMaYdjWqRRg"
        />
        <p>
          Если вы ищете бесплатный и open-source аналог{" "}
          <mark className="app">Topaz Gigapixel AI</mark> для улучшения изображений, то
          есть более простой вариант - <mark className="app">Upscayl</mark>. Скачать его
          можно по <a href="https://upscayl.org/">этой ссылке</a>. Эта программа также
          использует генеративные модели для улучшения качества изображений.
        </p>
        <VideoFigure
          caption="Upscayl"
          styleClass="figure_macos-dark"
          videoSrc="https://github.com/upscayl/upscayl/assets/25067102/ad2453b1-3c5a-4eb2-b992-4cf10e6a49f5"
        />
        <p>
          В качестве альтернативы для улучшения качества изображений можно воспользоваться
          программой <mark className="app">Benvista PhotoZoom</mark>, первая версия
          которого вышла ещё в 2005 году. С относительно недавних пор в него также
          добавили генеративные модели, но можно обойтись и без них. Благодаря своим
          алгоритмам, результат в этой программе может быть даже лучше, чем в
          вышеупомянутых программах. И занимает всего лишь <mark>110 Мб</mark> на жестком
          диске.
        </p>
        <YouTubeVideo
          caption="Benvista Photozoom"
          link="woDDQ0xnt84"
        />
        <AdditionInfo>
          Скачать программы <mark className="app">Benvista PhotoZoom</mark>,{" "}
          <mark className="app">Topaz Photo AI</mark>,{" "}
          <mark className="app">Topaz Gigapixel AI</mark> и{" "}
          <mark className="app">Topaz Video AI</mark>, а также пакет плагинов{" "}
          <mark className="plugin">Boris FX Continuum</mark> можно в канале{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как и чем можно отретушировать модель на изображении?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как и чем можно сделать цветокоррекцию изображения?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как и чем можно заменить небо на фотографии?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как красиво размыть фон на фотографии?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как и чем можно сделать покадровые анимации в программе?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PSActions;
