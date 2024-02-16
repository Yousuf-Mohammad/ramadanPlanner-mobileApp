import React from 'react';

import AuthenticationForm from '../components/AuthScreens/AuthenticationForm';

const Register = ({navigation}) => {
  const onSubmit = () => {
    // todo: registration logic!
    navigation.navigate('Login');
  };

  return (
    <AuthenticationForm
      title={'Register'}
      btnTitle={'Register'}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
