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
          <title>psfaq@aechat</title>
          <link
            rel="icon"
            type="image/svg+xml"
            href="icons/psfaq.svg"
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
          transition={{
            duration: 0.3,
            ease: [0.25, 0, 0, 1],
          }}
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
