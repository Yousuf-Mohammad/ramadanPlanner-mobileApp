import {configureStore} from '@reduxjs/toolkit';
// reducers
import arabicDate from '../features/arabic-date/arabicDate';
// rtk-slices
import {arabicDateSlice} from '../features/arabic-date/arabic-date-slice';
import {authSlice} from '../features/authentication/auth-slice';

export const store = configureStore({
  reducer: {
    // data
    arabicDate: arabicDate,
    [arabicDateSlice.reducerPath]: arabicDateSlice.reducer,

    // auth
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: getDefaultMiddhleware => [
    ...getDefaultMiddhleware(),
    arabicDateSlice.middleware,
    authSlice.middleware,
  ],
});
