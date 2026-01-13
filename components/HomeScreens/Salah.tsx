import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
// components
import SalahTracker from './Salah/SalahTracker';
import BottomSlider from '../BottomSlider/BottomSlider';
import {colors} from '../../assets/colors/colors';
import {convert} from '../../assets/dimensions/dimensions';

const Salah = () => {
  return (
    <ScrollView
      style={styles.rootStyle}
      contentContainerStyle={styles.rootContentContainerStyle}
      showsVerticalScrollIndicator={false}>
      <>
        <SalahTracker />

        <BottomSlider title={"Today's dua"} />
      </>
    </ScrollView>
  );
};

export default Salah;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    height: convert(300),
    backgroundColor: colors.dark.PRIMARY,
    // marginHorizontal: convert(25),
  },
  rootContentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderWidth: 1,
    // borderColor: 'red',
  },
});
