import { baseApi } from "@/redux/baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/order/create",
        method: "POST",
        data: orderInfo,
      }),
    }),

    getOrders: builder.query({
      query: () => ({
        url: "/order/me",
        method: "GET",
      }),
      providesTags: ["ORDER"],
    }),
  }),
});

export const { useAddOrderMutation, useGetOrdersQuery } = orderApi;
