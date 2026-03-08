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

const vibrationStorageKey = "isVibrationEnabled";

let haptics: WebHaptics | undefined;

let isMessagePatched = false;

let isVibrationEnabled = true;

let hasResolvedVibrationPreference = false;

const resolveVibrationPreference = () => {
  if (hasResolvedVibrationPreference || globalThis.window === undefined) {
    return;
  }

  const saved = localStorage.getItem(vibrationStorageKey);

  if (saved === null) {
    localStorage.setItem(vibrationStorageKey, "true");
    isVibrationEnabled = true;
  } else {
    isVibrationEnabled = saved === "true";
  }

  hasResolvedVibrationPreference = true;
};

export const setIsVibrationEnabled = (enabled: boolean) => {
  isVibrationEnabled = enabled;
  hasResolvedVibrationPreference = true;

  if (globalThis.window !== undefined) {
    localStorage.setItem(vibrationStorageKey, enabled.toString());
  }

  if (!enabled) {
    haptics?.cancel();
  }
};

const getHapticsInstance = () => {
  if (globalThis.window === undefined || globalThis.document === undefined) {
    return;
  }

  haptics ??= new WebHaptics({showSwitch: false});

  return haptics;
};

export const triggerHaptic = (input: HapticInput = "selection") => {
  resolveVibrationPreference();

  if (!isVibrationEnabled) {
    return;
  }

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
