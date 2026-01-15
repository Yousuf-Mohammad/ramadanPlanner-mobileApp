import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';
// assets
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/fonts/fonts';
import CustomTextInput from '../TextInput/CustomTextInput';
import {APP_NAME} from '../../assets/texts/staticText';
import {Image} from 'react-native';

export interface AuthenticationFormProps {
  errorMessage?: string;
  title: 'Login' | 'Register';
  btnTitle: string;
  onSubmit: (data: any) => void;
  handleRegistrationNav?: () => void;
  handleLoginNav?: () => void;
  loading?: boolean;
  err?: string;
  navigation?: any;
}

const AuthenticationForm: React.FC<AuthenticationFormProps> = ({
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
  const styles = StyleSheet.create({
    rootContainerStyle: {
      width: convert(1000),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.dark.PRIMARY,
    },
    logoContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    logoImg: {
      marginTop: convert(150),
      height: convert(200),
      width: convert(600),
    },
    form: {
      flex: 1,
      paddingTop: title === 'Login' ? convert(300) : convert(100),
      width: convert(1000),
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleTop: {
      marginTop: convert(50),
      color: colors.dark.ACCENT,
      fontFamily: 'NovaMono-Regular',
      fontSize: convert(70),
    },
    bgContainer: {
      position: 'absolute',
      top: title === 'Register' ? convert(175) : convert(100),
      opacity: 0.03,
    },
    bgImg: {height: convert(700), width: convert(500)},
    bottom: {
      width: '100%',
      justifyContent: 'center',
      marginTop: convert(50),
      marginBottom: convert(300),
      alignItems: 'center',
    },
    titleBottom: {
      opacity: 0.5,
      color: colors.dark.CONTRAST,
      fontFamily: 'Montserrat-Regular',
    },
    touchtitleBottom: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: FontSize.mgsBottom,
      color: colors.dark.CONTRAST,
    },
    touchtitleBottomContainer: {
      height: convert(150),
      width: title === 'Register' ? convert(300) : undefined,
      alignItems: 'center',
    },
    error: {color: colors.dark.ERROR},
    buttonStyle: {
      backgroundColor: colors.dark.ACCENT,
      borderRadius: convert(75),
      height: convert(110),
      width: convert(425),
    },
    btnTitleStyle: {
      fontSize: FontSize.btnTitle,
      fontFamily: 'Montserrat-Bold',
    },
    btnContainerStyle: {
      marginTop: convert(80),
      borderRadius: convert(75),
    },
    errMsg: {
      color: colors.dark.ERROR,
      fontFamily: 'Montserrat-Bold',
      fontSize: FontSize.mgsBottom,
    },
    errContainer: {
      width: convert(1000),
      alignItems: 'center',
      marginTop: convert(10),
    },
    errContainerEmpty: {
      width: convert(1000),
      alignItems: 'center',
      marginTop: convert(60),
    },
    info: {color: colors.dark.PRIMARY, fontSize: FontSize.hint},
    infoContainer: {
      width: convert(1000),
      paddingLeft: convert(25),
    },
    forgotPassContainer: {
      width: convert(1000),
      paddingLeft: convert(155),
      marginTop: convert(50),
    },
    forgotPassTxt: {
      fontFamily: 'Montserrat-Bold',
      color: colors.dark.CONTRAST,
      fontSize: FontSize.mgsBottom,
    },
  });

  const firstNameRef = useRef<any>(null);
  const lastNameRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const confirmPasswordRef = useRef<any>(null);
  const emailRef = useRef<any>(null);

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

  useEffect(() => {
    if (title === 'Login') {
      emailRef.current?.focus();
    }

    if (title === 'Register') {
      firstNameRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <ScrollView
      contentContainerStyle={styles.rootContainerStyle}
      showsVerticalScrollIndicator={false}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/tazkiah-logo.png')}
          resizeMode="contain"
          style={styles.logoImg}
        />

        <Text style={styles.titleTop}>{APP_NAME}</Text>
      </View>

      <View style={styles.form}>
        {title === 'Register' ? (
          <>
            <CustomTextInput
              refProp={firstNameRef}
              placeholder="First Name"
              maxLength={20}
              errorStyles={styles.error}
            />
            <CustomTextInput
              refProp={lastNameRef}
              placeholder="Last Name"
              maxLength={20}
              errorStyles={styles.error}
            />
          </>
        ) : (
          <></>
        )}

        <CustomTextInput
          defaultValue="fardinshuvro96@gmail.co"
          refProp={emailRef}
          placeholder="Email"
          errorStyles={styles.error}
          errorMessage={errorMessage ? errorMessage : ''}
          hint={'*case-sensitive'}
        />

        <View style={styles.bgContainer}>
          <Image
            source={require('../../assets/images/auth-bg.png')}
            style={styles.bgImg}
            resizeMode="contain"
          />
        </View>

        <CustomTextInput
          defaultValue="something1"
          refProp={passwordRef}
          hidden={hidden}
          rightIcon={true}
          placeholder={'Password'}
          maxLength={32}
          eyePressHandler={eyePressHandler}
          errorStyles={styles.error}
          errorMessage={errorMessage ? errorMessage : ''}
          hint={'*case-sensitive | 8-32 characters | min 1 letter & 1 digit'}
        />

        {title === 'Register' ? (
          <CustomTextInput
            // defaultValue="something1"
            refProp={confirmPasswordRef}
            hidden={hidden2}
            rightIcon={true}
            placeholder={'Password'}
            maxLength={32}
            eyePressHandler={eyePressHandler2}
            errorStyles={styles.error}
            errorMessage={errorMessage ? errorMessage : ''}
          />
        ) : (
          <></>
        )}

        {title === 'Login' ? (
          <TouchableOpacity
            style={styles.forgotPassContainer}
            onPress={handleForgotPass}>
            <Text style={styles.forgotPassTxt}>Forgot Password?</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}

        {err !== '' ? (
          <View style={styles.errContainer}>
            <Text style={styles.errMsg}>{err}</Text>
          </View>
        ) : (
          <View style={styles.errContainerEmpty} />
        )}

        <Button
          title={btnTitle}
          loading={loading}
          loadingProps={{size: 'small', color: colors.dark.WHITE}}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.btnTitleStyle}
          containerStyle={styles.btnContainerStyle}
          onPress={handleSubmit}
        />

        {title === 'Register' ? (
          <View style={styles.bottom}>
            <Text style={styles.titleBottom}>or,</Text>
            <TouchableOpacity
              onPress={handleLoginNav}
              style={styles.touchtitleBottomContainer}>
              <Text style={styles.touchtitleBottom}>Log In</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.bottom}>
            <Text style={styles.titleBottom}>or,</Text>
            <TouchableOpacity
              onPress={handleRegistrationNav}
              style={styles.touchtitleBottomContainer}>
              <Text style={styles.touchtitleBottom}>Create an account</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default AuthenticationForm;
