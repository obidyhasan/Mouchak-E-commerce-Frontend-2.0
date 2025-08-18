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
    updateOrder: builder.mutation({
      query: ({ updateInfo, id }) => ({
        url: `/order/${id}`,
        method: "PATCH",
        data: updateInfo,
      }),
    }),

    getOrders: builder.query({
      query: () => ({
        url: "/order/me",
        method: "GET",
      }),
      providesTags: ["ORDER"],
    }),

    getAllOrders: builder.query({
      query: () => ({
        url: "/order",
        method: "GET",
      }),
      providesTags: ["ORDER"],
      transformResponse: (response) => response.data.data,
    }),
  }),
});

export const {
  useAddOrderMutation,
  useGetOrdersQuery,
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
} = orderApi;
