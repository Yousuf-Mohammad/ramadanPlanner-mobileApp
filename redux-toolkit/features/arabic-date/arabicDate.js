import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {
    day: '',
    month: '',
  },
};

export const arabicDateSlice = createSlice({
  name: 'arabicDate',
  initialState: initialState,
  reducers: {
    setArabicDate: (state, action) => {
      state.value.day = action.payload.day;
      state.value.month = action.payload.month.en;
    },
  },
});

export const {setArabicDate} = arabicDateSlice.actions;

export const getArabicDate = state => {
  return state.arabicDate.value;
};

export default arabicDateSlice.reducer;
