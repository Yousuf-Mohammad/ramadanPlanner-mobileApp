import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';
import {RootState} from '../../store/store';
import {Task} from '../../../libs/types/models';

interface DateParams {
  year: string;
  month: string;
  day: string;
}

interface GetTodosResponse {
  items: Task[];
}

interface AddTodoRequest {
  value: string;
  year: string;
  month: string;
  day: string;
}

interface UpdateTodoRequest {
  id: string;
  value: boolean;
  year: string;
  month: string;
  day: string;
}

export const dailyTodolistSlice = createApi({
  reducerPath: 'daily-todolist-slice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, {getState}) => {
      const authToken = (getState() as RootState).authToken.token;
      headers.set('authorization', `Bearer ${authToken}`);

      return headers;
    },
  }),
  endpoints: builder => {
    return {
      getTodos: builder.query<GetTodosResponse, DateParams>({
        query: ({year, month, day}) => ({
          url: '/api/checklists/activities',
          params: {
            year: year,
            month: month,
            day: day,
          },
        }),
      }),
      addTodo: builder.mutation<any, AddTodoRequest>({
        query: ({value, year, month, day}) => ({
          url: '/api/checklists/activities',
          params: {
            year: year,
            month: month,
            day: day,
          },
          method: 'POST',
          body: {custom_name: value},
        }),
      }),
      updateTodo: builder.mutation<any, UpdateTodoRequest>({
        query: ({id, value, year, month, day}) => ({
          url: `/api/checklists/activities/${id}/${value}`,
          params: {
            year: year,
            month: month,
            day: day,
          },
          method: 'PATCH',
        }),
      }),
    };
  },
});

export const {useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation} =
  dailyTodolistSlice;
