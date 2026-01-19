/// <reference types="vite/client" />
declare global {
  var detailsSummaryScrollListenerAttached: boolean | undefined;
}

interface Window {
  detailsSummaryScrollListenerAttached?: boolean;
  isAutoCopyEnabled?: boolean;
  loadPyodide: () => Promise<Pyodide>;
}
