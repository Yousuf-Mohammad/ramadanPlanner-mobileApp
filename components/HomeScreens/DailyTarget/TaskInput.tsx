/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// assets
import {FontSize} from '../../../assets/fonts/fonts';
import {convert} from '../../../assets/dimensions/dimensions';
import {colors} from '../../../assets/colors/colors';
import {TaskInputProps} from '../../../libs/types/components';

const TaskInput: React.FC<TaskInputProps> = ({
  idx,
  name,
  complete,
  handleTaskDeletion,
}) => {
  return (
    <View style={styles.taskBox}>
      <View style={styles.txtContainer}>
        <Text
          style={{
            ...styles.text,
            textDecorationLine: complete ? 'line-through' : undefined,
          }}>
          {name}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.delete}
        activeOpacity={0.8}
        onLongPress={() => {
          handleTaskDeletion(idx);
        }}>
        <Icon name="trash" size={convert(50)} color={colors.dark.ERROR} />
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  taskBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtContainer: {flex: 1},
  text: {
    color: colors.dark.CONTRAST,
    fontSize: FontSize.medium,
    fontFamily: 'Montserrat-SemiBold',
  },
  delete: {
    height: convert(100),
    width: convert(150),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
