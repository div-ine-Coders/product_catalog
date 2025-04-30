import { fetchPhones } from './AcyncThunk/phonesSliceAsyncThunk';
import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { PhonesStateType } from './PhonesStateType';
import { fetchPhoneById } from './AcyncThunk/phonesDetailsAsyncThunk';

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
      .addCase(fetchPhones.fulfilled, (state, action) => {
        state.isLoading = false;
        state.phones = action.payload;
      })
      .addCase(fetchPhoneById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.phoneDetails = action.payload;
      })

      .addMatcher(isPending(fetchPhones, fetchPhoneById), state => {
        state.isLoading = true;
        state.error = null;
      })

      .addMatcher(isRejected(fetchPhones, fetchPhoneById), (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default phonesSlice;
