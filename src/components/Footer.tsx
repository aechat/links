import {GitHub} from "@mui/icons-material";

import React, {useEffect, useState} from "react";

// GITHUB API
const OWNER = "aechat";

const REPO = "links";

const BRANCH = "main";

interface GithubCommitAPI {
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  html_url: string;
}

interface CommitData {
  message: string;
  url: string;
  date: Date;
}

// FOOTER PROPS
interface FooterProps {
  title: string;
  initialYear: number;
}

const FAQ_PATHS = ["/aefaq", "/prfaq", "/psfaq", "/aeexpr"] as const;
type FaqPath = (typeof FAQ_PATHS)[number];

const PATH_MAP: Record<FaqPath, string> = {
  "/aefaq": "src/pages/sections/aefaq",
  "/prfaq": "src/pages/sections/prfaq",
  "/psfaq": "src/pages/sections/psfaq",
  "/aeexpr": "src/pages/sections/aeexpr",
};

const Footer: React.FC<FooterProps> = ({title, initialYear}) => {
  const [commitData, setCommitData] = useState<CommitData | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();

  const path = window.location.pathname;

  const isFaqPage = (p: string): p is FaqPath => {
    return FAQ_PATHS.includes(p as FaqPath);
  };

  useEffect(() => {
    if (!isFaqPage(path)) {
      return;
    }

    const folderPath = PATH_MAP[path];

    const getLastCommit = async () => {
      setIsLoading(true);
      setError(null);
      setCommitData(null);

      const url = `https://api.github.com/repos/${OWNER}/${REPO}/commits?path=${folderPath}&sha=${BRANCH}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Ошибка сети: ${response.status}`);
        }

        const commits = (await response.json()) as GithubCommitAPI[];

        const lastMeaningfulCommit = commits.find(
          (commit) => !commit.commit.message.startsWith("Merge")
        );

        if (!lastMeaningfulCommit) {
          throw new Error("Не удалось найти коммиты для этой папки.");
        }

        const message =
          lastMeaningfulCommit.commit.message.charAt(0).toLowerCase() +
          lastMeaningfulCommit.commit.message.slice(1);

        setCommitData({
          message,
          url: lastMeaningfulCommit.html_url,
          date: new Date(lastMeaningfulCommit.commit.author.date),
        });
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Произошла неизвестная ошибка";
        setError("Индикатор свежести временно недоступен.");
        console.error(`Ошибка при получении данных с GitHub: ${errorMessage}`);
      } finally {
        setIsLoading(false);
      }
    };

    getLastCommit();
  }, [path]);

  const renderCommitInfo = () => {
    const paragraphStyles: React.CSSProperties = {
      color: "var(--color-text-tertiary)",
      fontSize: "0.785rem",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "1.5",
      marginBlockStart: "15px",
    };

    const linkStyles: React.CSSProperties = {
      fontWeight: 600,
      lineHeight: "1.35",
      color: "var(--color-accent)",
      fontFamily: "Onest, Inter, sans-serif",
    };

    if (isLoading) {
      return <p style={paragraphStyles}>Ищем информацию...</p>;
    }

    if (error) {
      return <p style={paragraphStyles}>{error}</p>;
    }

    if (!commitData) {
      return null;
    }

    const dateOptions: Intl.DateTimeFormatOptions = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    };

    const clockOptions: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };

    const formattedDate = commitData.date.toLocaleDateString("ru-RU", dateOptions);

    const formattedTime = commitData.date.toLocaleTimeString("ru-RU", clockOptions);

    return (
      <p style={paragraphStyles}>
        Последнее обновление страницы {formattedDate} в {formattedTime}:{" "}
        <a
          href={commitData.url}
          rel="noreferrer"
          style={linkStyles}
          target="_blank"
        >
          {commitData.message}
        </a>
      </p>
    );
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
          {isFaqPage(path) && (
            <>
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
              {renderCommitInfo()}
            </>
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
