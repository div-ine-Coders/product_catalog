import { configureStore } from '@reduxjs/toolkit';
import productsSlice from 'app/slices/productsSlice/productsSlice';

const store = configureStore({
  reducer: {
    // localStorage: localStorage,
    productCatalog: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
