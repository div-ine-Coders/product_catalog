import { configureStore } from '@reduxjs/toolkit';
import accessoriesSlice from 'app/slices/accessoriesSlice/accessoriesSlice';
import phonesSlice from 'app/slices/phonesSlice/phonesSlice';
import tabletsSlice from 'app/slices/tabletsSlice/tabletsSlice';

const store = configureStore({
  reducer: {
    phones: phonesSlice,
    tablets: tabletsSlice,
    accessories: accessoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
