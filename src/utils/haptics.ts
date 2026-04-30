import {type HapticInput, WebHaptics} from "web-haptics";

import {message} from "antd";

import {isMobileDevice} from "./browserDetection";

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

export const isHapticFeedbackSupported = () => {
  if (
    globalThis.window === undefined ||
    globalThis.navigator === undefined ||
    globalThis.document === undefined
  ) {
    return false;
  }

  return isMobileDevice() && WebHaptics.isSupported;
};

const resolveVibrationPreference = () => {
  if (
    hasResolvedVibrationPreference ||
    globalThis.window === undefined ||
    !isHapticFeedbackSupported()
  ) {
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
  if (!isHapticFeedbackSupported()) {
    isVibrationEnabled = false;
    hasResolvedVibrationPreference = true;

    return;
  }

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
  if (!isHapticFeedbackSupported()) {
    return;
  }

  haptics ??= new WebHaptics({showSwitch: false});

  return haptics;
};

export const triggerHaptic = (input: HapticInput = "selection") => {
  if (!isHapticFeedbackSupported()) {
    return;
  }

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

export const withHaptic = <Arguments extends unknown[], Result>(
  input: HapticInput,
  handler: (...arguments_: Arguments) => Result
) => {
  return (...arguments_: Arguments): Result => {
    triggerHaptic(input);

    return handler(...arguments_);
  };
};

export const withSelectionHaptic = <Arguments extends unknown[], Result>(
  handler: (...arguments_: Arguments) => Result
) => withHaptic("selection", handler);

export const withSoftHaptic = <Arguments extends unknown[], Result>(
  handler: (...arguments_: Arguments) => Result
) => withHaptic("soft", handler);

export const triggerDisclosureHaptic = (
  isOpen: boolean,
  previousIsOpen: boolean | undefined
) => {
  if (previousIsOpen === undefined) {
    return;
  }

  if (isOpen && !previousIsOpen) {
    triggerHaptic("selection");

    return;
  }

  if (!isOpen && previousIsOpen) {
    triggerHaptic("soft");
  }
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
