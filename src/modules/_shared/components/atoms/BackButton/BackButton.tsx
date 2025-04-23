import styles from './BackButton.module.scss';
import React from 'react';

type Props = {
  isSelected?: boolean;
  click?: () => void;
};

export const BackButton: React.FC<Props> = ({ click }) => {
  return (
    <button className={styles.back} onClick={click}>
      <div className={styles['back-arrow']}></div>
      <span className={`'small-text' ${styles['back-text']}`}>Back</span>
    </button>
  );
};
