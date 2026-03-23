import {stemmer as englishStemmer} from "@orama/stemmers/english";
import {stemmer as russianStemmer} from "@orama/stemmers/russian";

import {SEARCH_RESCORE_CONFIG} from "./searchRankingConfig";
import {
  computeSearchScore,
  type SearchScoringDependencies,
  selectCandidatesForRescore,
} from "./searchScoringUtilities";

type TextSearchIndex = {
  consonantPrefixSet: Set<string>;
  consonantSet: Set<string>;
  foldedPrefixSet: Set<string>;
  foldedStemSet: Set<string>;
  foldedText: string;
  foldedWordSet: Set<string>;
  normalizedPrefixSet: Set<string>;
  normalizedText: string;
  normalizedWordSet: Set<string>;
  stemSet: Set<string>;
};

type WordMatchType = "exact" | "prefix" | "folded" | "consonant" | "stem";

type WordFeatures = {
  consonantSignatures: string[];
  foldedVariants: string[];
  stemVariants: string[];
  variants: string[];
};

type CompiledSearchWord = {
  features: WordFeatures;
  normalizedWord: string;
};

type CompiledSearchQuery = {
  isKeyCombination: boolean;
  normalizedQuery: string;
  originalText: string;
  searchWords: string[];
  words: CompiledSearchWord[];
};

type FieldMatchInfo = {
  highestPriority: number;
  longestMatchedWordLength: number;
  matchedWords: string[];
  totalMatched: number;
  typeCounts: Record<WordMatchType, number>;
};

type SearchWorkerDetail = {
  fieldIndexes: TextSearchIndex[];
  id: string;
  lineSearchIndexes: TextSearchIndex[];
  normalizedContent: string;
  normalizedEntityText: string;
  normalizedKeyFields: string[];
  normalizedTag: string;
  normalizedTitle: string;
  searchIndexes: {
    content: TextSearchIndex;
    entity: TextSearchIndex;
    tag: TextSearchIndex;
    tagScoring: TextSearchIndex;
    title: TextSearchIndex;
  };
  sourceOrder: number;
  tagTokenCount: number;
};

type WorkerRankedResult = {
  hasTagMatch: boolean;
  hasTitleMatch: boolean;
  id: string;
  idMatchPriority: number;
  isSingleParagraphMatch: boolean;
  score: number;
  sourceOrder: number;
};

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
  results: WorkerRankedResult[];
  type: "results";
};

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

const normalizationRegex = /[^a-zа-яё0-9+\-=()]/gi;

const replaceCharsRegex = /ё/gi;

const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replaceAll(replaceCharsRegex, "е")
    .replaceAll(normalizationRegex, " ")
    .replaceAll(/\s+/g, " ")
    .trim();
};

const normalizeWord = (word: string): string => normalizeText(word).replaceAll(" ", "");

const MIN_STEM_LENGTH = 3;

const MIN_CONSONANT_SIGNATURE_LENGTH = 3;

const MIN_PREFIX_LENGTH = 2;

const MAX_WORD_FEATURES_CACHE_SIZE = 5000;

const WORD_MATCH_PRIORITY: Record<WordMatchType, number> = {
  consonant: 2,
  exact: 4,
  folded: 3,
  prefix: 3,
  stem: 1,
};

const EMPTY_WORD_FEATURES: WordFeatures = {
  consonantSignatures: [],
  foldedVariants: [],
  stemVariants: [],
  variants: [],
};

const createEmptyTypeCounts = (): Record<WordMatchType, number> => ({
  consonant: 0,
  exact: 0,
  folded: 0,
  prefix: 0,
  stem: 0,
});

const WORD_FEATURES_CACHE = new Map<string, WordFeatures>();

const LATIN_VOWELS_REGEX = /[aeiouyw]/g;

const CYRILLIC_VOWELS_REGEX = /[аеёиоуыэюяй]/g;

const REPEATED_CHARACTERS_REGEX = /(.)\1+/g;

const getConsonantSignature = (word: string): string => {
  return normalizeWord(word)
    .replaceAll(LATIN_VOWELS_REGEX, "")
    .replaceAll(CYRILLIC_VOWELS_REGEX, "")
    .replaceAll(REPEATED_CHARACTERS_REGEX, "$1");
};

