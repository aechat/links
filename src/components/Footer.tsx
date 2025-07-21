import {GitHub} from "@mui/icons-material";

import {motion} from "framer-motion";

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
    <motion.footer
      animate={{opacity: 0.65}}
      className="footer"
      initial={{opacity: 0}}
      transition={{duration: 0.65, delay: 1}}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p>
            m1sh3r {"// "}
            {title} &copy; {initialYear} - {currentYear}
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
              чатов. Информация для статей взята с открытых источников сети Интернет.
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
    </motion.footer>
  );
};

export default Footer;
