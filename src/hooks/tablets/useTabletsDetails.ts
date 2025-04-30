import { useAppDispatch } from '@hooks/factoryHooks/useAppDispatch';
// eslint-disable-next-line max-len
import { fetchPhoneById } from 'app/slices/phonesSlice/AcyncThunk/phonesDetailsAsyncThunk';
import { RootState } from 'app/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const useTabletsDetails = () => {
  const { tabletId } = useParams<{ tabletId: string }>();
  const dispatch = useAppDispatch();

  const tablet = useSelector((state: RootState) => state.tablets.tabletDetails);
  const isLoading = useSelector((state: RootState) => state.tablets.isLoading);
  const error = useSelector((state: RootState) => state.tablets.error);

  useEffect(() => {
    if (tabletId) {
      dispatch(fetchPhoneById(tabletId));
    }
  }, [dispatch, tabletId]);

  return { tablet, isLoading, error };
};
