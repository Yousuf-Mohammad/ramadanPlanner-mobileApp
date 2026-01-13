import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface ArabicDateResponse {
  data: {
    hijri: {
      day: string;
      month: {
        number: number;
        en: string;
        ar: string;
      };
      year: string;
    };
  };
}

export const arabicDateSlice = createApi({
  // todo: env <= url
  reducerPath: 'arabicDateApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.aladhan.com/v1/gToH',
  }),
  endpoints: builder => {
    return {
      getArabicDate: builder.query<ArabicDateResponse, string>({
        query: date => `/${date}`,
      }),
    };
  },
});

export const {useGetArabicDateQuery} = arabicDateSlice;
