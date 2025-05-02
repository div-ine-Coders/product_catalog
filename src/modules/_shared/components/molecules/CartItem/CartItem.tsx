import React from 'react';
import styles from './CartItem.module.scss';
import cn from 'classnames';
import { CartItemType } from '@models/state/CartItem';
import { Link } from 'react-router-dom';

interface Props {
  item: CartItemType;
  onRemoveCartItem: (id: number) => void;
  onPlus: (id: number) => void;
  onMinus: (id: number) => void;
}

export const CartItem: React.FC<Props> = ({
  item,
  onMinus,
  onPlus,
  onRemoveCartItem,
}) => {
  const { quantity, product } = item;
  const isDisabled = quantity === 1;
  const totalPrice = quantity * product.price;

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemBlockInfo}>
        <div className={styles.cartItemBlockInfoLeft}>
          <button
            className={styles.cartItemRemove}
            onClick={() => onRemoveCartItem(product.id)}
          />
          <Link
            className={styles.cartItemLink}
            to={`/${product.category}/${product.itemId}`}
          >
            <img
              className={styles.cartItemImage}
              src={product.image}
              alt={product.name}
            />
          </Link>
        </div>
        <Link
          className={styles.cartItemBlockInfoTitle}
          to={`/${product.category}/${product.itemId}`}
        >
          {product.name}
        </Link>
      </div>

      <div className={styles.cartItemBlockControl}>
        <div className={styles.cartItemControls}>
          <button
            className={cn(styles.cartItemBtnMinus, {
              [styles.cartItemBtnMinusDisabled]: isDisabled,
            })}
            disabled={isDisabled}
            onClick={() => onMinus(product.id)}
          />
          <span className={styles.cartItemQuantity}>{quantity}</span>
          <button
            className={styles.cartItemBtnPlus}
            onClick={() => onPlus(product.id)}
          />
        </div>
        <div className={styles.cartItemPrice}>
          <h3>{`$${totalPrice}`}</h3>
        </div>
      </div>
    </div>
  );
};