const CYR_TO_LAT: Record<string, string> = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "yo",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ъ: "",
  ы: "y",
  ь: "",
  э: "e",
  ю: "yu",
  я: "ya",
};

const LAT_TO_CYR_ALIASES: Record<string, string> = {
  eh: "э",
  ia: "я",
  ja: "я",
  jh: "ж",
  jo: "ё",
  ju: "ю",
  oo: "у",
  ou: "у",
  sch: "щ",
};

const LAT_TO_CYR_BASE: Record<string, string> = {
  ...Object.fromEntries(
    Object.entries(CYR_TO_LAT)
      .filter(([, value]) => value.length > 0)
      .map(([key, value]) => [value, key])
  ),
  c: "к",
  h: "х",
  j: "й",
  q: "к",
  w: "в",
  x: "х",
  ...LAT_TO_CYR_ALIASES,
};

const CYR_TO_LAT_MULTI = Object.entries(CYR_TO_LAT).filter(
  ([, value]) => value.length > 1
);

const CYR_TO_LAT_SINGLE = Object.fromEntries(
  Object.entries(CYR_TO_LAT).filter(([, value]) => value.length <= 1)
);

const LAT_TO_CYR_MULTI = Object.entries(LAT_TO_CYR_BASE)
  .filter(([key]) => key.length > 1)
  .toSorted((a, b) => b[0].length - a[0].length);

const LAT_TO_CYR_SINGLE = Object.fromEntries(
  Object.entries(LAT_TO_CYR_BASE).filter(([key]) => key.length === 1)
);

const translitCyrToLat = (text: string): string => {
  let output = text.toLowerCase();

  for (const [from, to] of CYR_TO_LAT_MULTI) {
    output = output.replaceAll(from, to);
  }

  return [...output].map((char) => CYR_TO_LAT_SINGLE[char] ?? char).join("");
};

const translitLatToCyr = (text: string): string => {
  let output = text.toLowerCase();

  for (const [from, to] of LAT_TO_CYR_MULTI) {
    output = output.replaceAll(from, to);
  }

  return [...output].map((char) => LAT_TO_CYR_SINGLE[char] ?? char).join("");
};

const normalizeLatinPhonetics = (text: string): string => {
  return text
    .toLowerCase()
    .replaceAll("qu", "kv")
    .replaceAll("tch", "ch")
    .replaceAll("dge", "j")
    .replaceAll("wr", "r")
    .replaceAll("wh", "w")
    .replaceAll(/\bkn/g, "n")
    .replaceAll(/\bgn/g, "n")
    .replaceAll(/mb\b/g, "m")
    .replaceAll("eigh", "ei")
    .replaceAll("igh", "ai")
    .replaceAll(/tion\b/g, "shn")
    .replaceAll(/sion\b/g, "shn")
    .replaceAll("ee", "i")
    .replaceAll("ea", "i")
    .replaceAll("oo", "u")
    .replaceAll("ou", "au")
    .replaceAll("ow", "au")
    .replaceAll("ph", "f")
    .replaceAll("ck", "k")
    .replaceAll("x", "ks")
    .replaceAll(/c(?=[eiy])/g, "s")
    .replaceAll(/g(?=[eiy])/g, "j")
    .replaceAll("c", "k")
    .replaceAll(/\b([a-z]*?)a([b-df-hj-np-tv-z])e\b/g, "$1ei$2")
    .replaceAll(/\b([a-z]*?)i([b-df-hj-np-tv-z])e\b/g, "$1ai$2")
    .replaceAll(/\b([a-z]*?)o([b-df-hj-np-tv-z])e\b/g, "$1ou$2")
    .replaceAll(/\b([a-z]*?)u([b-df-hj-np-tv-z])e\b/g, "$1yu$2")
    .replaceAll(/\b([a-z]{4,})e\b/g, "$1")
    .replaceAll("w", "v")
    .replaceAll("q", "k")
    .replaceAll("y", "i")
    .replaceAll(/([b-df-hj-np-tv-z])\1+/g, "$1");
};

