import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {
  DarkModeRounded,
  FormatColorFillOutlined,
  HideSourceRounded,
  LightModeRounded,
  RestartAltOutlined,
} from "@mui/icons-material";
const ThemeManager: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [hue, setHue] = useState(() => {
    const storedHue = localStorage.getItem("accentColor");
    return storedHue ? parseInt(storedHue, 10) : 245;
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") ?? "system";
  });
  useEffect(() => {
    document.documentElement.style.setProperty("--accent-hue", `${hue}`);
    localStorage.setItem("accentColor", hue.toString());
  }, [hue]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const body = document.body;
    if (theme === "light") {
      body.classList.remove("dark");
      body.classList.add("light");
    } else if (theme === "dark") {
      body.classList.remove("light");
      body.classList.add("dark");
    } else if (theme === "system") {
      body.classList.remove("light", "dark");
      const prefersDark =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        body.classList.add("dark");
      } else {
        body.classList.add("light");
      }
    }
  }, [theme]);
  const toggleTheme = (newTheme: "light" | "dark" | "system") => {
    const body = document.body;
    if (newTheme === "light") {
      body.classList.remove("dark");
      body.classList.add("light");
    } else if (newTheme === "dark") {
      body.classList.remove("light");
      body.classList.add("dark");
    } else if (newTheme === "system") {
      body.classList.remove("light", "dark");
      const prefersDark =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        body.classList.add("dark");
      } else {
        body.classList.add("light");
      }
    }
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  const resetHue = () => {
    const defaultHue = 245;
    setHue(defaultHue);
  };
  return (
    <>
      <button
        className="theme_button"
        onClick={() => setShowModal(true)}
      >
        <FormatColorFillOutlined className="icon" />
      </button>
      {showModal &&
        ReactDOM.createPortal(
          <div
            className="theme_modal-overlay"
            onClick={() => setShowModal(false)}
          >
            <div
              className="theme_modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Менятор темы</h2>
              <label htmlFor="hue">Оттенок акцентного цвета: {hue}</label>
              <div style={{display: "flex"}}>
                <input
                  type="range"
                  id="hue"
                  min="0"
                  max="360"
                  value={hue}
                  onChange={(e) => setHue(parseInt(e.target.value, 10))}
                />
                <button onClick={resetHue}>
                  <RestartAltOutlined />
                </button>
              </div>
              <div style={{marginInline: "auto"}}>
                <button onClick={() => toggleTheme("system")}>
                  <HideSourceRounded className="theme-icon" />
                </button>
                <button onClick={() => toggleTheme("light")}>
                  <LightModeRounded className="theme-icon" />
                </button>
                <button onClick={() => toggleTheme("dark")}>
                  <DarkModeRounded className="theme-icon" />
                </button>
              </div>
            </div>
          </div>,
          document.querySelector(".theme_modal") || document.body
        )}
    </>
  );
};
export default ThemeManager;
