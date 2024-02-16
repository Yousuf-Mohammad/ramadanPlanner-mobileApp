import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {SCREEN_WIDTH, convert} from '../../assets/dimensions/dimensions';

const CustomHeader = () => {
  return (
    <View style={styles.root}>
      <Text>CustomHeader</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  root: {
    height: SCREEN_WIDTH / 4,
    width: SCREEN_WIDTH,
    paddingTop: convert(50),
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
