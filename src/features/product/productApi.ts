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
        url: "product",
        method: "POST",
        body: product,
      }),
    }),
    getProductById: builder.query({
      query: (id) => `product/${id}`,
    }),
  }),
});

export const { useAddProductMutation, useGetProductByIdQuery } = productApi;
