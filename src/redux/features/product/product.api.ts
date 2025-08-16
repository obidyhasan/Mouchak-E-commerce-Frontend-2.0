import { baseApi } from "@/redux/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (productInfo) => ({
        url: "/product/create",
        method: "POST",
        data: productInfo,
      }),
    }),

    getProduct: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
      providesTags: ["PRODUCT"],
      transformResponse: (response) => response.data.data,
    }),
  }),
});

export const { useAddProductMutation, useGetProductQuery } = productApi;
