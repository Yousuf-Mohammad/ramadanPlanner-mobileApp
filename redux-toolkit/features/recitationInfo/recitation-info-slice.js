import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';

export const recitationInfoSlice = createApi({
  reducerPath: 'recitation-info-slice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, {getState}) => {
      const authToken = getState().authToken.value;
      headers.set('Authorization', 'Bearer ' + authToken);

      // console.log('RECITATION INFO SLICE: headers: ', headers);

      return headers;
    },
  }),
  endpoints: builder => {
    return {
      setRecitationInfo: builder.mutation({
        query: data => ({
          url: '/api/checklists/quran',
          method: 'PATCH',
          body: data,
        }),
      }),
      getRecitationInfo: builder.query({
        query: () => '/api/checklists/quran',
      }),
    };
  },
});

export const {useSetRecitationInfoMutation, useGetRecitationInfoQuery} =
  recitationInfoSlice;
