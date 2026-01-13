import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';
import {SalahCheckboxState} from '../../../libs/types/models/index';

interface SalahCheckbox {
  fardh_fajr: boolean;
  fardh_duhr: boolean;
  fardh_asr: boolean;
  fardh_maghrib: boolean;
  fardh_isha: boolean;
  sunnah_fajr: boolean;
  sunnah_duhr: boolean;
  sunnah_asr: boolean;
  sunnah_maghrib: boolean;
  sunnah_isha: boolean;
  sunnah_taraweeh: boolean;
  sunnah_tahajjud: boolean;
  sunnah_duha: boolean;
}

interface SalahInfoState {
  value: SalahCheckbox;
}

interface SetSalahInfoPayload {
  field: keyof SalahCheckbox;
  value: boolean;
}

const initialState: SalahInfoState = {
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
    setAllSalahInfo: (state, action: PayloadAction<SalahCheckboxState>) => {
      state.value = action.payload;
    },
    setSalahInfo: (state, action: PayloadAction<SetSalahInfoPayload>) => {
      const {field, value} = action.payload;

      const updatedState = {...state.value, [field]: value};

      return {...state, value: updatedState};
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

export const {setAllSalahInfo, setSalahInfo, resetSalahInfo} =
  salahInfoSlice.actions;

export const getSalahInfo = (state: RootState): SalahCheckbox => {
  //   console.log('salah-info-slice: get salah info: ', state.salahInfo);
  return state.salahInfo.value;
};

export default salahInfoSlice.reducer;
