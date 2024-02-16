/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {SCREEN_WIDTH, convert} from '../../assets/dimensions/dimensions';
import DateCircle from './DateCircle';

import {getArabicDate} from '../../redux-toolkit/features/arabic-date/arabicDate';

const CustomHeader = () => {
  const [date, setDate] = useState('');
  const day = useSelector(getArabicDate);

  useEffect(() => {
    setDate(day);
  }, []);

  return (
    <View style={styles.root}>
      {/* ramadan date circle component */}
      <DateCircle date={date} />

      <View style={styles.topBoxContainer}>
        {/* sahri ends component */}
        <View style={styles.topbox}>
          <Text style={styles.text}>seheri ends:</Text>
          <Text style={styles.text}>Iftar:</Text>
        </View>
        {/* todays task component */}
        <View style={styles.topbox}>
          <Text style={styles.text}>Today's task</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  root: {
    height: SCREEN_WIDTH / 4,
    width: SCREEN_WIDTH,
    paddingVertical: convert(25),
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  circle: {
    height: convert(150),
    width: convert(150),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: convert(75),
    borderWidth: 1,
    borderColor: 'red',
  },
  topBoxContainer: {
    borderWidth: 1,
    borderColor: 'blue',
    width: convert(500),
    height: convert(200),
    // paddingVertical: convert(10),
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  topbox: {
    borderWidth: 1,
    borderColor: 'red',
    height: convert(92.5),
  },
  text: {color: 'black'},
});
