import React from 'react';
// eslint-disable-next-line max-len
import { ProductCard as ProductCardType } from '../../../../../types/ProductCard';
import styles from './ProductCard.module.scss';
import { DefaultButton } from '../../atoms/DefaultButton';
import { FavouriteButton } from '../../atoms/FavouriteButton';

interface Props {
  product: ProductCardType;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles['product-card']}>
      <img
        src={`/${product.image}`}
        alt={product.name}
        className={styles['product-card__image']}
      />
      <h3 className={styles['product-card__title']}>{product.name}</h3>

      <div className={styles['product-card__prices']}>
        <span className={styles['product-card__price--current']}>
          ${product.price}
        </span>
        <span className={styles['product-card__price--full']}>
          ${product.fullPrice}
        </span>
      </div>

      <div className={styles['product-card__details']}>
        <p>Screen: {product.screen}</p>
        <p>Capacity: {product.capacity}</p>
        <p>RAM: {product.ram}</p>
      </div>

      <div className={styles['product-card__buttons']}>
        <div>
          <DefaultButton>Add to card</DefaultButton>
        </div>
        <div>
          <FavouriteButton isFavourite={false} />
        </div>
      </div>
    </div>
  );
};
