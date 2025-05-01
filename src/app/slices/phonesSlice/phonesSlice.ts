import { fetchPhones } from './phonesSliceAsyncThunk';
import { createSlice } from '@reduxjs/toolkit';
import { PhonesStateType } from './PhonesStateType';

const initialState: PhonesStateType = {
  phones: [],
  isLoading: false,
  error: null,
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPhones.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPhones.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(fetchPhones.fulfilled, (state, action) => {
        state.isLoading = false;
        state.phones = action.payload;
      });
  },
});

export default phonesSlice;
