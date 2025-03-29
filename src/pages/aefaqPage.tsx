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

const AEWhereFind = lazy(() => import("./sections/aefaq/WhereFind"));

const AEInstallProblems = lazy(() => import("./sections/aefaq/InstallProblems"));

const AEFromNewbies = lazy(() => import("./sections/aefaq/FromNewbies"));

const AETips = lazy(() => import("./sections/aefaq/Tips"));

const AEImport = lazy(() => import("./sections/aefaq/Import"));

const AEInterface = lazy(() => import("./sections/aefaq/Interface"));

const AEPerformance = lazy(() => import("./sections/aefaq/Performance"));

const AEActions = lazy(() => import("./sections/aefaq/Actions"));

const AEErrors = lazy(() => import("./sections/aefaq/Errors"));

const AEExport = lazy(() => import("./sections/aefaq/Export"));

const AEExportProblems = lazy(() => import("./sections/aefaq/ExportProblems"));

const AEFaQ = () => {
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
    {key: "4", title: "(не)Вредные советы", id: "tips", component: AETips},
    {key: "5", title: "Импорт", id: "import", component: AEImport},
    {key: "6", title: "Интерфейс", id: "interface", component: AEInterface},
    {key: "7", title: "Производительность", id: "performance", component: AEPerformance},
    {key: "8", title: "Как и чем?", id: "actions", component: AEActions},
    {key: "9", title: "Ошибки и предупреждения", id: "errors", component: AEErrors},
    {key: "10", title: "Экспорт", id: "export", component: AEExport},
    {
      key: "11",
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
            rel="icon"
            type="image/svg+xml"
            href="icons/aefaq.svg"
          />
          <meta
            name="description"
            content="Ответы на частые вопросы от пользователей After Effects"
          />
          <meta
            name="keywords"
            content="чат, ссылки, After Effects, шаблоны After Effects, AETemp, Adobe, советы After Effects, FAQ After Effects, склад стройматериалов, помощь, видеомонтаж, графический дизайн, видеоэффекты, спецэффекты, анимация, 3D-моделирование, motion graphics, композитинг, цветокоррекция, Adobe Premiere, Photoshop, Illustrator, Media Encoder, плагины After Effects, видеопроизводство, рендеринг, обучение, видеоуроки, монтаж видео, создание видео, редактирование видео, графика, видеоконтент, пост-продакшн, filmmaking, кино, телевидение, спецэффекты для фильмов, видеомаркетинг, визуальные эффекты, мультимедиа, медиа, презентации, видеореклама, обучающие видео, видеокурсы, видеоуроки, курсы по анимации, туториалы по видеомонтажу, уроки по цветокоррекции, советы по ускорению After Effects, оптимизация, исправление ошибок, видеографика, motion design, инфографика, 3D-анимация, видеоклипы, рекламные ролики, видеопрезентации"
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
            content="aefaq@aechat"
          />
          <meta
            property="og:description"
            content="Ответы на частые вопросы от пользователей After Effects"
          />
        </Helmet>
        <Header title="aefaq" />
        <motion.main
          className="main"
          initial={{x: 100, y: 0, opacity: 0}}
          animate={{x: 0, y: 0, opacity: 1}}
          exit={{x: 0, y: 50, opacity: 0}}
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
                      title: <Link to="/aefaq">FaQ по Adobe After Effects</Link>,
                      menu: {
                        items: [
                          {
                            title: (
                              <Link to="/aeexprfaq">
                                FaQ по выражениям в After Effects
                              </Link>
                            ),
                          },
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
              <SupportDonut />
              <Suspense
                fallback={
                  <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
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
                    initial={{opacity: 0}}
                    animate={isSectionsLoaded ? {opacity: 1} : {}}
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
                            style={{
                              color: "var(--text-color)",
                              textTransform: "uppercase",
                              fontWeight: "800",
                            }}
                            orientation="right"
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
                title="aechat"
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
export default AEFaQ;
