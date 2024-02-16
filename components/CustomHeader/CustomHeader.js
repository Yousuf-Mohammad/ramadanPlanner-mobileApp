/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import {convert} from '../../assets/dimensions/dimensions';

// rtk-slices
import {getArabicDate} from '../../redux-toolkit/features/arabic-date/arabicDate';

// components
import DateCircle from './DateCircle';
import {colors} from '../../assets/colors/colors';
import TopRightContainer from './TopRightContainer';

const CustomHeader = () => {
  const [date, setDate] = useState('');
  const day = useSelector(getArabicDate);

  useEffect(() => {
    setDate(day);
  }, []);

  // todo: seheri, iftar time integrate & logic, err handling
  return (
    <View style={styles.root}>
      <DateCircle date={date} />

      <TopRightContainer />
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