type VariantRule = (word: string, variants: Set<string>) => void;

const createBidirectionalReplaceRule = (from: string, to: string): VariantRule => {
  return (word, variants) => {
    if (word.includes(from)) {
      variants.add(word.replaceAll(from, to));
    }

    if (word.includes(to)) {
      variants.add(word.replaceAll(to, from));
    }
  };
};

const addPhoneticVariants: VariantRule = (word, variants) => {
  variants.add(normalizeLatinPhonetics(word));
};

const addPluralVariants: VariantRule = (word, variants) => {
  if (!/^[a-z]+$/.test(word) || word.length < 4) {
    return;
  }

  if (word.endsWith("es") && word.length > 5) {
    variants.add(word.slice(0, -2));
  }

  if (word.endsWith("s") && word.length > 4) {
    variants.add(word.slice(0, -1));
  } else {
    variants.add(`${word}s`);
  }
};

const VARIANT_RULES: VariantRule[] = [
  ...(
    [
      ["f", "ph"],
      ["j", "g"],
      ["k", "c"],
      ["kw", "ku"],
      ["qu", "ku"],
      ["qu", "kw"],
      ["kv", "ku"],
      ["kv", "kw"],
      ["sion", "shn"],
      ["tion", "shn"],
      ["x", "gz"],
      ["x", "kh"],
      ["x", "ks"],
      ["ya", "ia"],
      ["ye", "ie"],
      ["yo", "io"],
      ["yu", "iu"],
      ["zh", "j"],
    ] as const
  ).map(([from, to]) => createBidirectionalReplaceRule(from, to)),
  addPhoneticVariants,
  addPluralVariants,
];

const applyVariantRule = (variants: Set<string>, rule: VariantRule): void => {
  const variantsSnapshot = [...variants];

  for (const variant of variantsSnapshot) {
    rule(variant, variants);
  }
};

const getAutomaticWordVariants = (word: string): string[] => {
  const normalizedWord = normalizeWord(word);

  if (!normalizedWord) {
    return [];
  }

  const variants = new Set<string>([
    normalizedWord,
    translitCyrToLat(normalizedWord),
    translitLatToCyr(normalizedWord),
  ]);

  for (const rule of VARIANT_RULES) {
    applyVariantRule(variants, rule);
  }

  return [...variants].filter(Boolean);
};

const getWordStem = (word: string): string => {
  const normalized = normalizeWord(word);

  if (!normalized) {
    return "";
  }

  if (/[а-я]/i.test(normalized) || normalized.includes("ё")) {
    return russianStemmer(normalized);
  }

  return englishStemmer(normalized);
};

const buildWordFeatures = (word: string): WordFeatures => {
  const normalizedWord = normalizeWord(word);

  if (!normalizedWord) {
    return EMPTY_WORD_FEATURES;
  }

  const variants = getAutomaticWordVariants(normalizedWord);

  const foldedVariants = [
    ...new Set(
      variants.map((variant) => normalizeLatinPhonetics(variant)).filter(Boolean)
    ),
  ];

  const consonantSignatures = [
    ...new Set(
      variants
        .map((variant) => getConsonantSignature(variant))
        .filter((signature) => signature.length >= MIN_CONSONANT_SIGNATURE_LENGTH)
    ),
  ];

  const stemVariants = [
    ...new Set(
      variants
        .map((variant) => getWordStem(variant))
        .filter((stem) => stem.length >= MIN_STEM_LENGTH)
    ),
  ];

  return {
    consonantSignatures,
    foldedVariants,
    stemVariants,
    variants,
  };
};

const getWordFeatures = (word: string): WordFeatures => {
  const normalizedWord = normalizeWord(word);

  if (!normalizedWord) {
    return EMPTY_WORD_FEATURES;
  }

  const cachedFeatures = WORD_FEATURES_CACHE.get(normalizedWord);

  if (cachedFeatures) {
    return cachedFeatures;
  }

  const features = buildWordFeatures(normalizedWord);

  WORD_FEATURES_CACHE.set(normalizedWord, features);

  if (WORD_FEATURES_CACHE.size > MAX_WORD_FEATURES_CACHE_SIZE) {
    const oldestKey = WORD_FEATURES_CACHE.keys().next().value;

    if (typeof oldestKey === "string") {
      WORD_FEATURES_CACHE.delete(oldestKey);
    }
  }

  return features;
};

