import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ContentFigure} from "../../../components/content/ContentFigure";
import DetailsSummary from "../../../components/content/DetailsSummary";

const PSActions: React.FC = () => {
  return (
    <div className="faq-content">
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
          <mark className="app">Topaz Photo AI</mark> вам понадобится около 15 ГБ на
          жестком диске, а для <mark className="app">Topaz Gigapixel AI</mark> - около 25
          ГБ. И это без учета будущих обновлений.
        </p>
        <Addition type="info">
          Про различия <mark className="app">Topaz Photo AI</mark> и{" "}
          <mark className="app">Topaz Gigapixel AI</mark> можно узнать{" "}
          <a href="https://www.topazlabs.com/pai-vs-gp">на официальном сайте</a>.
        </Addition>
        <ContentFigure
          caption="Topaz Gigapixel AI"
          src="VMaYdjWqRRg"
          type="youtube"
        />
        <p>
          Если вы ищете бесплатный и open-source аналог{" "}
          <mark className="app">Topaz Gigapixel AI</mark> для улучшения изображений, то
          есть более простой вариант - <mark className="app">Upscayl</mark>. Скачать его
          можно по <a href="https://upscayl.org/">этой ссылке</a>. Эта программа также
          использует генеративные модели для улучшения качества изображений.
        </p>
        <ContentFigure
          caption="Upscayl"
          src="https://github.com/upscayl/upscayl/assets/25067102/ad2453b1-3c5a-4eb2-b992-4cf10e6a49f5"
          theme="dark"
          type="video"
          variant="mac"
        />
        <p>
          В качестве альтернативы для улучшения качества изображений можно воспользоваться
          программой <mark className="app">Benvista PhotoZoom</mark>, первая версия
          которого вышла ещё в 2005 году. С относительно недавних пор в него также
          добавили генеративные модели, но можно обойтись и без них. Благодаря своим
          алгоритмам, результат в этой программе может быть даже лучше, чем в
          вышеупомянутых программах. И занимает всего лишь <mark>110 МБ</mark> на жестком
          диске.
        </p>
        <ContentFigure
          caption="Benvista Photozoom"
          src="woDDQ0xnt84"
          type="youtube"
        />
        <Addition type="info">
          Скачать программы <mark className="app">Benvista PhotoZoom</mark>,{" "}
          <mark className="app">Topaz Photo AI</mark>,{" "}
          <mark className="app">Topaz Gigapixel AI</mark> и{" "}
          <mark className="app">Topaz Video AI</mark>, а также пакет плагинов{" "}
          <mark className="plugin">Boris FX Continuum</mark> можно в канале{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary title="Как и чем можно отретушировать фото?">
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary title="Как и чем можно сделать цветокоррекцию?">
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary title="Как и чем можно заменить небо?">
        {/* FIXME: */}
      </DetailsSummary>
      <DetailsSummary title="Как красиво размыть фон?">{/* FIXME: */}</DetailsSummary>
      <DetailsSummary title="Как и чем можно сделать покадровые анимации?">
        {/* FIXME: написать!! */}
      </DetailsSummary>
    </div>
  );
};

export default PSActions;
