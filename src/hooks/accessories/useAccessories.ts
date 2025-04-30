import { RootState } from 'app/store';
import { useAppDispatch } from '../factoryHooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { ProductsStateType } from '@models/state/ProductsStateType';
// eslint-disable-next-line max-len
import { fetchAccessories } from 'app/slices/accessoriesSlice/AsyncThunk/accessoriesSliceAsyncThunk';
import { sortFieldMap } from '@constants/sortFieldMap';
import { sortAndPaginate } from '../factoryHooks/sortAndPagination';

export const useAccessories = (): ProductsStateType => {
  const dispatch = useAppDispatch();

  const data = useSelector((state: RootState) => state.accessories.accessory);
  const isLoading = useSelector(
    (state: RootState) => state.accessories.isLoading,
  );
  const error = useSelector((state: RootState) => state.accessories.error);
  const pagination = useSelector(
    (state: RootState) => state.searchParams.pagination,
  );
  const sort = useSelector((state: RootState) => state.searchParams.sort);

  useEffect(() => {
    dispatch(fetchAccessories());
  }, [dispatch]);

  const processedData = useMemo(() => {
    return pagination
      ? sortAndPaginate(data, sort, sortFieldMap, pagination)
      : data;
  }, [data, sort, pagination]);

  return { data: processedData, isLoading, error };
};
