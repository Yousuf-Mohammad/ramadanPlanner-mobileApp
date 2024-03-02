import {configureStore} from '@reduxjs/toolkit';
// reducers
import arabicDate from '../features/arabic-date/arabicDate';
import authTokenReducer from '../features/authentication/authToken';
// rtk-slices
import {arabicDateSlice} from '../features/arabic-date/arabic-date-slice';
import {authSlice} from '../features/authentication/auth-slice';
import {recitationInfoSlice} from '../features/recitation-Info/recitation-info-slice';
import {salahChecklistSlice} from '../features/salah-checklist/salah-checklist-slice';
import {dailyTodolistSlice} from '../features/daily-todolist/daily-todolist-slice';

export const store = configureStore({
  reducer: {
    // auth
    [authSlice.reducerPath]: authSlice.reducer,
    authToken: authTokenReducer,
    // hijri-date
    arabicDate: arabicDate,
    [arabicDateSlice.reducerPath]: arabicDateSlice.reducer,
    // recitation-info
    [recitationInfoSlice.reducerPath]: recitationInfoSlice.reducer,
    // salah-checklist
    [salahChecklistSlice.reducerPath]: salahChecklistSlice.reducer,
    // daily-todolist-slice
    [dailyTodolistSlice.reducerPath]: dailyTodolistSlice.reducer,
  },
  middleware: getDefaultMiddhleware => [
    ...getDefaultMiddhleware(),
    arabicDateSlice.middleware,
    authSlice.middleware,
    recitationInfoSlice.middleware,
    salahChecklistSlice.middleware,
    dailyTodolistSlice.middleware,
  ],
});
