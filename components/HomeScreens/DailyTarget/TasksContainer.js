import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
// components
import Tasks from './Tasks';
// assets
import {convert} from '../../../assets/dimensions/dimensions';

const TasksContainer = ({
  task = [],
  handleTaskCompletion,
  handleTaskDeletion,
  handleTaskEdit,
}) => {
  // todo: replace all scrollviews with flat/flash list
  // todo: replace all onPress to regular functions instead of arrow functions. r&d about the scoping issue?
  // todo: HERMES
  return (
    <ScrollView contentContainerStyle={styles.tasklist}>
      {typeof task === 'undefined' || task.length === 0 ? (
        <View style={{padding: convert(30)}}>
          <Text style={styles.empty}>No tasks :(</Text>
        </View>
      ) : (
        task.map((i, idx) => {
          return (
            <Tasks
              key={idx}
              name={i.name}
              idx={idx}
              lastItem={i === task.length - 1 ? true : false}
              complete={i.complete}
              handleTaskCompletion={handleTaskCompletion}
              handleTaskDeletion={handleTaskDeletion}
              handleTaskEdit={handleTaskEdit}
            />
          );
        })
      )}
    </ScrollView>
  );
};

export default TasksContainer;

const styles = StyleSheet.create({
  tasklist: {
    flexGrow: 1,
    width: convert(1000),
    // borderWidth: 1,
    // borderColor: 'red',
  },
});
