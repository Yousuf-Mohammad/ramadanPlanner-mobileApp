import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';
import {RootState} from '../../store/store';
import {SalahCheckboxState} from '../../../libs/types/models';

interface SetSalahCheckListRequest {
  field: string;
  value: boolean;
  year: string;
  month: string;
  day: string;
}

interface GetSalahCheckListRequest {
  year: string;
  month: string;
  day: string;
}

export const salahChecklistSlice = createApi({
  reducerPath: 'salah-checklist-slice',
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
      setSalahCheckList: builder.mutation<any, SetSalahCheckListRequest>({
        query: ({field, value, year, month, day}) => ({
          url: `/api/checklists/salah/${field}/${value}`,
          method: 'PATCH',
          params: {
            year: year,
            month: month,
            day: day,
          },
        }),
      }),
      getSalahCheckList: builder.query<
        SalahCheckboxState,
        GetSalahCheckListRequest
      >({
        //* hijri
        query: ({year, month, day}) => {
          return {
            url: '/api/checklists/salah',
            params: {
              year: year,
              month: month,
              day: day,
            },
          };
        },
      }),
    };
  },
});

export const {useGetSalahCheckListQuery, useSetSalahCheckListMutation} =
  salahChecklistSlice;
