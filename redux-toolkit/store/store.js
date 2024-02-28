import {configureStore} from '@reduxjs/toolkit';
// reducers
import arabicDate from '../features/arabic-date/arabicDate';
import authTokenReducer from '../features/authentication/authToken';
// rtk-slices
import {arabicDateSlice} from '../features/arabic-date/arabic-date-slice';
import {authSlice} from '../features/authentication/auth-slice';
import {recitationInfoSlice} from '../features/recitationInfo/recitation-info-slice';

export const store = configureStore({
  reducer: {
    // auth
    [authSlice.reducerPath]: authSlice.reducer,
    authToken: authTokenReducer,
    // data
    arabicDate: arabicDate,
    [arabicDateSlice.reducerPath]: arabicDateSlice.reducer,
    // recitation-info
    [recitationInfoSlice.reducerPath]: recitationInfoSlice.reducer,
  },
  middleware: getDefaultMiddhleware => [
    ...getDefaultMiddhleware(),
    arabicDateSlice.middleware,
    authSlice.middleware,
    recitationInfoSlice.middleware,
  ],
});
