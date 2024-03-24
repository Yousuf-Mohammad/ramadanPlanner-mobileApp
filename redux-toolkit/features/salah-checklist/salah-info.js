import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {
    fardh_fajr: false,
    fardh_duhr: false,
    fardh_asr: false,
    fardh_maghrib: false,
    fardh_isha: false,
    sunnah_fajr: false,
    sunnah_duhr: false,
    sunnah_asr: false,
    sunnah_maghrib: false,
    sunnah_isha: false,
    sunnah_taraweeh: false,
    sunnah_tahajjud: false,
    sunnah_duha: false,
  },
};

export const salahInfoSlice = createSlice({
  name: 'salahInfoSlice',
  initialState: initialState,
  reducers: {
    setSalahInfo: (state, action) => {
      // set salah info on login, salah checkbox checked/uncheked, salah info reset
      state.value = action.payload;
    },
    resetSalahInfo: state => {
      state.value = {
        fardh_fajr: false,
        fardh_duhr: false,
        fardh_asr: false,
        fardh_maghrib: false,
        fardh_isha: false,
        sunnah_fajr: false,
        sunnah_duhr: false,
        sunnah_asr: false,
        sunnah_maghrib: false,
        sunnah_isha: false,
        sunnah_taraweeh: false,
        sunnah_tahajjud: false,
        sunnah_duha: false,
      };
    },
  },
});

export const {setSalahInfo, resetSalahInfo} = salahInfoSlice.actions;

export const getSalahInfo = state => {
  //   console.log('salah-info-slice: get salah info: ', state.salahInfo);
  return state.salahInfo.value;
};

export default salahInfoSlice.reducer;
