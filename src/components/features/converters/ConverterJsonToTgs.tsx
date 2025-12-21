import {UploadFileRounded} from "@mui/icons-material";

import {Radio, Spin, Upload, message} from "antd";

import pkg from "file-saver";

const {saveAs} = pkg;

import {gzip} from "pako";

import React, {useEffect, useState} from "react";

interface Pyodide {
  FS: {
    writeFile: (filename: string, data: Uint8Array) => void;
    readFile: (filename: string) => Uint8Array;
  };
  runPythonAsync: (code: string) => Promise<void>;
}
declare global {
  interface Window {
    loadPyodide: () => Promise<Pyodide>;
  }
}

const TgsToJsonConverter: React.FC = () => {
  const [jsonData, setJsonData] = useState<Record<string, unknown> | null>(null);

  const [originalFileName, setOriginalFileName] = useState<string>("");

  const [compressionMode, setCompressionMode] = useState<"js" | "python">("js");

  const [pyodide, setPyodide] = useState<Pyodide | null>(null);

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
      script.onload = async () => {
        const py: Pyodide = await window.loadPyodide();
        setPyodide(py);
        setLoading(false);
        message.success("Python-интерпретатор загружен, начните процесс конвертации");
      };

      script.onerror = () => {
        message.error("Не удалось загрузить Python-интерпретатор");
        setLoading(false);
      };
      document.body.appendChild(script);
    } catch (e) {
      console.error("Ошибка загрузки Pyodide:", e);
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

    const jsonString = JSON.stringify(jsonData, null, 2);
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
      blob = new Blob([result.slice()], {type: "application/gzip"});
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
    <div className="converter">
      <p className="converter-info-text">
        Конвертация происходит локально на вашем устройстве, качественный результат не
        гарантируется
      </p>
      <Upload.Dragger
        accept=".json"
        beforeUpload={handleFileUpload}
        className="converter-dragger"
        name="file"
        showUploadList={false}
      >
        <div className="converter-dragger-content">
          <UploadFileRounded />
          <span className="converter-dragger-text">
            Перетащите файл формата JSON в это поле или нажмите для выбора файла
          </span>
        </div>
      </Upload.Dragger>
      <div className="converter-radio-wrapper">
        <Radio.Group
          className="converter-radio-group"
          value={compressionMode}
          onChange={(e) => setCompressionMode(e.target.value)}
        >
          <Radio value="js">js-pako-gzip</Radio>
          <Radio value="python">python-gzip</Radio>
        </Radio.Group>
      </div>
      {jsonData && typeof jsonData === "object" && (
        <div className="converter-button-group">
          <button
            className="modal-open-button converter-button-reset"
            onClick={() => {
              setJsonData(null);
              setOriginalFileName("");
            }}
          >
            Сбросить
          </button>
          <button
            className="modal-open-button converter-button-action"
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
