import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './productSliceAsyncThunk';
import { Product } from '@models/Product';

export interface productsSliceStateType {
  data: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: productsSliceStateType = {
  data: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default productsSlice.reducer;