const hasExactVariantMatch = (
  variants: string[],
  text: string,
  wordSet: Set<string>
): boolean => variants.some((variant) => text.includes(variant) || wordSet.has(variant));

const hasPrefixVariantMatch = (variants: string[], prefixSet: Set<string>): boolean => {
  return variants.some(
    (variant) => variant.length >= MIN_PREFIX_LENGTH && prefixSet.has(variant)
  );
};

const hasConsonantSignatureMatch = (
  signatures: string[],
  consonantSet: Set<string>,
  consonantPrefixSet: Set<string>
): boolean => {
  return signatures.some(
    (signature) => consonantSet.has(signature) || consonantPrefixSet.has(signature)
  );
};

const hasStemMatch = (
  stems: string[],
  stemSet: Set<string>,
  foldedStemSet: Set<string>
) => {
  return stems.some((stem) => stemSet.has(stem) || foldedStemSet.has(stem));
};

const getWordMatchType = (
  wordFeatures: WordFeatures,
  index: TextSearchIndex
): WordMatchType | undefined => {
  if (
    hasExactVariantMatch(
      wordFeatures.variants,
      index.normalizedText,
      index.normalizedWordSet
    )
  ) {
    return "exact";
  }

  if (hasPrefixVariantMatch(wordFeatures.variants, index.normalizedPrefixSet)) {
    return "prefix";
  }

  if (
    hasExactVariantMatch(
      wordFeatures.foldedVariants,
      index.foldedText,
      index.foldedWordSet
    )
  ) {
    return "folded";
  }

  if (hasPrefixVariantMatch(wordFeatures.foldedVariants, index.foldedPrefixSet)) {
    return "prefix";
  }

  if (
    hasConsonantSignatureMatch(
      wordFeatures.consonantSignatures,
      index.consonantSet,
      index.consonantPrefixSet
    )
  ) {
    return "consonant";
  }

  if (hasStemMatch(wordFeatures.stemVariants, index.stemSet, index.foldedStemSet)) {
    return "stem";
  }

  return undefined;
};

const hasWordMatch = (searchWord: string, index: TextSearchIndex): boolean => {
  const normalizedWord = normalizeWord(searchWord);

  if (!normalizedWord) {
    return false;
  }

  return Boolean(getWordMatchType(getWordFeatures(normalizedWord), index));
};

const hasAllQueryWordsMatch = (
  textSearchIndex: TextSearchIndex,
  compiledQuery: CompiledSearchQuery
): boolean => {
  for (const {normalizedWord} of compiledQuery.words) {
    if (!hasWordMatch(normalizedWord, textSearchIndex)) {
      return false;
    }
  }

  return true;
};

const hasAnyQueryWordMatch = (
  textSearchIndex: TextSearchIndex,
  compiledQuery: CompiledSearchQuery
): boolean => {
  for (const {normalizedWord} of compiledQuery.words) {
    if (hasWordMatch(normalizedWord, textSearchIndex)) {
      return true;
    }
  }

  return false;
};

const getFieldMatchInfo = (
  textSearchIndex: TextSearchIndex,
  compiledQuery: CompiledSearchQuery
): FieldMatchInfo => {
  const typeCounts = createEmptyTypeCounts();

  const matchedWords: string[] = [];

  let highestPriority = 0;

  let longestMatchedWordLength = 0;

  for (const {features, normalizedWord} of compiledQuery.words) {
    const matchType = getWordMatchType(features, textSearchIndex);

    if (!matchType) {
      continue;
    }

    matchedWords.push(normalizedWord);
    typeCounts[matchType] += 1;
    highestPriority = Math.max(highestPriority, WORD_MATCH_PRIORITY[matchType]);
    longestMatchedWordLength = Math.max(longestMatchedWordLength, normalizedWord.length);
  }

  return {
    highestPriority,
    longestMatchedWordLength,
    matchedWords,
    totalMatched: matchedWords.length,
    typeCounts,
  };
};

