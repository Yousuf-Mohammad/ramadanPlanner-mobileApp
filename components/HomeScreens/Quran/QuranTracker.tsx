import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
import LoginRequest from '../../../components/AuthScreens/LoginRequest';
import {getAuthToken} from '../../../redux-toolkit/features/authentication/authToken';
import QuranTemplate from './QuranTemplate';

const QuranTracker = () => {
  const day = useSelector(getArabicDate);
  const loggedIn = useSelector(getAuthToken);

  // todo:perf: memoize other components, so that useState doesn't affect them all
  const {data, isLoading} = useGetRecitationInfoQuery({
    year: day.year,
    month: day.monthNumber,
    day: day.day,
  });

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

  return (
    <>
      {!loggedIn ? <LoginRequest /> : null}

      <Text style={[styles.mainText]}>Select a target to get started!</Text>
      <QuranTemplate title="1 Ayat Per Day" />
      <QuranTemplate title="1 Surah Per Day" />

      {/* 1 ayat/day */}

      <QuranTrackerView data={data} />
    </>
  );
};

export default QuranTracker;

const styles = StyleSheet.create({
  loadingRoot: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  loadingTxt: {fontSize: FontSize.secondaryTitle, color: colors.dark.BLACK},
  mainText: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.CONTRAST,
  },
});
