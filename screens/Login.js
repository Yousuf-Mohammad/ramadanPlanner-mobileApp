/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

// rtk-slices
import {useGetArabicDateQuery} from '../redux-toolkit/features/arabic-date/arabic-date-slice';
import {setArabicDate} from '../redux-toolkit/features/arabic-date/arabicDate';

// components
import AuthenticationForm from '../components/AuthScreens/AuthenticationForm';

import {CURRENT_DATE} from '../functions/InternationalDate/InternationalDate';
import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from '../functions/validation';

const Login = ({navigation}) => {
  const [err, setErr] = useState('');
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

  const validation = input => {
    // password validation
    if (!passwordValidation(input.password)) {
      console.log('here');
      setErr('Please enter valid email and password');
      return false;
    }

    // email validation
    if (!emailValidation(input.email)) {
      console.log('over here');
      setErr('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const onSubmit = input => {
    // console.log('screen: login: input ->', input);

    // handle wrong input
    if (!validation(input)) {
      // return;
    }

    // todo: auth logic!
    dispatch(setArabicDate(hijri));

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
      err={err}
    />
  );
};

export default Login;
