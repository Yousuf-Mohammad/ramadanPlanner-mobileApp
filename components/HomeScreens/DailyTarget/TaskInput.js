import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// assets
import {FontSize} from '../../../assets/fonts/fonts';
import {convert} from '../../../assets/dimensions/dimensions';

const TaskInput = ({
  idx,
  name,
  complete,
  handleTaskDeletion,
  handleEditPress,
}) => {
  const styles = StyleSheet.create({
    taskBox: {
      flex: 1,
      flexDirection: 'row',
      //   borderWidth: 1,
      //   borderColor: 'red',
    },
    txtContainer: {flex: 1},
    text: {
      textDecorationLine: complete ? 'line-through' : null,
      color: 'black',
      fontSize: FontSize.btnTitle,
    },
    delete: {
      // alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center',
      width: convert(150),
      //   borderWidth: 1,
      //   borderColor: 'blue',
    },
  });

  return (
    <View style={styles.taskBox}>
      <View style={styles.txtContainer}>
        <Text style={styles.text}>
          {idx + 1} {name}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.delete}
        onPress={() => {
          handleEditPress();
        }}>
        <Icon name="pencil" size={30} color="blue" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.delete}
        onPress={() => {
          handleTaskDeletion(idx);
        }}>
        <Icon name="trash" size={30} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;
