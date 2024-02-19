import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/dimensions/fonts';
import {convert} from '../../assets/dimensions/dimensions';
import BottomSlider from '../BottomSlider/BottomSlider';
import BgBox from './Quran/BgBox';
import RegularTarget from './Quran/RegularTarget';
import LastRead from './Quran/LastRead';

const Quran = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <BgBox title={'Regular Target'}>
        <RegularTarget placeholder={'ayat/page/para'} />
      </BgBox>

      <BgBox title={'Last Read'}>
        <LastRead placeholder={'Surah'} />
      </BgBox>

      <BgBox title={'Completed today'}></BgBox>

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
