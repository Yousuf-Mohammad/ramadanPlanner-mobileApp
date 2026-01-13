import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
// components
import EditInputRightIcons from './EditInputRightIcons';
// assets
import {Input} from 'react-native-elements';
import {convert} from '../../../assets/dimensions/dimensions';
import {EditTaskInputProps} from '../../../libs/types/components';

const EditTaskInput: React.FC<EditTaskInputProps> = ({
  taskIdx,
  name,
  handleTaskEdit,
  handleEditPress,
}) => {
  const editRef = useRef<any>(null);

  const handeClearEditRef = () => {
    if (editRef.current) {
      editRef.current.value = '';
      editRef.current.clear();
    }
  };

  const handleClearInput = () => {
    handeClearEditRef();
    handleEditPress();
  };

  const handleSubmit = () => {
    handleTaskEdit(
      taskIdx,
      typeof editRef.current?.value === 'undefined' ||
        editRef.current?.value === ''
        ? name
        : editRef.current.value,
    );
    handleClearInput();
  };

  return (
    <View style={styles.root}>
      <Input
        defaultValue={name}
        ref={editRef}
        onChangeText={e => {
          if (editRef.current) {
            editRef.current.value = e;
          }
        }}
        rightIcon={
          <EditInputRightIcons
            handleClearInput={handleClearInput}
            handleSubmit={handleSubmit}
          />
        }
      />
    </View>
  );
};

export default EditTaskInput;

const styles = StyleSheet.create({
  root: {
    height: convert(150),
    width: convert(1000),
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
  },
});
