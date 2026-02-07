declare global {
  interface GlobalEventHandlersEventMap {
    "open-spoiler-by-id": CustomEvent<{id: string}>;
  }
}
