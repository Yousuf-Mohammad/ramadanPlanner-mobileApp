/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import {Button} from 'react-native-elements';
// functions
import {digitValidation} from '../../functions/validation';
// assets
import {SCREEN_HEIGHT, convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/fonts/fonts';
import {surahInfo} from '../../assets/constants/surahInfo';
// components
import BottomSlider from '../BottomSlider/BottomSlider';
import BgBox from './Quran/BgBox';
import RegularTarget from './Quran/RegularTarget';
import LastRead from './Quran/LastRead';
import CompletedToday from './Quran/CompletedToday';
// rtk-slices
import {
  useGetRecitationInfoQuery,
  useSetRecitationInfoMutation,
} from '../../redux-toolkit/features/recitation-Info/recitation-info-slice';
import QuranTracker from './Quran/QuranTracker';
// import {getAuthToken} from '../../redux-toolkit/features/authentication/authToken';

const Quran = () => {
  return (
    <View style={styles.root}>
      <QuranTracker />

      <BottomSlider title={"Today's dua"} />
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
