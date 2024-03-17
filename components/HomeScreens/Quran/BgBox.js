import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize} from '../../../assets/fonts/fonts';

import {colors} from '../../../assets/colors/colors';
import {convert} from '../../../assets/dimensions/dimensions';

const BgBox = ({title, children}) => {
  return (
    <View style={styles.root}>
      <View style={styles.title.bg}>
        <Text style={styles.title.txt}>{title}</Text>
      </View>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default BgBox;

const styles = StyleSheet.create({
  root: {
    // height: convert(300),
    width: convert(935),
    marginTop: convert(41),
    paddingTop: convert(35),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.dark.CONTRAST,

    borderWidth: convert(5),
    borderRadius: convert(25),
    borderColor: colors.dark.CONTRAST,
  },
  title: {
    bg: {
      paddingHorizontal: convert(50),
      backgroundColor: colors.dark.PRIMARY,
      position: 'absolute',
      top: -12,
      alignItems: 'center',
    },
    txt: {
      fontFamily: 'Montserrat-SemiBold',
      color: colors.dark.CONTRAST,

      // fontSize: FontSize.secondaryTitle,
      // fontWeight: 'bold',
    },
  },
  children: {
    // borderWidth: 1, borderColor: 'black'
  },
});
