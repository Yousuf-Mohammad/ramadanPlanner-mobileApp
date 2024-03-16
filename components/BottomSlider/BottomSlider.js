import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// resources
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';

const BottomSlider = ({title}) => {
  return (
    <View style={styles.bottom}>
      <Text style={styles.dua}>{title}</Text>
    </View>
  );
};

export default BottomSlider;

const styles = StyleSheet.create({
  bottom: {
    width: convert(950),
    height: convert(350),
    borderRadius: convert(75),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: colors.dark.CONTRAST,
  },
  dua: {color: colors.dark.BLACK, fontSize: convert(100)},
});
