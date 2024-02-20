import React from 'react';
import {StyleSheet, View} from 'react-native';
// components
import BottomSlider from '../BottomSlider/BottomSlider';
import BgBox from './Quran/BgBox';
import RegularTarget from './Quran/RegularTarget';
import LastRead from './Quran/LastRead';
import CompletedToday from './Quran/CompletedToday';

// todo: input validation
const Quran = () => {
  return (
    <View style={styles.root}>
      <BgBox title={'Regular Target'}>
        <RegularTarget placeholder={'ayat/page/para'} />
      </BgBox>

      <BgBox title={'Last Read'}>
        <LastRead placeholder={'Surah'} />
      </BgBox>

      <BgBox title={'Completed today'}>
        <CompletedToday placeholder={'ayat/page/para'} />
      </BgBox>

      <BottomSlider title={"Today's dua"} />
    </View>
  );
};

export default Quran;

const styles = StyleSheet.create({
  root: {flex: 1, alignItems: 'center', justifyContent: 'space-around'},
  bottomSlider: {
    // position: 'absolute', bottom: 0,
  },
});
