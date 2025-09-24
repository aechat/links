import {LinearProgress} from "@mui/material";

import {ConfigProvider} from "antd";

import {AnimatePresence, motion} from "framer-motion";

import React, {Suspense, lazy, useEffect} from "react";

import {Navigate, Route, Routes, useLocation} from "react-router-dom";

import themeConfig from "./styles/ant_theme";

const Links = lazy(() => import("./pages/linksPage"));

const ChatRules = lazy(() => import("./pages/chatRules"));

const NotFound = lazy(() => import("./pages/notFound"));

const AEFAQ = lazy(() => import("./pages/aefaqPage"));

const PRFAQ = lazy(() => import("./pages/prfaqPage"));

const PSFAQ = lazy(() => import("./pages/psfaqPage"));

const AEExpressionPage = lazy(() => import("./pages/aeexprPage"));

const RedirectHtml = () => {
  const location = useLocation();

  const path = location.pathname;

  if (path.endsWith(".html")) {
    return (
      <Navigate
        replace
        to={path.replace(/\.html$/, "")}
      />
    );
  }

  return null;
};
declare global {
  interface Window {
    ym: (counterId: number, method: string, ...args: unknown[]) => void;
  }
}

const trackPageView = (path: string) => {
  if (typeof window === "object" && window.ym) {
    window.ym(96346999, "hit", path);
  }
};

const ErrorFallback = ({error}: {error: Error}) => (
  <div className="error-container">
    <div className="error-backtitle">Ошибка</div>
    <div
      className="modal"
      style={{maxWidth: "450px", margin: "15px"}}
    >
      <div className="error-content">
        <div className="error-title">Ошибка: {error.message}</div>
        <div className="error-message">
          <p>Попробуйте перезагрузить страницу для получения свежих данных.</p>
          <div className="flexible-links">
            <button
              onClick={() => {
                window.location.reload();
                window.location.href = "/";
              }}
            >
              На главную
            </button>
            <button onClick={() => window.location.reload()}>Обновить страницу</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

class ErrorBoundary extends React.Component<
  {children: React.ReactNode},
  {hasError: boolean; error: Error | null}
> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = {hasError: false, error: null};
  }
  static getDerivedStateFromError(error: Error) {
    return {hasError: true, error};
  }
  render() {
    if (this.state.hasError && this.state.error) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

export const App = () => {
  const location = useLocation();
  useEffect(() => {
    const isWebKit =
      typeof navigator !== "undefined" &&
      /AppleWebKit|Epiphany|Safari/i.test(navigator.userAgent) &&
      !/Chrome|Chromium|Edg|OPR|Brave/i.test(navigator.userAgent);

    const path = window.location.pathname;

    const isFaqPage =
      path.startsWith("/aefaq") ||
      path.startsWith("/prfaq") ||
      path.startsWith("/psfaq") ||
      path.startsWith("/aeexpr");

    if (isWebKit && isFaqPage) {
      alert(
        '⚠ В браузере Safari данная страница может упасть в ошибку "На этой странице произошла ошибка" из-за переполнения памяти.\n\nВо избежание проблем рекомендуется открывать данную страницу с Mac или ПК через Chrome или Firefox. Вы можете продолжить работу с сайтом, закрыв данное окно.'
      );
    }
  }, [location.pathname]);

  useEffect(() => {
    const path = window.location.pathname;

    if (path.endsWith("/index.html")) {
      window.location.replace("/");
    } else if (path.endsWith(".html")) {
      window.location.replace(path.replace(/\.html$/, ""));
    } else {
      trackPageView(path);
    }
  }, [location]);

  return (
    <ConfigProvider theme={themeConfig}>
      <ErrorBoundary>
        <Suspense
          fallback={
            <motion.div
              animate={{opacity: 1}}
              initial={{opacity: 0}}
              transition={{
                duration: 0.3,
                ease: [0.25, 0, 0, 1],
                delay: 1,
              }}
            >
              <LinearProgress color="inherit" />
              <div style={{marginInline: "auto", maxWidth: "600px"}}>
                <motion.p
                  animate={{opacity: 0.5}}
                  initial={{opacity: 0}}
                  style={{
                    margin: "10px",
                    marginTop: "25px",
                    fontSize: "0.875rem",
                    marginInline: "20px",
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0, 0, 1],
                    delay: 5,
                  }}
                >
                  Если страница медленно загружается, проверьте скорость вашего
                  интернет-соединения
                </motion.p>
                <motion.p
                  animate={{opacity: 0.25}}
                  initial={{opacity: 0}}
                  style={{
                    margin: "10px",
                    fontSize: "0.8rem",
                    textAlign: "right",
                    marginInline: "20px",
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0, 0, 1],
                    delay: 7.5,
                  }}
                >
                  ...или отключите VPN
                </motion.p>
              </div>
            </motion.div>
          }
        >
          <AnimatePresence
            mode="wait"
            onExitComplete={() => {
              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: "instant",
                });
              }, 50);
            }}
          >
            <Routes
              key={location.pathname}
              location={location}
            >
              <Route
                element={<Links />}
                path="/"
              />
              <Route
                element={<AEFAQ />}
                path="/aefaq"
              />
              <Route
                element={<PRFAQ />}
                path="/prfaq"
              />
              <Route
                element={<PSFAQ />}
                path="/psfaq"
              />
              <Route
                element={<AEExpressionPage />}
                path="/aeexpr"
              />
              <Route
                element={<ChatRules />}
                path="/rules"
              />
              <Route
                element={
                  <>
                    <NotFound />
                    <RedirectHtml />
                  </>
                }
                path="*"
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ErrorBoundary>
    </ConfigProvider>
  );
};
