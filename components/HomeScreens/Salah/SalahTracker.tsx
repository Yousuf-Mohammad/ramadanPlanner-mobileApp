/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
// components
import SalahTrackerView from './SalahTrackerView';
// rtk-slices
import {getArabicDate} from '../../../redux-toolkit/features/arabic-date/arabicDate';
import {useGetSalahCheckListQuery} from '../../../redux-toolkit/features/salah-checklist/salah-checklist-slice';
import {setAllSalahInfo} from '../../../redux-toolkit/features/salah-checklist/salah-info';
// assets
import {FontSize} from '../../../assets/fonts/fonts';
import {colors} from '../../../assets/colors/colors';
import LoginRequest from '../../AuthScreens/LoginRequest';
import {getAuthToken} from '../../../redux-toolkit/features/authentication/authToken';
import {Toast} from 'toastify-react-native';

const SalahTracker = () => {
  const dispatch = useDispatch();
  const day = useSelector(getArabicDate);
  let loggedIn = useSelector(getAuthToken);

  const {data, isError, isLoading} = useGetSalahCheckListQuery({
    year: day.year,
    month: day.monthNumber,
    day: day.day,
  });

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setAllSalahInfo(data));
    }
  }, [isLoading, isError, data]);

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
      <Button
        title="Show Error Toast"
        onPress={() => {
          Toast.show({
            type: 'success',
            text1: 'Main message',
            text2: 'Secondary message',
            position: 'top',
            visibilityTime: 4000,
            autoHide: true,
            backgroundColor: colors.dark.PRIMARY,
            textColor: colors.dark.WHITE,
            progressBarColor: 'red',
            iconFamily: 'Entypo',
            iconColor: 'red',
            icon: 'circle-with-cross',
            // onPress: () => console.log('Toast pressed'),
            // onShow: () => console.log('Toast shown'),
            // onHide: () => console.log('Toast hidden'),
          });
        }}
      />
      <SalahTrackerView data={data} />
    </>
  );
};

export default SalahTracker;

const styles = StyleSheet.create({
  loadingRoot: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  loadingTxt: {fontSize: FontSize.secondaryTitle, color: colors.dark.BLACK},
});
