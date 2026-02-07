import pkg from "file-saver";
import {inflate} from "pako";
import React, {useState} from "react";

import {UploadFileRounded} from "@mui/icons-material";
import {message, Upload} from "antd";

import {formatBytes, formatPercentDelta} from "../../../utils/fileUtilities";
import modalStyles from "../../modals/Modal.module.scss";

import styles from "./Converter.module.scss";

const {saveAs} = pkg;

const TgsToJsonConverter: React.FC = () => {
  const [jsonData, setJsonData] = useState<unknown | undefined>();

  const [originalFileName, setOriginalFileName] = useState<string>("");

  const [originalFileSize, setOriginalFileSize] = useState<number | undefined>();

  const [decompressedJsonSize, setDecompressedJsonSize] = useState<number | undefined>();

  const handleFileUpload = async (file: File): Promise<boolean> => {
    try {
      const fileData = await file.arrayBuffer();

      setOriginalFileName(file.name);
      setOriginalFileSize(file.size);

      const decompressed = inflate(new Uint8Array(fileData));

      const jsonString = new TextDecoder().decode(decompressed);

      const json = JSON.parse(jsonString);

      setDecompressedJsonSize(new TextEncoder().encode(jsonString).length);
      setJsonData(json);
      message.success("Файл успешно преобразован!");
    } catch (error) {
      console.error("Ошибка при обработке файла:", error);
      message.error("Не удалось конвертировать файл!");
    }

    return false;
  };

  const downloadJson = (): void => {
    if (jsonData) {
      const jsonString = JSON.stringify(jsonData, undefined, 2);

      const blob = new Blob([jsonString], {
        type: "application/json",
      });

      saveAs(blob, `${originalFileName.replace(/\.tgs$/, "")}.json`);
    }
  };

  return (
    <div className={styles["converter"]}>
      <Upload.Dragger
        accept=".tgs"
        beforeUpload={handleFileUpload}
        className={styles["converter-dragger"]}
        name="file"
        showUploadList={false}
      >
        <div className={styles["converter-dragger-content"]}>
          <UploadFileRounded />
          <span className={styles["converter-dragger-text"]}>
            Перетащите файл формата TGS в это поле или нажмите для выбора файла
          </span>
        </div>
      </Upload.Dragger>
      <p className={styles["converter-info-text"]}>
        Конвертация происходит локально на вашем устройстве, качественный результат не
        гарантируется.
        {originalFileSize && decompressedJsonSize && (
          <>
            <br />
            Примерный размер нового файла:{" "}
            {`${formatBytes(originalFileSize)} → ${formatBytes(decompressedJsonSize)}`}
            {` (${formatPercentDelta(originalFileSize, decompressedJsonSize)})`}
          </>
        )}
      </p>
      {jsonData ? (
        <div className={styles["converter-button-group"]}>
          <button
            className={`${modalStyles["modal-open-button"]} ${styles["converter-button-reset"]}`}
            onClick={() => {
              setJsonData(undefined);
              setOriginalFileName("");
              setOriginalFileSize(undefined);
              setDecompressedJsonSize(undefined);
            }}
          >
            Сбросить
          </button>
          <button
            className={`${modalStyles["modal-open-button"]} ${styles["converter-button-action"]}`}
            onClick={downloadJson}
          >
            Скачать преобразованный JSON
          </button>
        </div>
      ) : undefined}
    </div>
  );
};

export default TgsToJsonConverter;
