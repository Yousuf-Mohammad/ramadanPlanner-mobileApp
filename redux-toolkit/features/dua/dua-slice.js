import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {API_URL} from '@env';
const API_URL = 'https://www.hisnmuslim.com/api/en';

export const duaSlice = createApi({
  reducerPath: 'dua-slice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    // prepareHeaders: (headers, {getState}) => {
    //   const authToken = getState().authToken.value;

    //   //* EXPECTED FORMAT
    //   //* {"authorization": `Bearer ${authToken}`}
    //   headers.set('authorization', `Bearer ${authToken}`);

    //   // console.log('SALAH SLICE: headers: ', authToken);

    //   return headers;
    // },
  }),
  endpoints: builder => {
    return {
      getDua: builder.query({
        query: duaNumber => ({
          url: `/${duaNumber}.json`,
        }),
      }),
      //   getSalahCheckList: builder.query({
      //     //* hijri
      //     query: ({year, month, day}) => {
      //       return {
      //         url: '/api/checklists/salah',
      //         params: {
      //           year: year,
      //           month: month,
      //           day: day,
      //         },
      //       };
      //     },
      //   }),
    };
  },
});

export const {useGetDuaQuery} = duaSlice;
