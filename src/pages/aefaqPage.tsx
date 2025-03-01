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
    {
      key: "7",
      title: "Производительность",
      id: "performance",
      component: AEPerformance,
    },
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
          <title>aefaq@aechat</title>
          <link
            rel="icon"
            type="image/svg+xml"
            href="aefaq.svg"
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
          transition={{duration: 0.5, type: "spring", ease: [0.075, 0.82, 0.165, 1]}}
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
                                  "Never Gonna Give You Up, Never Gonna Let You Down...",
                                  "В After Effects имеется ограничение размера в 30 тысяч пикселей на каждую ось",
                                  "В After Effects можно использовать Null Object для привязки нескольких слоёв к одному контроллеру",
                                  "В After Effects можно применять корректирующие слои для цветокоррекции всего проекта",
                                  "В Render Queue можно поставить в очередь на экспорт сразу несколько композиций",
                                  "В любой непонятной ситуации делай прекомпоз. Даже когда это не нужно",
                                  "Всё ещё грузим информацию...",
                                  "Если вы сталкиваетесь с трудностями при экспорте, попробуйте создать прокси для композиций",
                                  "Если вы хотите немного ускорить рендер предпросмотра, можно временно отключить некоторые эффекты",
                                  "Если оператор чутка выпил крепкого, то в After Effects можно применить Warp Stabilizer для стабилизации вашего видео",
                                  "Ещё чуть-чуть...",
                                  "Зажав среднюю кнопку мыши, вы можете перемещать таймлайн, предпросмотр и некоторые прокручиваемые элементы интерфейса",
                                  "Интересный факт: в After Effects можно выполнять арифметические операции с помощью знаков сложения и вычитания, умножения и деления",
                                  "Используйте эффект Glow, чтобы добавить свечение слою. Эффекты свечения могут немного замедлить производительность вашего проекта",
                                  "Лайфхак: создание прокси для композиций может сэкономить вам время, если вы работаете с тяжёлыми эффектами",
                                  "Надеемся, что код сайта не поломался",
                                  "Не волнуйтесь, скоро загрузимся. Знали ли вы, что Premiere Pro поддерживает некоторые плагины с расширением .aex?",
                                  "Подождите чуть-чуть...",
                                  "Попробуйте перезагрузить страницу, если секция всё ещё грузится",
                                  "Почти готово... Напомню, что сочетание клавиш Ctrl+Shift+D разрезает слой, а Ctrl+Shift+C - создаёт прекомпоз из выделенных слоёв",
                                  "С помощью встроенного эффекта CC Sphere можно превратить любой слой в шар за секунды",
                                  "С помощью эффекта Bevel Alpha можно добавить немного объёма объекту",
                                  "С помощью эффекта Matte Choker можно смягчить края вашего слоя",
                                  "Секция всё ещё грузится, наберитесь терпения",
                                  "Скоро будет... В After Effects есть два вида камер: однонодовая и двунодовая",
                                  "Скоро всё загрузится. А вы знали, что можно добавить шум, чтобы уменьшить полосатость в градиентах?",
                                  "Совет: в любой непонятной ситуации - очищай кэш. Это можно сделать в Edit > Purge > All Memory & Disk Cache",
                                  "Убедитесь в том, что ваше устройство подключено к Интернету",
                                  "Функция loopOut() поможет зациклить вашу анимацию, созданную с помощью ключевых кадров",
                                  "Через выражение wiggle(x, y) можно легко добавить хаотичное движение объекту",
                                  "Чтобы быстро переключить режимы наложения на выделенном слое, нажмите Shift + =",
                                ][Math.floor(Math.random() * 30)]
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
        <SearchInPage sections={sections} />
      </SearchProvider>
    </div>
  );
};
export default AEFaQ;
