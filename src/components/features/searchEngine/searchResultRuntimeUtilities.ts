import {
  type CompiledSearchQuery,
  compileSearchQuery,
  hasCompiledQueryMatchInFields,
  type WorkerRankedResult,
} from "./searchQueryCore";

export type SearchResultMapped = {
  anchor?: string;
  content: string;
  hasTagMatch: boolean;
  hasTitleMatch: boolean;
  id: string;
  isSingleParagraphMatch: boolean;
  tag?: string;
  title: string;
};

export type CachedDetailForMapping = {
  anchor?: string;
  content: string;
  id: string;
  sourceOrder: number;
  tag?: string;
  title: string;
};

type MapSearchResultsDependencies = {
  cachedDetailsByKey: Map<string, CachedDetailForMapping>;
  formatContent: (content: string, compiledQuery: CompiledSearchQuery) => string;
};

export const mapRankedResultsToSearchResults = (
  queryText: string,
  rankedResults: WorkerRankedResult[],
  dependencies: MapSearchResultsDependencies
): SearchResultMapped[] => {
  const compiledQuery = compileSearchQuery(queryText);

  const mappedResults: SearchResultMapped[] = [];

  for (const workerResult of rankedResults) {
    const detail = dependencies.cachedDetailsByKey.get(
      `${workerResult.id}::${workerResult.sourceOrder}`
    );

    if (!detail) {
      continue;
    }

    mappedResults.push({
      ...(detail.anchor ? {anchor: detail.anchor} : {}),
      ...(detail.tag ? {tag: detail.tag} : {}),
      content: dependencies.formatContent(detail.content, compiledQuery),
      hasTagMatch: workerResult.hasTagMatch,
      hasTitleMatch: workerResult.hasTitleMatch,
      id: detail.id,
      isSingleParagraphMatch: workerResult.isSingleParagraphMatch,
      title: detail.title,
    });
  }

  return mappedResults;
};

export const getMatchingTagsByQuery = (
  tag: string | undefined,
  compiledQuery: CompiledSearchQuery
): string[] => {
  if (!tag || tag.trim() === "") {
    return [];
  }

  if (compiledQuery.searchWords.length === 0) {
    return [];
  }

  const allTags = tag
    .split(",")
    .map((tagItem) => tagItem.trim())
    .filter(Boolean);

  return allTags.filter((tagItem) =>
    hasCompiledQueryMatchInFields([tagItem], compiledQuery, "any")
  );
};
