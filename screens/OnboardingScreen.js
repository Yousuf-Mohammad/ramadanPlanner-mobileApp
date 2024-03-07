import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {salam} from '../assets/texts/staticText';
import {colors} from '../assets/colors/colors';

const OnboardingScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.salam}>{salam}</Text>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  salam: {color: colors.dark.CONTRAST, fontFamily: 'Montserrat-SemiBold'},
});
