import React, {useCallback, useRef, useState} from "react";

import {CloseRounded} from "@mui/icons-material";
import {Modal} from "antd";
import {useNavigate} from "react-router-dom";

import modalStyles from "../components/modals/Modal.module.scss";
import {
  downloadFileWithFallback,
  resolveDownloadLinkFileSize,
} from "../utilities/downloadUtilities";
import {
  type ArticleLinkTarget,
  type DownloadLinkTarget,
  type InternalPageLinkTarget,
  resolveArticleLinkTarget,
  resolveDownloadLinkTarget,
  resolveInternalPageLinkTarget,
} from "../utilities/linkTargets";

import {useEnterKeyConfirm} from "./useEnterKeyConfirm";
import {useRipple} from "./useRipple";

export const useInternalLinkHandler = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isDownloadStarting, setIsDownloadStarting] = useState(false);

  const downloadAbortControllerReference = useRef<AbortController | undefined>(undefined);

  const [targetArticle, setTargetArticle] = useState<ArticleLinkTarget | undefined>();

  const [targetDownload, setTargetDownload] = useState<DownloadLinkTarget | undefined>();

  const [targetPage, setTargetPage] = useState<InternalPageLinkTarget | undefined>();

  const [downloadSizeCache, setDownloadSizeCache] = useState<Record<string, string>>({});

  const ripple = useRipple<HTMLButtonElement>();

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTargetArticle(undefined);
    setTargetDownload(undefined);
    setTargetPage(undefined);
  }, []);

  const resolveDownloadFileSize = useCallback(
    async (href: string) => {
      if (downloadSizeCache[href]) {
        return downloadSizeCache[href];
      }

      const formattedSize = await resolveDownloadLinkFileSize(href);

      if (!formattedSize) {
        return;
      }

      setDownloadSizeCache((previous) => ({...previous, [href]: formattedSize}));

      return formattedSize;
    },
    [downloadSizeCache]
  );

  const handleLinkClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if ((event.target as HTMLElement).closest(".links-grid-item")) {
        return;
      }

      const downloadTarget = resolveDownloadLinkTarget(event.target, downloadSizeCache);

      if (downloadTarget) {
        event.preventDefault();
        setTargetDownload(downloadTarget);
        setTargetArticle(undefined);
        setTargetPage(undefined);
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

      const pageTarget = resolveInternalPageLinkTarget(event.target);

      if (pageTarget) {
        event.preventDefault();
        event.stopPropagation();
        setTargetPage(pageTarget);
        setTargetDownload(undefined);
        setTargetArticle(undefined);
        setIsModalOpen(true);

        return;
      }

      const articleTarget = resolveArticleLinkTarget(event.target, event.currentTarget);

      if (!articleTarget) {
        return;
      }

      event.preventDefault();
      setTargetDownload(undefined);
      setTargetPage(undefined);
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
          const controller = new AbortController();

          downloadAbortControllerReference.current = controller;

          await downloadFileWithFallback({
            fileName: targetDownload.fileName,
            href: targetDownload.href,
            signal: controller.signal,
          });

          closeModal();
        } catch (error) {
          if (error instanceof DOMException && error.name === "AbortError") {
            return;
          }

          closeModal();
        } finally {
          downloadAbortControllerReference.current = undefined;
          setIsDownloadStarting(false);
        }
      };

      void startDownload();

      return;
    }

    if (targetPage) {
      navigate(targetPage.href);
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

    closeModal();
  }, [
    closeModal,
    isDownloadStarting,
    navigate,
    targetArticle,
    targetDownload,
    targetPage,
  ]);

  const handleCancel = useCallback(() => {
    downloadAbortControllerReference.current?.abort();
    closeModal();
    setIsDownloadStarting(false);
  }, [closeModal]);

  useEnterKeyConfirm(isModalOpen, handleOk);

  let actionButtonLabel = "Перейти";

  let modalTitle = "Переход";

  let modalContent: React.ReactNode | undefined;

  if (targetDownload) {
    modalTitle = "Скачивание файла";

    if (isDownloadStarting) {
      actionButtonLabel = "Подготовка файла...";
    } else if (targetDownload.fileSize) {
      actionButtonLabel = `Скачать (${targetDownload.fileSize})`;
    } else {
      actionButtonLabel = "Скачать";
    }

    modalContent = (
      <p>
        Вы уверены, что хотите скачать {targetDownload.fileKind}{" "}
        <mark className={targetDownload.fileMarkClass}>«{targetDownload.fileName}»</mark>?
      </p>
    );
  } else if (targetPage) {
    modalTitle = "Переход на другую страницу";

    modalContent = (
      <p>
        Вы уверены, что хотите перейти на страницу{" "}
        <mark>«{targetPage.title ?? targetPage.href}»</mark>?
      </p>
    );
  } else if (targetArticle) {
    modalTitle = "Переход на другую статью";

    modalContent = (
      <p>
        Вы уверены, что хотите перейти к статье <mark>«{targetArticle.title}»</mark> на
        этой странице?
      </p>
    );
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
          <div className={modalStyles["modal-header-title"]}>{modalTitle}</div>
          <button
            className={modalStyles["modal-header-button"]}
            onClick={handleCancel}
            onMouseDown={ripple.onMouseDown}
          >
            <CloseRounded />
          </button>
        </div>
        <div className={modalStyles["modal-content"]}>
          {modalContent}
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
