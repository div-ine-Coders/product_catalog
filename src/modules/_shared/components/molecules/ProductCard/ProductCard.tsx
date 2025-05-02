import styles from './ProductCard.module.scss';
import { DefaultButton } from '../../atoms/DefaultButton';
import { FavouriteButton } from '../../atoms/FavouriteButton';
import cn from 'classnames';
import { Product } from '../../../../../types/dto/Product';
import { useFavoritesItem } from '@hooks/useFavoritesItem';
import { useCartItems } from '@hooks/useCartStore';
import React from 'react';

interface Props {
  product: Product;
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
export const ProductCard: React.FC<Props> = ({ product }) => {
  const { itemId, name, price, fullPrice, screen, capacity, ram, image } =
    product;

  const favorite = useFavoritesItem();
  const cart = useCartItems();

  return (
    <div className={styles.productCard}>
      <a href={itemId} className={styles.productCardLink}>
        <img src={image} alt={name} className={styles.productCardLinkImage} />
      </a>

      <p className={styles.productCardTitle}>{name}</p>
      {/*here will be Link */}

      <div className={styles.productCardPrices}>
        <h3 className={styles.productCardPricesCurrent}>${price}</h3>
        <h3 className={styles.productCardPricesFull}>${fullPrice}</h3>
      </div>

      <div className={styles.productCardBorder} />

      <ul className={styles.productCardDetails}>
        <li className={cn('smallText', styles.productCardDetailsText)}>
          Screen: <span>{screen}</span>
        </li>
        <li className={cn('smallText', styles.productCardDetailsText)}>
          Capacity: <span>{capacity}</span>
        </li>
        <li className={cn('smallText', styles.productCardDetailsText)}>
          RAM: <span>{ram}</span>
        </li>
      </ul>
      <div className={styles.productCardButtons}>
        <div className={styles.productCardButtonsDefault}>
          <DefaultButton
            isSelected={cart.isInCart(product.id)}
            click={() => cart.addCart(product)}
          >
            {cart.isInCart(product.id) ? 'Added' : 'Add to cart'}
          </DefaultButton>
        </div>
        <div className={styles.productCardButtonsFavourite}>
          <FavouriteButton
            isFavourite={favorite.isFavorite(product.id)}
            click={() => favorite.setFavorite(product)}
          />
        </div>
      </div>
    </div>
  );
};
