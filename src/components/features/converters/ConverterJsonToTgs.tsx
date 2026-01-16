import pkg from "file-saver";
import {gzip} from "pako";
import React, {useEffect, useState} from "react";

import {UploadFileRounded} from "@mui/icons-material";
import {message, Radio, Spin, Upload} from "antd";

import modalStyles from "../../modals/Modal.module.scss";

import styles from "./Converter.module.scss";

const {saveAs} = pkg;

const TgsToJsonConverter: React.FC = () => {
  const [jsonData, setJsonData] = useState<Record<string, unknown> | undefined>();

  const [originalFileName, setOriginalFileName] = useState<string>("");

  const [compressionMode, setCompressionMode] = useState<"js" | "python">("js");

  const [pyodide, setPyodide] = useState<Pyodide | undefined>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (compressionMode === "python" && !pyodide) {
      loadPyodideInline();
    }
  }, [compressionMode, pyodide]);

  const loadPyodideInline = async (): Promise<void> => {
    setLoading(true);

    try {
      const script = document.createElement("script");

      script.src = "https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js";

      script.integrity =
        "sha256-43a8b5449083ae90c86f457233a4bd595864178d08a8f7c6799288f96e8c9f5d";

      script.crossOrigin = "anonymous";

      script.addEventListener("load", async () => {
        const py: Pyodide = await loadPyodide();

        setPyodide(py);
        setLoading(false);
        message.success("Python-интерпретатор загружен, начните процесс конвертации");
      });

      script.addEventListener("error", () => {
        message.error("Не удалось загрузить Python-интерпретатор");
        setLoading(false);
      });

      document.body.append(script);
    } catch (error) {
      console.error("Ошибка загрузки Pyodide:", error);
      message.error("Не удалось загрузить Python-интерпретатор");
      setLoading(false);
    }
  };

  const handleFileUpload = async (file: File): Promise<boolean> => {
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

  const downloadTgs = async (): Promise<void> => {
    if (!jsonData) {
      return;
    }

    setLoading(true);

    const jsonString = JSON.stringify(jsonData, undefined, 2);

    let blob;

    if (compressionMode === "js") {
      const compressed = gzip(jsonString);

      blob = new Blob([compressed], {type: "application/gzip"});
    } else if (compressionMode === "python") {
      if (!pyodide) {
        message.error("Python-интерпретатор ещё загружается");
        setLoading(false);

        return;
      }

      const buffer = new TextEncoder().encode(jsonString);

      pyodide.FS.writeFile("input.json", buffer);

      await pyodide.runPythonAsync(`
import gzip
with open("input.json", "rb") as f_in:
    with gzip.open("output.tgs", "wb") as f_out:
        f_out.write(f_in.read())
      `);

      const result = pyodide.FS.readFile("output.tgs");

      const arrayBuffer = new ArrayBuffer(result.buffer.byteLength);

      new Uint8Array(arrayBuffer).set(new Uint8Array(result.buffer));
      blob = new Blob([arrayBuffer], {type: "application/gzip"});
    }

    if (!blob) {
      message.error("Ошибка при создании файла!");
      setLoading(false);

      return;
    }

    saveAs(blob, `${originalFileName.replace(/\.json$/, "")}.tgs`);
    setLoading(false);
  };

  return (
    <div className={styles["converter"]}>
      <p className={styles["converter-info-text"]}>
        Конвертация происходит локально на вашем устройстве, качественный результат не
        гарантируется
      </p>
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
      <div className={styles["converter-radio-wrapper"]}>
        <Radio.Group
          className={styles["converter-radio-group"]}
          value={compressionMode}
          onChange={(event) => setCompressionMode(event.target.value)}
        >
          <Radio value="js">js-pako-gzip</Radio>
          <Radio value="python">python-gzip</Radio>
        </Radio.Group>
      </div>
      {jsonData && typeof jsonData === "object" && (
        <div className={styles["converter-button-group"]}>
          <button
            className={`${modalStyles["modal-open-button"]} ${styles["converter-button-reset"]}`}
            onClick={() => {
              setJsonData(undefined);
              setOriginalFileName("");
            }}
          >
            Сбросить
          </button>
          <button
            className={`${modalStyles["modal-open-button"]} ${styles["converter-button-action"]}`}
            disabled={loading}
            onClick={downloadTgs}
          >
            {loading ? <Spin size="small" /> : "Скачать преобразованный TGS"}
          </button>
        </div>
      )}
    </div>
  );
};

export default TgsToJsonConverter;
