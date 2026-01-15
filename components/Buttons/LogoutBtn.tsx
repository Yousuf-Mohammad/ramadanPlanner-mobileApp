import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {convert} from '../../assets/dimensions/dimensions';
import {removeUser} from '../../functions/AuthFunctions';
import {useDispatch} from 'react-redux';
import {resetToken} from '../../redux-toolkit/features/authentication/authToken';
import {colors} from '../../assets/colors/colors';

const LogoutBtn: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.root}
      onPress={async () => {
        await removeUser();
        dispatch(resetToken());
      }}>
      <Text style={styles.txt}>Logout</Text>
      <Icon name={'logout'} size={25} color={'white'} />
    </TouchableOpacity>
  );
};

export default LogoutBtn;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: convert(100),
    width: convert(280),
    marginTop: convert(25),
    backgroundColor: 'red',
    borderRadius: convert(25),
  },
  txt: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.WHITE,
  },
});
