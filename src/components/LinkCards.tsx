import React from "react";

import {Link} from "react-router-dom";

interface LinkCardProps {
  icon: React.ReactNode;
  name: string;
  href: string;
  description?: string;
  variant?: "external" | "internal";
}

export const LinkCard: React.FC<LinkCardProps> = ({
  icon,
  name,
  href,
  description,
  variant = "external",
}) => {
  const hasDescription = !!description;

  const content = (
    <>
      <div
        className={`name-container ${
          !hasDescription ? "name-container_full-height" : ""
        }`}
      >
        <span className="icon">{icon}</span>
        <p className="name">{name}</p>
      </div>
      {hasDescription && <p className="description">{description}</p>}
    </>
  );

  return (
    <div className="links-button">
      {variant === "internal" ? (
        <Link to={href}>{content}</Link>
      ) : (
        <a
          href={href}
          rel="noreferrer"
          target="_blank"
        >
          {content}
        </a>
      )}
    </div>
  );
};
