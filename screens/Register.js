import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const onPress = navigation => {
  navigation.navigate('Login');
};

const Register = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.txt}>Register</Text>
      <Button title="go to login" onPress={() => onPress(navigation)} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  txt: {color: 'black'},
});
