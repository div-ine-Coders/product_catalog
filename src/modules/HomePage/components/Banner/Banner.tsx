import React from 'react';
import styles from './Banner.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  title?: string;
  img?: string;
  description?: string;
  alt?: string;
  link?: string;
  onClick?: () => void;
}

export const Banner: React.FC<Props> = ({
  title = 'Now available | in our store!',
  img = '/public/img/banner-phones.png',
  description = 'Be the first!',
  alt = 'iPhone 14 Pro',
  link = '/',
  onClick = () => {},
}) => {
  const parts = title.split('|');
  const firstLine = parts[0] || '';
  const secondLine = parts[1] || '';

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerTitle}>
          {firstLine}
          {secondLine && (
            <>
              <br />
              {secondLine}
            </>
          )}
          <span className={styles.bannerEmoji}>👌</span>
        </h2>

        <div className={styles.bannerDesktopContent}>
          <p className={styles.bannerText}>{description}</p>
          <button onClick={onClick} className={styles.bannerButton}>
            Order Now
          </button>
        </div>
      </div>

      <div className={styles.bannerImageWrapper}>
        <Link to={link}>
          <img className={styles.bannerImage} src={img} alt={alt} />
        </Link>
      </div>
    </div>
  );
};
