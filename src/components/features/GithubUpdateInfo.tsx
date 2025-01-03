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
      if (commits.length === 0) {
        setCommitInfo("Информация о свежести временно недоступна");

        return;
      }

      const lastCommitDate = new Date(commits[0].commit.author.date);

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

      const commitMessage = commits[0].commit.message;

      const commitUrl = commits[0].html_url;
      setCommitInfo(
        `Обновлено ${formattedDate}, ${formattedClock}: <a href="${commitUrl}" target="_blank">${commitMessage}</a>`
      );
    } catch (err) {
      setError(`${err}, информация о свежести временно недоступна`);
    }
  };
  useEffect(() => {
    getLastCommitDate();
  }, [filePath]);
  if (error) {
    return (
      <p
        style={{
          textAlign: "right",
          fontSize: "12px",
          color: "red",
          opacity: "0.75",
          whiteSpace: "pre-wrap",
        }}
      >
        {error}
      </p>
    );
  }

  return (
    <p
      style={{
        textAlign: "right",
        fontSize: "12px",
        whiteSpace: "pre-wrap",
        opacity: "0.5",
        filter: "saturate(0)",
      }}
      dangerouslySetInnerHTML={{__html: commitInfo}}
    />
  );
};
export default GithubUpdateInfo;
