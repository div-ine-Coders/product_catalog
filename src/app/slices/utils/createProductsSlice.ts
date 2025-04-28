import { AsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productsStateType } from '../../../types/productsStateType';
import { Product } from '@models/Product';

interface CreateProductsSliceParams {
  name: string;
  fetchThunk: AsyncThunk<Product[], void, object>;
}

export function createProductsSlice({
  name,
  fetchThunk,
}: CreateProductsSliceParams) {
  const initialState: productsStateType = {
    data: [],
    isLoading: false,
    error: null,
  };

  return createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchThunk.pending, state => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(
          fetchThunk.fulfilled,
          (state, action: PayloadAction<Product[]>) => {
            state.isLoading = false;
            state.data = action.payload;
          },
        )
        .addCase(fetchThunk.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message || 'Something went wrong';
        });
    },
  });
}
