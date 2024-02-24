import {configureStore} from '@reduxjs/toolkit';

import {arabicDateSlice} from '../features/arabic-date/arabic-date-slice';
import arabicDate from '../features/arabic-date/arabicDate';
import {authRegisterSlice} from '../features/authentication/auth-register-slice';

export const store = configureStore({
  reducer: {
    // data
    arabicDate: arabicDate,
    [arabicDateSlice.reducerPath]: arabicDateSlice.reducer,

    // auth
    [authRegisterSlice.reducerPath]: authRegisterSlice.reducer,
  },
  middleware: getDefaultMiddhleware => [
    ...getDefaultMiddhleware(),
    arabicDateSlice.middleware,
    authRegisterSlice.middleware,
  ],
});
