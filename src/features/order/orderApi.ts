import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TP_BASE } from "../../constants";

export const orderApi = createApi({
  reducerPath: "orderApi",
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
    getOrders: builder.query({
      query: () => "order",
    }),
    getOrderById: builder.query({
      query: (orderId) => `order/${orderId}`,
    }),
    addOrder: builder.mutation({
      query: (orderData) => ({
        url: "order",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const { useGetOrdersQuery, useGetOrderByIdQuery, useAddOrderMutation } =
  orderApi;
