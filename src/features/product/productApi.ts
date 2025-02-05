import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TP_BASE } from "../../constants";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${TP_BASE}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (product) => ({
        url: "products",
        method: "POST",
        body: product,
      }),
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    getRandomProducts: builder.mutation({
      query: (amount) => ({
        url: "products/random",
        method: "POST",
        body: { amount },
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductByIdQuery,
  useGetRandomProductsMutation,
} = productApi;
