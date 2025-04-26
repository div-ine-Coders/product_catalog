import React from 'react';
import { BackButton } from 'modules/_shared/components/atoms/BackButton';
import { CartItem } from 'modules/_shared/components/molecules/CartItem';
import styles from './ShopingCart.module.scss';

const item1 = {
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

const item2 = {
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
};

const item3 = {
  id: 3,
  category: 'phones',
  itemId: 'apple-iphone-8-64gb-gold',
  name: 'Apple iPhone 8 64GB Gold',
  fullPrice: 600,
  price: 550,
  screen: "4.7' IPS",
  capacity: '64GB',
  color: 'gold',
  ram: '2GB',
  year: 2017,
  image: 'img/phones/apple-iphone-8/gold/00.webp',
};

export const ShopingCartPage = () => {
  return (
    <div className={styles.shopingCart}>
      <div className={styles.shopingCartBack}>
        <BackButton />
      </div>

      <div className={styles.shopingCartTitle}>
        <h1>Cart</h1>
      </div>

      <div className={styles.shopingCartCards}>
        <CartItem good={item1} />
        <CartItem good={item2} />
        <CartItem good={item3} />
      </div>

      <div className={styles.shopingCartConfirm}>
        <h2>Confirm purchases</h2>
      </div>
    </div>
  );
};
