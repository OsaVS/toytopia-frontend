import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TP_BASE } from "../../constants";

export const userApi = createApi({
  reducerPath: "userApi",
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
    fetchUserById: builder.query({
      query: (id) => `user/${id}`,
    }),
    fetchUser: builder.query({
      query: () => `user/profile`,
    }),
    updateUser: builder.mutation({
      query: (userData) => ({
        url: "user/update",
        method: "PUT",
        body: userData,
      }),
    }),
    changePassword: builder.mutation({
      query: (passwordData) => ({
        url: "user/change-password",
        method: "PUT",
        body: passwordData,
      }),
    }),
  }),
});

export const {
  useFetchUserByIdQuery,
  useFetchUserQuery,
  useUpdateUserMutation,
  useChangePasswordMutation,
} = userApi;
