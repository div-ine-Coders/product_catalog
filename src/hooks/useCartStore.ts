import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { useEffect } from 'react';
import { CartItem } from '@models/state/CartItem';
import {
  addCart,
  clearCarts,
  removeCart,
  setCarts,
} from 'app/slices/cartSlice';
import { Product } from '@models/dto/Product';

export const useCartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cardItems);

  const isInCart = (productId: number) => {
    return cartItems.some(item => item.id === productId);
  };

  const remove = (id: number) => {
    dispatch(removeCart(id));
  };

  const add = (product: Product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const data = localStorage.getItem('cart');

    if (data) {
      try {
        const parsed = JSON.parse(data) as CartItem[];

        dispatch(setCarts(parsed));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return {
    cards: cartItems,
    isInCart,
    add: add,
    remove: remove,
    clear: () => dispatch(clearCarts()),
  };
};
