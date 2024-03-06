import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Button, Input} from 'react-native-elements';
// assets
import {colors} from '../../../assets/colors/colors';
import {convert} from '../../../assets/dimensions/dimensions';
import {FontSize} from '../../../assets/fonts/fonts';

const ChangePassword = () => {
  const route = useRoute();
  const {params} = route.params;

  console.log('SCREEN: CHANGE PASS: getting info: ', params);

  const oldPassRef = useRef(null);
  const newPassRef = useRef(null);
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
        ref={oldPassRef}
        onChangeText={e => (oldPassRef.current.value = e)}
        placeholder="Previous Password"
        maxLength={32}
        errorStyle={styles.error}
        // errorMessage={errorMessage ? errorMessage : ''}
      />
      <Input
        ref={newPassRef}
        onChangeText={e => (newPassRef.current.value = e)}
        placeholder="New Password"
        maxLength={32}
        errorStyle={styles.error}
        // errorMessage={errorMessage ? errorMessage : ''}
      />

      <Button
        title={'Reset Password'}
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

export default ChangePassword;

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
      marginHorizontal: 50,
      height: 50,
      width: 200,
      marginVertical: 10,
      marginTop: 80,
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
