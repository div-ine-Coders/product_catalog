import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './ShopingCart.module.scss';
import { BackButton } from 'modules/_shared/components/atoms/BackButton';
import { CartItem } from 'modules/_shared/components/molecules/CartItem';
import { DefaultButton } from 'modules/_shared/components/atoms/DefaultButton';
import { CartItem as CarItemType } from '../../types/CartItem';
import { RouterEnum } from '@constants/RouterEnum';
import emptyCart from '../../assets/empty-cart.png';

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
  const cart: CarItemType[] = [
    { id: item1.id, quantity: 1, product: item1 },
    { id: item2.id, quantity: 3, product: item2 },
    { id: item3.id, quantity: 2, product: item3 },
  ]; //make the array empty to see the empty cart page)

  //Values must be taken from the Redux

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0,
  );
  const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={styles.shopingCart}>
      {cart.length ? (
        <>
          <div className={styles.shopingCartBack}>
            <Link to={'../'} aria-label="Go back">
              <BackButton />
            </Link>
            <h1>Cart</h1>
          </div>

          <div className={styles.shopingCartCards}>
            {cart.map(item => (
              <CartItem
                key={item.id}
                good={item.product}
                quantity={item.quantity}
              />
            ))}
          </div>

          <div className={styles.shopingCartConfirm}>
            <div className={styles.shopingCartConfirmInfo}>
              <h2>${totalPrice}</h2>
              <p className={styles.shopingCartConfirmInfoCount}>
                Total for {totalItemsInCart} item
                {totalItemsInCart > 1 ? 's' : ''}
              </p>
            </div>
            <hr />
            <div className={cn(styles.shopingCartConfirmButton, 'buttonText')}>
              <DefaultButton>Checkout</DefaultButton>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.shopingCartEmpty}>
          <img
            className={styles.shopingCartEmptyImage}
            src={emptyCart}
            alt="Empty Cart"
          />
          <h2>Your cart is Empty</h2>
          <div className={cn(styles.shopingCartEmptyButton, 'buttonText')}>
            <Link to={RouterEnum.HOME} aria-label="Go home">
              <DefaultButton>Go back to shopping</DefaultButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
