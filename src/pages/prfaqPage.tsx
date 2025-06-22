import React, {Suspense, lazy, useEffect, useState} from "react";

import {Breadcrumb, Divider} from "antd";

import {motion} from "framer-motion";

import {Link} from "react-router-dom";

import {Helmet} from "react-helmet-async";

import {CircularProgress} from "@mui/material";

import Header from "../components/Header";

import Footer from "../components/Footer";

import {SearchInPage, SearchProvider} from "../components/search";

import SupportDonut from "../components/modal/SupportDonut";

import CopyToClipboard from "../components/features/CopyToClipboard";

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

const PRWhereFind = lazy(() => import("./sections/prfaq/WhereFind"));

const PRFAQ = () => {
  useEffect(() => {
    CopyToClipboard.enableAutoCopy();
  }, []);

  const sections = [
    {
      key: "1",
      title: "Ищем полезности",
      id: "where-find",
      component: PRWhereFind,
    },
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
    {key: "4", title: "Импорт", id: "import", component: PRImport},
    {key: "5", title: "Интерфейс", id: "interface", component: PRInterface},
    {
      key: "6",
      title: "Производительность",
      id: "performance",
      component: PRPerformance,
    },
    {key: "7", title: "Как и чем?", id: "actions", component: PRActions},
    {
      key: "8",
      title: "Ошибки и предупреждения",
      id: "errors",
      component: PRErrors,
    },
    {key: "9", title: "Рендер и экспорт", id: "export", component: PRExport},
    {
      key: "10",
      title: "Проблемы при экспорте",
      id: "export-problems",
      component: PRExportProblems,
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
          <title>prfaq@aechat</title>
          <link
            href="icons/prfaq.svg"
            rel="icon"
            type="image/svg+xml"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe Premiere Pro"
            name="description"
          />
          <meta
            content="чат, ссылки, Adobe Premiere Pro, шаблоны Adobe Premiere Pro, AETemp, советы Adobe Premiere Pro, FAQ Adobe Premiere Pro, склад стройматериалов, помощь, видеомонтаж, видеоредактирование, видеопроизводство, видеоэффекты, спецэффекты, звукорежировка, звукомонтаж, звуковое оформление, видеоуроки, обучение, видеокурсы, видеоуроки, курсы по видеомонтажу, туториалы по видеоредактированию, уроки по цветокоррекции, советы по ускорению Adobe Premiere Pro, оптимизация, исправление ошибок, видеографика, видеомаркетинг, визуальные эффекты, мультимедиа, медиа, презентации, обучающие видео, видеокурсы, видеоуроки, курс по видеомонтажу, уроки по видеомонтажу"
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
            content="prfaq@aechat"
            property="og:title"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe Premiere Pro"
            property="og:description"
          />
        </Helmet>
        <Header title="prfaq" />
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
                <h1>prfaq</h1>
                <Breadcrumb
                  items={[
                    {
                      title: <Link to="/prfaq">FAQ по Adobe Premiere Pro</Link>,
                      menu: {
                        items: [
                          {
                            title: <Link to="/aefaq">FAQ по Adobe After Effects</Link>,
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

export default PRFAQ;
