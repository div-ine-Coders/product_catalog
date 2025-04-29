import { RootState } from 'app/store';
import { useAppDispatch } from './hooksFactory/useAppDispatch';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productsStateType } from '@models/productsStateType';
import { fetchTablets } from 'app/slices/tabletsSlice/tabletSliceAsyncThunk';

export const useTablets = (): productsStateType => {
  const dispatch = useAppDispatch();

  const data = useSelector((state: RootState) => state.tablets.data);
  const isLoading = useSelector((state: RootState) => state.tablets.isLoading);
  const error = useSelector((state: RootState) => state.tablets.error);

  useEffect(() => {
    dispatch(fetchTablets());
  }, [dispatch]);

  return { data, isLoading, error };
};
