import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {convert} from '../../assets/dimensions/dimensions';

const LogoutBtn: React.FC = () => {
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => {
        // confirmation modal
        //   delete the access token
      }}>
      <Icon name={'logout'} size={25} color={'white'} />
    </TouchableOpacity>
  );
};

export default LogoutBtn;

const styles = StyleSheet.create({
  root: {
    height: convert(100),
    width: convert(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: convert(25),
  },
});
