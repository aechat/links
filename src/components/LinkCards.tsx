import {motion} from "framer-motion";
import React from "react";
import {Link} from "react-router-dom";

/**
 * базовые пропсы для карточки ссылки
 */

interface BaseLinkCardProps {
  /** иконка карточки */

  icon: JSX.Element;

  /** название карточки */

  name: string;
}

/**
 * пропсы для карточки ссылки с описанием
 */

interface LinkCardProps extends BaseLinkCardProps {
  /** внешняя ссылка */

  href: string;

  /** описание карточки */

  description: string;
}

/**
 * пропсы для карточки ссылки без описания
 */

interface LinkCardPropsNoDescription extends BaseLinkCardProps {
  /** внешняя ссылка */

  href: string;
}

/**
 * стили для компонентов карточек
 */

const styles = {
  link: {
    height: "100%",
  },
  nameContainer: {
    height: "100%",
  },
} as const;

/**
 * анимация при наведении и нажатии на карточку
 */

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

/**
 * базовый компонент для карточки ссылки
 */

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

/**
 * компонент для анимированной внешней ссылки с описанием
 * @param href - внешняя ссылка
 * @param icon - иконка карточки
 * @param name - название карточки
 * @param description - описание карточки
 * @returns анимированная карточка с внешней ссылкой
 */

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

/**
 * компонент для анимированной внешней ссылки без описания
 * @param href - внешняя ссылка
 * @param icon - иконка карточки
 * @param name - название карточки
 * @returns анимированная карточка с внешней ссылкой без описания
 */

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

/**
 * компонент для анимированной внутренней ссылки с описанием
 * @param href - внутренняя ссылка
 * @param icon - иконка карточки
 * @param name - название карточки
 * @param description - описание карточки
 * @returns анимированная карточка с внутренней ссылкой
 */

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
