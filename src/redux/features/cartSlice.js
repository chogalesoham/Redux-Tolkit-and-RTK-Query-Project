import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex !== -1) {
        state.cart.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, removeTocart } = cartSlice.actions;

export default cartSlice.reducer;
