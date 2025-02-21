import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TP_BASE } from "../../constants";

export const wishlistApi = createApi({
  reducerPath: "wishlistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: TP_BASE,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWishlist: builder.query({
      query: () => "wishlist",
    }),
    addToWishlist: builder.mutation({
      query: (productId) => ({
        url: "wishlist/add",
        method: "POST",
        body: { productId },
      }),
    }),
    removeFromWishlist: builder.mutation({
      query: (productId) => ({
        url: "wishlist/remove",
        method: "POST",
        body: { productId },
      }),
    }),
  }),
});

export const {
  useGetWishlistQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} = wishlistApi;
