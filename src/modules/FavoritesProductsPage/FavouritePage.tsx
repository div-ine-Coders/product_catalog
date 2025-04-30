/* eslint-disable prettier/prettier */
/* eslint-disable max-len */

import { CatalogList } from 'modules/_shared/components/molecules/CatalogList';
import React from 'react';
import styles from './FavoritePage.module.scss';
import { Link } from 'react-router-dom';
import home from '../../assets/icons/icon-home.svg';
import arrow from '../../assets/icons/icon-arrow-left-grey.svg';
import { DefaultButton } from 'modules/_shared/components/atoms/DefaultButton';
import { RouterEnum } from '@constants/RouterEnum';
import noFavourite from '../../assets/shopping-bag.svg';
import cn from 'classnames';
import { Product } from '@models/dto/Product';

const products: Product[] = [
  {
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
  },
  {
    id: 2,
    category: 'phones',
    itemId: 'apple-iphone-7-plus-32gb-black',
    name: 'Apple iPhone 7 Plus 32GB Black',
    fullPrice: 540,
    price: 500,
    screen: "5.5' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '3GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7-plus/black/00.webp',
  },
  {
    id: 3,
    category: 'phones',
    itemId: 'apple-iphone-8-64gb-gold',
    name: 'Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)',
    fullPrice: 600,
    price: 550,
    screen: "4.7' IPS",
    capacity: '64GB',
    color: 'gold',
    ram: '2GB',
    year: 2017,
    image: 'img/phones/apple-iphone-8/gold/00.webp',
  },
  {
    id: 4,
    category: 'phones',
    itemId: 'apple-iphone-11-64gb-black',
    name: 'Apple iPhone 11 64GB Black',
    fullPrice: 932,
    price: 880,
    screen: "6.1' IPS",
    capacity: '64GB',
    color: 'black',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/black/00.webp',
  },
  {
    id: 5,
    category: 'phones',
    itemId: 'apple-iphone-11-64gb-black',
    name: 'Apple iPhone 11 64GB Black',
    fullPrice: 932,
    price: 880,
    screen: "6.1' IPS",
    capacity: '64GB',
    color: 'black',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/black/00.webp',
  },
  {
    id: 5,
    category: 'phones',
    itemId: 'apple-iphone-11-64gb-black',
    name: 'Apple iPhone 11 64GB Black',
    fullPrice: 932,
    price: 880,
    screen: "6.1' IPS",
    capacity: '64GB',
    color: 'black',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/black/00.webp',
  },
]; /*comment array to see  favouritePageEmpty*/

export const FavouritePage = () => {
  return (
    <>
      <div className={styles.favouritePage}>
        <div className={styles.breadcrumbsContainer}>
          <div className={styles.breadcrumbs}>
            <Link to="/" className={styles.breadcrumbsLink}>
              <img src={home} alt="Home" />
            </Link>
            <span className={styles.breadcrumbsSeparator}>
              <img src={arrow} alt="arrow" />
            </span>
            <span className={styles.breadcrumbsCurrent}>Favourite</span>
          </div>
        </div>

        <div className={styles.favouritePageQuantity}>
          <h1 className={styles.favouritePageQuantityTitle}>Favourites</h1>
          {products.length !== 0 && (
            <span className={styles.favouritePageQuantityItems}>
              {products.length} items
            </span>
          )}
        </div>
        {products.length ? (
          <div className={styles.favouritePageList}>
            <CatalogList products={products} />
          </div>
        ) : (
          <div className={styles.favouritePageEmpty}>
            <img
              className={styles.favouritePageEmptyImage}
              src={noFavourite}
              alt="Empty Cart"
            />
            <h2>No favourites yet</h2>
            <div className={cn(styles.favouritePageEmptyButton, 'buttonText')}>
              <Link to={RouterEnum.HOME} aria-label="Go home">
                <DefaultButton>Go back to shopping</DefaultButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
