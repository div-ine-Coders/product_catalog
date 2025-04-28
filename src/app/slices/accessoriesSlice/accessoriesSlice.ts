import { createSlice } from '@reduxjs/toolkit';
import { productsStateType } from '../../../types/productsStateType';
import { fetchAccessories } from './accessoriesSliceAsyncThunk';

const initialState: productsStateType = {
  data: [],
  isLoading: false,
  error: null,
};

const accessoriesSlice = createSlice({
  name: 'accessoriesSlice',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAccessories.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAccessories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchAccessories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default accessoriesSlice.reducer;
