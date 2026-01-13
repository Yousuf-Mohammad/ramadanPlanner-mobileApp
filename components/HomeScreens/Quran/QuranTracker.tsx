/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';
// rtk-slices
import {useGetRecitationInfoQuery} from '../../../redux-toolkit/features/recitation-Info/recitation-info-slice';
// assets
import {colors} from '../../../assets/colors/colors';
import {FontSize} from '../../../assets/fonts/fonts';
// components
import QuranTrackerView from './QuranTrackerView';
import {getArabicDate} from '../../../redux-toolkit/features/arabic-date/arabicDate';

const QuranTracker = () => {
  const day = useSelector(getArabicDate);

  // todo:perf: memoize other components, so that useState doesn't affect them all
  const {data, isError, isLoading} = useGetRecitationInfoQuery({
    year: day.year,
    month: day.monthNumber,
    day: day.day,
  });

  useEffect(() => {
    // if (isError) {
    //   console.error('SCREEN:QURAN: get recitation error: ', error);
    //   console.error('SCREEN:QURAN: get recitation error: ', error.data);
    // }

    if (!isLoading && data) {
    }
  }, [isLoading, isError]);

  if (isLoading) {
    return (
      <View style={styles.loadingRoot}>
        <ActivityIndicator
          animating={true}
          color={colors.dark.CONTRAST}
          size={'large'}
        />
      </View>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <QuranTrackerView data={data} />
    </>
  );
};

export default QuranTracker;

const styles = StyleSheet.create({
  loadingRoot: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  loadingTxt: {fontSize: FontSize.secondaryTitle, color: colors.dark.BLACK},
});
