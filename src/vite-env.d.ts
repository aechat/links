/// <reference types="vite/client" />
declare module "virtual:media-metadata" {
  const metadata: Record<string, {width: number; height: number} | undefined>;

  export default metadata;
}
declare global {
  var detailsSummaryScrollListenerAttached: boolean | undefined;
}

interface Window {
  detailsSummaryScrollListenerAttached?: boolean;
  isAutoCopyEnabled?: boolean;
  loadPyodide: () => Promise<Pyodide>;
}
