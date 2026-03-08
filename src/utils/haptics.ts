import {type HapticInput, WebHaptics} from "web-haptics";

import {message} from "antd";

type MessageLevel = "error" | "info" | "success" | "warning";

type MessageMethod = (...arguments_: unknown[]) => unknown;

const messagePatterns: Record<MessageLevel, HapticInput> = {
  error: "error",
  info: "light",
  success: "success",
  warning: "warning",
};

let haptics: WebHaptics | undefined;

let isMessagePatched = false;

const getHapticsInstance = () => {
  if (globalThis.window === undefined || globalThis.document === undefined) {
    return;
  }

  haptics ??= new WebHaptics({showSwitch: false});

  return haptics;
};

export const triggerHaptic = (input: HapticInput = "selection") => {
  const instance = getHapticsInstance();

  if (!instance) {
    return;
  }

  void instance.trigger(input).catch(() => {});
};

const patchMessageMethod = (level: MessageLevel) => {
  const mutableMessage = message as unknown as {[K in MessageLevel]: MessageMethod};

  const originalMethod = mutableMessage[level];

  mutableMessage[level] = (...arguments_) => {
    triggerHaptic(messagePatterns[level]);

    return originalMethod(...arguments_);
  };
};

export const setupHapticMessageFeedback = () => {
  if (isMessagePatched) {
    return;
  }

  patchMessageMethod("success");
  patchMessageMethod("error");
  patchMessageMethod("warning");
  patchMessageMethod("info");

  isMessagePatched = true;
};

export const disposeHaptics = () => {
  if (!haptics) {
    return;
  }

  haptics.destroy();
  haptics = undefined;
};
