import { RootState } from 'app/store';
import { useAppDispatch } from './factoryHooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
// eslint-disable-next-line max-len
import { fetchTablets } from 'app/slices/tabletsSlice/tabletSliceAsyncThunk';
import { sortAndPaginate } from './factoryHooks/sortAndPagination';
import { sortFieldMap } from '@constants/sortFieldMap';

/*                        here: ProductsStateType */
export const useTablets = () => {
  const dispatch = useAppDispatch();

  const data = useSelector((state: RootState) => state.tablets.tablets);
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

  return { data: processedData, isLoading, error, totalLength: data.length };
};
