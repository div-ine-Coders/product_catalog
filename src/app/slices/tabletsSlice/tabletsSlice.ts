import { fetchTablets } from './tabletSliceAsyncThunk';
import { createProductsSlice } from '../utils/createProductsSlice';

const tabletsSlice = createProductsSlice({
  name: 'tabletsSlice',
  fetchThunk: fetchTablets,
});

export default tabletsSlice.reducer;
