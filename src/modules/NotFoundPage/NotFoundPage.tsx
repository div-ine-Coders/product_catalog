import React from 'react';
import styles from './NotFoundPage.module.scss';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <video
          src="/img/pageNotFound/vecteezy.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
        />

        <h1 className={styles.title}>
          Looks like you’ve <br /> wandered off the map.
        </h1>

        <button className={styles.backButton} onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    </div>
  );
};
