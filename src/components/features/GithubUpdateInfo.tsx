import React, {useEffect, useState} from "react";

/** владелец репозитория */

const OWNER = "aechat";

/** название репозитория */

const REPO = "links";

/** ветка репозитория */

const BRANCH = "main";

/**
 * пропсы компонента информации об обновлении
 */

interface GithubUpdateInfoProps {
  /** путь к файлу в репозитории */

  filePath: string;
}

/**
 * интерфейс коммита из github api
 */

interface Commit {
  /** информация о коммите */

  commit: {
    /** сообщение коммита */

    message: string;

    /** информация об авторе */

    author: {
      /** дата коммита */

      date: string;
    };
  };

  /** url коммита */

  html_url: string;
}

/**
 * компонент для отображения информации о последнем обновлении файла в github
 * @param filePath - путь к файлу в репозитории
 * @returns компонент с информацией о последнем обновлении
 */

const GithubUpdateInfo: React.FC<GithubUpdateInfoProps> = ({filePath}) => {
  const [commitInfo, setCommitInfo] = useState<string>("Ищем информацию...");

  /*
   * получает информацию о последнем коммите файла
   */

  const getLastCommitDate = async (): Promise<void> => {
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/commits?path=${filePath}&sha=${BRANCH}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const commits = (await response.json()) as Commit[];

      const filteredCommits = commits.filter(
        (commit) => !commit.commit.message.startsWith("Merge")
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
        `Обновлено ${formattedDate} в ${formattedClock}: <a style="font-weight: 800; lineHeight: "1.35"" target="_blank" rel="noreferrer" href="${commitUrl}" target="_blank">${commitMessage}</a>`
      );
    } catch (err) {
      setCommitInfo(`Индикатор свежести информации временно недоступен - ${err}`);
    }
  };

  // получение информации о коммите при изменении пути к файлу

  useEffect(() => {
    getLastCommitDate();
  }, [filePath]);

  return (
    <p
      dangerouslySetInnerHTML={{__html: commitInfo}}
      style={{
        filter: "saturate(0.5)",
        fontSize: "0.75rem",
        opacity: "0.5",
        height: "20px",
        textAlign: "right",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontWeight: "400",
        lineHeight: "1.35",
        marginBlockEnd: "20px",
        marginInline: "10px",
      }}
    />
  );
};
export default GithubUpdateInfo;
