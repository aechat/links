import {GitHub} from "@mui/icons-material";

import React from "react";

interface FooterProps {
  title: string;
  initialYear: number;
}

const FAQ_PATHS = ["/aefaq", "/prfaq", "/psfaq", "/aeexpr"] as const;

const Footer: React.FC<FooterProps> = ({title, initialYear}) => {
  const currentYear = new Date().getFullYear();

  const isFaqPage = (): boolean => {
    const path = window.location.pathname;

    return FAQ_PATHS.includes(path as (typeof FAQ_PATHS)[number]);
  };

  return (
    <footer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p>
            <a href="https://github.com/m1sh3r">m1sh3r</a> {"+ "}
            {title} \\ &copy; {initialYear} - {currentYear}
          </p>
          {isFaqPage() && (
            <p
              style={{
                opacity: 0.5,
                fontSize: "0.9em",
                fontWeight: 400,
              }}
            >
              Контент на этой странице обновляется благодаря вопросам участников наших
              чатов. Информация для статей взята с открытых источников.
            </p>
          )}
        </div>
        <a
          aria-label="перейти на GitHub"
          href="https://github.com/aechat/links"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            flexShrink: 0,
          }}
          target="_blank"
        >
          <GitHub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
