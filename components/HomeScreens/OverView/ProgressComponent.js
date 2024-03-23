import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {convert} from '../../../assets/dimensions/dimensions';
import {colors} from '../../../assets/colors/colors';
import * as Progress from 'react-native-progress';

const ProgressComponent = ({title}) => {
  return (
    <View style={styles.daily.container}>
      <View style={styles.daily.txtcontainer}>
        <Text style={styles.daily.txt}>{title}</Text>
        <Text style={styles.daily.txt}>(0/5)</Text>
      </View>

      <View style={styles.progress.container}>
        <Progress.Bar
          progress={0.3}
          width={convert(620)}
          height={convert(50)}
          color={colors.dark.CONTRAST}
        />
      </View>
    </View>
  );
};

export default ProgressComponent;

const styles = StyleSheet.create({
  daily: {
    // root: {
    //   width: convert(950),
    //   height: convert(1150),
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   borderWidth: convert(5),
    //   borderRadius: convert(25),
    //   borderColor: colors.dark.CONTRAST,
    //   // borderColor: 'green',
    // },

    container: {
      width: convert(930),
      paddingHorizontal: convert(25),
      flexDirection: 'row',
      // paddingHorizontal: convert(25),
      // paddingBottom: convert(25),

      // borderWidth: 1,
      // borderColor: 'red',
    },
    txtcontainer: {
      alignItems: 'center',
      width: convert(230),
      marginRight: convert(20),
      marginVertical: convert(20),

      // borderWidth: 1,
      // borderColor: 'green',
    },
    txt: {
      fontFamily: 'Montserrat-SemiBold',
      color: colors.dark.CONTRAST,
    },
  },
  progress: {
    container: {justifyContent: 'center'},
  },
});
