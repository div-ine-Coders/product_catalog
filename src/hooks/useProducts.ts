import { fetchProduct } from 'app/slices/productsSlice/productSliceAsyncThunk';
import { RootState } from 'app/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './useAppDispatch';

export const useProducts = () => {
  const dispatch = useAppDispatch();

  const data = useSelector((state: RootState) => state.productCatalog.data);
  const isLoading = useSelector(
    (state: RootState) => state.productCatalog.isLoading,
  );
  const error = useSelector((state: RootState) => state.productCatalog.error);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return { data, isLoading, error };
};
