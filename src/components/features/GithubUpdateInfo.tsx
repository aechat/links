import React, {useEffect, useState} from "react";

const OWNER = "aechat";

const REPO = "links";

const BRANCH = "main";
interface GithubUpdateInfoProps {
  filePath: string;
}

const GithubUpdateInfo: React.FC<GithubUpdateInfoProps> = ({filePath}) => {
  const [commitInfo, setCommitInfo] = useState<string>("Ищем информацию...");

  const [error, setError] = useState<string | null>(null);

  const getLastCommitDate = async () => {
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/commits?path=${filePath}&sha=${BRANCH}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const commits = await response.json();
      interface Commit {
        commit: {
          message: string;
        };
      }

      const filteredCommits = commits.filter(
        (commit: Commit) => !commit.commit.message.startsWith("Merge")
      );
      if (filteredCommits.length === 0) {
        setCommitInfo("Индикатор свежести информации временно недоступен");

        return;
      }

      const lastCommitDate = new Date(filteredCommits[0].commit.author.date);

      const dateOptions: Intl.DateTimeFormatOptions = {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      };

      const clockOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
      };

      const formattedDate = lastCommitDate.toLocaleString("ru-RU", dateOptions);

      const formattedClock = lastCommitDate.toLocaleString("ru-RU", clockOptions);

      const commitMessage =
        filteredCommits[0].commit.message.charAt(0).toLowerCase() +
        filteredCommits[0].commit.message.slice(1);

      const commitUrl = filteredCommits[0].html_url;
      setCommitInfo(
        `Раздел обновлён ${formattedDate} в ${formattedClock}<br/>Что нового: <a style="font-weight: 800;" target="_blank" rel="noreferrer" href="${commitUrl}" target="_blank">${commitMessage}</a>`
      );
    } catch (err) {
      setError(`Индикатор свежести информации временно недоступен: ${err}`);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getLastCommitDate();
    }, 1500);

    return () => clearTimeout(timer);
  }, [filePath]);
  if (error) {
    return (
      <p
        style={{
          color: "var(--accent)",
          fontSize: "0.75rem",
          opacity: "0.35",
          textAlign: "right",
          textWrap: "balance",
          whiteSpace: "pre-wrap",
          hyphens: "none",
          fontWeight: "400",
          fontStyle: "italic",
          lineHeight: "1.35",
          marginBlockEnd: "20px",
          marginInline: "10px",
        }}
      >
        {error}
      </p>
    );
  }

  return (
    <p
      style={{
        filter: "saturate(0.5)",
        fontSize: "0.75rem",
        opacity: "0.5",
        textAlign: "right",
        hyphens: "none",
        fontWeight: "400",
        whiteSpace: "pre-wrap",
        lineHeight: "1.35",
        marginBlockEnd: "20px",
        marginInline: "10px",
      }}
      dangerouslySetInnerHTML={{__html: commitInfo}}
    />
  );
};
export default GithubUpdateInfo;
