import React from 'react';
import styles from './MainSlider.module.scss';

interface Props {
  images: string[];
}

export const MainSlider: React.FC<Props> = ({ images }) => {
  return (
    <div
      className={styles.mainSlider}
      style={{
        backgroundColor: 'purple',
        height: '400px',
      }}
    >
      slider {images.length}
    </div>
  );
};
