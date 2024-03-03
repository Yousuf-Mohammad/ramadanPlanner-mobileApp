/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  // ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
// rtk-slices
import {useGetSalahCheckListQuery} from '../../../redux-toolkit/features/salah-checklist/salah-checklist-slice';
// assets
import {FontSize} from '../../../assets/fonts/fonts';
import {colors} from '../../../assets/colors/colors';
// components
import SalahTrackerView from './SalahTrackerView';
import {getArabicDate} from '../../../redux-toolkit/features/arabic-date/arabicDate';
import {useSelector} from 'react-redux';
import {getAuthToken} from '../../../redux-toolkit/features/authentication/authToken';

// todo: optimize the rendering, try a different appraoch to this useState solution
const SalahTracker = () => {
  const day = useSelector(getArabicDate);
  // const token = useSelector(getAuthToken);
  const {
    data = {},
    error,
    isError,
    isLoading,
  } = useGetSalahCheckListQuery({
    year: day.day,
    month: day.month,
    day: day.year,
  });

  useEffect(() => {
    try {
      if (isError) {
        console.error('SCREEN:SALAH: get salah checklist error: ', error.data);
      }

      if (!isLoading) {
        // console.log('SCREEN:SALAH: get salah checklist data: ', data);
      }
    } catch (issue) {
      console.error("SCREEN:SALAH: 'CATCH' salah checklist error: ", issue);
    }
  }, [isLoading, isError]);

  if (isLoading) {
    return (
      <View style={styles.loading.root}>
        <ActivityIndicator
          animating={true}
          color={colors.light.PRIMARY}
          size={'large'}
        />
        {/* <Text style={{color: 'black'}}>{token}</Text> */}
      </View>
    );
  }

  if (!isError) {
    return (
      <>
        <SalahTrackerView data={data} />
      </>
    );
  }
};

export default SalahTracker;

const styles = StyleSheet.create({
  loading: {
    root: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    txt: {fontSize: FontSize.secondaryTitle, color: colors.light.BLACK},
  },
});
