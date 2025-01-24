import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TP_BASE } from "../../constants";
import { RootState } from "../../app/store";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: TP_BASE,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = localStorage.getItem("token");
      console.log("grd", token);
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
  }),
});

export const { useFetchUserByIdQuery, useFetchUserQuery } = userApi;
