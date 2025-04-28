import { fetchAccessories } from './accessoriesSliceAsyncThunk';
import { createProductsSlice } from '../utils/createProductsSlice';

const accessoriesSlice = createProductsSlice({
  name: 'accessoriesSlice',
  fetchThunk: fetchAccessories,
});

export default accessoriesSlice.reducer;
