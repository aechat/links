const copyWithFallback = (text: string): boolean => {
  const textArea = document.createElement("textarea");

  textArea.value = text;

  Object.assign(textArea.style, {
    background: "transparent",
    border: "none",
    boxShadow: "none",
    height: "1px",
    left: "0",
    outline: "none",
    padding: "0",
    position: "fixed",
    top: "0",
    width: "1px",
  });

  textArea.setAttribute("readonly", "");
  document.body.append(textArea);
  textArea.focus();
  textArea.select();
  textArea.setSelectionRange(0, textArea.value.length);

  let success = false;

  try {
    success = document.execCommand("copy");
  } catch (error) {
    console.error("Fallback copy failed:", error);
  }

  textArea.remove();

  return success;
};

export const copyText = async (text: string): Promise<boolean> => {
  if (!navigator.clipboard?.writeText || !globalThis.isSecureContext) {
    return copyWithFallback(text);
  }

  try {
    await navigator.clipboard.writeText(text);

    return true;
  } catch (error) {
    console.error("Clipboard API failed, trying fallback:", error);

    return copyWithFallback(text);
  }
};
