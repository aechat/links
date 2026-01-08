import pkg from "file-saver";
import {inflate} from "pako";
import React, {useState} from "react";

import {UploadFileRounded} from "@mui/icons-material";
import {message, Upload} from "antd";

const {saveAs} = pkg;

const TgsToJsonConverter: React.FC = () => {
  const [jsonData, setJsonData] = useState<unknown | undefined>();

  const [originalFileName, setOriginalFileName] = useState<string>("");

  const handleFileUpload = async (file: File): Promise<boolean> => {
    try {
      const fileData = await file.arrayBuffer();

      setOriginalFileName(file.name);

      const decompressed = inflate(new Uint8Array(fileData));

      const json = JSON.parse(new TextDecoder().decode(decompressed));

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
      const blob = new Blob([JSON.stringify(jsonData, undefined, 2)], {
        type: "application/json",
      });

      saveAs(blob, `${originalFileName.replace(/\.tgs$/, "")}.json`);
    }
  };

  return (
    <div className="converter">
      <p className="converter-info-text">
        Конвертация происходит локально на вашем устройстве, качественный результат не
        гарантируется
      </p>
      <Upload.Dragger
        accept=".tgs"
        beforeUpload={handleFileUpload}
        className="converter-dragger"
        name="file"
        showUploadList={false}
      >
        <div className="converter-dragger-content">
          <UploadFileRounded />
          <span className="converter-dragger-text">
            Перетащите файл формата TGS в это поле или нажмите для выбора файла
          </span>
        </div>
      </Upload.Dragger>
      {jsonData ? (
        <div className="converter-button-group">
          <button
            className="modal-open-button converter-button-reset"
            onClick={() => {
              setJsonData(undefined);
              setOriginalFileName("");
            }}
          >
            Сбросить
          </button>
          <button
            className="modal-open-button converter-button-action"
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
