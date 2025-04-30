import { Accessory } from '@models/dto/Accessory';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAccessoriesById = createAsyncThunk(
  'products/accessories/details',
  async (id: string) => {
    const url = '/api/accessories.json';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch from ${url}`);
    }

    const data = (await response.json()) as Accessory[];

    return data.find(item => item.id === id);
  },
);
