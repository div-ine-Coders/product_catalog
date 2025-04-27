/* eslint-disable prettier/prettier */
import { useState } from 'react';
import styles from './CatalogList.module.scss';
import cn from 'classnames';
import photo from './Photo.png';
import { DefaultButton } from '../../atoms/DefaultButton';
import React from 'react';
import { FavouriteButton } from '../../atoms/FavouriteButton';

export const CatalogList = () => {
  const [inCart, setInCart] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className={styles.CatalogListContainer}>
      <div className={styles.productCard}>
        <a href="#" className={styles.productCardLink}>
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

        <div className={styles.productCardBorder} />

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
      <div className={styles.productCard}>
        <a href="#" className={styles.productCardLink}>
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

        <div className={styles.productCardBorder} />

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
      <div className={styles.productCard}>
        <a href="#" className={styles.productCardLink}>
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

        <div className={styles.productCardBorder} />

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
      <div className={styles.productCard}>
        <a href="#" className={styles.productCardLink}>
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

        <div className={styles.productCardBorder} />

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
      <div className={styles.productCard}>
        <a href="#" className={styles.productCardLink}>
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

        <div className={styles.productCardBorder} />

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
      <div className={styles.productCard}>
        <a href="#" className={styles.productCardLink}>
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

        <div className={styles.productCardBorder} />

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
      <div className={styles.productCard}>
        <a href="#" className={styles.productCardLink}>
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

        <div className={styles.productCardBorder} />

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
      <div className={styles.productCard}>
        <a href="#" className={styles.productCardLink}>
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

        <div className={styles.productCardBorder} />

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
    </div>
  );
};
