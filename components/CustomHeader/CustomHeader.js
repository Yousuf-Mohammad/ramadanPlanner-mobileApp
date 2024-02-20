/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
// asstes
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
// functions
import {getSuntimings} from '../../functions/Astronomicaltime/astronomicaltime';
// rtk-slices
import {getArabicDate} from '../../redux-toolkit/features/arabic-date/arabicDate';
// components
import DateCircle from './DateCircle';
import TopRightContainer from './TopRightContainer';

const CustomHeader = () => {
  const [time, setTime] = useState({sunrise: '', sunset: ''});
  useEffect(() => {
    (async () => {
      await getSuntimings(setTime);
    })();
  }, []);

  const [date, setDate] = useState('');
  const day = useSelector(getArabicDate);
  // console.log('SCREEN:CUSTOM HEADER: TIME: ', time);

  useEffect(() => {
    setDate(day);
  }, []);

  // todo: seheri, iftar time integrate & logic, err handling
  return (
    <View style={styles.root}>
      <DateCircle date={date} />

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
