interface Pyodide {
  FS: {
    writeFile: (filename: string, data: Uint8Array) => void;
    readFile: (filename: string) => Uint8Array;
  };
  loadPackage: (packageOrPackages: string | string[]) => Promise<void>;
  runPython: (code: string) => unknown;
  runPythonAsync: (code: string) => Promise<void>;
}

declare global {
  interface GlobalEventHandlersEventMap {
    "open-spoiler-by-id": CustomEvent<{id: string}>;
  }
}
declare function loadPyodide(): Promise<Pyodide>;
