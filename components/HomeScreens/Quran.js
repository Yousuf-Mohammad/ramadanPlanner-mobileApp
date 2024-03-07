import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
// components
import QuranTracker from './Quran/QuranTracker';

import {useSelector} from 'react-redux';
import {getAuthToken} from '../../redux-toolkit/features/authentication/authToken';

const Quran = () => {
  useEffect(() => {
    console.log('SCREEN: QURAN: rendered!');
  }, []);

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
