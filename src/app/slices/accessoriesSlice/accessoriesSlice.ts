import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { fetchAccessories } from './AsyncThunk/accessoriesSliceAsyncThunk';
import { AccessoryStateType } from './AccessoriesStateType';
// eslint-disable-next-line max-len
import { fetchAccessoriesById } from './AsyncThunk/accessoriesDetailsAsyncThunk';

const initialState: AccessoryStateType = {
  accessory: [],
  isLoading: false,
  error: null,
};

const accessoriesSlice = createSlice({
  name: 'accessories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAccessories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessory = action.payload;
      })
      .addCase(fetchAccessoriesById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessoryDetails = action.payload;
      })

      .addMatcher(isPending(fetchAccessories, fetchAccessoriesById), state => {
        state.isLoading = true;
        state.error = null;
      })

      .addMatcher(
        isRejected(fetchAccessories, fetchAccessoriesById),
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message || 'Something went wrong';
        },
      );
  },
});

export default accessoriesSlice;
