import React from 'react';
import {StyleSheet, View} from 'react-native';
// assets
import {colors} from '../../assets/colors/colors';
import {convert} from '../../assets/dimensions/dimensions';
import {Dropdown} from 'react-native-element-dropdown';

const DropDownPicker = ({
  isFocus,
  data,
  value,
  search,
  setIsFocus,
  setValue,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && {borderColor: colors.light.PRIMARY},
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={styles.itemTextStyle}
        labelField="label"
        valueField="value"
        //   pass
        data={data}
        value={value}
        search={search}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder={placeholder}
        searchPlaceholder="Search..."
        maxHeight={300}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropDownPicker;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.light.PRIMARY,
    height: convert(150),
    width: convert(425),
    backgroundColor: 'transparent',
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
    color: colors.light.BLACK,
    height: 40,
    fontSize: 16,
  },
  itemTextStyle: {color: 'black'},
});
