import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";
import { userApi } from "../features/user/userApi";
import authReducer from "../features/auth/authSlice";
import { productApi } from "../features/product/productApi";
import { cartApi } from "../features/cart/cartApi";
import cartReducer from "../features/cart/cartSlice";
import { wishlistApi } from "../features/wishList/wishlistApi";
import { reviewApi } from "../features/review/reviewApi";
import { addressApi } from "../features/address/addressApi";
import { orderApi } from "../features/order/orderApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [wishlistApi.reducerPath]: wishlistApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      productApi.middleware,
      cartApi.middleware,
      wishlistApi.middleware,
      reviewApi.middleware,
      addressApi.middleware,
      orderApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
