import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
// assets
import {convert} from '../../../assets/dimensions/dimensions';
import {colors} from '../../../assets/colors/colors';

interface ProgressComponentProps {
  title: string;
  totalTasks: number;
  completedTasks: number;
}

const ProgressComponent: React.FC<ProgressComponentProps> = ({
  title,
  totalTasks,
  completedTasks,
}) => {
  return (
    <View style={styles.dailyContainer}>
      <View style={styles.dailyTxtContainer}>
        <Text style={styles.dailyTxt}>{title}</Text>
        <Text style={styles.dailyTxt}>
          ({completedTasks}/{totalTasks})
        </Text>
      </View>

      <View style={styles.progressContainer}>
        <ProgressBar
          progress={completedTasks / totalTasks}
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
  dailyContainer: {
    width: convert(930),
    paddingHorizontal: convert(25),
    flexDirection: 'row',
  },
  dailyTxtContainer: {
    alignItems: 'center',
    width: convert(230),
    marginRight: convert(20),
    marginVertical: convert(20),
  },
  dailyTxt: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.CONTRAST,
  },
  progressContainer: {justifyContent: 'center'},
});
