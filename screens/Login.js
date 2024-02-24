/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
// components
import AuthenticationForm from '../components/AuthScreens/AuthenticationForm';
// assets, functions
import {emailValidation, passwordValidation} from '../functions/validation';

const Login = ({navigation}) => {
  const [err, setErr] = useState('');

  const validation = input => {
    // password validation
    if (!passwordValidation(input.password)) {
      // console.log('here');
      setErr('Please enter valid email and password');
      return false;
    }

    // email validation
    if (!emailValidation(input.email)) {
      // console.log('over here');
      setErr('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const onSubmit = input => {
    // console.log('screen: login: input ->', input);

    // handle wrong input
    if (!validation(input)) {
      //! todo: uncomment!
      // return;
    } else {
      setErr('');
    }

    // todo: set to asyncStorage -> clear cache logic on login/out, appstate change

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
