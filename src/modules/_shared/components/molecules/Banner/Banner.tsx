import React from 'react';
import cn from 'classnames';
import styles from './Banner.module.scss';

interface Props {
  title: string;
  img?: string;
  description?: string;
  alt?: string;
  onClick?: () => void;
}

export const Banner: React.FC<Props> = ({
  title,
  img,
  description,
  alt,
  onClick = () => {},
}) => {
  const parts = title.split('|');
  const firstLine = parts[0] || '';
  const secondLine = parts[1] || '';

  return (
    <div
      className={cn(styles.banner, styles.clickableMobile)}
      onClick={onClick}
    >
      <img src={img} alt={alt} className={styles.bannerImage} />

      <div className={styles.bannerOverlay}>
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
      </div>
    </div>
  );
};
