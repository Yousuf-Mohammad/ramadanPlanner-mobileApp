import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
// components
import QuranTracker from './Quran/QuranTracker';
import BottomSlider from '../BottomSlider/BottomSlider';
// assets
import {colors} from '../../assets/colors/colors';

const Quran: React.FC = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.rootContentContainerStyle}
      style={styles.rootStyle}
      showsVerticalScrollIndicator={false}>
      <QuranTracker />

      <BottomSlider title={"Today's dua"} />
    </ScrollView>
  );
};

export default Quran;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    backgroundColor: colors.dark.PRIMARY,
  },
  rootContentContainerStyle: {
    alignItems: 'center',
  },
});
