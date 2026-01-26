import React from "react";

import Addition from "./Addition";
import styles from "./HostsAdobe.module.scss";
import {useSpoiler} from "./spoilerContexts";

const HOSTS_URL =
  "https://raw.githubusercontent.com/ignaciocastro/a-dove-is-dumb/refs/heads/main/list.txt";

const HostsAdobeModal: React.FC = () => {
  const isOpen = useSpoiler();

  const [hostsLines, setHostsLines] = React.useState<string[]>([]);

  const [hasLoaded, setHasLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!isOpen || hasLoaded) {
      return;
    }

    const controller = new AbortController();

    const {signal} = controller;

    const fetchHosts = async () => {
      try {
        const response = await fetch(HOSTS_URL, {signal});

        if (!response.ok) {
          return;
        }

        const text = await response.text();

        const rawLines = text.split(/\r?\n/);

        const parsedLines = rawLines.filter((line) => {
          const trimmed = line.trim();

          return trimmed !== "" && !trimmed.startsWith("#");
        });

        setHostsLines(parsedLines);
        setHasLoaded(true);
      } catch (error: unknown) {
        if (error instanceof Error) {
          if (error.name !== "AbortError") {
            console.error("Failed to fetch hosts:", error);
          }
        } else {
          console.error("Failed to fetch hosts with unknown error:", error);
        }
      }
    };

    fetchHosts();

    return () => {
      controller.abort();
    };
  }, [isOpen, hasLoaded]);

  return (
    <>
      <code className={styles["hosts-adobe-code"]}>
        {hostsLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </code>
      <Addition type="warning">
        Для изменения системных файлов требуются права администратора. Если файла{" "}
        <mark className="file">HOSTS</mark> в этой директории нет, создайте его вручную
        без расширения. После изменения файла <mark className="file">HOSTS</mark>{" "}
        желательно перезагрузить устройство.
      </Addition>
      <Addition type="info">
        <ul>
          <li>Чтобы скопировать адреса в буфер обмена, просто нажмите на них.</li>
          <li>
            Если не хочется копировать файл <mark className="file">HOSTS</mark> туда-сюда,
            откройте текстовый редактор от имени администратора, внесите строки и
            сохраните изменения.
          </li>
          <li>
            Так как <mark className="company">Adobe</mark> регулярно обновляет свои базы,
            рекомендуется периодически обновлять <mark className="file">HOSTS</mark>{" "}
            новыми адресами для блокировки.{" "}
            <a href="https://github.com/ignaciocastro/a-dove-is-dumb/blob/main/README.md">
              Как автоматизировать это?
            </a>
          </li>
        </ul>
      </Addition>
    </>
  );
};

export default HostsAdobeModal;
