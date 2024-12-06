import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

const AETips: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="tips"
    >
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Tips.tsx" />
      <DetailsSummary
        title="Как мне сделать историю изменений файлов и в случае чего - откатываться до
            предыдущих версий?"
      >
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какие плагины мне стоит поставить для упрощения работы?">
        <AdditionWarning>
          Сразу хочу предупредить - не надо скачивать все плагины мира подряд, особенно
          когда вы только установили программу. Для начала разберитесь с тем, что вам
          действительно нужно.
        </AdditionWarning>
        <p>
          Плагины - вещь действительно интересная и полезная, особенно когда оно ускоряет
          работу за счёт автоматизации рутинных задач. Вот мой личный топ плагинов,
          которые я ставлю при каждой установке.
        </p>
        <p style={{fontWeight: "bold"}}>
          Для совместимости с чужими проектами и не только я ставлю:
        </p>
        <ul>
          <li>
            <mark className="plugin">BorisFX Sapphire</mark> и{" "}
            <mark className="plugin">BorisFX Continuum</mark> - база из всех баз. Особенно
            популярен у <del>мамкиных</del> эдиторов, они без него жить не могут.
          </li>
          <li>
            <mark className="plugin">BorisFX Mocha Pro</mark> - расширенная версия
            стандартного плагина <mark className="plugin">Mocha AE</mark>.
          </li>
          <li>
            Плагины от Red Giant: <mark className="plugin">Magic Bullet Suite</mark>,{" "}
            <mark className="plugin">Trapcode Suite</mark>,{" "}
            <mark className="plugin">VFX Suite</mark> и{" "}
            <mark className="plugin">Universe</mark> - сборник плагинов для цветокора,
            частиц и различных эффектов. Особенно хорош{" "}
            <mark className="plugin">Primatte Keyer</mark> и{" "}
            <mark className="plugin">Supercomp</mark> для решения повседневных задач по
            композингу.
          </li>
          <li>
            <mark className="plugin">Element 3D от VideoCopilot</mark> - даже после выхода
            Advanced 3D - этот плагин не теряет актуальности в плане импорта 3D-моделей в
            вашу композицию.
          </li>
          <li>
            <mark className="plugin">Deep Glow</mark> - даёт хорошее свечение, но неплохо
            замедляет скорость экспорта. Если производительность проекта вам очень важна -
            замените его на более простые решения.
          </li>
        </ul>
        <p style={{fontWeight: "bold"}}>Из инструментов можно поставить:</p>
        <ul>
          <li>
            <mark className="plugin">FXConsole от VideoCopilot</mark> - всплывающая
            панелька для быстрого поиска и применения эффектов и пресетов.
          </li>
          <li>
            <mark className="plugin">Flow</mark> - расширение для быстрого применения
            интерполяции ключей. Если создать свои пресеты, которыми часто пользуешься в
            анимации - ускоришь свою рутинную работу в несколько раз.
          </li>
          <li>
            <mark className="plugin">Motion Tools Pro</mark> - набор инструментов для
            анимации. Полностью настраиваемый.
          </li>
          <li>
            <mark className="plugin">Keystone</mark> - инструмент для манипуляций над
            ключевыми кадрами и слоями на таймлайне: растягивание, смещение, выравнивание
            и много чего другого.{" "}
          </li>
          <li>
            <mark className="plugin">True Comp Duplicator</mark> - скрипт для дублирования
            композиций с нужными параметрами.
          </li>
          <li>
            <mark className="plugin">rd_compsetter</mark> - скрипт для одновременного
            изменения параметров нескольких композиций.
          </li>
          <li>
            <mark className="plugin">Workflower</mark> - плагин для организации слоёв на
            таймлайне, позволяет делать папки со слоями без прекомпоза.{" "}
            <AdditionDanger>
              Не рекомендуется передавать проект с использованием этого плагина другим
              лицам, у которых не установлен этот плагин. Иначе столкнётесь с неожиданными
              результатами.
            </AdditionDanger>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title="Хочу обновиться до более новой версии. Как мне перенести плагины без танцев с бубнами?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как мне закэшировать композиции так, чтобы я в финальном рендере их заново не просчитывал?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какой компьютер или ноутбук стоит взять для работы в After Effects?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какую версию After Effects мне лучше всего поставить?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AETips;
