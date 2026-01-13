import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';
import {AuthTokenState} from '../../../libs/types/redux';

const initialState: AuthTokenState = {
  token: null,
};

export const authTokenSlice = createSlice({
  name: 'authToken',
  initialState: initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    resetToken: state => {
      state.token = null;
    },
  },
});

export const {setAuthToken, resetToken} = authTokenSlice.actions;

export const getAuthToken = (state: RootState): string | null => {
  // console.log('auth-token-slice: getAuthToken: ', state.authToken.token);
  return state.authToken.token;
};

export default authTokenSlice.reducer;
