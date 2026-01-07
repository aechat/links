export const formatNestedQuotes = (text: string): string => {
  return text.replaceAll(/«(.+?)»/g, "„$1“");
};
