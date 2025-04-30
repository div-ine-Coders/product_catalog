import { useSelector } from 'react-redux';
import { useAppDispatch } from '../factoryHooks/useAppDispatch';
import { RootState } from 'app/store';
import { useEffect, useMemo } from 'react';
import { ProductsStateType } from '@models/state/productsStateType';
// eslint-disable-next-line max-len
import { fetchPhones } from 'app/slices/phonesSlice/AcyncThunk/phonesSliceAsyncThunk';
import { sortFieldMap } from '@constants/sortFieldMap';
import { sortAndPaginate } from '../factoryHooks/sortAndPagination';

export const usePhones = (): ProductsStateType => {
  const dispatch = useAppDispatch();

  const data = useSelector((state: RootState) => state.phones.phones);
  const isLoading = useSelector((state: RootState) => state.phones.isLoading);
  const error = useSelector((state: RootState) => state.phones.error);

  const pagination = useSelector(
    (state: RootState) => state.searchParams.pagination,
  );
  const sort = useSelector((state: RootState) => state.searchParams.sort);

  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch, sort, pagination]);

  const processedData = useMemo(() => {
    return pagination
      ? sortAndPaginate(data, sort, sortFieldMap, pagination)
      : data;
  }, [data, sort, pagination]);

  return { data: processedData, isLoading, error };
};
