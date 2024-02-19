import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {convert} from '../../assets/dimensions/dimensions';
import SalahTracker from './Salah/SalahTracker';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/dimensions/fonts';
import BottomSlider from '../BottomSlider/BottomSlider';

const Salah = () => {
  // todo: optimize the checkboxes
  return (
    <View style={styles.root}>
      <SalahTracker />

      <BottomSlider />
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
});
