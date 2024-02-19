import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
// components
import DropDownPicker from '../../DropDownPicker/DropDownPicker';
// assets
import {convert} from '../../../assets/dimensions/dimensions';
import {colors} from '../../../assets/colors/colors';
import {FontSize} from '../../../assets/dimensions/fonts';
import {Input} from 'react-native-elements';

const RegularTarget = ({placeholder}) => {
  const data = [
    {label: 'Ayat', value: 'Ayat'},
    {label: 'Page', value: 'Page'},
    {label: 'Para', value: 'Para'},
  ];
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const lastReadRef = useRef(null);

  // const [target, setTarget] = useState(0);

  // const increment = () => {
  //   // lastReadRef.current.value += 1;
  //   setTarget(prev => prev + 1);
  // };
  // const decrement = () => {
  //   setTarget(prev => prev - 1);
  //   // lastReadRef.current.value -= 1;
  // };

  // todo: validate input like , .
  const onChangeText = e => {
    lastReadRef.current.value = e;
  };

  return (
    <View style={styles.root}>
      <DropDownPicker
        isFocus={isFocus}
        data={data}
        value={value}
        search={false}
        setIsFocus={setIsFocus}
        setValue={setValue}
        placeholder={placeholder}
      />

      <View style={styles.targetInputContainer}>
        {/* <TouchableOpacity style={styles.btn} onPress={decrement}>
          <Text style={styles.btn.symbol}>-</Text>
        </TouchableOpacity> */}

        <View style={styles.targetInput}>
          <Input
            keyboardType="number-pad"
            inputMode="numeric"
            maxLength={value === 'Para' ? 2 : 3}
            ref={lastReadRef}
            onChangeText={e => onChangeText(e)}
            placeholder={'0'}
            placeholderStyle={{color: colors.light.BLACK}}
            inputContainerStyle={{
              width: convert(350),
              backgroundColor: colors.light.WHITE,
              // borderWidth: 1,
              // borderColor: 'yellow',
            }}
            // errorStyle={styles.error}
            // errorMessage={errorMessage ? errorMessage : ''}
          />
        </View>

        {/* <TouchableOpacity style={styles.btn} onPress={increment}>
          <Text style={styles.btn.symbol}>+</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default RegularTarget;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: convert(900),
    justifyContent: 'space-between',
    marginLeft: convert(35),
    // borderWidth: 1,
    // borderColor: 'black',
  },
  title: {color: colors.light.BLACK, fontSize: FontSize.secondaryTitle},
  bottomSlider: {
    position: 'absolute',
    bottom: 0,
  },
  container: {
    backgroundColor: colors.light.PRIMARY,
    width: convert(425),
    padding: 16,
  },

  containerStyle: {
    color: 'black',
  },
  dropdown: {
    backgroundColor: colors.light.WHITE,
    // width: convert(300),
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: convert(10),
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    color: 'black',
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  itemTextStyle: {color: 'black'},
  btn: {
    symbol: {
      color: colors.light.BLACK,
      fontSize: FontSize.dateTxt,
    },
    height: convert(100),
    width: convert(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: convert(50),
    backgroundColor: colors.light.WHITE,
  },
  targetInputContainer: {
    marginHorizontal: convert(50),
    alignItems: 'center',
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  targetValContainer: {
    width: convert(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  targetVal: {
    fontSize: FontSize.secondaryTitle,
    color: colors.light.WHITE,
  },
  targetInput: {
    // width: convert(350),
    paddingTop: convert(50),
    // borderWidth: 1,
    // borderColor: 'red',
  },
});
