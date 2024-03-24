import React from 'react';
import {StyleSheet, View} from 'react-native';
// components
import BgBox from '../../HomeScreens/Quran/BgBox';
import ProgressComponent from './ProgressComponent';
// assets
import {colors} from '../../../assets/colors/colors';
import {convert} from '../../../assets/dimensions/dimensions';

const OverView = () => {
  return (
    <View style={styles.root}>
      <BgBox title={'Today'}>
        <ProgressComponent title={'Salah'} totalTasks={5} completedTasks={2} />

        <ProgressComponent
          title={'Quran'}
          totalTasks={15}
          completedTasks={14}
        />

        <ProgressComponent
          title={'Daily Target'}
          totalTasks={5}
          completedTasks={1}
        />
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

    // borderWidth: 1,
    // borderColor: 'blue',
  },
});
