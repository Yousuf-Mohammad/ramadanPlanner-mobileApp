import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';

export const authRegisterSlice = createApi({
  // todo: env <= url
  reducerPath: 'auth-register-slice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: builder => {
    return {
      registration: builder.mutation({
        query: data => ({
          url: '/api/auth/register',
          method: 'POST',
          body: data,
        }),
      }),
    };
  },
});

export const {useRegistrationMutation} = authRegisterSlice;
