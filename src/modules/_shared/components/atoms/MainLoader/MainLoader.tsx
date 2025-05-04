import React from 'react';
import styles from './MainLoader.module.scss';

export const MainLoader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};
