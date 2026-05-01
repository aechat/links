import React, {useCallback, useRef, useState} from "react";

import {CloseRounded} from "@mui/icons-material";
import {Modal} from "antd";

import modalStyles from "../components/modals/Modal.module.scss";
import {formatBytes} from "../utils/fileUtilities";
import {
  type ArticleLinkTarget,
  type DownloadLinkTarget,
  resolveArticleLinkTarget,
  resolveDownloadLinkTarget,
} from "../utils/linkTargets";

import {useEnterKeyConfirm} from "./useEnterKeyConfirm";
import {useRipple} from "./useRipple";

const clickHiddenDownloadLink = (href: string, fileName: string) => {
  const downloadLink = document.createElement("a");

  downloadLink.href = href;
  downloadLink.download = fileName;
  downloadLink.rel = "noopener noreferrer";
  downloadLink.style.display = "none";
  document.body.append(downloadLink);
  downloadLink.click();
  downloadLink.remove();
};

export const useInternalLinkHandler = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isDownloadStarting, setIsDownloadStarting] = useState(false);

  const downloadAbortControllerReference = useRef<AbortController | undefined>(undefined);

  const [targetArticle, setTargetArticle] = useState<ArticleLinkTarget | undefined>();

  const [targetDownload, setTargetDownload] = useState<DownloadLinkTarget | undefined>();

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
      const downloadTarget = resolveDownloadLinkTarget(event.target, downloadSizeCache);

      if (downloadTarget) {
        event.preventDefault();
        setTargetDownload(downloadTarget);
        setTargetArticle(undefined);
        setIsModalOpen(true);

        void resolveDownloadFileSize(downloadTarget.href).then((resolvedFileSize) => {
          if (!resolvedFileSize) {
            return;
          }

          setTargetDownload((previous) => {
            if (!previous || previous.href !== downloadTarget.href) {
              return previous;
            }

            return {...previous, fileSize: resolvedFileSize};
          });
        });

        return;
      }

      const articleTarget = resolveArticleLinkTarget(event.target, event.currentTarget);

      if (!articleTarget) {
        return;
      }

      event.preventDefault();
      setTargetDownload(undefined);
      setTargetArticle(articleTarget);
      setIsModalOpen(true);
    },
    [downloadSizeCache, resolveDownloadFileSize]
  );

  const handleOk = useCallback(() => {
    if (targetDownload) {
      if (isDownloadStarting) {
        return;
      }

      const startDownload = async () => {
        setIsDownloadStarting(true);

        try {
          const downloadUrl = new URL(targetDownload.href, globalThis.location.href);

          const controller = new AbortController();

          downloadAbortControllerReference.current = controller;

          const response = await fetch(downloadUrl.toString(), {
            signal: controller.signal,
          });

          if (!response.ok) {
            throw new Error("Failed to fetch downloadable file");
          }

          const blob = await response.blob();

          const objectUrl = URL.createObjectURL(blob);

          clickHiddenDownloadLink(objectUrl, targetDownload.fileName);
          globalThis.setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
          setIsModalOpen(false);
          setTargetArticle(undefined);
          setTargetDownload(undefined);
        } catch (error) {
          if (error instanceof DOMException && error.name === "AbortError") {
            return;
          }

          clickHiddenDownloadLink(targetDownload.href, targetDownload.fileName);
          setIsModalOpen(false);
          setTargetArticle(undefined);
          setTargetDownload(undefined);
        } finally {
          downloadAbortControllerReference.current = undefined;
          setIsDownloadStarting(false);
        }
      };

      void startDownload();

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
  }, [isDownloadStarting, targetArticle, targetDownload]);

  const handleCancel = useCallback(() => {
    downloadAbortControllerReference.current?.abort();
    setIsModalOpen(false);
    setIsDownloadStarting(false);
    setTargetArticle(undefined);
    setTargetDownload(undefined);
  }, []);

  useEnterKeyConfirm(isModalOpen, handleOk);

  let actionButtonLabel = "Перейти";

  if (targetDownload) {
    if (isDownloadStarting) {
      actionButtonLabel = "Подготовка файла...";
    } else if (targetDownload.fileSize) {
      actionButtonLabel = `Скачать (${targetDownload.fileSize})`;
    } else {
      actionButtonLabel = "Скачать";
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
        <div className={modalStyles["modal-content"]}>
          {targetDownload ? (
            <p>
              Вы уверены, что хотите скачать {targetDownload.fileKind}{" "}
              <mark className={targetDownload.fileMarkClass}>
                «{targetDownload.fileName}»
              </mark>
              ?
            </p>
          ) : (
            <p>
              Вы уверены, что хотите перейти к статье{" "}
              <mark>«{targetArticle?.title}»</mark> на этой странице?
            </p>
          )}
          <div className="flexible-links">
            <button
              disabled={isDownloadStarting}
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
