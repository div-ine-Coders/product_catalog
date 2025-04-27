import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../slices/apiSlice';
import localStorageSlice from '../slices/localStoreSlice';
const store = configureStore({
  reducer: {
    localStorage: localStorageSlice,
    httpRequest: apiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
