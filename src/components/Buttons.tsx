import {DarkModeRounded, HideSourceRounded, LightModeRounded} from "@mui/icons-material";

export const ThemeButton = () => {
  const handleClick = (theme: "light" | "dark" | "system") => () => {
    toggleTheme(theme);
  };
  return (
    <div className="theme">
      <button
        className="theme-button"
        onClick={handleClick("system")}
        data-theme="system"
      >
        <HideSourceRounded className="theme-icon" />
      </button>
      <button
        className="theme-button"
        onClick={handleClick("light")}
        data-theme="light"
      >
        <LightModeRounded className="theme-icon" />
      </button>
      <button
        className="theme-button"
        onClick={handleClick("dark")}
        data-theme="dark"
      >
        <DarkModeRounded className="theme-icon" />
      </button>
    </div>
  );
};

// *: функция для смены темы

const toggleTheme = (theme: "light" | "dark" | "system") => {
  const body = document.body;
  if (theme === "light") {
    body.classList.remove("dark");
    body.classList.add("light");
  } else if (theme === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");
  } else if (theme === "system") {
    body.classList.remove("light", "dark");
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? body.classList.add("dark")
      : body.classList.add("light");
  }
  localStorage.setItem("theme", theme);
  const previouslySelectedThemeButton = document.querySelector(".selected");
  if (previouslySelectedThemeButton) {
    previouslySelectedThemeButton.classList.remove("selected");
  }
  const selectedThemeButton = document.querySelector(`[data-theme="${theme}"]`);
  if (selectedThemeButton) {
    selectedThemeButton.classList.add("selected");
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    toggleTheme(savedTheme as "light" | "dark");
  } else if (savedTheme === "system" || savedTheme === null) {
    toggleTheme("system");
  }
});
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "system") {
    toggleTheme("system");
  }
});
