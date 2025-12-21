import ResizeObserverPolyfill from "resize-observer-polyfill";

if (typeof globalThis.window !== "undefined" && !globalThis.window.ResizeObserver) {
  globalThis.window.ResizeObserver = ResizeObserverPolyfill;
}

import React from "react";

import ReactDOM from "react-dom/client";

import {HelmetProvider} from "react-helmet-async";

import {BrowserRouter} from "react-router-dom";

import {App} from "./App";

import {ThemeProvider} from "./components/modals/ThemeChanger";

import "@ant-design/v5-patch-for-react-19";

import "./styles/main.scss";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
