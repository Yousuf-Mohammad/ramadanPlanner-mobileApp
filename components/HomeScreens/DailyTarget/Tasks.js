import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// components
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// assets
import {FontSize} from '../../../assets/fonts/fonts';
import {convert} from '../../../assets/dimensions/dimensions';
import {colors} from '../../../assets/colors/colors';

const Tasks = ({
  idx,
  name,
  complete,
  handleTaskCompletion,
  handleTaskDeletion,
  handleTaskEdit,
}) => {
  const styles = StyleSheet.create({
    taskinner: {
      height: convert(150),
      flexDirection: 'row',
      alignItems: 'center',
      //   borderWidth: 1,
      //   borderColor: 'blue',
    },
    txtContainer: {flex: 1},
    text: {
      textDecorationLine: complete ? 'line-through' : null,
      color: 'black',
      fontSize: FontSize.btnTitle,
    },
    smallBox: {
      width: convert(150),
      alignItems: 'center',
      justifyContent: 'center',
      //   borderWidth: 1,
      //   borderColor: 'blue',
    },
    taskBox: {
      flex: 1,
      flexDirection: 'row',
      //   borderWidth: 1,
      //   borderColor: 'red',
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
    <View style={styles.taskinner}>
      <View style={styles.smallBox}>
        <CheckBox
          checked={complete}
          onPress={() => handleTaskCompletion(idx)}
          checkedColor={colors.light.PRIMARY}
        />
      </View>

      <View style={styles.taskBox}>
        <View style={styles.txtContainer}>
          <Text style={styles.text}>
            {idx + 1} {name}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.delete}
          onPress={() => {
            // handleTaskDeletion(idx);
            // handleTaskEdit(idx,)
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
    </View>
  );
};

export default Tasks;
