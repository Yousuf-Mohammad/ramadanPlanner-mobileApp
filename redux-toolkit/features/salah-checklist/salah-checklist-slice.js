import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';

export const salahChecklistSlice = createApi({
  reducerPath: 'salah-checklist-slice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, {getState}) => {
      const authToken = getState().authToken.value;

      //* EXPECTED FORMAT
      //* {"authorization": `Bearer ${authToken}`}
      headers.set('authorization', `Bearer ${authToken}`);

      console.log('SALAH SLICE: headers: ', authToken);

      return headers;
    },
  }),
  endpoints: builder => {
    return {
      setSalahCheckList: builder.mutation({
        // console.log('inside the fcking slice: ', typeof year);
        // return;
        query: ({field, value, year, month, day}) => ({
          url: `/api/checklists/salah/${field}/${value}?`,
          method: 'PATCH',

          // params: {
          //   year: year,
          //   month: month,
          //   day: day,
          // },

          params: {
            year: 1445,
            month: 8,
            day: 20,
          },

          // params: {
          //   year: parseInt(year, 10),
          //   month: parseInt(month, 10),
          //   day: parseInt(day, 10),
          // },
        }),
      }),
      getSalahCheckList: builder.query({
        //* hijri
        query: ({year, month, day}) => ({
          url: '/api/checklists/salah',
          // url: `/api/checklists/quran?year=${parseInt(
          //   year,
          //   10,
          // )}&month=${parseInt(month, 10)}&day=${parseInt(day, 10)}`,

          // params: {
          //   year: parseInt(year, 10),
          //   month: parseInt(month, 10),
          //   day: parseInt(day, 10),
          // },

          params: {
            year: 1445,
            month: 8,
            day: 20,
          },

          // params: {
          //   year: year,
          //   month: month,
          //   day: day,
          // },
        }),
      }),
    };
  },
});

export const {useGetSalahCheckListQuery, useSetSalahCheckListMutation} =
  salahChecklistSlice;
