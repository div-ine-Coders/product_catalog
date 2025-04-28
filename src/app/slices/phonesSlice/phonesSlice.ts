import { fetchPhones } from './phonesSliceAsyncThunk';
import { createProductsSlice } from '../utils/createProductsSlice';

const phonesSlice = createProductsSlice({
  name: 'phonesSlice',
  fetchThunk: fetchPhones,
});

export default phonesSlice.reducer;