const extractSearchWords = (query: string): string[] => [
  ...new Set(
    query
      .split(/\s+/)
      .flatMap((word) => normalizeText(word).split(" ").filter(Boolean))
      .filter(Boolean)
  ),
];

const isKeyCombinationSearch = (text: string): boolean =>
  KEY_MODIFIERS.some((modifier) => text.toLowerCase().includes(modifier));

const compileSearchQuery = (text: string): CompiledSearchQuery => {
  const searchWords = extractSearchWords(text);

  return {
    isKeyCombination: isKeyCombinationSearch(text),
    normalizedQuery: normalizeText(text),
    originalText: text,
    searchWords,
    words: searchWords.map((normalizedWord) => ({
      features: getWordFeatures(normalizedWord),
      normalizedWord,
    })),
  };
};

const normalizeKeyCombination = (text: string): string => {
  let normalized = text.toLowerCase();

  for (const [alias, standard] of Object.entries(KEY_MODIFIER_ALIASES)) {
    normalized = normalized.replaceAll(ALIAS_REGEXES[alias], standard);
  }

  return normalized.replaceAll("+", " ").replaceAll(/\s+/g, " ").trim();
};

const hasCompiledQueryMatchInIndexes = (
  fieldIndexes: TextSearchIndex[],
  compiledQuery: CompiledSearchQuery,
  mode: "all" | "any" = "all"
): boolean => {
  if (fieldIndexes.length === 0) {
    return false;
  }

  if (mode === "any") {
    return fieldIndexes.some((fieldIndex) =>
      hasAnyQueryWordMatch(fieldIndex, compiledQuery)
    );
  }

  for (const {features} of compiledQuery.words) {
    const hasWordMatchInAnyField = fieldIndexes.some((fieldIndex) =>
      Boolean(getWordMatchType(features, fieldIndex))
    );

    if (!hasWordMatchInAnyField) {
      return false;
    }
  }

  return true;
};

const hasTokenVariantMatch = (token: string, variants: string[]): boolean => {
  return variants.some(
    (variant) =>
      token === variant ||
      (variant.length >= MIN_PREFIX_LENGTH && token.startsWith(variant))
  );
};

const hasTokenStemMatch = (token: string, stemVariants: string[]): boolean => {
  const tokenStem = getWordStem(token);

  return tokenStem.length >= MIN_STEM_LENGTH && stemVariants.includes(tokenStem);
};

const hasTokenConsonantMatch = (
  token: string,
  consonantSignatures: string[]
): boolean => {
  const tokenConsonantSignature = getConsonantSignature(token);

  if (tokenConsonantSignature.length < MIN_CONSONANT_SIGNATURE_LENGTH) {
    return false;
  }

  return consonantSignatures.some(
    (signature) =>
      tokenConsonantSignature === signature ||
      tokenConsonantSignature.startsWith(signature) ||
      signature.startsWith(tokenConsonantSignature)
  );
};

const isTokenMatchingWordFeatures = (
  token: string,
  foldedToken: string,
  wordFeatures: WordFeatures
): boolean => {
  if (hasTokenVariantMatch(token, wordFeatures.variants)) {
    return true;
  }

  if (hasTokenVariantMatch(foldedToken, wordFeatures.foldedVariants)) {
    return true;
  }

  if (hasTokenStemMatch(token, wordFeatures.stemVariants)) {
    return true;
  }

  return hasTokenConsonantMatch(token, wordFeatures.consonantSignatures);
};

const toNormalizedWords = (text: string): string[] =>
  normalizeText(text).split(" ").filter(Boolean);

const TAG_SCORING_TOKEN_CAP = 48;

const TAG_SCORING_DAMPING_START = 16;

const TAG_SCORING_MAX_REDUCTION = 0.45;

const getTagLengthDampingFactor = (tagTokenCount: number): number => {
  if (tagTokenCount <= TAG_SCORING_DAMPING_START) {
    return 1;
  }

  const maxOverflow = Math.max(1, TAG_SCORING_TOKEN_CAP - TAG_SCORING_DAMPING_START);

  const overflow = Math.min(tagTokenCount - TAG_SCORING_DAMPING_START, maxOverflow);

  const dampingRatio = Math.log1p(overflow) / Math.log1p(maxOverflow);

  return 1 - dampingRatio * TAG_SCORING_MAX_REDUCTION;
};

