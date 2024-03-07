import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
// components
import SalahTracker from './Salah/SalahTracker';
import BottomSlider from '../BottomSlider/BottomSlider';

const Salah = () => {
  useEffect(() => {
    console.log('SCREEN: SALAH: rendered!');
  }, []);

  return (
    <View style={styles.root}>
      <SalahTracker />

      <BottomSlider title={"Today's dua"} />
    </View>
  );
};

export default Salah;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderWidth: 1,
    // borderColor: 'red',
  },
});
