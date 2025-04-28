import React from 'react';
import styles from './CartItem.module.scss';
import cn from 'classnames';
import { Product } from '../../../../../types/Product';

const phone = {
  itemId: 'apple-iphone-11-128gb-black',
  name: 'Apple iPhone 11 128GB Black',
  price: 1050,
  image: 'img/phones/apple-iphone-11/black/00.webp',
};

interface Props {
  good?: Product;
  quantity?: number; //must take from Redux
}

export const CartItem: React.FC<Props> = ({ good = phone, quantity = 1 }) => {
  const { itemId, name, price, image } = good;
  const isDisabled = quantity === 1; //for 'minus' button
  const totalPrice = quantity * price;
  const click = () => {}; //add diferent functions for buttons click

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemBlockInfo}>
        <div className={styles.cartItemBlockInfoLeft}>
          <button className={styles.cartItemRemove} onClick={click} />
          <a className={styles.cartItemLink} href={itemId}>
            <img className={styles.cartItemImage} src={image} alt={name} />
          </a>
        </div>
        <p>{name}</p>
      </div>

      <div className={styles.cartItemBlockControl}>
        <div className={styles.cartItemControls}>
          <button
            className={cn(styles.cartItemBtnMinus, {
              [styles.cartItemBtnMinusDisabled]: isDisabled,
            })}
            disabled={isDisabled}
            onClick={click}
          />
          <span className={styles.cartItemQuantity}>{quantity}</span>
          <button className={styles.cartItemBtnPlus} onClick={click} />
        </div>
        <div className={styles.cartItemPrice}>
          <h3>{`$${totalPrice}`}</h3>
        </div>
      </div>
    </div>
  );
};
