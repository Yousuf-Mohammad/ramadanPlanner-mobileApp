import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FallbackScreens = () => {
  return (
    <View style={styles.root}>
      <Text>{'Loading...'}</Text>
    </View>
  );
};

export default FallbackScreens;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
