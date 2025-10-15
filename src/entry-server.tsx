import React from "react";

import {renderToPipeableStream} from "react-dom/server";

import {Writable} from "stream";

import {MemoryRouter} from "react-router-dom";

import {HelmetProvider, HelmetServerState} from "react-helmet-async";

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
        onShellReady() {
          const body: string[] = [];

          const writable = new Writable({
            write(chunk, encoding, callback) {
              body.push(chunk.toString());
              callback();
            },
            final(callback) {
              resolve(body.join(""));
              callback();
            },
          });
          pipe(writable);
        },
        onShellError(err: unknown) {
          reject(err);
        },
        onError(err: unknown) {
          console.error(err);
        },
      }
    );
  });

  return {html};
}
