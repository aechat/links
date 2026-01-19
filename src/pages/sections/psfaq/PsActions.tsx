import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ArticleMedia} from "../../../components/content/ArticleMedia";
import DetailsSummary from "../../../components/content/DetailsSummary";

const PsActions: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        tag="апскейл, топаз, качество, 4к, резкость, восстановить четкость"
        title="Какими средствами я могу улучшить качество изображений?"
      >
        <p>
          В последнее время появилось множество инструментов на основе искусственного
          интеллекта, которые помогают улучшить качество фото. Описанные здесь методы
          работают локально на вашем компьютере, поэтому для их корректной работы
          потребуются производительная видеокарта и мощный процессор.
        </p>
        <Divider>Улучшаем качество фотографий</Divider>
        <p>
          Первым в списке программ для апскейла изображений будет{" "}
          <mark className="app">Topaz Photo AI</mark> или{" "}
          <mark className="app">Topaz Gigapixel AI</mark>. По своей задаче эти программы
          похожи, а результаты могут сильно отличаться, поэтому время от времени
          приходится использовать обе программы.
        </p>
        <p>
          Для <mark className="app">Topaz Photo AI</mark> понадобится около{" "}
          <mark>50 ГБ</mark> свободного места на диске: примерно <mark>43 ГБ</mark> в{" "}
          <mark className="path">ProgramData</mark>, около <mark>2 ГБ</mark> в{" "}
          <mark className="path">Program Files</mark> и ещё около <mark>5 ГБ</mark> под
          временные файлы. Для <mark className="app">Topaz Gigapixel AI</mark> — около{" "}
          <mark>20 ГБ</mark>. И это без учёта будущих обновлений.
        </p>
        <Addition type="info">
          Про различия <mark className="app">Topaz Photo AI</mark> и{" "}
          <mark className="app">Topaz Gigapixel AI</mark> можно узнать{" "}
          <a href="https://www.topazlabs.com/pai-vs-gp">на официальном сайте</a>.
        </Addition>
        <ArticleMedia
          caption="Topaz Gigapixel AI"
          src="VMaYdjWqRRg"
          type="youtube"
        />
        <p>
          Если вы ищете бесплатный и open-source аналог{" "}
          <mark className="app">Topaz Gigapixel AI</mark> для улучшения изображений, есть
          более простой вариант — <mark className="app">Upscayl</mark>. Скачать его можно
          по <a href="https://upscayl.org/">этой ссылке</a>. Эта программа также
          использует генеративные модели для улучшения качества изображений.
        </p>
        <ArticleMedia
          caption="Upscayl"
          src="https://github.com/upscayl/upscayl/assets/25067102/ad2453b1-3c5a-4eb2-b992-4cf10e6a49f5"
          type="video"
        />
        <p>
          В качестве альтернативы можно использовать{" "}
          <mark className="app">Benvista PhotoZoom</mark> — программу с историей, уходящей
          корнями в нулевые. В последних версиях в неё добавили нейросетевые модели, хотя
          можно работать и без них. Благодаря собственным алгоритмам программа порой даёт
          результат даже лучше, чем упомянутые выше инструменты, и при этом занимает
          совсем немного места на диске.
        </p>
        <ArticleMedia
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

export default PsActions;
