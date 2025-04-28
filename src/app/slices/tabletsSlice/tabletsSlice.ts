import { createSlice } from '@reduxjs/toolkit';
import { productsStateType } from '../../../types/productsStateType';
import { fetchTablets } from './tabletSliceAsyncThunk';

const initialState: productsStateType = {
  data: [],
  isLoading: false,
  error: null,
};

const tabletsSlice = createSlice({
  name: 'tabletsSlice',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTablets.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTablets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTablets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default tabletsSlice.reducer;
