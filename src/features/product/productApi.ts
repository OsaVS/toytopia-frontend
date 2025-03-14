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
      query: (formData) => ({
        url: "products",
        method: "POST",
        body: formData,
      }),
    }),
    updateProductImages: builder.mutation({
      query: ({ id, formData }) => ({
        url: `products/${id}/images`,
        method: "PATCH",
        body: formData,
      }),
    }),
    getAllProducts: builder.query({
      query: () => `products`,
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    getProductByCode: builder.query({
      query: (productCode) => `products/code/${productCode}`,
    }),
    getRandomProducts: builder.mutation({
      query: (amount) => ({
        url: "products/random",
        method: "POST",
        body: { amount },
      }),
    }),
    getProductsByCategoryAndPrice: builder.mutation({
      query: ({ category, priceRange }) => ({
        url: "products/category-price",
        method: "POST",
        body: { category, priceRange },
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: "products/${id}",
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useUpdateProductImagesMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductByCodeQuery,
  useGetRandomProductsMutation,
  useGetProductsByCategoryAndPriceMutation,
  useDeleteProductMutation
} = productApi;
