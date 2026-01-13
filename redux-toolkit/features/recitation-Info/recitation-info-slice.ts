import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';
import {RootState} from '../../store/store';
import {RecitationInfo} from '../../../libs/types/models';

interface DateParams {
  year: string;
  month: string;
  day: string;
}

interface SetRecitationInfoRequest {
  data: Partial<RecitationInfo>;
  year: string;
  month: string;
  day: string;
}

export const recitationInfoSlice = createApi({
  reducerPath: 'recitation-info-slice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, {getState}) => {
      const authToken = (getState() as RootState).authToken.token;

      //* EXPECTED FORMAT
      //* {"authorization": `Bearer ${authToken}`}
      headers.set('authorization', `Bearer ${authToken}`);

      // console.log('RECITATION INFO SLICE: headers: ', headers);

      return headers;
    },
  }),
  endpoints: builder => {
    return {
      setRecitationInfo: builder.mutation<any, SetRecitationInfoRequest>({
        query: ({data, year, month, day}) => ({
          url: '/api/checklists/quran',
          params: {
            year: year,
            month: month,
            day: day,
          },
          method: 'PATCH',
          body: data,
        }),
      }),
      getRecitationInfo: builder.query<RecitationInfo, DateParams>({
        query: ({year, month, day}) => ({
          url: '/api/checklists/quran',
          params: {
            year: year,
            month: month,
            day: day,
          },
        }),
      }),
    };
  },
});

export const {useSetRecitationInfoMutation, useGetRecitationInfoQuery} =
  recitationInfoSlice;
