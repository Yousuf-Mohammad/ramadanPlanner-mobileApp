import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';

const TopRightContainer = () => {
  return (
    <View style={styles.topBoxContainer}>
      {/* sahri ends component */}
      <View style={{...styles.topbox, borderBottomColor: colors.light.WHITE}}>
        <Text style={styles.text}>seheri ends:</Text>
        <Text style={styles.text}>Iftar:</Text>
      </View>
      {/* todays task component */}
      <View style={styles.topbox}>
        <Text style={styles.text}>Today's task</Text>
      </View>
    </View>
  );
};

export default TopRightContainer;

const styles = StyleSheet.create({
  root: {},
  topBoxContainer: {
    // borderWidth: 1,
    // borderColor: 'blue',
    width: convert(500),
    height: convert(200),
    justifyContent: 'space-between',
  },
  topbox: {
    justifyContent: 'center',
    borderWidth: convert(5),
    // borderColor: colors.light.PRIMARY,
    borderTopColor: colors.light.PRIMARY,
    borderBottomColor: colors.light.PRIMARY,
    borderRightColor: colors.light.WHITE,
    borderLeftColor: colors.light.WHITE,
    height: convert(92.5),
  },
  text: {color: colors.light.BLACK},
});
