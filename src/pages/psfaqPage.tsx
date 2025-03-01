import React, {Suspense, lazy, useEffect, useState} from "react";
import {Breadcrumb, Divider} from "antd";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet-async";
import {SearchInPage, SearchProvider} from "../components/features/SearchInPage";
import SupportDonut from "../components/modal/SupportDonut";
import CopyToClipboard from "../components/features/CopyToClipboard";
import {CircularProgress} from "@mui/material";
import {generateAnchorId} from "../components/DetailsSummary";
import {AdditionDanger} from "../components/Additions";

const PSActions = lazy(() => import("./sections/psfaq/Actions"));

const PSErrors = lazy(() => import("./sections/psfaq/Errors"));

const PSExport = lazy(() => import("./sections/psfaq/Export"));

const PSExportProblems = lazy(() => import("./sections/psfaq/ExportProblems"));

const PSFromNewbies = lazy(() => import("./sections/psfaq/FromNewbies"));

const PSImport = lazy(() => import("./sections/psfaq/Import"));

const PSInstallProblems = lazy(() => import("./sections/psfaq/InstallProblems"));

const PSInterface = lazy(() => import("./sections/psfaq/Interface"));

const PSPerformance = lazy(() => import("./sections/psfaq/Performance"));

const PSWhereFind = lazy(() => import("./sections/psfaq/WhereFind"));

