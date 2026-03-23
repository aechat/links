import {
  getConsonantSignature,
  getWordFeatures,
  getWordStem,
  MIN_CONSONANT_SIGNATURE_LENGTH,
  MIN_PREFIX_LENGTH,
  MIN_STEM_LENGTH,
  normalizeLatinPhonetics,
  WORD_MATCH_PRIORITY,
  type WordFeatures,
} from "./searchPhoneticUtilities";
import {SEARCH_RESCORE_CONFIG} from "./searchRankingConfig";
import {
  computeSearchScore,
  type SearchScoringDependencies,
  selectCandidatesForRescore,
} from "./searchScoringUtilities";
import {
  extractSearchWords,
  isKeyCombinationSearch,
  normalizeKeyCombination,
  normalizeText,
  normalizeWord,
} from "./searchTextUtilities";

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

export type SearchWorkerDetail = {
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

export type WorkerRankedResult = {
  hasTagMatch: boolean;
  hasTitleMatch: boolean;
  id: string;
  idMatchPriority: number;
  isSingleParagraphMatch: boolean;
  score: number;
  sourceOrder: number;
};

const createEmptyTypeCounts = (): Record<WordMatchType, number> => ({
  consonant: 0,
  exact: 0,
  folded: 0,
  prefix: 0,
  stem: 0,
});

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

export const searchDetails = (
  detailsData: SearchWorkerDetail[],
  query: string
): WorkerRankedResult[] => {
  if (!query.trim()) {
    return [];
  }

  const compiledQuery = compileSearchQuery(query);

  const filtered = detailsData.filter((detail) => filterDetail(detail, compiledQuery));

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

  return ranked;
};
