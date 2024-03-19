import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/colors/colors';

const OverView = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.dark.PRIMARY,
      }}>
      <Text style={{color: 'white'}}>
        OverView screen is under construction
      </Text>
    </View>
  );
};

export default OverView;

const styles = StyleSheet.create({});
