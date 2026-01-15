import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
// components
import AuthenticationForm from '../components/AuthScreens/AuthenticationForm';
// rtk-slices
import {setAuthToken} from '../redux-toolkit/features/authentication/authToken';
import {useLoginMutation} from '../redux-toolkit/features/authentication/auth-slice';
// functions
import {loginFormValidation} from '../functions/validations/formValidation';
// types
import {LoginScreenNavigationProp} from '../libs/types/navigation';
import {setCache} from '../functions/Cache/cache';

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

interface LoginInput {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({navigation}) => {
  const disptach = useDispatch();
  const [login] = useLoginMutation();

  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const loadingHandler = () => {
    setLoading(prev => !prev);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErr('');
    }, 3500);

    return () => clearTimeout(timeout);
  }, [err]);

  const onSubmit = async (input: LoginInput) => {
    if (!loginFormValidation(input, setErr)) {
      return;
    } else {
      setErr('');
    }

    try {
      loadingHandler();
      const response = await login(input);
      loadingHandler();

      if ('error' in response) {
        const errorMsg =
          (response.error as any).data?.detail === 'Invalid credentials'
            ? 'Error logging in!'
            : '';
        setErr(errorMsg);
      }

      if ('data' in response) {
        if ((response.data as any).access_token) {
          const authToken = (response.data as any).access_token;
          disptach(setAuthToken(authToken));
          await setCache('authToken', authToken);

          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        }
      }
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
      navigation={navigation}
    />
  );
};

export default Login;
