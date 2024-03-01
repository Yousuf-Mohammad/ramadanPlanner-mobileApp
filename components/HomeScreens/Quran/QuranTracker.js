/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// rtk-slices
import {useGetRecitationInfoQuery} from '../../../redux-toolkit/features/recitation-Info/recitation-info-slice';
// assets
import {colors} from '../../../assets/colors/colors';
import {FontSize} from '../../../assets/fonts/fonts';
// components
import QuranTrackerView from './QuranTrackerView';

const QuranTracker = () => {
  // todo:perf: memoize other components, so that useState doesn't affect them all
  const {data = {}, error, isError, isLoading} = useGetRecitationInfoQuery();
  useEffect(() => {
    try {
      if (isError) {
        console.error('SCREEN:QURAN: get recitation error: ', error);
      }

      if (!isLoading) {
        // console.log('SCREEN:QURAN: get recitation data: ', data);
      }
    } catch (issue) {
      console.error('SCREEN:QURAN: get recitation error: ', issue);
    }
  }, [isLoading, isError]);

  if (isLoading) {
    return (
      <View style={styles.loading.root}>
        <Text style={styles.loading.txt}>Loading...</Text>
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
