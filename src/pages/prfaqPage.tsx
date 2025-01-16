import React, {Suspense, lazy, useEffect, useState} from "react";
import {Breadcrumb, Divider} from "antd";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet-async";
import {SearchInPage, SearchProvider} from "../components/features/SearchInPage";
import {AdditionDanger} from "../components/Additions";
import SupportDonut from "../components/modal/SupportDonut";
import CopyMark from "../components/features/CopyMark";
import {CircularProgress} from "@mui/material";
import {generateAnchorId} from "../components/DetailsSummary";

const PRActions = lazy(() => import("./sections/prfaq/Actions"));

const PRErrors = lazy(() => import("./sections/prfaq/Errors"));

const PRExport = lazy(() => import("./sections/prfaq/Export"));

const PRExportProblems = lazy(() => import("./sections/prfaq/ExportProblems"));

const PRFromNewbies = lazy(() => import("./sections/prfaq/FromNewbies"));

const PRImport = lazy(() => import("./sections/prfaq/Import"));

const PRInstallProblems = lazy(() => import("./sections/prfaq/InstallProblems"));

const PRInterface = lazy(() => import("./sections/prfaq/Interface"));

const PRPerformance = lazy(() => import("./sections/prfaq/Performance"));

const PRTips = lazy(() => import("./sections/prfaq/Tips"));

const PRWhereFind = lazy(() => import("./sections/prfaq/WhereFind"));

const PRFaQ = () => {
  useEffect(() => {
    CopyMark.enableAutoCopy();
  }, []);

  const sections = [
    {key: "1", title: "Ищем полезности", id: "where-find", component: PRWhereFind},
    {
      key: "2",
      title: "Проблемы с установкой",
      id: "install-problems",
      component: PRInstallProblems,
    },
    {
      key: "3",
      title: "Вопросы от новичков",
      id: "from-newbies",
      component: PRFromNewbies,
    },
    {key: "4", title: "(не)Вредные советы", id: "tips", component: PRTips},
    {key: "5", title: "Импорт", id: "import", component: PRImport},
    {key: "6", title: "Интерфейс", id: "interface", component: PRInterface},
    {
      key: "7",
      title: "Производительность",
      id: "performance",
      component: PRPerformance,
    },
    {key: "8", title: "Как и чем?", id: "actions", component: PRActions},
    {key: "9", title: "Ошибки и предупреждения", id: "errors", component: PRErrors},
    {key: "10", title: "Экспорт", id: "export", component: PRExport},
    {
      key: "11",
      title: "Проблемы при экспорте",
      id: "export-problems",
      component: PRExportProblems,
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
          <title>prfaq@aechat</title>
          <link
            rel="icon"
            type="image/svg+xml"
            href="prfaq.svg"
          />
          <meta
            name="description"
            content="Ответы на частые вопросы от пользователей Premiere Pro"
          />
          <meta
            name="keywords"
            content="чат, ссылки, Adobe Premiere Pro, шаблоны Adobe Premiere Pro, AETemp, советы Adobe Premiere Pro, FAQ Adobe Premiere Pro, склад стройматериалов, помощь, видеомонтаж, видеоредактирование, видеопроизводство, видеоэффекты, спецэффекты, звукорежировка, звукомонтаж, звуковое оформление, видеоуроки, обучение, видеокурсы, видеоуроки, курсы по видеомонтажу, туториалы по видеоредактированию, уроки по цветокоррекции, советы по ускорению Adobe Premiere Pro, оптимизация, исправление ошибок, видеографика, видеомаркетинг, визуальные эффекты, мультимедиа, медиа, презентации, обучающие видео, видеокурсы, видеоуроки, курс по видеомонтажу, уроки по видеомонтажу"
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
            content="prfaq@aechat"
          />
          <meta
            property="og:description"
            content="Ответы на частые вопросы от пользователей Premiere Pro"
          />
        </Helmet>
        <Header title="prfaq" />
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
                <h1>prfaq</h1>
                <Breadcrumb
                  items={[
                    {title: <Link to="/">Главная</Link>},
                    {
                      title: <Link to="/prfaq">FAQ по Adobe Premiere Pro</Link>,
                      menu: {
                        items: [
                          {title: <Link to="/aefaq">FAQ по After Effects</Link>},
                          {title: <Link to="/psfaq">FAQ по Photoshop</Link>},
                        ],
                      },
                    },
                  ]}
                />
              </div>
              <SupportDonut />
              <AdditionDanger>
                На данный момент не все секции перенесены. Если вам нужен доступ к старой
                версии сайта, перейдите на{" "}
                <a href="legacy/prfaq.html">aechat.ru/legacy/prfaq</a>.
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
                                delay: 1,
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
                                  "Интересный факт: в Premiere Pro необязательно делать прокси через Media Encoder",
                                  "Убедитесь в том, что ваше устройство подключено к Интернету",
                                  "Секция всё ещё грузится, наберитесь терпения",
                                  "Надеемся, что код сайта не поломался",
                                  "Попробуйте перезагрузить страницу, если секция всё ещё грузится",
                                  "Пока секции грузятся, дам совет: в любой непонятной ситуации - делай Nest",
                                  "Прочтите заклинание 'фастус информейтус лоадинг', если секция слишком долго грузится",
                                  "Когда-нибудь секция загрузится и все будут жить счастливо...",
                                ][Math.floor(Math.random() * 9)]
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
                title="aechat"
                initialYear={2023}
              />
            </div>
          </div>
        </motion.main>
        <SearchInPage />
      </SearchProvider>
    </div>
  );
};
export default PRFaQ;
