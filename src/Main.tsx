import React from "react";
import ResizeObserverPolyfill from "resize-observer-polyfill";

import ReactDOM from "react-dom/client";
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter} from "react-router-dom";

import {App} from "./App";
import {ThemeProvider} from "./components/modals/ThemeChanger";
import "./styles/main.scss";

if (globalThis.window !== undefined && !globalThis.window.ResizeObserver) {
  globalThis.window.ResizeObserver = ResizeObserverPolyfill;
}

const rootElement = document.querySelector("#root");

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
