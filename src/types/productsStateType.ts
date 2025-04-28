import { Product } from '@models/Product';

export interface productsStateType {
  data: Product[];
  isLoading: boolean;
  error: string | null;
}
