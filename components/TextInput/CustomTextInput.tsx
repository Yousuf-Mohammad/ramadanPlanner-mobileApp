import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle, TextStyle} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// assets
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/fonts/fonts';

export interface CustomTextInputProps {
  refProp: any;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  errorStyles?: TextStyle;
  errorMessage?: string;
  hint?: string;
  hidden?: boolean;
  eyePressHandler?: () => void;
  rightIcon?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  refProp,
  value,
  defaultValue,
  placeholder,
  maxLength,
  errorStyles,
  errorMessage,
  hint,
  hidden,
  eyePressHandler,
  rightIcon,
}) => {
  const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      marginVertical: convert(25),

      // borderWidth: 1,
      // borderColor: 'red',
    },
    containerStyle: {
      height: convert(120),
      width: convert(800),
      borderRadius: convert(75),
      borderWidth: 1,
      borderColor: colors.dark.CONTRAST,
      opacity: 0.7,
      backgroundColor: 'rgba(255,255,355,0.25)',
      // backgroundColor: 'white',
      // borderColor: 'red',
    },
    inputContainerStyle: {
      height: convert(117),
      borderRadius: convert(100),

      // borderWidth: 1,
      // borderColor: 'green',
    },
    inputStyle: {
      height: convert(120),
      marginHorizontal: convert(25),
      borderRadius: convert(100),
      color: colors.dark.CONTRAST,
      fontFamily: 'Montserrat-Light',

      // borderWidth: 1,
      // borderColor: 'blue',
    },
    hintContainer: {
      width: convert(700),
    },
    hintTxt: {
      fontFamily: 'Montserrat-Regular',
      marginTop: convert(5),
      marginBottom: convert(-30),
      fontSize: FontSize.hint,
      color: colors.dark.CONTRAST,
      opacity: 0.5,
    },
    eye: {
      height: convert(100),
      width: convert(100),
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      // borderColor: 'red',
    },
  });

  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => refProp.current.focus()}
      activeOpacity={1}>
      <Input
        ref={refProp}
        value={value ?? undefined}
        defaultValue={defaultValue ?? undefined}
        // onPressIn={() => console.log('first')}
        inputStyle={styles.inputStyle}
        placeholder={`${placeholder}`}
        maxLength={maxLength}
        onChangeText={e => (refProp.current.value = e)}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        errorStyle={errorStyles}
        errorMessage={errorMessage}
        secureTextEntry={hidden}
        rightIcon={
          rightIcon ? (
            <>
              {hidden ? (
                <TouchableOpacity
                  onPress={() => eyePressHandler?.()}
                  style={styles.eye}>
                  <Icon
                    name="eye-slash"
                    size={FontSize.semiMedium}
                    color={colors.dark.CONTRAST}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => eyePressHandler?.()}
                  style={styles.eye}>
                  <Icon
                    name="eye"
                    size={FontSize.semiMedium}
                    color={colors.dark.WARNING}
                  />
                </TouchableOpacity>
              )}
            </>
          ) : (
            <></>
          )
        }
      />
      {hint ? (
        <View style={styles.hintContainer}>
          <Text style={styles.hintTxt}>{hint}</Text>
        </View>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default CustomTextInput;
