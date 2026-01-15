import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {convert} from '../../assets/dimensions/dimensions';
import {removeUser} from '../../functions/AuthFunctions';
import {useDispatch} from 'react-redux';
import {resetToken} from '../../redux-toolkit/features/authentication/authToken';

const LogoutBtn: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.root}
      onPress={async () => {
        await removeUser();
        dispatch(resetToken());
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
