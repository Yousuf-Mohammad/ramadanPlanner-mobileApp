import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
// components
import {CheckBox} from 'react-native-elements';
// assets
import {convert} from '../../../assets/dimensions/dimensions';
import {colors} from '../../../assets/colors/colors';
import TaskInput from './TaskInput';
import EditTaskInput from './EditTaskInput';

const Tasks = ({
  idx,
  name,
  complete,
  handleTaskCompletion,
  handleTaskDeletion,
  handleTaskEdit,
  taskID,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditPress = () => {
    setIsEditing(prev => !prev);
  };

  const styles = StyleSheet.create({
    root: {
      height: convert(200),
      flexDirection: 'row',
      alignItems: 'center',
      //   todo: last item bottom not visible properly
      // paddingBottom: lastItem ? convert(150) : 0,
      // borderWidth: 1,
      // borderColor: 'blue',
    },
    smallBox: {
      width: convert(150),
      alignItems: 'center',
      justifyContent: 'center',
      //   borderWidth: 1,
      //   borderColor: 'blue',
    },
  });

  return (
    <View style={styles.root}>
      {isEditing ? (
        <EditTaskInput
          taskIdx={idx}
          name={name}
          handleTaskEdit={handleTaskEdit}
          handleEditPress={handleEditPress}
        />
      ) : (
        <>
          <View style={styles.smallBox}>
            <CheckBox
              checked={complete}
              onPress={() => handleTaskCompletion(idx, taskID)}
              checkedColor={colors.dark.PRIMARY}
            />
          </View>

          <TaskInput
            idx={idx}
            name={name}
            complete={complete}
            handleTaskDeletion={handleTaskDeletion}
            handleEditPress={handleEditPress}
          />
        </>
      )}
    </View>
  );
};

export default Tasks;
