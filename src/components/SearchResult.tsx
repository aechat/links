import {useEffect, useRef} from "react";

interface SearchResultProps {
  searchQuery: string;
}

const SearchResult: React.FC<SearchResultProps> = ({searchQuery}) => {
  const detailsElementsRef = useRef<HTMLElement[]>([]);
  const summaryElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const searchInDetailsAndSummaries = () => {
      const detailsElements = document.querySelectorAll("details");
      const summaryElements = document.querySelectorAll("summary");

      detailsElementsRef.current = Array.from(detailsElements) as HTMLElement[];
      summaryElementsRef.current = Array.from(summaryElements) as HTMLElement[];

      const elements = [...detailsElementsRef.current, ...summaryElementsRef.current];

      elements.forEach((element) => {
        const elementText = (element.textContent || "").toLowerCase();
        const searchLower = searchQuery.toLowerCase();

        if (searchLower === "") {
          (element as HTMLElement).style.display = "";
          return;
        }

        if (elementText.includes(searchLower)) {
          const parentDetails = element.closest("details");
          if (parentDetails) {
            parentDetails.style.display = "";
            const summary = parentDetails.querySelector("summary");
            if (summary) {
              summary.style.display = "";
            }
            3;
          }
        } else {
          (element as HTMLElement).style.display = "none";
        }
      });
    };

    searchInDetailsAndSummaries();
  }, [searchQuery]);

  return null;
};

export default SearchResult;
