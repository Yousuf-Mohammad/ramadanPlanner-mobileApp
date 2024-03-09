import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// assets
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/fonts/fonts';

const TopRightContainer = ({sunrise, sunset}) => {
  const seheriTime = sunrise
    ? {
        hours: sunrise.getHours() - 1,
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
    <View style={styles.root}>
      <View style={styles.topBoxContainer}>
        {/* sahri iftar component */}
        <View style={styles.topbox}>
          <Text style={styles.text}>
            seheri ends:
            <Text style={styles.time}>
              {' '}
              {seheriTime.hours}:{seheriTime.minutes}:{seheriTime.seconds}{' '}
              {' AM'}
            </Text>
          </Text>

          <View style={styles.iftar.container}>
            <Text style={styles.text}>
              Iftar:
              <Text style={styles.time}>
                {' '}
                {sunsetTime.hours}:{sunsetTime.minutes}:{sunsetTime.seconds}
                {' PM'}
              </Text>
            </Text>
          </View>
        </View>

        {/* todays task component */}
        {/* <View style={styles.topbox}>
          <Text style={styles.text}>Today's task</Text>
        </View> */}
      </View>

      <View style={styles.location.container}></View>
    </View>
  );
};

export default TopRightContainer;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',

    // borderWidth: 1,
    // borderColor: 'green',
  },
  topBoxContainer: {
    height: convert(200),
    justifyContent: 'center',

    // borderWidth: 1,
    // borderColor: 'blue',
  },
  topbox: {
    justifyContent: 'center',
    borderWidth: convert(5),
    // borderColor: colors.dark.BLACK,
    // borderTopColor: colors.dark.PRIMARY,
    // borderBottomColor: colors.dark.PRIMARY,
    // borderRightColor: colors.dark.WHITE,
    // borderLeftColor: colors.dark.WHITE,
    height: convert(92.5),
  },
  text: {color: colors.dark.BLACK, fontFamily: 'Montserrat-SemiBold'},
  time: {
    fontSize: FontSize.mgsBottom,
    fontWeight: 'bold',
    color: colors.dark.PRIMARY,
  },
  iftar: {
    container: {alignSelf: 'flex-end'},
  },
  location: {
    container: {
      height: convert(100),
      width: convert(200),

      borderWidth: 1,
      borderColor: 'red',
    },
  },
});
