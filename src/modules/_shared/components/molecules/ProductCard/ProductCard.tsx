import React, { useState } from 'react';
// eslint-disable-next-line max-len
// import { ProductCard as ProductCardType } from '../../../../../types/ProductCard';
import styles from './ProductCard.module.scss';
import { DefaultButton } from '../../atoms/DefaultButton';
import { FavouriteButton } from '../../atoms/FavouriteButton';
import photo from './Photo mask.png';

// interface Props {
//   product: ProductCardType;
// }

export const ProductCard = () => {
  const [inCart, setInCart] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productCard}>
        <img
          // src={`/${product.image}`}
          src={photo}
          alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
          className={styles.productCardImage}
        />
        <p className={styles.productCardTitle}>
          Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
        </p>

        <div className={styles.productCardPrices}>
          <span className={styles.productCardPricesCurrent}>$799</span>
          <span className={styles.productCardPricesFull}>$899</span>
        </div>

        <div className={styles.productCardBorder}></div>

        <div className={styles.productCardDetails}>
          <p className={styles.productCardDetailsText}>
            Screen: <span>5.8” OLED</span>
          </p>
          <p className={styles.productCardDetailsText}>
            Capacity: <span>64 GB</span>
          </p>
          <p className={styles.productCardDetailsText}>
            RAM: <span>4 GB</span>
          </p>
        </div>

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
    </div>
  );
};
