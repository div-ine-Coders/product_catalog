import { useAppDispatch } from '@hooks/factoryHooks/useAppDispatch';
// eslint-disable-next-line max-len
import { fetchAccessoriesById } from 'app/slices/accessoriesSlice/AsyncThunk/accessoriesDetailsAsyncThunk';
import { RootState } from 'app/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const useAccesoriesDetails = () => {
  const { accesoriesId } = useParams<{ accesoriesId: string }>();
  const dispatch = useAppDispatch();

  const accessories = useSelector(
    (state: RootState) => state.accessories.accessoryDetails,
  );
  const isLoading = useSelector(
    (state: RootState) => state.accessories.isLoading,
  );
  const error = useSelector((state: RootState) => state.accessories.error);

  useEffect(() => {
    if (accesoriesId) {
      dispatch(fetchAccessoriesById(accesoriesId));
    }
  }, [dispatch, accesoriesId]);

  return { accessories, isLoading, error };
};
