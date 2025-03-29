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
    CopyToClipboard.enableAutoCopy();
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
            rel="icon"
            type="image/svg+xml"
            href="icons/prfaq.svg"
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
                          {title: <Link to="/aefaq">FAQ по Adobe After Effects</Link>},
                          {title: <Link to="/psfaq">FAQ по Adobe Photoshop</Link>},
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
export default PRFaQ;
