import {GitHub} from "@mui/icons-material";

import React, {useEffect, useState} from "react";

import {useLocation} from "react-router-dom";

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
  const location = useLocation();

  const [commitData, setCommitData] = useState<CommitData | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();

  const path = location.pathname;

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
    if (isLoading) {
      return <p className="commit-info">Ищем информацию...</p>;
    }

    if (error) {
      return <p className="commit-info">{error}</p>;
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
      <p className="commit-info">
        Последнее обновление страницы {formattedDate} в {formattedTime}:{" "}
        <a
          href={commitData.url}
          rel="noreferrer"
          target="_blank"
        >
          {commitData.message}
        </a>
      </p>
    );
  };

  return (
    <footer>
      <div className="footer-container">
        <div>
          <p>
            <a href="https://github.com/m1sh3r">m1sh3r</a> {"+ "}
            {title} \\ &copy; {initialYear} - {currentYear}
          </p>
          {isFaqPage(path) && (
            <>
              <p className="footer-content-info">
                Контент на этой странице обновляется благодаря вопросам участников наших
                чатов. Информация для статей взята с открытых источников.
              </p>
              {renderCommitInfo()}
            </>
          )}
        </div>
        <a
          aria-label="перейти на GitHub"
          className="footer-github-link"
          href="https://github.com/aechat/links"
          rel="noreferrer"
          target="_blank"
        >
          <GitHub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
