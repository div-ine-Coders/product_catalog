import { useAppDispatch } from '@hooks/factoryHooks/useAppDispatch';
// eslint-disable-next-line max-len
import { fetchPhoneById } from 'app/slices/phonesSlice/AcyncThunk/phonesDetailsAsyncThunk';
import { RootState } from 'app/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const usePhonesDetails = () => {
  const { phoneId } = useParams<{ phoneId: string }>();
  const dispatch = useAppDispatch();

  const phone = useSelector((state: RootState) => state.phones.phoneDetails);
  const isLoading = useSelector((state: RootState) => state.phones.isLoading);
  const error = useSelector((state: RootState) => state.phones.error);

  useEffect(() => {
    if (phoneId) {
      dispatch(fetchPhoneById(phoneId));
    }
  }, [dispatch, phoneId]);

  return { phone, isLoading, error };
};
