import { ProductCategories } from '@constants/ProductsCategories';
import { Product } from '@models/Product';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPaginationParams } from 'app/slices/utils/getPagiantionParams';

export const fetchPhones = createAsyncThunk('products/phones', async () => {
  const url = '/api/products.json';
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch from ${url}`);
  }

  const data = (await response.json()) as Product[];

  const phones = data.filter(
    item => item.category === ProductCategories.PHONES,
  );

  const { page, perPage } = getPaginationParams();

  if (perPage !== null) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return phones.slice(startIndex, endIndex);
  }

  return phones;
});
