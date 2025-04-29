import { Product } from '@models/dto/Product';
import { useLocalStorage } from './factoryHooks/useLocalStorage';
import { CartItem } from '@models/state/CartItem';
import { useEffect } from 'react';

export const useCartItems = () => {
  const store = useLocalStorage<CartItem>('cart', []);

  const addToCart = (product: Product) => {
    const existing = store.items.find(item => item.id === product.id);

    if (existing) {
      const updated = store.items.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

      store.set(updated);
    } else {
      const tempCardItem: CartItem = {
        id: product.id,
        quantity: 1,
        product: product,
      };

      store.add(tempCardItem);
    }
  };

  const removeFromCart = (productId: number) => {
    store.remove(item => item.id === productId);
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    const updated = store.items
      .map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      )
      .filter(item => item.quantity > 0);

    store.set(updated);
  };

  const isInCart = (productId: number) => {
    return store.items.some(item => item.id === productId);
  };

  useEffect(() => {}, [store.items]);

  return {
    cards: store.items,
    add: addToCart,
    remove: removeFromCart,
    updateQuantity,
    isInCart,
    clear: store.clear,
  };
};
