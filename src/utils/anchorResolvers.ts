export const resolveDetailsByAnchor = (
  anchorValue: string
): HTMLDetailsElement | undefined => {
  const detailsByTextualAnchor = document.querySelector<HTMLDetailsElement>(
    `details[data-anchor="${anchorValue}"]`
  );

  if (detailsByTextualAnchor) {
    return detailsByTextualAnchor;
  }

  const elementById = document.getElementById(anchorValue);

  if (!elementById) {
    return undefined;
  }

  const detailsByNumericAnchor = elementById.closest("details");

  return detailsByNumericAnchor instanceof HTMLDetailsElement
    ? detailsByNumericAnchor
    : undefined;
};
