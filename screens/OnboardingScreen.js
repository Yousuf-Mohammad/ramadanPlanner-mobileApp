import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {APP_NAME, salam, welcome} from '../assets/texts/staticText';
import {colors} from '../assets/colors/colors';
import {FontSize} from '../assets/fonts/fonts';
import {convert} from '../assets/dimensions/dimensions';

const OnboardingScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.salam.root}>
        <Text style={styles.welcome.txt}>{salam}</Text>
      </View>

      <View style={styles.welcome.root}>
        <Text style={styles.welcome.txt}>{welcome}</Text>
        <Text style={styles.name}>{APP_NAME}</Text>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 10,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: colors.dark.PRIMARY,
    flexDirection: 'column',
  },
  salam: {
    root: {
      flex: 2,
      marginTop: convert(150),
    },
  },
  welcome: {
    root: {
      flex: 8,
      alignItems: 'center',
      justifyContent: 'center',
      width: convert(1000),
      //   borderWidth: 1,
      //   borderColor: 'red',
    },
    txt: {
      color: colors.dark.CONTRAST,
      fontFamily: 'Montserrat-SemiBold',
      fontSize: FontSize.medium,
    },
  },
  name: {
    color: colors.dark.ACCENT,
    fontFamily: 'NovaMono-Regular',
    fontSize: convert(80),
  },
});
