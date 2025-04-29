import { RootState } from 'app/store';
import { useAppDispatch } from './factoryHooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { productsStateType } from '@models/state/productsStateType';
import { fetchTablets } from 'app/slices/tabletsSlice/tabletSliceAsyncThunk';
import { sortAndPaginate } from './factoryHooks/sortAndPagination';
import { sortFieldMap } from '@constants/sortFieldMap';

export const useTablets = (): productsStateType => {
  const dispatch = useAppDispatch();

  const data = useSelector((state: RootState) => state.tablets.data);
  const isLoading = useSelector((state: RootState) => state.tablets.isLoading);
  const error = useSelector((state: RootState) => state.tablets.error);
  const pagination = useSelector(
    (state: RootState) => state.searchParams.pagination,
  );
  const sort = useSelector((state: RootState) => state.searchParams.sort);

  useEffect(() => {
    dispatch(fetchTablets());
  }, [dispatch]);

  const processedData = useMemo(() => {
    return pagination
      ? sortAndPaginate(data, sort, sortFieldMap, pagination)
      : data;
  }, [data, sort, pagination]);

  return { data: processedData, isLoading, error };
};
