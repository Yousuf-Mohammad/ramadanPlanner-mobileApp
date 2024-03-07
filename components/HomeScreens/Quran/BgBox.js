import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize} from '../../../assets/fonts/fonts';

import {colors} from '../../../assets/colors/colors';
import {convert} from '../../../assets/dimensions/dimensions';

const BgBox = ({title, children}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default BgBox;

const styles = StyleSheet.create({
  root: {
    height: convert(300),
    width: convert(900),
    borderRadius: convert(75),
    paddingTop: convert(35),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dark.PRIMARY,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  title: {
    color: colors.dark.WHITE,
    fontSize: FontSize.secondaryTitle,
    fontWeight: 'bold',
  },
  children: {
    // borderWidth: 1, borderColor: 'black'
  },
});
