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

  const setFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      dispatch(remove(product));
    } else {
      dispatch(add(product));
    }
  };

  useEffect(() => {
    const data = localStorage.getItem('favorites');

    if (data) {
      const parsed = JSON.parse(data) as Product[];

      dispatch(set(parsed));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return {
    items: favorites,
    setFavorite: setFavorite,
    isFavorite,
  };
};
