import { fetchPhones } from './phonesSliceAsyncThunk';
import { productsStateType } from '@models/state/productsStateType';
import { createSlice } from '@reduxjs/toolkit';

const initialState: productsStateType = {
  data: [],
  isLoading: false,
  error: null,
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPhones.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPhones.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPhones.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default phonesSlice;
