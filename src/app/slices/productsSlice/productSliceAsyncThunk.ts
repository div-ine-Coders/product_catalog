import { Product } from '@models/Product';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk('api/fetchProduct', async () => {
  const url = '/api/products.json';
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch from ${url}`);
  }

  const data = await response.json();

  return data as Product[];
});
