import React, {useEffect, useState} from "react";

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

interface GithubUpdateInfoProps {
  folderPath: string;
}

const GithubUpdateInfo: React.FC<GithubUpdateInfoProps> = ({folderPath}) => {
  const [commitData, setCommitData] = useState<CommitData | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
        setError(`Индикатор свежести временно недоступен.`);
        console.error(`Ошибка при получении данных с GitHub: ${errorMessage}`);
      } finally {
        setIsLoading(false);
      }
    };

    getLastCommit();
  }, [folderPath]);

  const paragraphStyles: React.CSSProperties = {
    filter: "saturate(0.5)",
    fontSize: "0.785rem",
    opacity: "0.5",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "1.5",
    marginBlockStart: "8px",
    marginBlockEnd: "10px",
    marginInline: "15px",
  };

  const linkStyles: React.CSSProperties = {
    fontWeight: 600,
    lineHeight: "1.35",
    color: "var(--accent)",
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

export default GithubUpdateInfo;
