import React, {useState} from "react";
import {Upload, message} from "antd";
import {saveAs} from "file-saver";
import {gzip} from "pako";
import {motion} from "framer-motion";
import {UploadFileRounded} from "@mui/icons-material";

const TgsToJsonConverter = () => {
  const [jsonData, setJsonData] = useState<unknown>(null);

  const [originalFileName, setOriginalFileName] = useState<string>("");

  const handleFileUpload = async (file: File) => {
    try {
      const fileData = await file.text();
      setOriginalFileName(file.name);

      const json = JSON.parse(fileData);
      setJsonData(json);
      message.success("Файл успешно загружен!");
    } catch (error) {
      console.error("Ошибка при обработке файла:", error);
      message.error("Не удалось конвертировать файл!");
    }

    return false;
  };

  const downloadTgs = () => {
    if (jsonData) {
      const jsonString = JSON.stringify(jsonData, null, 2);

      const compressed = gzip(jsonString);

      const blob = new Blob([compressed], {
        type: "application/gzip",
      });
      saveAs(blob, `${originalFileName.replace(/\.json$/, "")}.tgs`);
    }
  };

  return (
    <div>
      <Upload.Dragger
        accept=".json"
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
            Перетащите файл формата .json в это поле или нажмите для выбора файла
          </span>
        </div>
      </Upload.Dragger>
      <p style={{opacity: "0.5", fontSize: "0.75rem", textAlign: "center"}}>
        Конвертация происходит локально на вашем устройстве. Результат и качество
        конвертации не гарантируется.
      </p>
      {jsonData ? (
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginInline: "10px",
            marginBlock: "10px",
          }}
        >
          <motion.button
            className="modal-open-button"
            style={{filter: "saturate(0)", flexGrow: 1}}
            whileHover={{
              scale: 0.975,
              transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
            }}
            whileTap={{scale: 0.95, opacity: 0.5}}
            onClick={() => {
              setJsonData(null);
              setOriginalFileName("");
            }}
          >
            Сбросить
          </motion.button>
          <motion.button
            className="modal-open-button"
            style={{flexGrow: 3}}
            whileHover={{
              scale: 0.975,
              transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
            }}
            whileTap={{scale: 0.95, opacity: 0.5}}
            onClick={downloadTgs}
          >
            Скачать преобразованный TGS
          </motion.button>
        </div>
      ) : null}
    </div>
  );
};
export default TgsToJsonConverter;
