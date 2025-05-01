import { Product } from '@models/dto/Product';

export interface AccessoryStateType {
  accessory: Product[];
  isLoading: boolean;
  error: string | null;
}
