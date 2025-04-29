import { Product } from '@models/dto/Product';

export interface productsStateType {
  data: Product[];
  isLoading: boolean;
  error: string | null;
}
