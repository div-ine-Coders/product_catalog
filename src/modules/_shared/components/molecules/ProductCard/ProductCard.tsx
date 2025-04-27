import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import { DefaultButton } from '../../atoms/DefaultButton';
import { FavouriteButton } from '../../atoms/FavouriteButton';
import cn from 'classnames';
import { Product } from '../../../../../types/Product';

const phone = {
  id: 1,
  category: 'phones',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: "4.7' IPS",
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.webp',
};

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product = phone }) => {
  const { itemId, name, price, fullPrice, screen, capacity, ram, image } =
    product;
  const [inCart, setInCart] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className={styles.productCard}>
      <a href={itemId} className={styles.productCardLink}>
        <img src={image} alt={name} className={styles.productCardImage} />
      </a>

      <p className={styles.productCardTitle}>{name}</p>
      {/*here will be NavLink */}

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
          <DefaultButton isSelected={inCart} click={() => setInCart(!inCart)}>
            {inCart ? 'Added' : 'Add to cart'}
          </DefaultButton>
        </div>
        <div className={styles.productCardButtonsFavourite}>
          <FavouriteButton
            isFavourite={isFavourite}
            click={() => setIsFavourite(!isFavourite)}
          />
        </div>
      </div>
    </div>
  );
};
