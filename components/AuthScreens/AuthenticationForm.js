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
// assets
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/fonts/fonts';

const AuthenticationForm = ({
  errorMessage,
  title,
  btnTitle,
  onSubmit,
  handleRegistrationNav,
  handleLoginNav,
  loading,
  err,
  navigation,
}) => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const emailRef = useRef(null);

  const [hidden, setHidden] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const eyePressHandler = () => {
    setHidden(prev => !prev);
  };
  const eyePressHandler2 = () => {
    setHidden2(prev => !prev);
  };

  function handleForgotPass() {
    navigation.navigate('ReqPassChange');
  }

  const handleSubmit = () => {
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    const email = emailRef.current?.value;

    const newUserData = {
      email: email,
      password1: password,
      password2: confirmPassword,
      first_name: firstName,
      last_name: lastName,
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
  };

  // todo: error disappear on reattempt and after 5 sec!
  return (
    <ScrollView contentContainerStyle={styles.root.containerStyle}>
      <Text style={styles.titleTop}>{title}</Text>

      <View style={styles.form}>
        {title === 'Register' ? (
          <>
            <Input
              ref={firstNameRef}
              onChangeText={e => (firstNameRef.current.value = e)}
              placeholder="First Name"
              maxLength={20}
              errorStyle={styles.error}
              errorMessage={errorMessage ? errorMessage : ''}
            />
            <Input
              ref={lastNameRef}
              onChangeText={e => (lastNameRef.current.value = e)}
              placeholder="Last Name"
              maxLength={20}
              errorStyle={styles.error}
              errorMessage={errorMessage ? errorMessage : ''}
            />
          </>
        ) : (
          <></>
        )}

        <Input
          // todo:remove
          defaultValue="fardinshuvro96@gmail.com"
          ref={emailRef}
          onChangeText={e => (emailRef.current.value = e)}
          placeholder="Email"
          errorStyle={styles.error}
          errorMessage={errorMessage ? errorMessage : ''}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.info}>*case sensitive</Text>
        </View>

        <Input
          // todo:remove
          defaultValue="something1"
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
          maxLength={32}
          errorStyle={styles.error}
          errorMessage={errorMessage ? errorMessage : ''}
        />

        {title === 'Register' ? (
          <Input
            ref={confirmPasswordRef}
            onChangeText={e => (confirmPasswordRef.current.value = e)}
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
            maxLength={32}
            errorStyle={styles.error}
            errorMessage={errorMessage ? errorMessage : ''}
          />
        ) : (
          <></>
        )}

        <View style={styles.infoContainer}>
          <Text style={styles.info}>
            *case sensitive | 8-32 characters | atleast 1 digit | atleast 1
            letter
          </Text>
        </View>

        {title === 'Login' ? (
          <TouchableOpacity
            style={styles.forgotPass.container}
            onPress={handleForgotPass}>
            <Text style={styles.forgotPass.txt}>Forgot Password</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}

        {err !== '' ? (
          <View style={styles.err.errContainer}>
            <Text style={styles.err.msg}>{err}</Text>
          </View>
        ) : (
          <Text />
        )}

        <Button
          title={btnTitle}
          loading={loading}
          loadingProps={{size: 'small', color: colors.dark.WHITE}}
          buttonStyle={styles.btn.buttonStyle}
          titleStyle={styles.btn.titleStyle}
          containerStyle={styles.btn.containerStyle}
          onPress={handleSubmit}
        />
      </View>

      {title === 'Register' ? (
        <View style={styles.bottom}>
          <Text style={styles.titleBottom}>Already registered?</Text>
          <TouchableOpacity onPress={handleLoginNav}>
            <Text style={styles.touchtitleBottom}> Login</Text>
          </TouchableOpacity>
          <Text style={styles.titleBottom}> here!</Text>
        </View>
      ) : (
        <View style={styles.bottom}>
          <Text style={styles.titleBottom}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleRegistrationNav}>
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
    color: colors.dark.PRIMARY,
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
  titleBottom: {color: colors.dark.BLACK},
  touchtitleBottom: {
    fontSize: FontSize.mgsBottom,
    fontWeight: 'bold',
    color: colors.dark.PRIMARY,
  },
  error: {color: colors.dark.ERROR},
  btn: {
    buttonStyle: {backgroundColor: colors.dark.PRIMARY},
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
      color: colors.dark.ERROR,
    },
    errContainer: {
      width: convert(1000),
      alignItems: 'center',
      marginTop: convert(25),
      // borderWidth: 1,
      // borderColor: 'black',
    },
  },
  info: {color: colors.dark.PRIMARY, fontSize: FontSize.hint},
  infoContainer: {
    width: convert(1000),
    paddingLeft: convert(25),
    // borderWidth: 1,
    // borderColor: 'black',
  },
  forgotPass: {
    container: {
      width: convert(1000),
      paddingLeft: convert(25),
      marginTop: convert(50),
    },
    txt: {
      color: colors.dark.PRIMARY,
      fontSize: FontSize.hint,
      fontWeight: 'bold',
    },
  },
});
