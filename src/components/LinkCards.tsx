import {motion} from "framer-motion";

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

const cardAnimation = {
  hover: {
    scale: 1.025,
    transition: {
      duration: 0.5,
      ease: [0.075, 0.82, 0.165, 1],
      type: "spring",
    },
  },
  tap: {
    scale: 0.975,
    opacity: 0.5,
  },
} as const;

const BaseLinkCard: React.FC<{
  children: React.ReactNode;
}> = ({children}) => (
  <motion.div
    className="links-button"
    whileHover={cardAnimation.hover}
    whileTap={cardAnimation.tap}
  >
    {children}
  </motion.div>
);

export const LinkCard: React.FC<LinkCardProps> = ({href, icon, name, description}) => (
  <BaseLinkCard>
    <a
      href={href}
      rel="noreferrer"
      style={styles.link}
      target="_blank"
    >
      <div className="name_container">
        <p className="name">{name}</p>
        <span className="icon">{icon}</span>
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
        className="name_container"
        style={styles.nameContainer}
      >
        <p className="name">{name}</p>
        <span className="icon">{icon}</span>
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
      <div className="name_container">
        <p className="name">{name}</p>
        <span className="icon">{icon}</span>
      </div>
      <p className="description">{description}</p>
    </Link>
  </BaseLinkCard>
);
