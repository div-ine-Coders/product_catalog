import { Product } from '@models/dto/Product';
import { useLocalStorage } from './factoryHooks/useLocalStorage';

export const useFavoritesItem = () => {
  const store = useLocalStorage<Product>('favorites', []);

  const isFavorite = (id: number) => {
    return store.items.find(item => item.id === id);
  };

  const removeFavorites = (id: number) => {
    store.remove(item => item.id === id);
  };

  return { ...store, remove: removeFavorites, isFavorite };
};
