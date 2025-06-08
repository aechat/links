import React from "react";

import {GitHub} from "@mui/icons-material";

import {motion} from "framer-motion";

interface FooterProps {
  title: string;
  initialYear: number;
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqText: {
    opacity: 0.5,
    fontSize: "0.9em",
    fontWeight: 400,
  },
  githubLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    flexShrink: 0,
  },
} as const;

const FAQ_PATHS = ["/aefaq", "/prfaq", "/psfaq", "/aeexpr"] as const;

const Footer: React.FC<FooterProps> = ({title, initialYear}) => {
  const currentYear = new Date().getFullYear();

  const isFaqPage = (): boolean => {
    const path = window.location.pathname;

    return FAQ_PATHS.includes(path as (typeof FAQ_PATHS)[number]);
  };

  return (
    <motion.footer
      animate={{opacity: 0.5}}
      className="footer"
      initial={{opacity: 0}}
      transition={{duration: 0.5, delay: 1}}
    >
      <div style={styles.container}>
        <div>
          <p>
            m1sh3r {"// "}
            {title} &copy; {initialYear} - {currentYear}
          </p>
          {isFaqPage() && (
            <p style={styles.faqText}>
              Контент на этой странице обновляется благодаря вопросам участников наших
              чатов.
            </p>
          )}
        </div>
        <a
          aria-label="перейти на GitHub"
          href="https://github.com/aechat/links"
          rel="noreferrer"
          style={styles.githubLink}
          target="_blank"
        >
          <GitHub />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
