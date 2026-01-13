import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
// components
import TaskInput from './TaskInput';
import EditTaskInput from './EditTaskInput';
// assets
import {convert} from '../../../assets/dimensions/dimensions';
import {colors} from '../../../assets/colors/colors';
import {TaskProps} from '../../../libs/types/components';

const Tasks: React.FC<TaskProps> = ({
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
              checkedColor={colors.dark.CONTRAST}
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

const styles = StyleSheet.create({
  root: {
    height: convert(150),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: convert(15),
    marginHorizontal: convert(33),
    borderWidth: convert(5),
    borderRadius: convert(25),
    borderColor: colors.dark.CONTRAST,
  },
  smallBox: {
    width: convert(150),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
