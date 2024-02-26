import React, {useRef, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {useDispatch} from 'react-redux';
// assets
import {colors} from '../../../assets/colors/colors';
import {convert} from '../../../assets/dimensions/dimensions';
import {FontSize} from '../../../assets/fonts/fonts';
import {useResetPassReqMutation} from '../../../redux-toolkit/features/authentication/auth-slice';
import {emailValidation} from '../../../functions/validation';

const RequestNewPassword = () => {
  const dispatch = useDispatch();
  const [resetPassReq] = useResetPassReqMutation();
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  function handleLoading() {
    setLoading(prev => !prev);
  }

  const handleSubmit = async () => {
    if (!emailValidation(emailRef.current?.value)) {
      setMsg('Please set a valid email address');
      return;
    }

    setMsg('');

    console.log('REQNEWPASS: INPUT: ', emailRef.current?.value);

    // todo:ahad: mail not registered, some error handling
    try {
      handleLoading();
      const response = await resetPassReq({email: emailRef.current?.value});
      handleLoading();

      if (response.data.message === 'Password reset email sent.') {
        setMsg('Please check your inbox');
      }
    } catch (error) {
      console.error('REQUEST NEW PASS SCREEN: MAIL LINK: ', error);
    }
  };

  // todo: btn min width
  return (
    <View style={styles.root}>
      <Input
        ref={emailRef}
        onChangeText={e => (emailRef.current.value = e)}
        placeholder="Email Address"
        errorStyle={styles.error}
        // errorMessage={errorMessage ? errorMessage : ''}
      />

      {msg === '' ? (
        <View style={styles.msg.msgContainer} />
      ) : (
        <View style={styles.msg.msgContainer}>
          <Text style={styles.msg.msg}>{msg}</Text>
        </View>
      )}

      <Button
        title={'Send mail'}
        loading={loading}
        loadingProps={{size: 'small', color: colors.light.WHITE}}
        buttonStyle={styles.btn.buttonStyle}
        titleStyle={styles.btn.titleStyle}
        containerStyle={styles.btn.containerStyle}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default RequestNewPassword;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light.WHITE,
  },
  btn: {
    buttonStyle: {backgroundColor: colors.light.PRIMARY},
    titleStyle: {fontWeight: 'bold', fontSize: FontSize.btnTitle},
    containerStyle: {
      maxHeight: convert(200),
      maxWidth: convert(800),
      marginTop: convert(100),
    },
  },
  error: {color: colors.light.ERROR},
  msg: {
    msg: {
      color: colors.light.ERROR,
    },
    msgContainer: {
      width: convert(1000),
      alignItems: 'center',
      marginTop: convert(25),
      // borderWidth: 1,
      // borderColor: 'black',
    },
  },
});