const getTokenPositionsForWord = (
  normalizedTokens: string[],
  foldedTokens: string[],
  wordFeatures: WordFeatures
): number[] => {
  const positions: number[] = [];

  for (const [tokenIndex, token] of normalizedTokens.entries()) {
    const foldedToken = foldedTokens[tokenIndex] || normalizeLatinPhonetics(token);

    if (isTokenMatchingWordFeatures(token, foldedToken, wordFeatures)) {
      positions.push(tokenIndex);
    }
  }

  return positions;
};

const searchScoringDependencies: SearchScoringDependencies<WordFeatures> = {
  getTokenPositionsForWord,
  normalizeLatinPhonetics,
  toNormalizedWords,
};

const computeScore = (
  compiledQuery: CompiledSearchQuery,
  normalizedTitle: string,
  normalizedTag: string,
  normalizedContent: string,
  normalizedEntityText: string,
  titleMatchInfo: FieldMatchInfo,
  tagMatchInfo: FieldMatchInfo,
  tagScoringMatchInfo: FieldMatchInfo,
  contentMatchInfo: FieldMatchInfo,
  entityMatchInfo: FieldMatchInfo,
  tagTokenCount: number
): number => {
  const tagLengthDampingFactor = getTagLengthDampingFactor(tagTokenCount);

  return computeSearchScore({
    compiledQuery,
    contentMatchInfo,
    dependencies: searchScoringDependencies,
    entityMatchInfo,
    normalizedContent,
    normalizedEntityText,
    normalizedTag,
    normalizedTitle,
    tagLengthDampingFactor,
    tagMatchInfo,
    tagScoringMatchInfo,
    titleMatchInfo,
  });
};

const INDEX_QUERY_REGEX = /^\d+(?:[.-]\d+)*$/;

