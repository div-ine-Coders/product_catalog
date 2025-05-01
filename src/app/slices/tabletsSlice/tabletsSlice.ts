import { fetchTablets } from './tabletSliceAsyncThunk';
import { createSlice } from '@reduxjs/toolkit';
import { TabletsStateType } from './TabletsStateType';

const initialState: TabletsStateType = {
  tablets: [],
  isLoading: false,
  error: null,
};

const tabletsSlice = createSlice({
  name: 'tablets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTablets.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTablets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(fetchTablets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tablets = action.payload;
      });
  },
});

export default tabletsSlice;
