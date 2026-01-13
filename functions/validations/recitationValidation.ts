// assets
import {surahInfo} from '../../assets/constants/surahInfo';
import {digitValidation} from './formValidation';

import {RecitationInfo} from '../../libs/types/models';

export const handleRegularTargetErr = (input: Partial<RecitationInfo>) => {
  if (input.unit === '' || input.unit === null || input.unit === undefined) {
    return false;
  }

  if (input.target_value === null || input.target_value === undefined) {
    return false;
  }

  if (!digitValidation(input.target_value.toString())) {
    return false;
  }

  if (input.unit === 'Ayat' && input.target_value > 286) {
    return false;
  }

  if (input.unit === 'Para' && input.target_value > 30) {
    return false;
  }

  return true;
};

export const handleLastReadErr = (input: Partial<RecitationInfo>) => {
  if (
    input.last_read_surah === null ||
    input.last_read_surah === undefined ||
    isNaN(Number(input.last_read_surah))
  ) {
    return false;
  }

  if (
    input.last_read_value === null ||
    input.last_read_value === undefined ||
    isNaN(Number(input.last_read_value))
  ) {
    return false;
  }

  let numOfAyats: number | null = null;

  surahInfo.map((i, idx) => {
    if (input.last_read_surah === idx + 1) {
      numOfAyats = i.ayats;
    }
  });

  if (numOfAyats && Number(input.last_read_value) > numOfAyats) {
    //   console.log('last read surah: ', lastread.unit, ' ayat: ', numOfAyats);
    return false;
  }

  return true;
};

export const handleSetTodayErr = (input: Partial<RecitationInfo>) => {
  if (input.unit === '' || input.unit === null || input.unit === undefined) {
    return false;
  }

  if (input.completed_value === null || input.completed_value === undefined) {
    return false;
  }

  if (!digitValidation(input.completed_value.toString())) {
    return false;
  }

  if (input.unit === 'Ayat' && input.completed_value > 286) {
    return false;
  }
  if (input.unit === 'Para' && input.completed_value > 30) {
    return false;
  }

  return true;
};

export const inputError = (
  input: Partial<RecitationInfo>,
  handleError: (msg: string) => void,
) => {
  if (!handleRegularTargetErr(input)) {
    handleError('Invalid input in Regular Target Module');
    return true;
  }

  if (!handleLastReadErr(input)) {
    handleError('Invalid input in Last Read Module');
    return true;
  }

  if (!handleSetTodayErr(input)) {
    handleError('Invalid input in Comppleted Today Module');
    return true;
  }

  return false;
};
