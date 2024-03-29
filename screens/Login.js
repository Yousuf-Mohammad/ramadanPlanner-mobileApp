/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
// components
import AuthenticationForm from '../components/AuthScreens/AuthenticationForm';
// assets, functions
import {emailValidation, passwordValidation} from '../functions/validation';
import {useLoginMutation} from '../redux-toolkit/features/authentication/auth-slice';

const Login = ({navigation}) => {
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [login] = useLoginMutation();

  const loadingHandler = () => {
    setLoading(prev => !prev);
  };

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

  const onSubmit = async input => {
    console.log('screen: login: input ->', input);

    // handle wrong input
    if (!validation(input)) {
      //! todo: uncomment!
      return;
    } else {
      setErr('');
    }

    // todo: set to asyncStorage -> clear cache logic on login/out, appstate change
    try {
      loadingHandler();
      const response = await login(input);
      loadingHandler();

      if (response.error) {
        const error =
          response.error.data.detail === 'Invalid credentials'
            ? 'Invalid credentials'
            : 'Error logging in!';

        setErr(error);
      }

      if (response.data) {
        if (response.data.access_token) {
          //todo: set to state
          navigation.navigate('Home');
        }
      }

      // console.log('LOGIN: RESPONSE: ', response);
    } catch (error) {
      console.error('LOGIN: ERROR: ', error);
    }
  };

  function handleRegistrationNav() {
    navigation.navigate('Register');
  }

  return (
    <AuthenticationForm
      title={'Login'}
      btnTitle={'Log in'}
      onSubmit={onSubmit}
      handleRegistrationNav={handleRegistrationNav}
      err={err}
      loading={loading}
    />
  );
};

export default Login;
