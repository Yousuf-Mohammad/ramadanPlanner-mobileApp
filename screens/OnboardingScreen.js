/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
// assets
import {APP_NAME, salam, welcome} from '../assets/texts/staticText';
import {colors} from '../assets/colors/colors';
import {FontSize} from '../assets/fonts/fonts';
import {
  SCREEN_HEIGHT,
  convert,
  convertH,
} from '../assets/dimensions/dimensions';

const OnboardingScreen = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.salam.root}>
        <Text style={styles.welcome.txt}>{salam}</Text>
      </View>

      <View style={styles.welcome.container}>
        <Text style={styles.welcome.txt}>{welcome}</Text>
        <Image
          source={require('../assets/images/tazkiah-logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.name}>{APP_NAME}</Text>
      </View>

      <View style={styles.mosque.container}>
        <Image
          source={require('../assets/images/mosque.png')}
          resizeMode="contain"
          style={styles.mosque.img}
        />
      </View>
    </ScrollView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 6,
    alignItems: 'center',
    backgroundColor: colors.dark.PRIMARY,
    flexDirection: 'column',
  },
  salam: {
    root: {
      flex: 1,
      marginTop: convert(150),
      marginBottom: SCREEN_HEIGHT < 890 ? convertH(50) : convertH(150),
    },
  },
  welcome: {
    container: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      width: convert(1000),
      // borderWidth: 1,
      // borderColor: 'red',
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
    fontSize: convert(70),
  },
  logo: {
    marginVertical: convert(35),
    height: convert(200),
    width: convert(600),
  },
  mosque: {
    container: {flex: 3},
    img: {
      height: convert(900),
      width: convert(1100),
    },
  },
});
