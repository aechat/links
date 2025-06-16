import React, {Suspense, lazy, useEffect, useState} from "react";
import {Breadcrumb, Divider} from "antd";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet-async";
import {SearchInPage, SearchProvider} from "../components/search";
import SupportDonut from "../components/modal/SupportDonut";
import CopyToClipboard from "../components/features/CopyToClipboard";
import {CircularProgress} from "@mui/material";
import {generateAnchorId} from "../components/DetailsSummary";
import {AdditionDanger} from "../components/Additions";

const AEWhereFind = lazy(() => import("./sections/aefaq/WhereFind"));

const AEInstallProblems = lazy(() => import("./sections/aefaq/InstallProblems"));

const AEFromNewbies = lazy(() => import("./sections/aefaq/FromNewbies"));

const AEImport = lazy(() => import("./sections/aefaq/Import"));

const AEInterface = lazy(() => import("./sections/aefaq/Interface"));

const AEPerformance = lazy(() => import("./sections/aefaq/Performance"));

const AEActions = lazy(() => import("./sections/aefaq/Actions"));

const AEErrors = lazy(() => import("./sections/aefaq/Errors"));

const AEExport = lazy(() => import("./sections/aefaq/Export"));

const AEExportProblems = lazy(() => import("./sections/aefaq/ExportProblems"));

const AEFAQ = () => {
  useEffect(() => {
    CopyToClipboard.enableAutoCopy();
  }, []);

  const sections = [
    {key: "1", title: "Ищем полезности", id: "where-find", component: AEWhereFind},
    {
      key: "2",
      title: "Проблемы с установкой",
      id: "install-problems",
      component: AEInstallProblems,
    },
    {
      key: "3",
      title: "Вопросы от новичков",
      id: "from-newbies",
      component: AEFromNewbies,
    },
    {key: "4", title: "Импорт", id: "import", component: AEImport},
    {key: "5", title: "Интерфейс", id: "interface", component: AEInterface},
    {key: "6", title: "Производительность", id: "performance", component: AEPerformance},
    {key: "7", title: "Как и чем?", id: "actions", component: AEActions},
    {key: "8", title: "Ошибки и предупреждения", id: "errors", component: AEErrors},
    {key: "9", title: "Рендер и экспорт", id: "export", component: AEExport},
    {
      key: "10",
      title: "Проблемы при экспорте",
      id: "export-problems",
      component: AEExportProblems,
    },
  ];

  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const [isSectionsLoaded, setIsSectionsLoaded] = useState(false);
  useEffect(() => {}, [visibleSections.length]);

  const loadSection = async (section: {key: string}) => {
    setVisibleSections((prev) => [...prev, section.key]);
  };

  const loadSections = async () => {
    await Promise.all(sections.map(loadSection));
    setIsSectionsLoaded(true);
  };
  useEffect(() => {
    loadSections();
  }, []);

  return (
    <div className="page">
      <SearchProvider isPageLoaded={isPageLoaded}>
        <Helmet>
          <title>aefaq@aechat</title>
          <link
            href="icons/aefaq.svg"
            rel="icon"
            type="image/svg+xml"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe After Effects"
            name="description"
          />
          <meta
            content="чат, ссылки, After Effects, шаблоны After Effects, AETemp, Adobe, советы After Effects, FAQ After Effects, склад стройматериалов, помощь, видеомонтаж, графический дизайн, видеоэффекты, спецэффекты, анимация, 3D-моделирование, motion graphics, композитинг, цветокоррекция, Adobe Premiere, Photoshop, Illustrator, Media Encoder, плагины After Effects, видеопроизводство, рендеринг, обучение, видеоуроки, монтаж видео, создание видео, редактирование видео, графика, видеоконтент, пост-продакшн, filmmaking, кино, телевидение, спецэффекты для фильмов, видеомаркетинг, визуальные эффекты, мультимедиа, медиа, презентации, видеореклама, обучающие видео, видеокурсы, видеоуроки, курсы по анимации, туториалы по видеомонтажу, уроки по цветокоррекции, советы по ускорению After Effects, оптимизация, исправление ошибок, видеографика, motion design, инфографика, 3D-анимация, видеоклипы, рекламные ролики, видеопрезентации"
            name="keywords"
          />
          <meta
            content="website"
            property="og:type"
          />
          <meta
            content="https://aechat.ru/"
            property="og:url"
          />
          <meta
            content="aefaq@aechat"
            property="og:title"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe After Effects"
            property="og:description"
          />
        </Helmet>
        <Header title="aefaq" />
        <motion.main
          animate={{x: 0, y: 0, opacity: 1}}
          className="main"
          exit={{x: 0, y: 50, opacity: 0}}
          initial={{x: 100, y: 0, opacity: 0}}
          transition={{
            duration: 0.3,
            ease: [0.25, 0, 0, 1],
          }}
        >
          <div className="faq-container-flex">
            <div className="faq-container">
              <div className="faq-title">
                <h1>aefaq</h1>
                <Breadcrumb
                  items={[
                    {
                      title: <Link to="/aefaq">FAQ по Adobe After Effects</Link>,
                      menu: {
                        items: [
                          {
                            title: (
                              <Link to="/aeexpr">FAQ по выражениям в After Effects</Link>
                            ),
                          },
                          {
                            title: <Link to="/prfaq">FAQ по Adobe Premiere Pro</Link>,
                          },
                          {
                            title: <Link to="/psfaq">FAQ по Adobe Photoshop</Link>,
                          },
                        ],
                      },
                    },
                  ]}
                />
              </div>
              {navigator.userAgent.toLowerCase().includes("iphone") && (
                <AdditionDanger>
                  На некоторых <mark>iPhone</mark> эта страница может упасть с ошибкой{" "}
                  <mark className="ui">На этой странице произошла ошибка</mark> по
                  неизвестной автору причине. Лучше откройте этот сайт с устройства, на
                  котором вы работаете в <mark className="app">Adobe After Effects</mark>.
                </AdditionDanger>
              )}
              <SupportDonut />
              <Suspense
                fallback={
                  <motion.div
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    style={{
                      padding: "20px",
                      display: "flex",
                      marginBlock: "20px",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "90dvh",
                      width: "100%",
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0, 0, 1],
                      delay: 1,
                    }}
                  >
                    <CircularProgress sx={{color: "var(--accent)"}} />
                  </motion.div>
                }
              >
                {visibleSections.length > 0 && (
                  <motion.div
                    animate={isSectionsLoaded ? {opacity: 1} : {}}
                    initial={{opacity: 0}}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0, 0, 1],
                    }}
                    onAnimationStart={() => {
                      setIsPageLoaded(true);
                      generateAnchorId();
                    }}
                  >
                    {visibleSections.map((key) => {
                      const section = sections.find((s) => s.key === key);
                      if (!section) {
                        return null;
                      }

                      return (
                        <div
                          key={key}
                          id={section.id}
                        >
                          <Divider
                            orientation="right"
                            style={{
                              color: "var(--text-color)",
                              textTransform: "uppercase",
                              fontWeight: "800",
                            }}
                          >
                            {section.title}
                          </Divider>
                          <section.component />
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </Suspense>
              <Footer
                initialYear={2023}
                title="aechat"
              />
            </div>
          </div>
        </motion.main>
        <SearchInPage sections={sections} />
      </SearchProvider>
    </div>
  );
};
export default AEFAQ;
