import { createSlice } from '@reduxjs/toolkit';
import { fetchAccessories } from './accessoriesSliceAsyncThunk';
import { AccessoryStateType } from './AccessoriesStateType';

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
      .addCase(fetchAccessories.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAccessories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(fetchAccessories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessory = action.payload;
      });
  },
});

export default accessoriesSlice;
