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
import SalahTimings from './SalahTimings';

const CustomHeader = () => {
  // todo:yousuf: set the new package for date and time
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
    try {
      if (isError) {
        // todo: handle error
        console.error('SCREEN:HEADER: error fetching arabic date: ', error);
        // return;
      }

      // console.log('date params: ', hijri);
      dispatch(setArabicDate(hijri));

      // console.log('hijri date type in reducer: ', typeof day.day);

      //* setting time -> iftar, seheri
      getSuntimings(setTime);
    } catch (issue) {
      console.log('SALAH TRACKER: CATCH error: ', issue);
    }
  }, [isLoading, outerData]);

  // todo: seheri, iftar time integrate & logic, err handling
  return (
    <View style={styles.root}>
      <View style={styles.timedate}>
        <DateCircle date={day} />

        <TopRightContainer sunrise={time.sunrise} sunset={time.sunset} />
      </View>

      <View style={styles.salahtime}>
        <SalahTimings />
        <SalahTimings />
        <SalahTimings />
        <SalahTimings />
        <SalahTimings />
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  root: {backgroundColor: 'white'},
  timedate: {
    height: convert(250),
    width: convert(1000),
    paddingVertical: convert(25),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.dark.WHITE,

    // borderWidth: 1,
    // borderColor: 'blue',
  },
  salahtime: {flexDirection: 'row', backgroundColor: 'transparent'},
});
