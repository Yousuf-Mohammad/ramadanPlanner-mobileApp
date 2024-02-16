import {configureStore} from '@reduxjs/toolkit';

import {arabicDateSlice} from '../features/arabic-date/arabic-date-slice';
import arabicDate from '../features/arabic-date/arabicDate';

export const store = configureStore({
  reducer: {
    // useInfo: userInfoReducer,
    arabicDate: arabicDate,
    [arabicDateSlice.reducerPath]: arabicDateSlice.reducer,
  },
  middleware: getDefaultMiddhleware => [
    ...getDefaultMiddhleware(),
    arabicDateSlice.middleware,
  ],
});
