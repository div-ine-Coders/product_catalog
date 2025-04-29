import { paginationParams } from '@models/common/paginationParams';
import { searchParamsStateType } from '@models/state/searchParamsStateType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: searchParamsStateType = {
  query: null,
  sort: null,
  pagination: null,
};

export const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState: initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setPagination(state, action: PayloadAction<paginationParams>) {
      state.pagination = action.payload;
    },
    setParams(state, action: PayloadAction<Partial<searchParamsStateType>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setQuery, setSort, setPagination, setParams } =
  searchParamsSlice.actions;
export default searchParamsSlice;
