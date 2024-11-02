import {Breadcrumb, Divider} from "antd";
import React from "react";
import {Link} from "react-router-dom";
import {Header} from "../components/Header";

import {ThemeModal} from "../components/modal/themeChanger";

import {AEActions} from "./sections/aefaq/Actions";
import {AEErrors} from "./sections/aefaq/Errors";
import {AEExport} from "./sections/aefaq/Export";
import {AEExportProblems} from "./sections/aefaq/ExportProblems";
import {AEFromNewbies} from "./sections/aefaq/FromNewbies";
import {AEImport} from "./sections/aefaq/Import";
import {AEInstallProblems} from "./sections/aefaq/InstallProblems";
import {AEInterface} from "./sections/aefaq/Interface";
import {AEPerfomance} from "./sections/aefaq/Perfomance";
import {AETips} from "./sections/aefaq/Tips";
import {AEWhereFind} from "./sections/aefaq/WhereFind";
import {AdditionWarning} from "../components/Additions";

const AEFaQ = () => {
  return (
    <div className="page">
      <ThemeModal />
      <Header title="aefaq" />
      <main className="main">
        <div className="faq-container-flex">
          <div className="faq-container">
            <div className="faq-title">
              <h1>aefaq</h1>
              <Breadcrumb
                items={[
                  {
                    title: <Link to="/">Главная</Link>,
                  },
                  {
                    title: <Link to="/aefaq">FaQ по Adobe After Effects</Link>,
                    menu: {
                      items: [
                        {
                          title: <Link to="/prfaq">FaQ по Adobe Premiere Pro</Link>,
                        },
                        {
                          title: <Link to="/psfaq">FaQ по Adobe Photoshop</Link>,
                        },
                      ],
                    },
                  },
                ]}
              />
            </div>
            <AdditionWarning>
              Данный раздел находится в разработке и иногда обновляется, поэтому могут
              быть неточности в действиях, выводах и тексте. Мнение автора и мнение
              читателя могут отличаться. Предложения по поводу улучшения материала вы
              можете отправить на <a href="mailto:m1sh3r@ya.ru">почту автора</a>.
            </AdditionWarning>
            {[
              ["1", "#wherefind", "Ищем полезности"],
              ["2", "#installproblems", "Проблемы с установкой"],
              ["3", "#fromnewbies", "Вопросы от новичков"],
              ["4", "#tips", "(не)Вредные советы"],
              ["5", "#import", "Про импорт"],
              ["6", "#interface", "Про интерфейс"],
              ["7", "#perfomance", "Про производительность"],
              ["8", "#actions", "Как и чем сделать то или то?"],
              ["9", "#errors", "Ошибки и предупреждения"],
              ["10", "#export", "Про экспорт"],
              ["11", "#exportproblems", "Проблемы при экспорте"],
            ].map(([key, href, title]) => (
              <div key={key}>
                <Divider
                  style={{fontSize: "clamp(12px, 2vw, 14px)"}}
                  orientation="right"
                >
                  {title}
                </Divider>
                {(() => {
                  switch (href) {
                    case "#wherefind":
                      return <AEWhereFind />;
                    case "#installproblems":
                      return <AEInstallProblems />;
                    case "#fromnewbies":
                      return <AEFromNewbies />;
                    case "#tips":
                      return <AETips />;
                    case "#import":
                      return <AEImport />;
                    case "#interface":
                      return <AEInterface />;
                    case "#perfomance":
                      return <AEPerfomance />;
                    case "#actions":
                      return <AEActions />;
                    case "#errors":
                      return <AEErrors />;
                    case "#export":
                      return <AEExport />;
                    case "#exportproblems":
                      return <AEExportProblems />;
                  }
                })()}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="nav-container">
          <Anchor
            replace
            targetOffset={targetOffset}
            items={[
              ...[
                ["1", "#wherefind", "Ищем полезности"],
                ["2", "#installproblems", "Проблемы с установкой"],
                ["3", "#fromnewbies", "Вопросы от новичков"],
                ["4", "#tips", "(не)Вредные советы"],
                ["5", "#import", "Про импорт"],
                ["6", "#interface", "Про интерфейс"],
                ["7", "#perfomance", "Про производительность"],
                ["8", "#actions", "Как и чем сделать то или то?"],
                ["9", "#errors", "Ошибки и предупреждения"],
                ["10", "#export", "Про экспорт"],
                ["11", "#exportproblems", "Проблемы при экспорте"],
              ].map(([key, href, title]) => ({
                key,
                href,
                title,
              })),
            ]}
          />
        </div> */}
      </main>
    </div>
  );
};
export default AEFaQ;
