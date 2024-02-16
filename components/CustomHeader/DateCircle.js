import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {convert} from '../../assets/dimensions/dimensions';

const DateCircle = date => {
  return (
    <View style={styles.circle}>
      <Text style={styles.dateTxt}>{date.date.day}</Text>
      <Text style={styles.text}>{date.date.month}</Text>
    </View>
  );
};

export default DateCircle;

const styles = StyleSheet.create({
  circle: {
    height: convert(200),
    width: convert(200),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: convert(100),
    borderWidth: 1,
    borderColor: 'red',
  },
  text: {color: 'black'},
  dateTxt: {color: 'black', fontSize: convert(80), fontWeight: 'bold'},
});
