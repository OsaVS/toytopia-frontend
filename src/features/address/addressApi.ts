import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TP_BASE } from "../../constants";

export const addressApi = createApi({
  reducerPath: "addressApi",
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
    addAddress: builder.mutation({
      query: (formData) => ({
        url: "addresses",
        method: "POST",
        body: formData,
      }),
    }),
    getAddresses: builder.query({
      query: () => "addresses",
    }),
    deleteAddress: builder.mutation({
      query: (id) => ({
        url: `addresses/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddAddressMutation,
  useGetAddressesQuery,
  useDeleteAddressMutation,
} = addressApi;
