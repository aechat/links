import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./styles/main.css";
import {App} from "./App";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
