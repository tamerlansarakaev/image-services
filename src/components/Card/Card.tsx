import React from 'react';

import styles from './Card.module.scss';

interface ICard {
  className?: string;
  imageUrl: string;
  title?: string;
  button?: {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children?: React.ReactNode | string;
  };
  children?: React.ReactNode;
}

const Card: React.FC<ICard> = ({
  className,
  imageUrl,
  children,
  title,
  button,
}) => {
  return (
    <div className={className || styles.card}>
      <div className={styles.imageGroup}>
        <img src={imageUrl} className={styles.image} />
      </div>
      <span className={styles.title}>{title}</span>
      {button && (
        <button
          onClick={button && button.onClick}
          className={(button && button.className) || styles.submitButton}
        >
          {button && button.children}
        </button>
      )}
      {children && children}
    </div>
  );
};

export default Card;
