/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
// import {Dialog} from '@rneui/themed';
// rtk-slices
import {useGetRecitationInfoQuery} from '../../../redux-toolkit/features/recitation-Info/recitation-info-slice';
// assets
import {colors} from '../../../assets/colors/colors';
import {FontSize} from '../../../assets/fonts/fonts';
// components
import QuranTrackerView from './QuranTrackerView';
import {getArabicDate} from '../../../redux-toolkit/features/arabic-date/arabicDate';
import {useSelector} from 'react-redux';

const QuranTracker = () => {
  const day = useSelector(getArabicDate);

  // todo:perf: memoize other components, so that useState doesn't affect them all
  const {
    data = {},
    error,
    isError,
    isLoading,
  } = useGetRecitationInfoQuery({
    year: parseInt(day.year, 10),
    month: parseInt(day.monthNumber, 10),
    day: parseInt(day.day, 10),
  });

  useEffect(() => {
    try {
      if (!isLoading && !(JSON.stringify(data) === '{}')) {
        if (isError) {
          console.error('SCREEN:QURAN: get recitation error: ', error);
        }

        // console.log('SCREEN:QURAN: get recitation data: ', data);
      }
    } catch (issue) {
      console.error('SCREEN:QURAN: get recitation error: ', issue);
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
      </View>
    );
  }

  return (
    <>
      <QuranTrackerView data={data} />
    </>
  );
};

export default QuranTracker;

const styles = StyleSheet.create({
  loading: {
    root: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    txt: {fontSize: FontSize.secondaryTitle, color: colors.light.BLACK},
  },
});
