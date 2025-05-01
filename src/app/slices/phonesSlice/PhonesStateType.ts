import { Product } from '@models/dto/Product';

export interface PhonesStateType {
  phones: Product[];
  isLoading: boolean;
  error: string | null;
}
