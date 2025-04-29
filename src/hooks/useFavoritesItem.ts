import { Product } from '@models/dto/Product';
import { useEffect } from 'react';
import { add, remove, set } from 'app/slices/favoritesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';

export const useFavoritesItem = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );

  const isFavorite = (id: number) => {
    return favorites.some(item => item.id === id);
  };

  const addFavorite = (product: Product) => {
    dispatch(add(product));
  };

  const removeFavorite = (id: number) => {
    const product = favorites.find(item => item.id === id);

    if (product) {
      dispatch(remove(product));
    }
  };

  useEffect(() => {
    const data = localStorage.getItem('favorites');

    if (data) {
      try {
        const parsed = JSON.parse(data) as Product[];

        dispatch(set(parsed));
      } catch (error) {
        console.error('Failed to parse favorites from localStorage:', error);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return {
    items: favorites,
    add: addFavorite,
    remove: removeFavorite,
    isFavorite,
  };
};
