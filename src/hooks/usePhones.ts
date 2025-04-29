import { useSelector } from 'react-redux';
import { useAppDispatch } from './hooksFactory/useAppDispatch';
import { RootState } from 'app/store';
import { useEffect } from 'react';
import { productsStateType } from '@models/productsStateType';
import { fetchPhones } from 'app/slices/phonesSlice/phonesSliceAsyncThunk';

export const usePhones = (): productsStateType => {
  const dispatch = useAppDispatch();

  const data = useSelector((state: RootState) => state.phones.data);
  const isLoading = useSelector((state: RootState) => state.phones.isLoading);
  const error = useSelector((state: RootState) => state.phones.error);

  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);

  return { data, isLoading, error };
};
