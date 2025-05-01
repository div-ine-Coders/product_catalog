import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { useEffect, useMemo } from 'react';
// eslint-disable-next-line max-len
import { fetchPhones } from 'app/slices/phonesSlice/phonesSliceAsyncThunk';
import { sortFieldMap } from '@constants/sortFieldMap';
import { useAppDispatch } from './factoryHooks/useAppDispatch';
import { sortAndPaginate } from './factoryHooks/sortAndPagination';
/*                        here: ProductsStateType */
export const usePhones = () => {
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

  return { data: processedData, isLoading, error, totalLength: data.length };
};
