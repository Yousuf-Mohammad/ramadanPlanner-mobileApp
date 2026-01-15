import {configureStore} from '@reduxjs/toolkit';
// reducers
import arabicDateReducer from '../features/arabic-date/arabicDate';
import authTokenReducer, {
  setAuthToken,
} from '../features/authentication/authToken';
import salahInfoReducer from '../features/salah-checklist/salah-info';
// rtk-slices
import {authSlice} from '../features/authentication/auth-slice';
import {arabicDateSlice} from '../features/arabic-date/arabic-date-slice';
import {salahChecklistSlice} from '../features/salah-checklist/salah-checklist-slice';
import {recitationInfoSlice} from '../features/recitation-Info/recitation-info-slice';
import {dailyTodolistSlice} from '../features/daily-todolist/daily-todolist-slice';
import {duaSlice} from '../features/dua/dua-slice';
import {getCache} from '../../functions/Cache/cache';

export const store = configureStore({
  reducer: {
    // auth
    [authSlice.reducerPath]: authSlice.reducer,
    authToken: authTokenReducer,
    // hijri-date
    [arabicDateSlice.reducerPath]: arabicDateSlice.reducer,
    arabicDate: arabicDateReducer,
    // salah-checklist
    [salahChecklistSlice.reducerPath]: salahChecklistSlice.reducer,
    salahInfo: salahInfoReducer,
    // recitation-info
    [recitationInfoSlice.reducerPath]: recitationInfoSlice.reducer,
    // daily-todolist-slice
    [dailyTodolistSlice.reducerPath]: dailyTodolistSlice.reducer,
    // todo: check if this is correct
    // todolistInfo: todolistInfo,
    // dua-slice
    [duaSlice.reducerPath]: duaSlice.reducer,
  },
  // @ts-ignore
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authSlice.middleware,
    arabicDateSlice.middleware,
    salahChecklistSlice.middleware,
    recitationInfoSlice.middleware,
    dailyTodolistSlice.middleware,
    duaSlice.middleware,
  ],
});

export async function initializeAuth(): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const token = await getCache('authToken');

    if (token) {
      store.dispatch(setAuthToken(token));
    }

    return {success: true};
  } catch (error) {
    console.error('Failed to hydrate auth token: ', error);
    return {success: false, error: String(error)};
  }
}

// Export typed hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
