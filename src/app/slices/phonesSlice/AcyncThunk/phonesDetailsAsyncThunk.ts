import { Phone } from '@models/dto/Phone';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPhoneById = createAsyncThunk(
  'products/phones/details',
  async (id: string) => {
    const url = '/api/phones.json';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch from ${url}`);
    }

    const data = (await response.json()) as Phone[];

    return data.find(item => item.id === id);
  },
);
