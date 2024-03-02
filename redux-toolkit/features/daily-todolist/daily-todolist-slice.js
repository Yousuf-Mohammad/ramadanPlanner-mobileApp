import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';

export const dailyTodolistSlice = createApi({
  reducerPath: 'daily-todolist-slice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, {getState}) => {
      const authToken = getState().authToken.value;

      //* EXPECTED FORMAT
      //* {"authorization": `Bearer ${authToken}`}
      headers.set('authorization', `Bearer ${authToken}`);

      // console.log('RECITATION INFO SLICE: headers: ', headers);

      return headers;
    },
  }),
  endpoints: builder => {
    return {
      //   addTodo: builder.mutation({
      //     query: ({field, value}) => ({
      //       url: `/api/checklists/salah/${field}/${value}`,
      //       method: 'PATCH',
      //     }),
      //   }),
      getTodos: builder.query({
        query: () => '/api/checklists/activities',
      }),
      //   updateTodo: builder.mutation({
      //     query: ({field, value}) => ({
      //       url: `/api/checklists/salah/${field}/${value}`,
      //       method: 'PATCH',
      //     }),
      //   }),
    };
  },
});

export const {useGetTodosQuery} = dailyTodolistSlice;
