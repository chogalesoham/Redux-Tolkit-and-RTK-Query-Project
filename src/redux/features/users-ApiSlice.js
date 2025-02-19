import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApiSlice = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://post-management-system-mern-stack.onrender.com/api/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/post?page=1&limit=100`,
      providesTags: ["Post"],
    }),
    getSingleUser: builder.query({
      query: (id) => `post/${id}`,
    }),
    createNewUser: builder.mutation({
      query: (postData) => ({
        url: "/post",
        method: "POST",
        body: postData,
      }),
      invalidatesTags: ["Post"],
    }),
    updateNewUser: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/post/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Post"],
    }),
    deleteNewUser: builder.mutation({
      query: (id) => ({
        url: `/post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useCreateNewUserMutation,
  useUpdateNewUserMutation,
  useDeleteNewUserMutation,
} = usersApiSlice;
