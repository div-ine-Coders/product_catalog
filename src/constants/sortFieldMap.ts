import { Product } from '@models/dto/Product';

export const sortFieldMap: Record<string, keyof Product> = {
  age: 'year',
  title: 'name',
  price: 'price',
};