const PSFaQ = () => {
  useEffect(() => {
    CopyToClipboard.enableAutoCopy();
  }, []);

  const sections = [
    {key: "1", title: "Ищем полезности", id: "where-find", component: PSWhereFind},
    {
      key: "2",
      title: "Проблемы с установкой",
      id: "install-problems",
      component: PSInstallProblems,
    },
    {
      key: "3",
      title: "Вопросы от новичков",
      id: "from-newbies",
      component: PSFromNewbies,
    },
    {key: "4", title: "Импорт", id: "import", component: PSImport},
    {key: "5", title: "Интерфейс", id: "interface", component: PSInterface},
    {
      key: "6",
      title: "Производительность",
      id: "performance",
      component: PSPerformance,
    },
    {
      key: "7",
      title: "Как и чем?",
      id: "actions",
      component: PSActions,
    },
    {key: "8", title: "Ошибки и предупреждения", id: "errors", component: PSErrors},
    {key: "9", title: "Экспорт", id: "export", component: PSExport},
    {
      key: "10",
      title: "Проблемы при экспорте",
      id: "export-problems",
      component: PSExportProblems,
    },
  ];

  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const [loadedCount, setLoadedCount] = useState(0);
  useEffect(() => {
    if (loadedCount === sections.length) {
      setIsPageLoaded(true);
      generateAnchorId();
    }
  }, [loadedCount, sections.length]);
  useEffect(() => {
    const loadSections = async () => {
      for (const section of sections) {
        await new Promise<void>((resolve) => {
          setVisibleSections((prev) => [...prev, section.key]);
          setTimeout(resolve, 10);
        });
      }
    };
    loadSections();
  }, []);

  return (
    <div className="page">
      <SearchProvider isPageLoaded={isPageLoaded}>
        <Helmet>
          <title>psfaq@aechat</title>
          <link
            rel="icon"
            type="image/svg+xml"
            href="psfaq.svg"
          />
          <meta
            name="description"
            content="Ответы на частые вопросы от пользователей Photoshop"
          />
          <meta
            name="keywords"
            content="чат, ссылки, Photoshop, шаблоны Photoshop, AETemp, Adobe, советы Photoshop, FAQ Photoshop, склад стройматериалов, помощь, графический дизайн, редактирование, photo editing, ретушь, фотограф, фотография, дизайн, web design, UI/UX, создание логотипов, создание иконок, создание баннеров, создание визиток, создание буклетов, создание флаеров, создание постеров, создание визуальных эффектов, создание 3D-графики, создание анимации, видеографика, motion design, инфографика, 3D-анимация, видеоклипы, рекламные ролики, видеопрезентации"
          />
          <meta
            property="og:type"
            content="website"
          />
          <meta
            property="og:url"
            content="https://aechat.ru/"
          />
          <meta
            property="og:title"
            content="psfaq@aechat"
          />
          <meta
            property="og:description"
            content="Ответы на частые вопросы от пользователей Photoshop"
          />
        </Helmet>
        <Header title="psfaq" />
        <motion.main
          className="main"
          initial={{x: 100, y: 0, opacity: 0}}
          animate={{x: 0, y: 0, opacity: 1}}
          exit={{x: 0, y: 50, opacity: 0}}
          transition={{duration: 0.5, type: "spring", ease: [0.075, 0.82, 0.165, 1]}}
        >
          <div className="faq-container-flex">
            <div className="faq-container">
              <div className="faq-title">
                <h1>psfaq</h1>
                <Breadcrumb
                  items={[
                    {
                      title: <Link to="/psfaq">FAQ по Adobe Photoshop</Link>,
                      menu: {
                        items: [
                          {title: <Link to="/aefaq">FAQ по Adobe After Effects</Link>},
                          {title: <Link to="/prfaq">FAQ по Adobe Premiere Pro</Link>},
                        ],
                      },
                    },
                  ]}
                />
              </div>
              <SupportDonut />
              <AdditionDanger>
                На текущий момент данная страница ещё не полностью готова. В пунктах могут
                быть ошибки или неполная информация.
              </AdditionDanger>
              {sections.map(({key, title, component: Component, id}) =>
                visibleSections.includes(key) ? (
                  <div
                    key={key}
                    id={id}
                  >
                    <Suspense
                      fallback={
                        <div style={{height: "75vh"}}>
                          <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            style={{
                              padding: "20px",
                              display: "flex",
                              marginBlock: "20px",
                              flexDirection: "row",
                              alignItems: "center",
                              flexWrap: "wrap",
                              gap: "15px",
                              justifyContent: "center",
                            }}
                            transition={{
                              duration: 0.5,
                              ease: [0.075, 0.82, 0.165, 1],
                              delay: 1,
                            }}
                          >
                            <CircularProgress sx={{color: "var(--accent)"}} />
                            <motion.p
                              initial={{opacity: 0}}
                              animate={{opacity: 0.5}}
                              transition={{
                                duration: 1,
                                ease: [0.075, 0.82, 0.165, 1],
                              }}
                              style={{
                                margin: "10px",
                                fontSize: "0.875rem",
                                maxWidth: "400px",
                              }}
                            >
                              {
                                [
                                  "Всё ещё грузим полезную информацию",
                                  "Убедитесь в том, что ваше устройство подключено к Интернету",
                                  "Секция всё ещё грузится, наберитесь терпения",
                                  "Надеемся, что код сайта не поломался",
                                  "Попробуйте перезагрузить страницу, если секция всё ещё грузится",
                                  "Пока секции грузятся, дам совет: в любой непонятной ситуации - делай прекомпоз",
                                  "Прочтите заклинание 'фастус информейтус лоадинг', если секция слишком долго грузится",
                                  "Когда-нибудь секция загрузится и все будут жить счастливо...",
                                ][Math.floor(Math.random() * 8)]
                              }
                            </motion.p>
                          </motion.div>
                        </div>
                      }
                    >
                      <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                          duration: 0.5,
                          type: "spring",
                          ease: [0.075, 0.82, 0.165, 1],
                          delay: 0.1,
                        }}
                        onAnimationComplete={() => setLoadedCount((prev) => prev + 1)}
                      >
                        <Divider
                          style={{
                            color: "var(--text-color)",
                            textTransform: "uppercase",
                            fontWeight: "800",
                          }}
                          orientation="right"
                        >
                          {title}
                        </Divider>
                        <Component />
                      </motion.div>
                    </Suspense>
                  </div>
                ) : null
              )}
              <Footer
                title="aechat & dwchat"
                initialYear={2023}
              />
            </div>
          </div>
        </motion.main>
        <SearchInPage sections={sections} />
      </SearchProvider>
    </div>
  );
};
export default PSFaQ;
