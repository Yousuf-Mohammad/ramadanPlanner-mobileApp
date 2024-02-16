/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {useGetArabicDateQuery} from '../redux-toolkit/features/arabic-date/arabic-date-slice';
import {setArabicDate} from '../redux-toolkit/features/arabic-date/arabicDate';

import AuthenticationForm from '../components/AuthScreens/AuthenticationForm';

import {CURRENT_DATE} from '../components/InternationalDate/InternationalDate';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const {data, isError, error, isLoading} = useGetArabicDateQuery(CURRENT_DATE);

  useEffect(() => {
    if (isError) {
      // handle error
      console.log('SCREEN:LOGIN: error fetching arabic date: ', error);
    } else if (isLoading) {
      // handle loading
      console.log('still loading');
    }
  }, [data, isError, isLoading]);

  const onSubmit = () => {
    // auth logic!
    dispatch(setArabicDate(data.data.hijri));
    navigation.navigate('Home');
  };

  return (
    <AuthenticationForm
      title={'Login'}
      btnTitle={'Log in'}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
