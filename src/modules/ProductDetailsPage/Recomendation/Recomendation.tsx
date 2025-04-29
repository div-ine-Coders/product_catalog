import React from 'react';
import { ProductCard } from 'modules/_shared/components/molecules/ProductCard';
import styles from './Recomendation.module.scss';

export const Recomendation = () => {
  return (
    <div
      className={styles.recomendation}
      style={{
        backgroundColor: 'purple',
      }}
    >
      slider
      <ProductCard />
    </div>
  );
};
