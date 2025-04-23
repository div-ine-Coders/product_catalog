import styles from './BackButton.module.scss';
import React from 'react';
import cn from 'classnames';

interface Props {
  isSelected?: boolean;
  click?: () => void;
}

export const BackButton: React.FC<Props> = ({ click }) => {
  return (
    <button className={styles.back} onClick={click}>
      <div className={styles.backArrow}></div>
      <span className={cn('smallText', styles.backText)}>Back</span>
    </button>
  );
};
