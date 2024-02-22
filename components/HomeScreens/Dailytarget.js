import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
// assets
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/fonts/fonts';
import {convert} from '../../assets/dimensions/dimensions';
// components
import Tasks from './DailyTarget/Tasks';

const Dailytarget = () => {
  const taskRef = useRef(null);
  const [task, setTask] = useState([]);
  const handleSubmit = () => {
    const newTask = taskRef.current.value;

    if (!(newTask === '')) {
      setTask(prevTask => [...prevTask, {name: newTask, complete: false}]);
      // reset value
      taskRef.current.value = '';
      // reset input field
      taskRef.current.clear();
    }
  };

  const handleTaskCompletion = idx => {
    setTask(prevTask => {
      const updatedTask = {...prevTask[idx], complete: !prevTask[idx].complete};

      return [
        ...prevTask.slice(0, idx),
        updatedTask,
        ...prevTask.slice(idx + 1),
      ];
    });
  };

  const handleTaskEdit = (idx, updatedName) => {
    // todo: popup!
    setTask(prevTask => {
      const updatedTask = {...prevTask[idx], name: updatedName};

      return [
        ...prevTask.slice(0, idx),
        updatedTask,
        ...prevTask.slice(idx + 1),
      ];
    });
  };

  const handleTaskDeletion = idx => {
    // todo: popup!
    setTask(prevTask => {
      return [...prevTask.slice(0, idx), ...prevTask.slice(idx + 1)];
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.taskContainer}>
        <ScrollView contentContainerStyle={styles.tasklist}>
          {typeof task === 'undefined' || task.length === 0 ? (
            <View style={{padding: convert(30)}}>
              <Text style={{fontSize: FontSize.btnTitle, color: 'black'}}>
                No tasks :(
              </Text>
            </View>
          ) : (
            task.map((i, idx) => {
              return (
                <Tasks
                  key={idx}
                  name={i.name}
                  idx={idx}
                  complete={i.complete}
                  handleTaskCompletion={handleTaskCompletion}
                  handleTaskDeletion={handleTaskDeletion}
                  handleTaskEdit={handleTaskEdit}
                />
              );
            })
          )}
        </ScrollView>

        <Input
          ref={taskRef}
          onChangeText={e => (taskRef.current.value = e)}
          placeholder="Add a task"
          // errorStyle={styles.error}
          // errorMessage={errorMessage ? errorMessage : ''}
        />
      </View>
      <Button
        title={'+ Add task'}
        loading={false}
        loadingProps={{size: 'small', color: colors.light.WHITE}}
        buttonStyle={styles.btn.buttonStyle}
        titleStyle={styles.btn.titleStyle}
        containerStyle={styles.btn.containerStyle}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default Dailytarget;

const styles = StyleSheet.create({
  root: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  tasklist: {
    height: convert(1000),
    width: convert(1000),
    // borderWidth: 1,
    // borderColor: 'red',
  },
  taskContainer: {
    flex: 1,
    width: convert(1000),
    alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  taskinner: {
    borderWidth: 1,
    borderColor: 'blue',
  },
  task: {color: 'black', fontSize: FontSize.btnTitle},
  btn: {
    buttonStyle: {backgroundColor: colors.light.PRIMARY},
    titleStyle: {fontWeight: 'bold', fontSize: FontSize.btnTitle},
    containerStyle: {
      marginHorizontal: 50,
      height: 50,
      width: 200,
      marginVertical: 10,
      marginTop: 80,
    },
  },
});
