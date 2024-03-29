/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// asstes
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
// functions
import {CURRENT_DATE} from '../../functions/InternationalDate/InternationalDate';
import {getSuntimings} from '../../functions/Astronomicaltime/astronomicaltime';
// rtk-slices
import {
  getArabicDate,
  setArabicDate,
} from '../../redux-toolkit/features/arabic-date/arabicDate';
import {useGetArabicDateQuery} from '../../redux-toolkit/features/arabic-date/arabic-date-slice';
// components
import DateCircle from './DateCircle';
import TopRightContainer from './TopRightContainer';

const CustomHeader = () => {
  const [time, setTime] = useState({sunrise: '', sunset: ''});
  // todo: date coming directly, check if this is okay
  // const [date, setDate] = useState('');
  const day = useSelector(getArabicDate);
  const dispatch = useDispatch();

  //* getting arabic date
  const {
    data: outerData = {},
    isError,
    error,
    isLoading,
  } = useGetArabicDateQuery(CURRENT_DATE);
  // todo: call once and calculate whole month -> dates and timings
  const {hijri = ''} = outerData?.data ?? {};

  useEffect(() => {
    if (isError) {
      // todo: handle error
      console.error('SCREEN:LOGIN: error fetching arabic date: ', error);
      // return;
    }

    // setting the date -> redux
    dispatch(setArabicDate(hijri));

    // setting the date -> header
    // setDate(day);

    // setting time -> iftar, seheri
    getSuntimings(setTime);
  }, [isLoading, outerData]);

  // todo: seheri, iftar time integrate & logic, err handling
  return (
    <View style={styles.root}>
      <DateCircle date={day} />

      <TopRightContainer sunrise={time.sunrise} sunset={time.sunset} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  root: {
    height: convert(250),
    width: convert(1000),
    paddingVertical: convert(25),
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.light.WHITE,
  },
});
