import {UploadFileRounded} from "@mui/icons-material";

import {Upload, message} from "antd";

import {saveAs} from "file-saver";

import {inflate} from "pako";

import React, {useState} from "react";

const TgsToJsonConverter: React.FC = () => {
  const [jsonData, setJsonData] = useState<unknown>(null);

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
      const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
        type: "application/json",
      });
      saveAs(blob, `${originalFileName.replace(/\.tgs$/, "")}.json`);
    }
  };

  return (
    <div>
      <p style={{opacity: "0.5", fontSize: "0.75rem", textAlign: "center"}}>
        Конвертация происходит локально на вашем устройстве, качественный результат не
        гарантируется
      </p>
      <Upload.Dragger
        accept=".tgs"
        beforeUpload={handleFileUpload}
        name="file"
        showUploadList={false}
        style={{
          marginInline: "10px",
          marginBlock: "12px",
          width: "calc(100% - 20px)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UploadFileRounded />
          <span style={{fontSize: "0.9rem"}}>
            Перетащите файл формата TGS в это поле или нажмите для выбора файла
          </span>
        </div>
      </Upload.Dragger>
      {jsonData ? (
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginInline: "10px",
            marginBlock: "10px",
          }}
        >
          <button
            className="modal-open-button"
            style={{filter: "saturate(0)", flexGrow: 1}}
            onClick={() => {
              setJsonData(null);
              setOriginalFileName("");
            }}
          >
            Сбросить
          </button>
          <button
            className="modal-open-button"
            style={{flexGrow: 3}}
            onClick={downloadJson}
          >
            Скачать преобразованный JSON
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TgsToJsonConverter;
