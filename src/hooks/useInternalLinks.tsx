import React, {useCallback, useEffect, useState} from "react";

import {CloseRounded} from "@mui/icons-material";
import {Modal} from "antd";

import modalStyles from "../components/modals/Modal.module.scss";
import {resolveDetailsByAnchor} from "../utils/anchorResolvers";
import {formatBytes} from "../utils/fileUtilities";

import {useRipple} from "./useRipple";

interface TargetArticle {
  id: string;
  title: string;
}

interface TargetDownload {
  fileName: string;
  fileSize?: string;
  href: string;
}

export const useInternalLinkHandler = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [targetArticle, setTargetArticle] = useState<TargetArticle | undefined>();

  const [targetDownload, setTargetDownload] = useState<TargetDownload | undefined>();

  const [downloadSizeCache, setDownloadSizeCache] = useState<Record<string, string>>({});

  const ripple = useRipple<HTMLButtonElement>();

  const resolveDownloadFileSize = useCallback(
    async (href: string) => {
      if (downloadSizeCache[href]) {
        return downloadSizeCache[href];
      }

      const url = new URL(href, globalThis.location.href);

      if (url.origin !== globalThis.location.origin) {
        return;
      }

      try {
        const response = await fetch(url.toString(), {method: "HEAD"});

        const contentLengthHeader = response.headers.get("content-length");

        const contentLength = Number.parseInt(contentLengthHeader || "", 10);

        if (!Number.isNaN(contentLength) && contentLength > 0) {
          const formattedSize = formatBytes(contentLength);

          setDownloadSizeCache((previous) => ({...previous, [href]: formattedSize}));

          return formattedSize;
        }
      } catch {
        return;
      }
    },
    [downloadSizeCache]
  );

  const handleLinkClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const target = event.target as HTMLElement;

      const downloadAnchor = target.closest("a[download][href]");

      if (downloadAnchor instanceof HTMLAnchorElement) {
        const href = downloadAnchor.getAttribute("href");

        if (!href) {
          return;
        }

        const isExternalHttpLink = /^https?:\/\//i.test(href);

        if (!isExternalHttpLink) {
          event.preventDefault();

          const fileNameFromDownloadAttribute = downloadAnchor.getAttribute("download");

          const fileNameFromHref = decodeURIComponent(
            href.split("#")[0].split("?")[0].split("/").pop() || "файл"
          );

          setTargetDownload({
            fileName:
              fileNameFromDownloadAttribute && fileNameFromDownloadAttribute.trim()
                ? fileNameFromDownloadAttribute.trim()
                : fileNameFromHref,
            fileSize: downloadSizeCache[href],
            href,
          });

          setTargetArticle(undefined);
          setIsModalOpen(true);

          void resolveDownloadFileSize(href).then((resolvedFileSize) => {
            if (!resolvedFileSize) {
              return;
            }

            setTargetDownload((previous) => {
              if (!previous || previous.href !== href) {
                return previous;
              }

              return {...previous, fileSize: resolvedFileSize};
            });
          });

          return;
        }
      }

      const anchor = target.closest('a[href^="#"]');

      if (!anchor || anchor.getAttribute("href")!.length <= 1) {
        return;
      }

      const href = anchor.getAttribute("href")!;

      const anchorValue = href.slice(1);

      const targetDetails = resolveDetailsByAnchor(anchorValue);

      if (!targetDetails) {
        return;
      }

      const currentDetails = (event.currentTarget as HTMLElement).closest("details");

      if (currentDetails === targetDetails) {
        return;
      }

      event.preventDefault();

      const summary = targetDetails.querySelector("summary");

      if (!summary || !summary.id) {
        return;
      }

      const titleElement = summary.querySelector("h2");

      let title = titleElement ? titleElement.textContent : "без названия";

      title = title.replace(/^\d+\.\d+\.\s*/, "");
      setTargetDownload(undefined);
      setTargetArticle({id: summary.id, title});
      setIsModalOpen(true);
    },
    [downloadSizeCache, resolveDownloadFileSize]
  );

  const handleOk = useCallback(() => {
    if (targetDownload) {
      const downloadLink = document.createElement("a");

      downloadLink.href = targetDownload.href;
      downloadLink.download = targetDownload.fileName;
      downloadLink.rel = "noopener noreferrer";
      downloadLink.style.display = "none";

      document.body.append(downloadLink);
      downloadLink.click();
      downloadLink.remove();

      setIsModalOpen(false);
      setTargetArticle(undefined);
      setTargetDownload(undefined);

      return;
    }

    if (targetArticle) {
      const targetElement = document.getElementById(targetArticle.id);

      if (targetElement) {
        const details = targetElement.closest("details");

        if (details) {
          globalThis.dispatchEvent(new CustomEvent("close-all-spoilers"));

          setTimeout(() => {
            globalThis.dispatchEvent(
              new CustomEvent("open-spoiler-by-id", {
                detail: {id: targetArticle.id},
              })
            );
          }, 50);
        }
      }
    }

    setIsModalOpen(false);
    setTargetArticle(undefined);
    setTargetDownload(undefined);
  }, [targetArticle, targetDownload]);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
    setTargetArticle(undefined);
    setTargetDownload(undefined);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleOk();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, handleOk]);

  let actionButtonLabel = "Перейти";

  if (targetDownload) {
    actionButtonLabel = "Скачать";

    if (targetDownload.fileSize) {
      actionButtonLabel = `Скачать (${targetDownload.fileSize})`;
    }
  }

  const InternalLinkModal = (
    <Modal
      centered
      closeIcon={false}
      footer={<></>}
      open={isModalOpen}
      onCancel={handleCancel}
    >
      <div className={modalStyles["modal"]}>
        <div className={modalStyles["modal-content"]}>
          <div className={modalStyles["modal-header"]}>
            <div className={modalStyles["modal-header-title"]}>
              {targetDownload ? "Скачивание файла" : "Переход на другую статью"}
            </div>
            <button
              className={modalStyles["modal-header-button"]}
              onClick={handleCancel}
              onMouseDown={ripple.onMouseDown}
            >
              <CloseRounded />
            </button>
          </div>
          {targetDownload ? (
            <p>
              Вы уверены, что хотите скачать файл{" "}
              <mark className="file">«{targetDownload.fileName}»</mark>?
            </p>
          ) : (
            <p>
              Вы уверены, что хотите перейти к статье{" "}
              <mark>«{targetArticle?.title}»</mark> на этой странице?
            </p>
          )}
          <div className="flexible-links">
            <button
              onClick={handleOk}
              onMouseDown={ripple.onMouseDown}
            >
              {actionButtonLabel}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );

  return {handleLinkClick, InternalLinkModal};
};
