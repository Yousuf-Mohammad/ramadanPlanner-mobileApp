import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Image} from 'react-native';
import {Button} from 'react-native-elements';
// rtk-slices
import {useResetPassReqMutation} from '../../../redux-toolkit/features/authentication/auth-slice';
// assets
import {colors} from '../../../assets/colors/colors';
import {convert} from '../../../assets/dimensions/dimensions';
import {FontSize} from '../../../assets/fonts/fonts';
// functions
import {emailValidation} from '../../../functions/validations/formValidation';
// components
import CustomTextInput from '../../TextInput/CustomTextInput';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../../libs/types/navigation/index';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const RequestNewPassword = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [resetPassReq] = useResetPassReqMutation();

  const emailRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    let duration = 3500;

    // todo: fix inputbox error and remove this!
    if (err === '') {
      emailRef.current?.focus();
    }

    if (err === 'Please check your inbox ON THIS DEVICE!') {
      duration = 10000;
    }

    const timeout = setTimeout(() => {
      setErr('');
    }, duration);

    return () => clearTimeout(timeout);
  }, [err]);

  function handleLoading() {
    setLoading(prev => !prev);
  }

  const handleSubmit = async () => {
    if (!emailValidation(emailRef.current?.value)) {
      setErr('Please set a valid email address');
      return;
    }

    setErr('');

    console.log('REQNEWPASS: INPUT: ', emailRef.current?.value);

    // todo:ahad: mail not registered, some error handling
    try {
      handleLoading();
      const response: any = await resetPassReq({
        email: emailRef.current?.value,
      });
      handleLoading();

      if (response?.data?.message === 'Password reset email sent.') {
        setErr('Please check your inbox ON THIS DEVICE!');
      }
    } catch (error) {
      console.error('REQUEST NEW PASS SCREEN: MAIL LINK: ', error);
    }
  };

  useEffect(() => {
    if (err === 'Please check your inbox ON THIS DEVICE!') {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 3000);
    }
  }, [err, navigation]);

  // todo: btn min width
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <CustomTextInput
        refProp={emailRef}
        placeholder="Email Address"
        errorStyles={styles.error}
      />

      <View style={styles.bgContainer}>
        <Image
          source={require('../../../assets/images/auth-bg.png')}
          style={styles.bgImg}
          resizeMode="contain"
        />
      </View>

      {err !== '' ? (
        <View style={styles.errContainer}>
          <Text style={styles.errMsg}>{err}</Text>
        </View>
      ) : (
        <View style={styles.errContainerEmpty} />
      )}

      <Button
        title={'Send mail'}
        loading={loading}
        loadingProps={{size: 'small', color: colors.dark.WHITE}}
        buttonStyle={styles.btnButtonStyle}
        titleStyle={styles.btnTitleStyle}
        containerStyle={styles.btnContainerStyle}
        onPress={handleSubmit}
      />
    </ScrollView>
  );
};

export default RequestNewPassword;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dark.PRIMARY,
  },
  btnButtonStyle: {
    backgroundColor: colors.dark.ACCENT,
    height: convert(110),
    borderRadius: convert(75),
    width: convert(425),
  },
  btnTitleStyle: {
    fontSize: FontSize.btnTitle,
    fontFamily: 'Montserrat-Bold',
  },
  btnContainerStyle: {
    marginTop: convert(80),
    borderRadius: convert(75),
  },
  error: {color: colors.dark.ERROR},
  errMsg: {
    color: colors.dark.ERROR,
    fontFamily: 'Montserrat-Bold',
    fontSize: FontSize.mgsBottom,
  },
  errContainer: {
    width: convert(1000),
    alignItems: 'center',
    marginTop: convert(10),
  },
  errContainerEmpty: {
    width: convert(1000),
    alignItems: 'center',
    marginTop: convert(60),
  },
  msgText: {
    color: colors.dark.ERROR,
  },
  msgContainer: {
    width: convert(1000),
    alignItems: 'center',
    marginTop: convert(25),
  },
  bgContainer: {
    position: 'absolute',
    top: convert(500),
    opacity: 0.03,
  },
  bgImg: {height: convert(700), width: convert(500)},
});
