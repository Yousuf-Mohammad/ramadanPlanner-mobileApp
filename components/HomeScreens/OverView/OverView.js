import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/colors/colors';
import {convert} from '../../../assets/dimensions/dimensions';
import BgBox from '../../HomeScreens/Quran/BgBox';
import ProgressComponent from './ProgressComponent';

const OverView = () => {
  return (
    <View style={styles.root}>
      <BgBox title={'Today'}>
        <ProgressComponent title={'Salah'} />
        <ProgressComponent title={'Quran'} />
        <ProgressComponent title={'Daily Target'} />
      </BgBox>
    </View>
  );
};

export default OverView;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingTop: convert(25),
    backgroundColor: colors.dark.PRIMARY,

    borderWidth: 1,
    borderColor: 'blue',
  },
});
