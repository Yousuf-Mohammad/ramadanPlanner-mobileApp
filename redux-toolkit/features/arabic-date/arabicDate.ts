import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';

interface ArabicDateValue {
  day: string;
  month: string;
  monthNumber: string;
  year: string;
}

interface ArabicDateSliceState {
  value: ArabicDateValue;
}

const initialState: ArabicDateSliceState = {
  value: {
    day: '',
    month: '',
    monthNumber: '',
    year: '',
  },
};

export const arabicDateSlice = createSlice({
  name: 'arabicDate',
  initialState: initialState,
  reducers: {
    setArabicDate: (state, action: PayloadAction<Partial<ArabicDateValue>>) => {
      state.value.day = action.payload?.day || '';
      // state.value.month = action.payload?.month?.en;
      state.value.month = action.payload?.month || '';
      state.value.monthNumber = action.payload?.monthNumber || '';
      state.value.year = action.payload?.year || '';
    },
  },
});

export const {setArabicDate} = arabicDateSlice.actions;

export const getArabicDate = (state: RootState): ArabicDateValue => {
  return state.arabicDate.value;
};

export default arabicDateSlice.reducer;
