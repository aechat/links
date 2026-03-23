type PositionedResult = {
  element: HTMLButtonElement;
  index: number;
  rect: DOMRect;
};

export const getPositionedResults = (
  resultReferences: Array<HTMLButtonElement | null>
): PositionedResult[] => {
  return resultReferences
    .map((element, index) => ({
      element,
      index,
      rect: element?.getBoundingClientRect(),
    }))
    .filter(
      (item): item is PositionedResult => Boolean(item.element) && Boolean(item.rect)
    );
};

export const getColumnCenters = (
  positionedResults: Array<{index: number; rect: DOMRect}>,
  columnTolerance: number
): number[] => {
  const centers: number[] = [];

  for (const item of positionedResults) {
    const centerX = item.rect.left + item.rect.width / 2;

    const matchingCenterIndex = centers.findIndex(
      (value) => Math.abs(value - centerX) <= columnTolerance
    );

    if (matchingCenterIndex === -1) {
      centers.push(centerX);
    } else {
      centers[matchingCenterIndex] = (centers[matchingCenterIndex] + centerX) / 2;
    }
  }

  return centers;
};

export const getVisualNeighborIndex = ({
  columnTolerance,
  currentIndex,
  direction,
  positionedResults,
  resultsLength,
}: {
  columnTolerance: number;
  currentIndex: number;
  direction: "down" | "up";
  positionedResults: PositionedResult[];
  resultsLength: number;
}): number => {
  if (positionedResults.length === 0) {
    return currentIndex;
  }

  const currentResult = positionedResults.find((item) => item.index === currentIndex);

  if (!currentResult) {
    return positionedResults[0].index;
  }

  const currentCenterX = currentResult.rect.left + currentResult.rect.width / 2;

  const currentCenterY = currentResult.rect.top + currentResult.rect.height / 2;

  const columnCenters = getColumnCenters(positionedResults, columnTolerance);

  if (columnCenters.length <= 1) {
    if (direction === "down") {
      return Math.min(currentIndex + 1, resultsLength - 1);
    }

    return Math.max(currentIndex - 1, 0);
  }

  const currentColumnCenter =
    columnCenters
      .toSorted((a, b) => Math.abs(a - currentCenterX) - Math.abs(b - currentCenterX))
      .at(0) ?? currentCenterX;

  const directionalCandidates = positionedResults
    .map((candidate) => ({
      centerX: candidate.rect.left + candidate.rect.width / 2,
      centerY: candidate.rect.top + candidate.rect.height / 2,
      index: candidate.index,
    }))
    .filter((candidate) => candidate.index !== currentIndex)
    .filter(
      (candidate) => Math.abs(candidate.centerX - currentColumnCenter) <= columnTolerance
    )
    .filter((candidate) =>
      direction === "down"
        ? candidate.centerY > currentCenterY + 2
        : candidate.centerY < currentCenterY - 2
    );

  const bestCandidate = directionalCandidates.toSorted((a, b) => {
    const scoreA =
      Math.abs(a.centerY - currentCenterY) * 12 + Math.abs(a.centerX - currentCenterX);

    const scoreB =
      Math.abs(b.centerY - currentCenterY) * 12 + Math.abs(b.centerX - currentCenterX);

    return scoreA - scoreB;
  })[0];

  return bestCandidate?.index ?? currentIndex;
};

export const getHorizontalNeighborIndex = ({
  columnTolerance,
  currentIndex,
  direction,
  positionedResults,
}: {
  columnTolerance: number;
  currentIndex: number;
  direction: "left" | "right";
  positionedResults: PositionedResult[];
}): number => {
  if (positionedResults.length === 0) {
    return currentIndex;
  }

  const currentResult = positionedResults.find((item) => item.index === currentIndex);

  if (!currentResult) {
    return positionedResults[0].index;
  }

  const currentCenterX = currentResult.rect.left + currentResult.rect.width / 2;

  const currentCenterY = currentResult.rect.top + currentResult.rect.height / 2;

  const candidateColumns = positionedResults
    .map((item) => ({
      centerX: item.rect.left + item.rect.width / 2,
      index: item.index,
      rect: item.rect,
    }))
    .filter((item) =>
      direction === "left"
        ? item.centerX < currentCenterX - columnTolerance
        : item.centerX > currentCenterX + columnTolerance
    );

  if (candidateColumns.length === 0) {
    return currentIndex;
  }

  let bestCandidate: {index: number; score: number} | undefined;

  for (const candidate of candidateColumns) {
    const candidateCenterY = candidate.rect.top + candidate.rect.height / 2;

    const deltaY = Math.abs(candidateCenterY - currentCenterY);

    const deltaX = Math.abs(candidate.centerX - currentCenterX);

    const score = deltaX * 12 + deltaY;

    if (!bestCandidate || score < bestCandidate.score) {
      bestCandidate = {index: candidate.index, score};
    }
  }

  return bestCandidate?.index ?? currentIndex;
};
