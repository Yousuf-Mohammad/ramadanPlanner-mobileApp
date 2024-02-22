import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
// assets
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/fonts/fonts';
import {convert} from '../../assets/dimensions/dimensions';

const Dailytarget = () => {
  const taskRef = useRef(null);
  const [task, setTask] = useState([]);
  const handleSubmit = () => {
    const newTask = taskRef.current.value;
    console.log(!(newTask === ''));
    if (!(newTask === '')) {
      setTask(prevTask => [...prevTask, {name: newTask}]);
      taskRef.current.value = '';
      taskRef.current.clear();
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.taskContainer}>
        <ScrollView contentContainerStyle={styles.tasklist}>
          {task.map((i, idx) => {
            console.log('tasks:', i);
            return (
              <View key={idx} style={styles.taskinner}>
                <Text style={styles.task}>
                  {idx} {i.name}
                </Text>
              </View>
            );
          })}
        </ScrollView>

        <Input
          ref={taskRef}
          // value={''}
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
    borderWidth: 1,
    borderColor: 'red',
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
