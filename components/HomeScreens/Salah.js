import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {convert} from '../../assets/dimensions/dimensions';
import SalahTracker from './Salah/SalahTracker';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/dimensions/fonts';

const Salah = () => {
  // todo: optimize the checkboxes
  return (
    <View style={styles.root}>
      <SalahTracker />

      <View style={styles.bottom}>
        <Text style={styles.dua}>TODAY'S DUA</Text>
      </View>
    </View>
  );
};

export default Salah;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  bottom: {
    width: convert(1000),
    height: convert(400),
    borderRadius: convert(75),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: colors.light.PRIMARY,
  },
  dua: {color: colors.light.BLACK, fontSize: convert(100)},
});
