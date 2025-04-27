/* eslint-disable prettier/prettier */
import { ProductCard } from '../ProductCard';
import styles from './CatalogList.module.scss';
import React from 'react';

export const CatalogList = () => {
  return (
    <div className={styles.CatalogListContainer}>
      <ProductCard product={undefined} />
      {/* just for testing remain like this product={undefined}*/}
      <ProductCard product={undefined} />
      <ProductCard product={undefined} />
      <ProductCard product={undefined} />
      <ProductCard product={undefined} />
      <ProductCard product={undefined} />
      <ProductCard product={undefined} />
      <ProductCard product={undefined} />
    </div>
  );
};
