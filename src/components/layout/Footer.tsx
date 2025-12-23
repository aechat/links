import React, {useEffect, useState} from "react";

import {GitHub} from "@mui/icons-material";
import {useLocation} from "react-router-dom";

import {formatRelativeTime} from "../../utils/dateUtils";

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
  date: Date;
  message: string;
  url: string;
}
interface FooterProperties {
  initialYear: number;
  title: string;
}
const FAQ_PATHS = ["/aefaq", "/prfaq", "/psfaq", "/aeexpr"] as const;

type FaqPath = (typeof FAQ_PATHS)[number];
const PATH_MAP: Record<FaqPath, string> = {
  "/aeexpr": "src/pages/sections/aeexpr",
  "/aefaq": "src/pages/sections/aefaq",
  "/prfaq": "src/pages/sections/prfaq",
  "/psfaq": "src/pages/sections/psfaq",
};
const Footer: React.FC<FooterProperties> = ({initialYear, title}) => {
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

        const rawMessage = lastMeaningfulCommit.commit.message;
        const regex = /^\w+(\([\w/.-]+\))?:\s*(.*)/;
        const match = rawMessage.match(regex);
        let description = rawMessage;

        if (match && match[2]) {
          description = match[2];
        }

        const message = description;

        setCommitData({
          date: new Date(lastMeaningfulCommit.commit.author.date),
          message,
          url: lastMeaningfulCommit.html_url,
        });
      } catch (error_) {
        const errorMessage =
          error_ instanceof Error ? error_.message : "Произошла неизвестная ошибка";

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

    const relativeTime = formatRelativeTime(commitData.date);

    return (
      <p className="commit-info">
        Последнее обновление страницы {relativeTime}:{" "}
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
                Содержание этой страницы периодически обновляется благодаря вопросам от
                участников наших чатов и предоставляется по принципу «как есть».
              </p>
              <p className="footer-content-info">
                Статьи основаны на информации из открытых источников. Они могут быть
                неполными, устаревшими или неточными, а мнения автора и читателей — не
                совпадать.
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
