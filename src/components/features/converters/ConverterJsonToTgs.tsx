import pkg from "file-saver";
import {gzip} from "pako";
import React, {useMemo, useState} from "react";

import {UploadFileRounded} from "@mui/icons-material";
import {message, Spin, Upload} from "antd";

import modalStyles from "../../modals/Modal.module.scss";

import styles from "./Converter.module.scss";

const {saveAs} = pkg;

const formatBytes = (bytes: number): string => {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const kb = bytes / 1024;

  if (kb < 1024) {
    return `${kb.toFixed(1)} KB`;
  }

  const mb = kb / 1024;

  return `${mb.toFixed(1)} MB`;
};

const formatPercentDelta = (fromBytes: number, toBytes: number): string => {
  if (fromBytes <= 0) {
    return "0%";
  }

  const delta = ((toBytes - fromBytes) / fromBytes) * 100;

  const rounded = Math.round(delta * 10) / 10;

  return `${rounded > 0 ? "+" : ""}${rounded}%`;
};

const JsonToTgsConverter: React.FC = () => {
  const [jsonData, setJsonData] = useState<Record<string, unknown> | undefined>();

  const [originalFileName, setOriginalFileName] = useState<string>("");

  const [originalFileSize, setOriginalFileSize] = useState<number | undefined>();

  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (file: File): Promise<boolean> => {
    try {
      const fileData = await file.text();

      setOriginalFileName(file.name);
      setOriginalFileSize(file.size);

      const json = JSON.parse(fileData);

      setJsonData(json);
      message.success("Файл успешно загружен!");
    } catch (error) {
      console.error("Ошибка при обработке файла:", error);
      message.error("Не удалось конвертировать файл!");
    }

    return false;
  };

  const preview = useMemo(() => {
    if (!jsonData) {
      return;
    }

    const jsonString = JSON.stringify(jsonData);

    const jsonBytes = new TextEncoder().encode(jsonString).length;

    const gzipBytes = gzip(jsonString).length;

    return {
      gzipBytes,
      jsonBytes,
    };
  }, [jsonData]);

  const downloadTgs = async (): Promise<void> => {
    if (!jsonData) {
      return;
    }

    setIsLoading(true);

    const jsonString = JSON.stringify(jsonData);

    const compressed = gzip(jsonString);

    const blob = new Blob([compressed], {type: "application/gzip"});

    if (!blob) {
      message.error("Ошибка при создании файла!");
      setIsLoading(false);

      return;
    }

    saveAs(blob, `${originalFileName.replace(/\.json$/, "")}.tgs`);
    setIsLoading(false);
  };

  return (
    <div className={styles["converter"]}>
      <Upload.Dragger
        accept=".json"
        beforeUpload={handleFileUpload}
        className={styles["converter-dragger"]}
        name="file"
        showUploadList={false}
      >
        <div className={styles["converter-dragger-content"]}>
          <UploadFileRounded />
          <span className={styles["converter-dragger-text"]}>
            Перетащите файл формата JSON в это поле или нажмите для выбора файла
          </span>
        </div>
      </Upload.Dragger>
      <p className={styles["converter-info-text"]}>
        Конвертация происходит локально на вашем устройстве, качественный результат не
        гарантируется.{" "}
        {preview && (
          <>
            Примерный размер файла:{" "}
            {originalFileSize
              ? `${formatBytes(originalFileSize)} → ${formatBytes(
                  preview.jsonBytes
                )} → ${formatBytes(preview.gzipBytes)}`
              : `${formatBytes(preview.jsonBytes)} → ${formatBytes(preview.gzipBytes)}`}
            {originalFileSize &&
              ` (${formatPercentDelta(originalFileSize, preview.gzipBytes)})`}
          </>
        )}
      </p>
      {jsonData && typeof jsonData === "object" && (
        <div className={styles["converter-button-group"]}>
          <button
            className={`${modalStyles["modal-open-button"]} ${styles["converter-button-reset"]}`}
            onClick={() => {
              setJsonData(undefined);
              setOriginalFileName("");
              setOriginalFileSize(undefined);
            }}
          >
            Сбросить
          </button>
          <button
            className={`${modalStyles["modal-open-button"]} ${styles["converter-button-action"]}`}
            disabled={isLoading}
            onClick={downloadTgs}
          >
            {isLoading ? <Spin size="small" /> : "Скачать преобразованный TGS"}
          </button>
        </div>
      )}
    </div>
  );
};

export default JsonToTgsConverter;
