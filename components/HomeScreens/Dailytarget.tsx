import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {useSelector} from 'react-redux';
// rtk-slices
import {
  useAddTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from '../../redux-toolkit/features/daily-todolist/daily-todolist-slice';
import {getArabicDate} from '../../redux-toolkit/features/arabic-date/arabicDate';
// assets
import {colors} from '../../assets/colors/colors';
import {convert} from '../../assets/dimensions/dimensions';
// components
import TasksContainer from './DailyTarget/TasksContainer';
import {TaskItem} from '../../libs/types/components';

const Dailytarget = () => {
  const day = useSelector(getArabicDate);

  //* handeling race conditions with queue
  const stateUpdateQueue = useRef<any[]>([]);
  const [processingQueue, setProcessingQueue] = useState(false);

  // RTK Mutations
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const processQueue = async () => {
    setProcessingQueue(true);

    while (stateUpdateQueue.current.length > 0) {
      const {taskID, newValue} = stateUpdateQueue.current[0];

      try {
        await updateTodo({
          id: taskID,
          value: newValue,
          year: String(day.year),
          month: String(day.monthNumber),
          day: String(day.day),
        });

        // Remove processed item
        stateUpdateQueue.current.shift();
      } catch (issue) {
        console.error('Error updating state:', issue);
        break;
      }
    }

    setProcessingQueue(false);
  };

  const addToQueue = (taskID: string, newValue: boolean) => {
    stateUpdateQueue.current.push({taskID, newValue});

    if (!processingQueue) {
      processQueue();
    }
  };

  const {data, isLoading, isError} = useGetTodosQuery({
    year: String(day.year),
    month: String(day.monthNumber),
    day: String(day.day),
  });

  const taskRef = useRef<any>(null);
  const [task, setTask] = useState<TaskItem[]>([]);

  useEffect(() => {
    try {
      if (!isLoading && data) {
        setTask(data.items || []);
      }
    } catch (issue) {
      console.error("SCREEN:DAILY TARGET: 'CATCH' todolist error: ", issue);
    }
  }, [isLoading, isError, data]);

  const handleSubmit = async () => {
    const newTask = taskRef.current?.value;

    if (!newTask || newTask === '') {
      // reset input field
      if (taskRef.current) {
        taskRef.current.clear();
      }
      return;
    }

    // Optimistic update
    setTask(prevTask => [
      ...prevTask,
      {id: 'temp-' + Date.now(), name: newTask, is_completed: false},
    ]);

    // reset input field
    if (taskRef.current) {
      taskRef.current.value = '';
      taskRef.current.clear();
    }

    //! todo: queue and try-catch
    try {
      await addTodo({
        value: newTask,
        year: String(day.year),
        month: String(day.monthNumber),
        day: String(day.day),
      });
    } catch (error) {
      console.error('Error adding todo', error);
    }
  };

  const handleTaskCompletion = (idx: number, taskID: string) => {
    let newValue = !task[idx].is_completed;

    setTask(prevTask => {
      const updatedTask = {
        ...prevTask[idx],
        is_completed: newValue,
      };

      return [
        ...prevTask.slice(0, idx),
        updatedTask,
        ...prevTask.slice(idx + 1),
      ];
    });

    addToQueue(taskID, newValue);
  };

  const handleTaskEdit = (idx: number, updatedName: string) => {
    setTask(prevTask => {
      const updatedTask = {...prevTask[idx], name: updatedName};
      return [
        ...prevTask.slice(0, idx),
        updatedTask,
        ...prevTask.slice(idx + 1),
      ];
    });
  };

  const handleTaskDeletion = (idx: number) => {
    setTask(prevTask => {
      return [...prevTask.slice(0, idx), ...prevTask.slice(idx + 1)];
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.taskContainer}>
        <TasksContainer
          task={task}
          handleTaskCompletion={handleTaskCompletion}
          handleTaskDeletion={handleTaskDeletion}
          handleTaskEdit={handleTaskEdit}
        />

        <Input
          ref={taskRef}
          maxLength={40}
          onChangeText={e => {
            if (taskRef.current) {
              taskRef.current.value = e;
            }
          }}
          placeholder="Add a task"
          inputContainerStyle={{
            backgroundColor: colors.dark.PRIMARY,
          }}
          inputStyle={{
            color: colors.dark.CONTRAST,
          }}
        />
      </View>

      <Button
        title={'+ ADD TASK'}
        loading={false}
        loadingProps={{size: 'small', color: colors.dark.WHITE}}
        buttonStyle={styles.btnButtonStyle}
        titleStyle={styles.btnTitleStyle}
        containerStyle={styles.btnContainerStyle}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default Dailytarget;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dark.PRIMARY,
  },
  taskContainer: {
    flex: 1,
    width: convert(1000),
    alignItems: 'center',
  },
  btnButtonStyle: {
    height: convert(100),
    width: convert(890),
    marginBottom: convert(41),
    borderRadius: convert(25),
    backgroundColor: colors.dark.CONTRAST,
  },
  btnTitleStyle: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.PRIMARY,
  },
  btnContainerStyle: {},
});
