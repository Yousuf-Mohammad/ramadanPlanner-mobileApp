/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

// rtk-slices
import {useGetArabicDateQuery} from '../redux-toolkit/features/arabic-date/arabic-date-slice';
import {setArabicDate} from '../redux-toolkit/features/arabic-date/arabicDate';

// components
import AuthenticationForm from '../components/AuthScreens/AuthenticationForm';

import {CURRENT_DATE} from '../functions/InternationalDate/InternationalDate';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  //* getting arabic date
  const {
    data: outerData = {},
    isError,
    error,
    isLoading,
  } = useGetArabicDateQuery(CURRENT_DATE);
  const {hijri = ''} = outerData?.data ?? {};

  useEffect(() => {
    if (isError) {
      // todo: handle error
      console.log('SCREEN:LOGIN: error fetching arabic date: ', error);
    }
  }, [outerData, isError, isLoading]);

  const onSubmit = () => {
    // console.log('SCREEN:LOGIN: the date is called here: ', hijri);
    dispatch(setArabicDate(hijri));

    // todo: auth logic!
    navigation.navigate('Home');
  };

  const navHandler = () => {
    navigation.navigate('Register');
  };

  return (
    <AuthenticationForm
      title={'Login'}
      btnTitle={'Log in'}
      onSubmit={onSubmit}
      navHandler={navHandler}
    />
  );
};

export default Login;
