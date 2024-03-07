import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// assets
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/fonts/fonts';

const TopRightContainer = ({sunrise, sunset}) => {
  const sunriseTime = sunrise
    ? {
        hours: sunrise.getHours(),
        minutes: sunrise.getMinutes(),
        seconds: sunrise.getSeconds(),
      }
    : {
        hours: '',
        minutes: '',
        seconds: '',
      };

  const sunsetTime = sunset
    ? {
        hours: sunset.getHours() - 12,
        minutes: sunset.getMinutes(),
        seconds: sunset.getSeconds(),
      }
    : {
        hours: '',
        minutes: '',
        seconds: '',
      };

  return (
    <View style={styles.topBoxContainer}>
      {/* sahri iftar component */}
      <View style={{...styles.topbox, borderBottomColor: colors.dark.WHITE}}>
        <Text style={styles.text}>
          seheri ends:
          <Text style={styles.time}>
            {' '}
            {sunriseTime.hours}:{sunriseTime.minutes}:{sunriseTime.seconds}
          </Text>
        </Text>

        <Text style={styles.text}>
          Iftar:
          <Text style={styles.time}>
            {' '}
            {sunsetTime.hours}:{sunsetTime.minutes}:{sunsetTime.seconds}
          </Text>
        </Text>
      </View>

      {/* todays task component */}
      <View style={styles.topbox}>
        <Text style={styles.text}>Today's task</Text>
      </View>
    </View>
  );
};

export default TopRightContainer;

const styles = StyleSheet.create({
  root: {},
  topBoxContainer: {
    // borderWidth: 1,
    // borderColor: 'blue',
    width: convert(500),
    height: convert(200),
    justifyContent: 'space-between',
  },
  topbox: {
    justifyContent: 'center',
    borderWidth: convert(5),
    // borderColor: colors.dark.PRIMARY,
    borderTopColor: colors.dark.PRIMARY,
    borderBottomColor: colors.dark.PRIMARY,
    borderRightColor: colors.dark.WHITE,
    borderLeftColor: colors.dark.WHITE,
    height: convert(92.5),
  },
  text: {color: colors.dark.BLACK},
  time: {
    fontSize: FontSize.mgsBottom,
    fontWeight: 'bold',
    color: colors.dark.PRIMARY,
  },
});
