/* eslint-disable prettier/prettier */
/* eslint-disable max-len */

import { CatalogList } from 'modules/_shared/components/molecules/CatalogList';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CatalogPage.module.scss';
import home from '../../assets/icons/icon-home.svg';
import arrow from '../../assets/icons/icon-arrow-left-grey.svg';
import { Dropdown } from 'modules/_shared/components/atoms/Dropdown';
import { ArrowButton } from 'modules/_shared/components/atoms/ArrowButton';
import { ArrowDirection } from '@constants/ArrowDirection';
import { DefaultButton } from 'modules/_shared/components/atoms/DefaultButton';
import cn from 'classnames';

const products = [
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
    id: 6,
    category: 'phones',
    itemId: 'apple-iphone-11-64gb-black',
    name: 'Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)',
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

export const CatalogPage = () => {
  return (
    <>
      <div className={styles.catalogPage}>
        <div className={styles.breadcrumbsContainer}>
          <div className={styles.breadcrumbs}>
            <Link to="/" className={styles.breadcrumbsLink}>
              <img src={home} alt="Home" />
            </Link>
            <span className={styles.breadcrumbsSeparator}>
              <img src={arrow} alt="arrow" />
            </span>
            <span className={styles.breadcrumbsCurrent}>Phones</span>
          </div>
        </div>

        <div className={styles.catalogPageQuantity}>
          <h1 className={styles.catalogPageQuantityTitle}>Mobile phones</h1>
          <span className={styles.catalogPageQuantityItems}>
            {products.length} items
          </span>
        </div>
        <div className={styles.catalogPageContainerSort}>
          <div className={styles.catalogPageSort}>
            <div className={styles.catalogPageSortBy}>
              <span className={cn('smallText', styles.catalogPageSortByText)}>
                Sort by
              </span>
              <div className={styles.catalogPageSortByButton}>
                <Dropdown
                  items={['Newest', 'Price', 'A-Z']}
                  activeItem={'Newest'}
                />
              </div>
            </div>
            <div className={styles.catalogPageSortBy}>
              <span className={cn('smallText', styles.catalogPageSortByText)}>
                Items on page
              </span>
              <div className={styles.catalogPageSortByButton}>
                <Dropdown items={['All', '64', '32', '16']} activeItem={'16'} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.catalogPageList}>
          <CatalogList />
        </div>
        <div className={styles.switchButtons}>
          <div className={styles.catalogPageButtons}>
            <ArrowButton direction={ArrowDirection.Left} isDisabled={false} />
            <DefaultButton>1</DefaultButton>
            <DefaultButton>2</DefaultButton>
            <DefaultButton isSelected>3</DefaultButton>
            <DefaultButton>4</DefaultButton>
            <ArrowButton direction={ArrowDirection.Right} isDisabled={false} />
          </div>
        </div>
      </div>
    </>
  );
};
