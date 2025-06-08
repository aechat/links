import React from "react";

import ReactDOM from "react-dom/client";

import {BrowserRouter} from "react-router-dom";

import {HelmetProvider} from "react-helmet-async";

import {App} from "./App";

import {ThemeProvider} from "./components/modal/ThemeChanger";

import "@ant-design/v5-patch-for-react-19";

import "./main.scss";

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
