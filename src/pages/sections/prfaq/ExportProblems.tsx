import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {ImageFigure} from "../../../components/ContentFigure";
import {AdditionWarning} from "../../../components/Additions";

const PRExportProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/ExportProblems.tsx" />
      <DetailsSummary title="Код ошибки: -1609629695 при экспорте">
        <p>
          Данная ошибка может возникнуть по совершенно разным причинам. У данной ошибки
          нет универсального решения, но от неё можно попробовать избавиться, если
          выполнить некоторые пункты ниже.
        </p>
        <AdditionWarning>
          Приведённые ниже способы{" "}
          <u>
            <b>не являются панацеей</b>
          </u>{" "}
          для решения и позволяют лишь исключить часть проблем при экспорте.
        </AdditionWarning>
        <ul>
          <li>
            Попробуйте отключить <mark>GPU-ускорение</mark> в настройках проекта на время.
            Для этого перейдите в{" "}
            <mark className="ui">File &gt; Project Settings &gt; General</mark> и выберите
            в пункте <mark className="ui">Renderer</mark> значение{" "}
            <mark className="ui">Mercury Playback Engine Software Only</mark>.
            <AdditionWarning>
              Скорость экспорта при переключении рендеринга на процессор может измениться
              в лучшую или худшую сторону.
            </AdditionWarning>
          </li>
          <li>
            Убедитесь в том, что вы не используете кириллицу в путях исходников, а также в
            пути для вывода файла. Программы от Adobe с давних пор не любят кириллицу в
            путях и эта проблема тянется и до последних версий.
          </li>
          <li>
            Если вы выводите в формате <mark className="video">H.264</mark> напрямую из{" "}
            <mark className="app">Premiere Pro</mark> - попробуйте выбрать кодек{" "}
            <mark className="video">Apple Prores 442</mark> для экспорта. Полученное видео
            вы можете переконвертировать любым способом, например через{" "}
            <mark className="app">Shutter Encoder</mark> или{" "}
            <mark className="app">Handbrake</mark>.
          </li>
          <li>
            Если вы выводите через <mark className="app">Media Encoder</mark>, то
            откажитесь от него в пользу экспорта напрямую из{" "}
            <mark className="app">Premiere Pro</mark>.
          </li>
          <li>
            Перед импортом чужих исходников в проект, рекомендуется их перекодировать в
            монтажный кодек, например в <mark className="video">Apple Prores 422</mark>,
            чтобы исключить различные проблемы при экспорте.
          </li>
          <li>
            При экспорте вы можете попробовать использовать <mark>Previews</mark>, если
            приведённые выше способы не помогают.
          </li>
        </ul>
        {/* TODO: написать при возможности ещё варианты решения */}
      </DetailsSummary>
      <DetailsSummary title="Почему созданные субтитры не отображаются на экспортированной секвенции?">
        <p>
          По умолчанию в <mark className="app">Premiere Pro</mark> отключен параметр{" "}
          <mark className="ui">Captions</mark> при экспорте, поэтому вы не экспортируете
          видео вместе с наложенными субтитрами. Чтобы включить наложение созданных
          субтитров - включите <mark className="ui">Captions</mark> в настройках экспорта,
          а затем начните экспорт вашей секвенции. При желании, вы можете сохранить свой
          пресет настроек, в котором <mark className="ui">Captions</mark> будет уже
          включен.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/enable_captions_export.png"
          imgTitle="Включение наложения субтитров"
          caption="Export"
        />
      </DetailsSummary>
      <DetailsSummary title="Что делать, если экспорт зависает на определённом моменте?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Экспортировал секвенцию, а оно занимает очень много места на диска. Как его сжать без потери качества?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="Почему при экспорте в .mp4 через встроенный кодек H.264 сохраняется файл с размером в 1 Кб?"
        tag="не экспортируется, битый файл"
      >
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="После экспорта у меня изменились цвета. Как избежать изменения цветов?"
        tag="исходник с айфона, hlg, rec709"
      >
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="Почему в предпросмотре Premiere Pro, Media Encoder и после экспорта видео смещается влево или вправо?"
        tag="медиаенкодер, медиаэнкодер, переместилось"
      >
        <p>
          Проверьте текущую версию программ, установленные на вашем устройстве. Вполне
          вероятно, что вы используете версии в промежутках от <mark>23.1</mark> до{" "}
          <mark>23.5</mark>, где присутствует такой неприятный баг смещения текущего
          кадра. Оно может возникнуть при использовании композиций из{" "}
          <mark className="app">After Effects</mark> через{" "}
          <mark className="plugin">Dynamic Link</mark> или при экспорте секвенции через{" "}
          <mark className="app">Media Encoder</mark>.
        </p>
        <p>
          Для решения данного бага просто обновите все программы от Adobe до{" "}
          <mark>23.6</mark> или свежее.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Экспортировал композицию и вижу в результате ужасный ступенчатый градиент. Как мне от него избавиться?"
        tag="колор бендинг, полоски, цвет, шум, глубина цвета"
      >
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу экспортировать видео в H.264 с нечётным разрешением?">
        <p>
          Вы не сможете экспортировать видео в <mark className="video">H.264</mark> или{" "}
          <mark className="video">H.265</mark> с нечётным разрешением из-за технических
          особенностей кодекса. Данные кодеки используют макроблоки с чётными значениями,
          поэтому чисто технически у вас не получится указать разрешение, например{" "}
          <mark>575</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/odd_resolution_error.png"
          imgTitle="Ошибка экспорта с нечётным разрешением"
          caption="Ошибка в AfterCodecs при экспорте с нечётным разрешением"
        />
        <p>
          Для решения проблемы просто укажите чётное значение пикселей у каждой стороны в
          свойствах композиции. Для этого откройте настройки композиции с помощью
          комбинации клавиш <mark className="key">Ctrl + K</mark> и укажите в параметрах
          ширины и высоты цифровое значение, которые делится на 2 без остатка. После
          изменения настроек композиции попробуйте начать экспорт заново.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Почему после экспорта в видеофайл отсутствует звук в видео?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PRExportProblems;
