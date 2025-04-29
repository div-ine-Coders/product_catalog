import { RootState } from 'app/store';
import { useAppDispatch } from './hooksFactory/useAppDispatch';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productsStateType } from '@models/productsStateType';
// eslint-disable-next-line max-len
import { fetchAccessories } from 'app/slices/accessoriesSlice/accessoriesSliceAsyncThunk';

export const useAccessories = (): productsStateType => {
  const dispatch = useAppDispatch();

  const data = useSelector((state: RootState) => state.accessories.data);
  const isLoading = useSelector(
    (state: RootState) => state.accessories.isLoading,
  );
  const error = useSelector((state: RootState) => state.accessories.error);

  useEffect(() => {
    dispatch(fetchAccessories());
  }, [dispatch]);

  return { data, isLoading, error };
};