const normalizeIndexReference = (value: string): string => {
  return value.trim().replace(/^#/, "").replaceAll(",", ".");
};

const isNumericIndexQuery = (value: string): boolean => {
  const normalizedValue = normalizeIndexReference(value);

  return INDEX_QUERY_REGEX.test(normalizedValue);
};

const getIdMatchPriority = (id: string, queryText: string): number => {
  if (!isNumericIndexQuery(queryText)) {
    return 0;
  }

  const normalizedId = normalizeIndexReference(id);

  const normalizedQuery = normalizeIndexReference(queryText);

  if (!normalizedId || !normalizedQuery) {
    return 0;
  }

  if (normalizedId === normalizedQuery) {
    return 3;
  }

  if (
    normalizedId.startsWith(`${normalizedQuery}.`) ||
    normalizedId.startsWith(`${normalizedQuery}-`)
  ) {
    return 2;
  }

  if (normalizedId.includes(normalizedQuery)) {
    return 1;
  }

  return 0;
};

const filterByKeyCombination = (
  {normalizedKeyFields}: Pick<SearchWorkerDetail, "normalizedKeyFields">,
  originalText: string
): boolean => {
  const searchPattern = normalizeKeyCombination(originalText);

  return normalizedKeyFields.some((field) => field.includes(searchPattern));
};

const filterByWords = (
  {fieldIndexes, id}: Pick<SearchWorkerDetail, "fieldIndexes" | "id">,
  compiledQuery: CompiledSearchQuery
): boolean => {
  if (getIdMatchPriority(id, compiledQuery.originalText) > 0) {
    return true;
  }

  return hasCompiledQueryMatchInIndexes(fieldIndexes, compiledQuery);
};

const filterDetail = (
  detail: SearchWorkerDetail,
  compiledQuery: CompiledSearchQuery
): boolean => {
  if (compiledQuery.isKeyCombination) {
    return filterByKeyCombination(detail, compiledQuery.originalText);
  }

  return filterByWords(detail, compiledQuery);
};

const rankDetail = (
  detail: SearchWorkerDetail,
  compiledQuery: CompiledSearchQuery
): WorkerRankedResult => {
  const titleMatchInfo = getFieldMatchInfo(detail.searchIndexes.title, compiledQuery);

  const tagMatchInfo = getFieldMatchInfo(detail.searchIndexes.tag, compiledQuery);

  const tagScoringMatchInfo = getFieldMatchInfo(
    detail.searchIndexes.tagScoring,
    compiledQuery
  );

  const contentMatchInfo = getFieldMatchInfo(detail.searchIndexes.content, compiledQuery);

  const entityMatchInfo = getFieldMatchInfo(detail.searchIndexes.entity, compiledQuery);

  const isSingleParagraphMatch = detail.lineSearchIndexes.some((lineSearchIndex) =>
    hasAllQueryWordsMatch(lineSearchIndex, compiledQuery)
  );

  return {
    hasTagMatch: tagMatchInfo.matchedWords.length > 0,
    hasTitleMatch: titleMatchInfo.matchedWords.length > 0,
    id: detail.id,
    idMatchPriority: getIdMatchPriority(detail.id, compiledQuery.originalText),
    isSingleParagraphMatch,
    score: computeScore(
      compiledQuery,
      detail.normalizedTitle,
      detail.normalizedTag,
      detail.normalizedContent,
      detail.normalizedEntityText,
      titleMatchInfo,
      tagMatchInfo,
      tagScoringMatchInfo,
      contentMatchInfo,
      entityMatchInfo,
      detail.tagTokenCount
    ),
    sourceOrder: detail.sourceOrder,
  };
};

const getPreliminaryRankScore = (
  detail: SearchWorkerDetail,
  compiledQuery: CompiledSearchQuery
): number => {
  const titleMatchInfo = getFieldMatchInfo(detail.searchIndexes.title, compiledQuery);

  const tagMatchInfo = getFieldMatchInfo(detail.searchIndexes.tag, compiledQuery);

  const contentMatchInfo = getFieldMatchInfo(detail.searchIndexes.content, compiledQuery);

  const entityMatchInfo = getFieldMatchInfo(detail.searchIndexes.entity, compiledQuery);

  let score = 0;

  score += titleMatchInfo.totalMatched * 14;
  score += tagMatchInfo.totalMatched * 10;
  score += entityMatchInfo.totalMatched * 6;
  score += contentMatchInfo.totalMatched * 3;

  score += titleMatchInfo.longestMatchedWordLength * 2;
  score += tagMatchInfo.longestMatchedWordLength;

  if (
    compiledQuery.normalizedQuery.length > 1 &&
    detail.normalizedTitle.includes(compiledQuery.normalizedQuery)
  ) {
    score += 40;
  }

  if (
    compiledQuery.normalizedQuery.length > 1 &&
    detail.normalizedTag.includes(compiledQuery.normalizedQuery)
  ) {
    score += 24;
  }

  return score;
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

  if (!query.trim()) {
    const response: WorkerResultMessage = {
      query,
      requestId,
      results: [],
      type: "results",
    };

    self.postMessage(response);

    return;
  }

  const compiledQuery = compileSearchQuery(query);

  const filtered = cachedDetailsData.filter((detail) =>
    filterDetail(detail, compiledQuery)
  );

  const candidatesForRescore =
    filtered.length >= SEARCH_RESCORE_CONFIG.activationThreshold
      ? selectCandidatesForRescore({
          candidateLimit: SEARCH_RESCORE_CONFIG.candidateLimit,
          getIdMatchPriority: (detail) =>
            getIdMatchPriority(detail.id, compiledQuery.originalText),
          getPreliminaryScore: (detail) => getPreliminaryRankScore(detail, compiledQuery),
          items: filtered,
        })
      : filtered;

  const ranked = candidatesForRescore
    .map((detail) => rankDetail(detail, compiledQuery))
    .toSorted((a, b) => {
      if (b.idMatchPriority !== a.idMatchPriority) {
        return b.idMatchPriority - a.idMatchPriority;
      }

      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.sourceOrder - b.sourceOrder;
    });

  const response: WorkerResultMessage = {
    query,
    requestId,
    results: ranked,
    type: "results",
  };

  self.postMessage(response);
});
