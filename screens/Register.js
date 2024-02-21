import React, {useState} from 'react';

import AuthenticationForm from '../components/AuthScreens/AuthenticationForm';

import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from '../functions/validation';

const Register = ({navigation}) => {
  const [err, setErr] = useState('');

  const validation = input => {
    // user name validation
    if (!nameValidation(input.name)) {
      setErr('Please enter valid name and password');
      return false;
    }

    // password validation
    if (!passwordValidation(input.password)) {
      setErr('Please enter valid name and password');
      return false;
    }

    // email validation
    if (!emailValidation(input.email)) {
      setErr('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const onSubmit = input => {
    // console.log('screen: register: input ->', input);

    // handle wrong input
    if (!validation(input)) {
      //! todo: uncomment!
      // return;
    } else {
      setErr('');
    }

    // todo: cache to asyncStorage -> clear on logout!

    // todo: registration logic!
    navigation.navigate('Login');
  };

  return (
    <AuthenticationForm
      title={'Register'}
      btnTitle={'Register'}
      onSubmit={onSubmit}
      err={err}
    />
  );
};

export default Register;
