import { Product } from '@models/dto/Product';

export interface ProductsStateType {
  data: Product[];
  isLoading: boolean;
  error: string | null;
}
