import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "./cartApi";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cartApi.endpoints.getCart.matchFulfilled,
      (state, action) => {
        state.items = action.payload.items;
      }
    );
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
