import {ConfigProvider, unstableSetRender} from "antd";
import {AnimatePresence, motion} from "framer-motion";
import React, {Suspense, lazy, useEffect} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import themeConfig from "./styles/ant_theme";
import {LinearProgress} from "@mui/material";
import {createRoot} from "react-dom/client";

const Links = lazy(() => import("./pages/linksPage"));

const ChatRules = lazy(() => import("./pages/chatRules"));

const NotFound = lazy(() => import("./pages/notFound"));

const AEFaQ = lazy(() => import("./pages/aefaqPage"));

const PRFaQ = lazy(() => import("./pages/prfaqPage"));

const PSFaQ = lazy(() => import("./pages/psfaqPage"));

const AEExpressionPage = lazy(() => import("./pages/aeexprfaqPage"));

const RedirectHtml = () => {
  const location = useLocation();

  const path = location.pathname;
  if (path.endsWith(".html")) {
    return (
      <Navigate
        to={path.replace(/\.html$/, "")}
        replace
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
      <div className="modal-header">
        <div className="modal-header-title">Произошла ошибка на стороне клиента</div>
      </div>
      <div className="modal-content">
        <p>
          Возможно это произошло из-за обновления файлов на сервере. Попробуйте обновить
          страницу, чтобы загрузить актуальные данные.
        </p>
        <p className="modal-message">Что вызвало ошибку: {error.message}</p>
        <div style={{display: "flex", gap: "10px", margin: "10px"}}>
          <motion.button
            onClick={() => {
              window.location.reload();
              window.location.href = "/";
            }}
            className="modal-open-button"
            whileHover={{
              scale: 0.95,
              transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
            }}
            whileTap={{scale: 0.95, opacity: 0.5}}
          >
            На главную
          </motion.button>
          <motion.button
            onClick={() => window.location.reload()}
            className="modal-open-button"
            whileHover={{
              scale: 0.95,
              transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
            }}
            whileTap={{scale: 0.95, opacity: 0.5}}
          >
            Обновить страницу
          </motion.button>
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
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{
                duration: 0.5,
                ease: [0.075, 0.82, 0.165, 1],
                delay: 1,
              }}
            >
              <LinearProgress color="inherit" />
              <div style={{marginInline: "auto", maxWidth: "600px"}}>
                <motion.p
                  initial={{opacity: 0}}
                  animate={{opacity: 0.5}}
                  transition={{
                    duration: 1,
                    ease: [0.075, 0.82, 0.165, 1],
                    delay: 5,
                  }}
                  style={{
                    margin: "10px",
                    marginTop: "20px",
                    fontSize: "0.75rem",
                    marginInline: "20px",
                  }}
                >
                  Если страница медленно загружается, проверьте скорость вашего
                  интернет-соединения
                </motion.p>
                <motion.p
                  initial={{opacity: 0}}
                  animate={{opacity: 0.25}}
                  transition={{
                    duration: 1,
                    ease: [0.075, 0.82, 0.165, 1],
                    delay: 7.5,
                  }}
                  style={{
                    margin: "10px",
                    fontSize: "0.625rem",
                    textAlign: "right",
                    marginInline: "20px",
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
              location={location}
              key={location.pathname}
            >
              <Route
                path="/"
                element={<Links />}
              />
              <Route
                path="/aefaq"
                element={<AEFaQ />}
              />
              <Route
                path="/prfaq"
                element={<PRFaQ />}
              />
              <Route
                path="/psfaq"
                element={<PSFaQ />}
              />
              <Route
                path="/aeexprfaq"
                element={<AEExpressionPage />}
              />
              <Route
                path="/rules"
                element={<ChatRules />}
              />
              <Route
                path="*"
                element={
                  <>
                    <NotFound />
                    <RedirectHtml />
                  </>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ErrorBoundary>
    </ConfigProvider>
  );
};

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);

  const root = container._reactRoot;
  root.render(node);

  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});
