import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// components
import DropDownPicker from '../../DropDownPicker/DropDownPicker';
// assets
import {convert} from '../../../assets/dimensions/dimensions';
import {colors} from '../../../assets/colors/colors';
import {FontSize} from '../../../assets/dimensions/fonts';

const RegularTarget = ({
  isFocus,
  data,
  value,
  search,
  setIsFocus,
  setValue,
  target,
}) => {
  return (
    <>
      <View style={styles.root}>
        <DropDownPicker
          isFocus={isFocus}
          data={data}
          value={value}
          search={false}
          setIsFocus={setIsFocus}
          setValue={setValue}
        />

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn.symbol}>-</Text>
          </TouchableOpacity>

          <View style={styles.targetValContainer}>
            <Text style={styles.targetVal}>{target}</Text>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn.symbol}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
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
  btnContainer: {
    marginHorizontal: convert(50),
    alignItems: 'center',
    justifyContent: 'center',
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
});
