import { Tablet } from '@models/dto/Tablet';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTabletById = createAsyncThunk(
  'products/tablet/details',
  async (id: string) => {
    const url = '/api/tablets.json';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch from ${url}`);
    }

    const data = (await response.json()) as Tablet[];

    return data.find(item => item.id === id);
  },
);
