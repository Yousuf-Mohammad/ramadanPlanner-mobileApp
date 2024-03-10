import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/fonts/fonts';

const SalahTimings = ({
  startTime = '4.30',
  icon = 'sunrise',
  name = 'Fajr',
}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.txt}>{startTime}</Text>
      <Text style={styles.txt}>AM</Text>
      <Icon name={`${icon}`} size={30} color={colors.dark.WHITE} />
      <Text style={styles.txt}>{name}</Text>
    </View>
  );
};

export default SalahTimings;

const styles = StyleSheet.create({
  root: {
    height: convert(300),
    width: convert(180),
    marginHorizontal: convert(10),
    borderRadius: convert(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dark.PRIMARY,

    // borderWidth: 1,
    // borderColor: 'red',
  },
  txt: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: FontSize.small,
    color: colors.dark.WHITE,
  },
});
