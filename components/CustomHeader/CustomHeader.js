/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {convert} from '../../assets/dimensions/dimensions';

// rtk-slices
import {getArabicDate} from '../../redux-toolkit/features/arabic-date/arabicDate';

// components
import DateCircle from './DateCircle';

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
    height: convert(250),
    width: convert(1000),
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
    justifyContent: 'space-between',
  },
  topbox: {
    borderWidth: 1,
    borderColor: 'red',
    height: convert(92.5),
  },
  text: {color: 'black'},
});
