import React, {useState} from 'react';
// components
import AuthenticationForm from '../components/AuthScreens/AuthenticationForm';
// rtk-slices
import {useRegistrationMutation} from '../redux-toolkit/features/authentication/auth-slice';
// functions
import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from '../functions/validation';

const Register = ({navigation}) => {
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [registration] = useRegistrationMutation();

  const loadingHandler = () => {
    setLoading(prev => !prev);
  };

  // todo1: pass match validation
  // todo: pref: 1. useMemo, useCallback, lazy loading
  // remove console.logs -> use lib
  // lazy load images -> rn-fast-image
  // profiling -> flipper, rn-debugger
  // check if using hermes
  const validation = input => {
    // user name validation
    if (!nameValidation(input.first_name)) {
      setErr('Please enter valid name and password');
      return false;
    }

    if (!nameValidation(input.last_name)) {
      setErr('Please enter valid name and password');
      return false;
    }

    // email validation
    if (!emailValidation(input.email)) {
      setErr('Please enter a valid email address');
      return false;
    }

    // password validation
    if (input.password1 !== input.password2) {
      setErr("Passwords don't match!");
      return;
    }

    if (!passwordValidation(input.password1)) {
      setErr('Please enter valid name and password');
      return false;
    }

    if (!passwordValidation(input.password2)) {
      setErr('Please enter valid name and password');
      return false;
    }

    return true;
  };

  const onSubmit = async input => {
    // console.log('screen: register: input ->', input);

    // handle wrong input
    if (!validation(input)) {
      //! todo: uncomment
      // return;
    } else {
      setErr('');
    }

    // todo: cache to asyncStorage -> clear on logout!
    //! todo: uncomment
    // try {
    //   loadingHandler();
    //   const response = await registration(input);
    //   loadingHandler();

    //   if (response?.error) {
    //     const error = response.error.data.detail;
    //     setErr(error);
    //     return;
    //   }

    //   if (response?.data) {
    //     if (
    //       response.data.message === 'Registration successful. Please login.'
    //     ) {
    //       navigation.navigate('Login');
    //     }
    //   }

    //   // console.log('SCREEN:REGISTER: REGISTER API OUTPUT: ', response);
    // } catch (error) {
    //   console.error('SCREEN:REGISTER: REGISTER API ERR: ', error);
    // }

    //! todo: uncomment
    navigation.navigate('Login');
  };

  function handleLoginNav() {
    navigation.navigate('Login');
  }

  return (
    <AuthenticationForm
      title={'Register'}
      btnTitle={'Register'}
      onSubmit={onSubmit}
      handleLoginNav={handleLoginNav}
      err={err}
      loading={loading}
    />
  );
};

export default Register;
