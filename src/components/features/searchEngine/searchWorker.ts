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

globalThis.addEventListener("message", (event: MessageEvent<WorkerMessage>) => {
  if (event.origin && event.origin !== globalThis.location.origin) {
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
