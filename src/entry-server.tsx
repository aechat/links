import {Writable} from "node:stream";

import React from "react";

import {renderToPipeableStream} from "react-dom/server";
import {HelmetProvider, HelmetServerState} from "react-helmet-async";
import {MemoryRouter} from "react-router-dom";

import {App} from "./App";

export async function render(url: string, context: {helmet?: HelmetServerState}) {
  const html = await new Promise<string>((resolve, reject) => {
    const {pipe} = renderToPipeableStream(
      <React.StrictMode>
        <HelmetProvider context={context}>
          <MemoryRouter initialEntries={[url]}>
            <App />
          </MemoryRouter>
        </HelmetProvider>
      </React.StrictMode>,
      {
        onError(error: unknown) {
          console.error(error);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onShellReady() {
          const body: string[] = [];
          const writable = new Writable({
            final(callback) {
              resolve(body.join(""));
              callback();
            },
            write(chunk, encoding, callback) {
              body.push(chunk.toString());
              callback();
            },
          });

          pipe(writable);
        },
      }
    );
  });

  return {html};
}
