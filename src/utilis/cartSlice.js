import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push({
        ...action.payload,
        quantity: action.payload.quantity || 1,
      });
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
    increment: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});
export const {
  addItems,
  removeItems,
  clearItems,
  increment,
  decrement,
  incrementByAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
