import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
// assets
import {colors} from '../../../assets/colors/colors';
import {convert} from '../../../assets/dimensions/dimensions';
import {FontSize} from '../../../assets/fonts/fonts';

const RequestNewPassword = () => {
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);

  function handleLoading() {
    setLoading(prev => !prev);
  }

  function handleSubmit() {
    handleLoading();
    console.log('Password change requested!');
    handleLoading();
  }

  return (
    <View style={styles.root}>
      <Input
        ref={emailRef}
        onChangeText={e => (emailRef.current.value = e)}
        placeholder="Email Address"
        errorStyle={styles.error}
        // errorMessage={errorMessage ? errorMessage : ''}
      />

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
  err: {
    msg: {
      color: colors.light.ERROR,
    },
    errContainer: {
      width: convert(1000),
      alignItems: 'center',
      marginTop: convert(25),
      // borderWidth: 1,
      // borderColor: 'black',
    },
  },
});
