import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TP_BASE } from "../../constants";

export const cartApi = createApi({
  reducerPath: "cartApi",
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
    getCart: builder.query({
      query: () => "cart",
    }),
    addToCart: builder.mutation({
      query: (product) => ({
        url: "cart/add",
        method: "POST",
        body: product,
      }),
    }),
    removeFromCart: builder.mutation({
      query: (product) => ({
        url: "cart/remove",
        method: "POST",
        body: product,
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
} = cartApi;
