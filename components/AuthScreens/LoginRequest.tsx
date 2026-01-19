import {StyleSheet, View} from 'react-native';
import React from 'react';
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../libs/types/navigation/index';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

const LoginRequest: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.root}>
      <Button
        onPress={() => navigation.navigate('Login')}
        title={'Login'}
        buttonStyle={styles.btn}
        titleStyle={styles.txt}
      />
    </View>
  );
};

export default LoginRequest;

const styles = StyleSheet.create({
  root: {
    width: convert(950),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: convert(25),
  },
  btn: {
    justifyContent: 'center',
    width: convert(300),
    marginHorizontal: convert(30),
    borderRadius: convert(50),
    backgroundColor: colors.dark.ACCENT,
  },
  maintxt: {
    color: colors.dark.CONTRAST,
  },
  txt: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.WHITE,
  },
});
