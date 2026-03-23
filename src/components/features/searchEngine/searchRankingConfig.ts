export const SEARCH_SCORING_WEIGHTS = {
  contentMatchCount: 5,
  contentOnlyPenalty: 10,
  contentPhraseMatch: 45,
  entityMatchCount: 7,
  foldedTitleFallback: 90,
  phraseTag: 180,
  phraseTitle: 260,
  tagAndTitleMatch: 100,
  tagOrTitleMatch: 50,
  titleAndTagMatchCountStep: 10,
} as const;

export const SEARCH_FIELD_WEIGHTS = {
  content: 2,
  entity: 3,
  tag: 3,
  title: 5,
} as const;

export const SEARCH_PROXIMITY_WEIGHTS = {
  content: 0.55,
  entity: 0.75,
  tag: 0.85,
  title: 1.1,
} as const;

export const SEARCH_LEADING_WEIGHTS = {
  content: 0.35,
  entity: 0.75,
  tag: 1,
  title: 1.25,
} as const;

export const SEARCH_ORDER_WEIGHTS = {
  content: 0.25,
  entity: 0.7,
  tag: 0.95,
  title: 1.2,
} as const;

export const SEARCH_RESCORE_CONFIG = {
  activationThreshold: 1800,
  candidateLimit: 900,
} as const;
