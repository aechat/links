import React, {useCallback} from "react";

import {message} from "antd";

import {copyText} from "../../../hooks/useCopyToClipboard";
import {useLongPress} from "../../../hooks/useLongPress";
import {useRipple} from "../../../hooks/useRipple";
import {formatNestedQuotes} from "../../../utils/stringUtilities";

import searchStyles from "./SearchEngine.module.scss";

import type {SearchSection} from "./searchTypes";

type SearchCategoriesProperties = {
  onLinkClick: (id: string, matchText?: string) => void;
  sections: SearchSection[];
};

export const SearchCategories: React.FC<SearchCategoriesProperties> = ({
  onLinkClick,
  sections,
}) => {
  const handleCopy = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    const target = event.target as HTMLElement;

    const button = target.closest("button");

    if (button) {
      const id = button.dataset.id;

      const title = button.dataset.title;

      if (id && title) {
        (async () => {
          const anchorUrl = `${globalThis.location.origin}${globalThis.location.pathname}#${id}`;

          const success = await copyText(anchorUrl);

          if (success) {
            message.success(
              `Ссылка на категорию «${formatNestedQuotes(title)}» скопирована`
            );
          } else {
            message.error("Не удалось скопировать ссылку");
          }
        })();

        return true;
      }
    }

    return false;
  }, []);

  const getRippleTarget = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest("button");

    if (button instanceof HTMLElement) {
      return button;
    }
  }, []);

  const longPressProperties = useLongPress(handleCopy, 500, {getRippleTarget});

  const ripple = useRipple<HTMLButtonElement>();

  return (
    <div
      className={searchStyles["search-category"]}
      {...longPressProperties}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          data-id={section.id}
          data-title={section.title}
          onClick={() => onLinkClick(section.id)}
          onMouseDown={ripple.onMouseDown}
        >
          {section.icon}
          {section.title}
        </button>
      ))}
    </div>
  );
};
