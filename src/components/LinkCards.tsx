import React from "react";
import {Link} from "react-router-dom";

interface BaseLinkCardProps {
  icon: React.ReactNode;
  name: string;
}
interface LinkCardProps extends BaseLinkCardProps {
  href: string;
  description: string;
}
interface LinkCardPropsNoDescription extends BaseLinkCardProps {
  href: string;
}

const styles = {
  link: {
    height: "100%",
  },
  nameContainer: {
    height: "100%",
  },
} as const;

const BaseLinkCard: React.FC<{
  children: React.ReactNode;
}> = ({children}) => (
  <div className="links-button">
    {children}
  </div>
);

export const LinkCard: React.FC<LinkCardProps> = ({href, icon, name, description}) => (
  <BaseLinkCard>
    <a
      href={href}
      rel="noreferrer"
      style={styles.link}
      target="_blank"
    >
      <div className="name-container">
        <span className="icon">{icon}</span>
        <p className="name">{name}</p>
      </div>
      <p className="description">{description}</p>
    </a>
  </BaseLinkCard>
);

export const LinkCardNoDescription: React.FC<LinkCardPropsNoDescription> = ({
  href,
  icon,
  name,
}) => (
  <BaseLinkCard>
    <a
      href={href}
      rel="noreferrer"
      style={styles.link}
      target="_blank"
    >
      <div
        className="name-container"
        style={styles.nameContainer}
      >
        <span className="icon">{icon}</span>
        <p className="name">{name}</p>
      </div>
    </a>
  </BaseLinkCard>
);

export const LinkInAppCard: React.FC<LinkCardProps> = ({
  href,
  icon,
  name,
  description,
}) => (
  <BaseLinkCard>
    <Link
      style={styles.link}
      to={href}
    >
      <div className="name-container">
        <span className="icon">{icon}</span>
        <p className="name">{name}</p>
      </div>
      <p className="description">{description}</p>
    </Link>
  </BaseLinkCard>
);
