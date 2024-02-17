import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';

import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/dimensions/fonts';

const AuthenticationForm = ({
  errorMessage,
  title,
  btnTitle,
  onSubmit,
  navHandler,
  err,
}) => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const [hidden, setHidden] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const eyePressHandler = () => {
    setHidden(prev => !prev);
  };
  const eyePressHandler2 = () => {
    setHidden2(prev => !prev);
  };

  const handleSubmit = () => {
    const name = nameRef?.current?.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    const newUserData = {
      name: name,
      email: email,
      password: password,
    };

    const validationData = {
      email: email,
      password: password,
    };

    if (title === 'Register') {
      onSubmit(newUserData);
    } else {
      onSubmit(validationData);
    }

    // navigate on success
    // onSubmit();
  };

  // todo: error disappear on reattempt and after 5 sec!
  return (
    <ScrollView contentContainerStyle={styles.root.containerStyle}>
      <Text style={styles.titleTop}>{title}</Text>

      <View style={styles.form}>
        {title === 'Register' ? (
          <Input
            ref={nameRef}
            onChangeText={e => (nameRef.current.value = e)}
            placeholder="Name"
            errorStyle={styles.error}
            errorMessage={errorMessage ? errorMessage : ''}
          />
        ) : (
          <></>
        )}

        <Input
          ref={emailRef}
          onChangeText={e => (emailRef.current.value = e)}
          placeholder="Email"
          errorStyle={styles.error}
          errorMessage={errorMessage ? errorMessage : ''}
        />

        <Input
          ref={passwordRef}
          onChangeText={e => (passwordRef.current.value = e)}
          secureTextEntry={hidden}
          rightIcon={
            hidden ? (
              <TouchableOpacity onPress={eyePressHandler}>
                <Icon name="eye-slash" size={30} color="green" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={eyePressHandler}>
                <Icon name="eye" size={30} color="#900" />
              </TouchableOpacity>
            )
          }
          placeholder="Password"
          errorStyle={styles.error}
          errorMessage={errorMessage ? errorMessage : ''}
        />

        {title === 'Register' ? (
          <Input
            ref={passwordRef}
            onChangeText={e => (passwordRef.current.value = e)}
            secureTextEntry={hidden2}
            rightIcon={
              hidden2 ? (
                <TouchableOpacity onPress={eyePressHandler2}>
                  <Icon name="eye-slash" size={30} color="green" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={eyePressHandler2}>
                  <Icon name="eye" size={30} color="#900" />
                </TouchableOpacity>
              )
            }
            placeholder="Confirm Password"
            errorStyle={styles.error}
            errorMessage={errorMessage ? errorMessage : ''}
          />
        ) : (
          <></>
        )}

        <View style={styles.infoContainer}>
          <Text style={styles.info}>
            (Password must contain 8-32 characters & atleast 1 digit)
          </Text>
        </View>

        {err !== '' ? (
          <View style={styles.err.errContainer}>
            <Text style={styles.err.msg}>{err}</Text>
          </View>
        ) : (
          <Text />
        )}

        <Button
          title={btnTitle}
          loading={false}
          loadingProps={{size: 'small', color: colors.light.WHITE}}
          buttonStyle={styles.btn.buttonStyle}
          titleStyle={styles.btn.titleStyle}
          containerStyle={styles.btn.containerStyle}
          onPress={handleSubmit}
        />
      </View>

      {title === 'Register' ? (
        <View style={styles.bottom}>
          <Text style={styles.titleBottom}>Already registered?</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.touchtitleBottom}> Login</Text>
          </TouchableOpacity>
          <Text style={styles.titleBottom}> here!</Text>
        </View>
      ) : (
        <View style={styles.bottom}>
          <Text style={styles.titleBottom}>Don't have an account?</Text>
          <TouchableOpacity onPress={navHandler}>
            <Text style={styles.touchtitleBottom}> Register</Text>
          </TouchableOpacity>
          <Text style={styles.titleBottom}> here!</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default AuthenticationForm;

const styles = StyleSheet.create({
  root: {
    containerStyle: {
      width: convert(1000),
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      // borderColor: 'blue',
    },
  },
  form: {
    flex: 1,
    width: convert(1000),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  titleTop: {
    marginVertical: 100,
    fontSize: FontSize.title,
    color: colors.light.PRIMARY,
    // backgroundColor: 'green',
  },
  bottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 115,
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  titleBottom: {color: colors.light.BLACK},
  touchtitleBottom: {
    fontSize: FontSize.mgsBottom,
    fontWeight: 'bold',
    color: colors.light.PRIMARY,
  },
  error: {color: colors.light.ERROR},
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
  err: {
    msg: {
      color: colors.light.ERROR,
    },
    errContainer: {
      width: convert(1000),
      alignItems: 'center',
      marginTop: convert(25),
      // borderWidth: 1,
      // borderColor: 'black',
    },
  },
  info: {color: colors.light.PRIMARY, fontSize: FontSize.hint},
  infoContainer: {
    width: convert(1000),
    paddingLeft: convert(25),
    // borderWidth: 1,
    // borderColor: 'black',
  },
});
