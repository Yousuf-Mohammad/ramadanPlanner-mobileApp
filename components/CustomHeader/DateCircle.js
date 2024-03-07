import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/fonts/fonts';

const DateCircle = ({date}) => {
  return (
    <View style={styles.circle}>
      <View style={styles.circleInner}>
        <Text style={styles.dateTxt}>{date.day}</Text>
        <Text style={styles.text}>{date.month}</Text>
      </View>
    </View>
  );
};

export default DateCircle;

const styles = StyleSheet.create({
  circle: {
    height: convert(220),
    width: convert(220),
    borderRadius: convert(110),
    borderWidth: convert(10),
    borderColor: colors.dark.PRIMARY,
  },
  circleInner: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: convert(200),
    width: convert(200),
    borderRadius: convert(100),
    borderWidth: convert(10),
    borderColor: colors.dark.ACCENT,
  },
  text: {color: colors.dark.BLACK},
  dateTxt: {
    color: colors.dark.BLACK,
    fontSize: FontSize.dateTxt,
    fontWeight: 'bold',
  },
});
