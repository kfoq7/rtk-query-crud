import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000'
  }),
  endpoints: builder => ({
    getTasks: builder.query({
      query: () => '/tasks',
      providesTags: ['Tasks'],
      transformResponse: response => response.sort((a, b) => b.id - a.id)
    }),
    createTaks: builder.mutation({
      query: newTask => ({
        url: '/tasks',
        method: 'POST',
        body: newTask
      }),
      invalidatesTags: ['Tasks']
    }),
    updateTask: builder.mutation({
      query: updatedTask => ({
        url: `/tasks/${updatedTask.id``}`,
        method: 'PATCH',
        body: updatedTask
      }),
      invalidatesTags: ['Tasks']
    }),
    deleteTask: builder.mutation({
      query: id => ({
        url: `/tasks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Tasks']
    })
  })
})

export const {
  useGetTasksQuery,
  useCreateTaksMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = apiSlice
