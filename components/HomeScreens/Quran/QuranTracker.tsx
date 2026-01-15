import React, {useEffect, useState} from 'react';
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
import LoginRequest from '../../../components/AuthScreens/LoginRequest';
import {isAuthenticated} from '../../../functions/AuthFunctions';

const QuranTracker = () => {
  const day = useSelector(getArabicDate);

  // todo:perf: memoize other components, so that useState doesn't affect them all
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const {data, isLoading} = useGetRecitationInfoQuery({
    year: day.year,
    month: day.monthNumber,
    day: day.day,
  });

  useEffect(() => {
    async function check() {
      const user = await isAuthenticated();
      setLoggedIn(user);
    }

    check();
  }, [loggedIn]);

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
      <QuranTrackerView data={data} />
    </>
  );
};

export default QuranTracker;

const styles = StyleSheet.create({
  loadingRoot: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  loadingTxt: {fontSize: FontSize.secondaryTitle, color: colors.dark.BLACK},
});
