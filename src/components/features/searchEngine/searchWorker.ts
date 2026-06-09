import {searchDetails, type SearchWorkerDetail} from "./searchQueryCore";

type InitMessage = {
  details: SearchWorkerDetail[];
  type: "init";
};

type SearchMessage = {
  query: string;
  requestId: number;
  type: "search";
};

type WorkerMessage = InitMessage | SearchMessage;

type WorkerResultMessage = {
  query: string;
  requestId: number;
  results: ReturnType<typeof searchDetails>;
  type: "results";
};

let cachedDetailsData: SearchWorkerDetail[] = [];

const getWorkerHostOrigin = (): string => {
  const href = globalThis.location.href;

  if (href.startsWith("blob:")) {
    try {
      return new URL(href.slice(5)).origin;
    } catch {}
  }

  return globalThis.location.origin;
};

globalThis.addEventListener("message", (event: MessageEvent<WorkerMessage>) => {
  const hostOrigin = getWorkerHostOrigin();

  if (
    event.origin &&
    event.origin !== "null" &&
    hostOrigin !== "null" &&
    event.origin !== hostOrigin
  ) {
    return;
  }

  const message = event.data;

  if (message.type === "init") {
    cachedDetailsData = message.details;

    return;
  }

  if (message.type !== "search") {
    return;
  }

  const {query, requestId} = message;

  const response: WorkerResultMessage = {
    query,
    requestId,
    results: searchDetails(cachedDetailsData, query),
    type: "results",
  };

  self.postMessage(response);
});
