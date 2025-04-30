import { Product } from '@models/dto/Product';
import { CartItem } from '@models/state/CartItem';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItemStateType {
  cardItems: CartItem[];
}

const initialState: CartItemStateType = {
  cardItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Product>) => {
      const temp = state.cardItems.find(item => item.id === action.payload.id);

      if (temp) {
        temp.quantity++;

        return;
      }

      state.cardItems.push({
        id: action.payload.id,
        product: action.payload,
        quantity: 1,
      });
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.cardItems = state.cardItems.filter(
        item => item.id !== action.payload,
      );
    },

    setCarts: (state, action: PayloadAction<CartItem[]>) => {
      state.cardItems = action.payload;
    },

    clearCarts: state => {
      state.cardItems = [];
    },
  },
});

export const { addCart, clearCarts, removeCart, setCarts } = cartSlice.actions;
export default cartSlice;
