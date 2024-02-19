import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize} from '../../../assets/dimensions/fonts';

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
    // flexDirection: 'row',
    alignItems: 'center',
    // height: convert(200),
    width: convert(900),
    padding: convert(25),
    borderRadius: convert(75),
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light.PRIMARY,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  title: {
    color: colors.light.WHITE,
    fontSize: FontSize.secondaryTitle,
    fontWeight: 'bold',
  },
  children: {
    // borderWidth: 1, borderColor: 'black'
  },
});
