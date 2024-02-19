import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';

const BottomSlider = ({inputStyles}) => {
  const styles = StyleSheet.create({
    bottom: {
      width: convert(1000),
      height: convert(400),
      borderRadius: convert(75),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: colors.light.PRIMARY,
    },
    dua: {color: colors.light.BLACK, fontSize: convert(100)},
  });

  return (
    <View style={{...styles.bottom, ...inputStyles}}>
      <Text style={styles.dua}>TODAY'S DUA</Text>
    </View>
  );
};

export default BottomSlider;
