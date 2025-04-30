import { fetchTablets } from './AsyncThunk/tabletSliceAsyncThunk';
import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { TabletsStateType } from './TabletsStateType';
import { fetchTabletById } from './AsyncThunk/tabletDetailsAcyncThunk';

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
      .addCase(fetchTablets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tablets = action.payload;
      })
      .addCase(fetchTabletById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tabletDetails = action.payload;
      })

      .addMatcher(isPending(fetchTablets, fetchTabletById), state => {
        state.isLoading = true;
        state.error = null;
      })

      .addMatcher(
        isRejected(fetchTablets, fetchTabletById),
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message || 'Something went wrong';
        },
      );
  },
});

export default tabletsSlice;
