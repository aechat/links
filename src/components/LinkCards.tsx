import {motion} from "framer-motion";
import React from "react";
import {Link} from "react-router-dom";
interface LinkCardProps {
  href: string;
  icon: JSX.Element;
  name: string;
  description: string;
}
interface LinkCardPropsNoDescription {
  href: string;
  icon: JSX.Element;
  name: string;
}
// *: компонент для анимированной ссылки, которая принимает на себя ссылку идущая за пределы приложения, иконку, имя и описание
export const LinkCard: React.FC<LinkCardProps> = ({href, icon, name, description}) => {
  return (
    <motion.div
      className="links-button"
      whileHover={{
        scale: 1.025,
        transition: {
          duration: 0.5,
          ease: [0.075, 0.82, 0.165, 1],
          type: "spring",
        },
      }}
      whileTap={{
        scale: 0.975,
        opacity: 0.5,
      }}
    >
      <a
        href={href}
        rel="noreferrer"
        style={{height: "100%"}}
        target="_blank"
      >
        <div className="name_container">
          <p className="name">{name}</p>
          <span className="icon">{icon}</span>
        </div>
        <p className="description">{description}</p>
      </a>
    </motion.div>
  );
};

// *: компонент для анимированной ссылки, которая принимает на себя ссылку идущая за пределы приложения, иконку и имя, без описания
export const LinkCardNoDescription: React.FC<LinkCardPropsNoDescription> = ({
  href,
  icon,
  name,
}) => {
  return (
    <motion.div
      className="links-button"
      whileHover={{
        scale: 1.025,
        transition: {
          duration: 0.5,
          ease: [0.075, 0.82, 0.165, 1],
          type: "spring",
        },
      }}
      whileTap={{
        scale: 0.975,
        opacity: 0.5,
      }}
    >
      <a
        href={href}
        rel="noreferrer"
        style={{height: "100%"}}
        target="_blank"
      >
        <div
          className="name_container"
          style={{height: "100%"}}
        >
          <p className="name">{name}</p>
          <span className="icon">{icon}</span>
        </div>
      </a>
    </motion.div>
  );
};

// *: компонент для анимированной ссылки внутри приложения, которая принимает на себя ссылку, иконку, имя и описание
export const LinkInAppCard: React.FC<LinkCardProps> = ({
  href,
  icon,
  name,
  description,
}) => {
  return (
    <motion.div
      className="links-button"
      whileHover={{
        scale: 1.025,
        transition: {
          duration: 0.5,
          ease: [0.075, 0.82, 0.165, 1],
          type: "spring",
        },
      }}
      whileTap={{
        scale: 0.975,
        opacity: 0.5,
      }}
    >
      <Link
        style={{height: "100%"}}
        to={href}
      >
        <div className="name_container">
          <p className="name">{name}</p>
          <span className="icon">{icon}</span>
        </div>
        <p className="description">{description}</p>
      </Link>
    </motion.div>
  );
};
