import { createSlice } from '@reduxjs/toolkit';
import { fetchAccessories } from './accessoriesSliceAsyncThunk';
import { productsStateType } from '@models/productsStateType';

const initialState: productsStateType = {
  data: [],
  isLoading: false,
  error: null,
};

const accessoriesSlice = createSlice({
  name: 'productsAccessories',
  initialState,
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

export default accessoriesSlice;
