import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TP_BASE } from "../../constants";

export const reviewApi = createApi({
    reducerPath: "reviewApi",
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
        addReview: builder.mutation({
            query: (formData) => ({
                url: "reviews",
                method: "POST",
                body: formData,
            }),
        }),
        getReviewsByProductId: builder.query({
            query: (productId) => `reviews/${productId}`,
        }),
        deleteReview: builder.mutation({
            query: (id) => ({
                url: `reviews/${id}`,
                method: "DELETE",
            })
        }),
    })
});

export const {
    useAddReviewMutation,
    useGetReviewsByProductIdQuery,
    useDeleteReviewMutation,
} = reviewApi;