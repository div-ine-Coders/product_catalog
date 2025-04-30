import { Product } from '@models/dto/Product';
import { Tablet } from '@models/dto/Tablet';

export interface TabletsStateType {
  tablets: Product[];
  isLoading: boolean;
  error: string | null;
  tabletDetails?: Tablet;
}
