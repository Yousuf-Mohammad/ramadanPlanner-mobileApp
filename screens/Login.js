import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const onPress = navigation => {
  navigation.navigate('Home');
};

const Login = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.txt}>Login</Text>
      <Button title="go to login" onPress={() => onPress(navigation)} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  txt: {color: 'black'},
});
