import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "./cartApi";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  itemCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
      state.itemCount = 0;
    },
    setCartCount: (state, action) => {
      state.itemCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cartApi.endpoints.getCart.matchFulfilled,
      (state, action) => {
        state.items = action.payload.items;
        state.itemCount = action.payload.items.length;
      }
    );
  },
});

export const { clearCart, setCartCount } = cartSlice.actions;
export default cartSlice.reducer;
