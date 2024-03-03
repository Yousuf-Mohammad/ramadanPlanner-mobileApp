// assets
import {surahInfo} from '../../assets/constants/surahInfo';
import {digitValidation} from './formValidation';

export const handleRegularTargetErr = input => {
  if (input.unit === '') {
    return false;
  }

  if (input.unit === null) {
    return false;
  }

  if (input.target_value === '') {
    return false;
  }

  if (input.target_value === null) {
    return false;
  }

  if (!digitValidation(input.target_value)) {
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

export const handleLastReadErr = input => {
  if (input.last_read_surah === '') {
    return false;
  }

  if (input.last_read_surah === null) {
    return false;
  }

  if (isNaN(input.last_read_surah)) {
    return false;
  }

  if (input.last_read_value === '') {
    return false;
  }

  if (input.last_read_value === null) {
    return false;
  }

  if (isNaN(input.last_read_value)) {
    return false;
  }

  let numOfAyats = null;

  surahInfo.map((i, idx) => {
    if (input.last_read_surah === idx + 1) {
      numOfAyats = i.ayats;
    }
  });

  if (parseInt(input.last_read_value, 10) > numOfAyats) {
    //   console.log('last read surah: ', lastread.unit, ' ayat: ', numOfAyats);
    return false;
  }

  return true;
};

export const handleSetTodayErr = input => {
  if (input.unit === '') {
    return false;
  }

  if (input.unit === null) {
    return false;
  }

  if (input.completed_value === '') {
    return false;
  }

  if (input.completed_value === null) {
    return false;
  }

  if (!digitValidation(input.completed_value)) {
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

export const inputError = (input, handleError) => {
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
