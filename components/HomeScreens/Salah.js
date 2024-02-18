import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {convert} from '../../assets/dimensions/dimensions';
import SalahTracker from './Salah/SalahTracker';
import {colors} from '../../assets/colors/colors';

const Salah = () => {
  return (
    <View style={styles.root}>
      <SalahTracker />

      <View style={styles.bottom}>
        <Text style={{color: colors.light.BLACK}}>TODAY'S DUA</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'red',
  },
});
