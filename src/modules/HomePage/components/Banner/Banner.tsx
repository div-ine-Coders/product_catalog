import React from 'react';
import styles from './Banner.module.scss';
import banner from '@assets/icons/category-accessories.png';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerTitle}>
          Now available
          <br />
          in our store!
          <span className={styles.bannerEmoji}>👌</span>
        </h2>

        {/* Цей блок буде тільки на планшеті і десктопі */}
        <div className={styles.bannerDesktopContent}>
          <p className={styles.bannerText}>Be the first!</p>
          <button className={styles.bannerButton}>Order Now</button>
        </div>
      </div>

      <div className={styles.bannerImageWrapper}>
        <img className={styles.bannerImage} src={banner} alt="iPhone 14 Pro" />
      </div>
    </div>
  );
};
