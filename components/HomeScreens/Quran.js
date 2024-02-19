import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/dimensions/fonts';
import {convert} from '../../assets/dimensions/dimensions';
import BottomSlider from '../BottomSlider/BottomSlider';
import BgBox from './Quran/BgBox';
import {Dropdown} from 'react-native-element-dropdown';
import DropDownPicker from '../DropDownPicker/DropDownPicker';
import {Input} from 'react-native-elements';
import RegularTarget from './Quran/RegularTarget';

const Quran = () => {
  const [target, setTarget] = useState(0);
  const data = [
    {label: 'Ayat', value: '1'},
    {label: 'Page', value: '2'},
    {label: 'Para', value: '3'},
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <BgBox title={'Regular Target'}>
          <RegularTarget
            isFocus={isFocus}
            data={data}
            value={value}
            setIsFocus={setIsFocus}
            setValue={setValue}
            target={target}
          />
        </BgBox>

        <BgBox title={'Last Read: '}></BgBox>
        <BgBox title={'Completed today: '}></BgBox>
      </View>

      <BottomSlider inputStyles={styles.bottomSlider} />
    </View>
  );
};

export default Quran;

const styles = StyleSheet.create({
  title: {color: colors.light.BLACK, fontSize: FontSize.secondaryTitle},
  bottomSlider: {
    position: 'absolute',
    bottom: 0,
  },
  container: {
    backgroundColor: colors.light.PRIMARY,
    width: convert(425),
    // backgroundColor: 'white',
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
});
