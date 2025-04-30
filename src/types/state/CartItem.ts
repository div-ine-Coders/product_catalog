import { Product } from '../dto/Product';

export interface CartItem {
  id: number;
  quantity: number;
  product: Product;
}
