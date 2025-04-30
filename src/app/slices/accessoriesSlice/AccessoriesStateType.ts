import { Accessory } from '@models/dto/Accessory';
import { Product } from '@models/dto/Product';

export interface AccessoryStateType {
  accessory: Product[];
  isLoading: boolean;
  error: string | null;
  accessoryDetails?: Accessory;
}
