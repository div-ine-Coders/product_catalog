import { Phone } from '@models/dto/Phone';
import { Product } from '@models/dto/Product';

export interface PhonesStateType {
  phones: Product[];
  isLoading: boolean;
  error: string | null;
  phoneDetails?: Phone;
}
