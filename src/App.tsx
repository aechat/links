import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

import {Links} from "./components/pages/LinksPage";

import {AboutPage} from "./components/pages/AboutPage";
import {ChatRules} from "./components/pages/ChatRules";
import {NotFoundPage} from "./components/pages/NotFoundPage";

import {AEFaqPage} from "./components/pages/AEFaqPage";
import {PRFaqPage} from "./components/pages/PRFaqPage";
import {PSFaqPage} from "./components/pages/PSFaqPage";

const RedirectHtml = () => {
  const location = useLocation();
  const path = location.pathname;
  if (path.endsWith(".html")) {
    return <Navigate to={path.replace(/\.html$/, "")} />;
  }
  return null;
};

export const App = () => {
  return (
    <AnimatePresence mode="sync">
      <Routes
        location={location}
        key={location.pathname}
      >
        <Route
          index
          element={<Links />}
        />
        <Route
          path="/aefaq"
          element={<AEFaqPage />}
        />
        <Route
          path="/prfaq"
          element={<PRFaqPage />}
        />
        <Route
          path="/psfaq"
          element={<PSFaqPage />}
        />
        <Route
          path="/rules"
          element={<ChatRules />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="*"
          element={
            <>
              <NotFoundPage />
              <RedirectHtml />
            </>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
