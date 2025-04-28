import { ProductCategories } from '@constants/ProductsCategories';
import { Product } from '@models/Product';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPaginationParams } from 'app/slices/utils/getPagiantionParams';

export const fetchAccessories = createAsyncThunk(
  'product/accessories',
  async () => {
    const response = await fetch('/api/products.json');

    if (!response.ok) {
      throw new Error(`Failed to fetch accessories`);
    }

    const data = (await response.json()) as Product[];

    const accessories = data.filter(
      item => item.category === ProductCategories.ACCESSORIES,
    );

    const { page, perPage } = getPaginationParams();

    if (perPage !== null) {
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;

      return accessories.slice(startIndex, endIndex);
    }

    return accessories;
  },
);
