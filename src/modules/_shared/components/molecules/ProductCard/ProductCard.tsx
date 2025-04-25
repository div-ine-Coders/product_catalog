import React, { useState } from 'react';
// eslint-disable-next-line max-len
// import { ProductCard as ProductCardType } from '../../../../../types/ProductCard'; <----- add after aprove Pull Request
import styles from './ProductCard.module.scss';
import { DefaultButton } from '../../atoms/DefaultButton';
import { FavouriteButton } from '../../atoms/FavouriteButton';
import cn from 'classnames';
import photo from './Photo mask.png'; // <---delete import and photo after aprove Pull Request

// interface Props {
//   product: ProductCardType;
// } <-----------------------------add props after approve Pull Request

export const ProductCard: React.FC = () => {
  const [inCart, setInCart] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productCard}>
        <a href="#">
          <img
            src={photo}
            alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
            className={styles.productCardImage}
          />
        </a>

        <p className={styles.productCardTitle}>
          Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
        </p>
        {/*here will be NavLink */}

        <div className={styles.productCardPrices}>
          <h3 className={styles.productCardPricesCurrent}>$799</h3>
          <h3 className={styles.productCardPricesFull}>$899</h3>
        </div>

        <hr className={styles.productCardBorder} />

        <ul className={styles.productCardDetails}>
          <li className={cn('smallText', styles.productCardDetailsText)}>
            Screen: <span>5.8” OLED</span>
          </li>
          <li className={cn('smallText', styles.productCardDetailsText)}>
            Capacity: <span>64 GB</span>
          </li>
          <li className={cn('smallText', styles.productCardDetailsText)}>
            RAM: <span>4 GB</span>
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

      {/* use this div after aprove Pull Request*/}
      {/* <div className={styles.productCard}>
        <img
           src={`/${product.image}`}
          alt={product.name}
          className={styles.productCardImage}
        />
        <p className={styles.productCardTitle}>
        {product.name}
        </p>

        <div className={styles.productCardPrices}>
          <span className={styles.productCardPricesCurrent}>${product.price}</span>
          <span className={styles.productCardPricesFull}>${product.fullPrice}</span>
        </div>

        <div className={styles.productCardBorder}></div>

        <div className={styles.productCardDetails}>
          <p className={styles.productCardDetailsText}>
            Screen: <span>{product.screen}</span>
          </p>
          <p className={styles.productCardDetailsText}>
            Capacity: <span>{product.capacity}</span>
          </p>
          <p className={styles.productCardDetailsText}>
            RAM: <span>{product.ram}</span>
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
      </div> */}
    </div>
  );
};
