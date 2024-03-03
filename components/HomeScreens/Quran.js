import React from 'react';
import {StyleSheet, View} from 'react-native';
// components
import QuranTracker from './Quran/QuranTracker';

const Quran = () => {
  return (
    <View style={styles.root}>
      <QuranTracker />
    </View>
  );
};

export default Quran;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderWidth: 1,
    // borderColor: 'red',
  },
});
