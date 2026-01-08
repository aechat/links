/// <reference types="vite/client" />
interface Window {
  detailsSummaryScrollListenerAttached?: boolean;
  isAutoCopyEnabled?: boolean;
  loadPyodide: () => Promise<Pyodide>;
}
