const KEY_MODIFIERS = ["ctrl", "alt", "shift", "win", "cmd"] as const;

const KEY_MODIFIER_ALIASES: Record<string, string> = {
  command: "cmd",
  control: "ctrl",
  windows: "win",
};

const escapeRegExp = (string_: string) =>
  string_.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);

const ALIAS_REGEXES: Record<string, RegExp> = Object.fromEntries(
  Object.entries(KEY_MODIFIER_ALIASES).map(([alias]) => [
    alias,
    new RegExp(escapeRegExp(alias), "g"),
  ])
);

const NORMALIZATION_REGEX = /[^a-zа-яё0-9_+\-=()]/gi;

const REPLACE_CHARS_REGEX = /ё/gi;

export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replaceAll(REPLACE_CHARS_REGEX, "е")
    .replaceAll(NORMALIZATION_REGEX, " ")
    .replaceAll(/\s+/g, " ")
    .trim();
};

export const normalizeWord = (word: string): string => {
  return normalizeText(word).replaceAll(" ", "");
};

export const extractSearchWords = (query: string): string[] => [
  ...new Set(
    query
      .split(/\s+/)
      .flatMap((word) => normalizeText(word).split(" ").filter(Boolean))
      .filter(Boolean)
  ),
];

export const isKeyCombinationSearch = (text: string): boolean => {
  return KEY_MODIFIERS.some((modifier) => text.toLowerCase().includes(modifier));
};

export const normalizeKeyCombination = (text: string): string => {
  let normalized = text.toLowerCase();

  for (const [alias, standard] of Object.entries(KEY_MODIFIER_ALIASES)) {
    normalized = normalized.replaceAll(ALIAS_REGEXES[alias], standard);
  }

  return normalized.replaceAll("+", " ").replaceAll(/\s+/g, " ").trim();
};
