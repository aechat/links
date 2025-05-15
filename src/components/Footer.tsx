import React from "react";
import {GitHub} from "@mui/icons-material";
import {motion} from "framer-motion";

interface FooterProps {
  title: string;
  initialYear: number;
}

const Footer: React.FC<FooterProps> = ({title, initialYear}) => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      animate={{opacity: 0.5}}
      className="footer"
      initial={{opacity: 0}}
      transition={{duration: 0.5, delay: 1}}
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
          {(window.location.pathname === "/aefaq" ||
            window.location.pathname === "/prfaq" ||
            window.location.pathname === "/psfaq" ||
            window.location.pathname === "/aeexpr") && (
            <p
              style={{
                opacity: 0.5,
                fontSize: "0.9em",

                fontWeight: 400,
              }}
            >
              Контент на этой странице обновляется благодаря вопросам участников наших
              чатов.
            </p>
          )}
        </div>
        <a
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
