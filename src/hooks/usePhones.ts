import { useSelector } from 'react-redux';
import { useAppDispatch } from './factoryHooks/useAppDispatch';
import { RootState } from 'app/store';
import { useEffect, useMemo } from 'react';
import { productsStateType } from '@models/state/productsStateType';
import { fetchPhones } from 'app/slices/phonesSlice/phonesSliceAsyncThunk';
import { sortFieldMap } from '@constants/sortFieldMap';
import { sortAndPaginate } from './factoryHooks/sortAndPagination';

export const usePhones = (): productsStateType => {
  const dispatch = useAppDispatch();

  const data = useSelector((state: RootState) => state.phones.data);
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
