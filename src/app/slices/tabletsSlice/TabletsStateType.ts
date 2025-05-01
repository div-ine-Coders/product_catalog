import { Product } from '@models/dto/Product';

export interface TabletsStateType {
  tablets: Product[];
  isLoading: boolean;
  error: string | null;
}
