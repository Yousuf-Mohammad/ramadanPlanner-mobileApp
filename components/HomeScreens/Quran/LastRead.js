import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';
// components
import DropDownPicker from '../../DropDownPicker/DropDownPicker';
// assets
import {convert} from '../../../assets/dimensions/dimensions';
import {colors} from '../../../assets/colors/colors';
import {FontSize} from '../../../assets/dimensions/fonts';

const LastRead = ({placeholder}) => {
  const data = [
    {label: 'Al-Fatiha', value: 'Al-Fatiha'},
    {label: 'Al-Baqarah', value: 'Al-Baqarah'},
    {label: 'Al-Imran', value: 'Al-Imran'},
    {label: 'An-Nisa', value: 'An-Nisa'},
    {label: 'Al-Maidah', value: 'Al-Maidah'},
    {label: 'Al-Anam', value: 'Al-Anam'},
    {label: 'Al-Araf', value: 'Al-Araf'},
    {label: 'Al-Anfal', value: 'Al-Anfal'},
    {label: 'At-Tawbah', value: 'At-Tawbah'},
    {label: 'Yunus', value: 'Yunus'},
    {label: 'Hud', value: 'Hud'},
    {label: 'Yusuf', value: 'Yusuf'},
    {label: 'Ar-Rad', value: 'Ar-Rad'},
    {label: 'Ibrahim', value: 'Ibrahim'},
    {label: 'Al-Hijr', value: 'Al-Hijr'},
    {label: 'An-Nahl', value: 'An-Nahl'},
    {label: 'Al-Isra', value: 'Al-Isra'},
    {label: 'Al-Kahf', value: 'Al-Kahf'},
    {label: 'Maryam', value: 'Maryam'},
    {label: 'Ta-Ha', value: 'Ta-Ha'},
    {label: 'Al-Anbiya', value: 'Al-Anbiya'},
    {label: 'Al-Hajj', value: 'Al-Hajj'},
    {label: "Al-Mu'minun", value: "Al-Mu'minun"},
    {label: 'An-Nur', value: 'An-Nur'},
    {label: 'Al-Furqan', value: 'Al-Furqan'},
    {label: 'Ash-Shuara', value: 'Ash-Shuara'},
    {label: 'An-Naml', value: 'An-Naml'},
    {label: 'Al-Qasas', value: 'Al-Qasas'},
    {label: 'Al-Ankabut', value: 'Al-Ankabut'},
    {label: 'Ar-Rum', value: 'Ar-Rum'},
    {label: 'Luqman', value: 'Luqman'},
    {label: 'As-Sajda', value: 'As-Sajda'},
    {label: 'Al-Ahzab', value: 'Al-Ahzab'},
    {label: 'Saba', value: 'Saba'},
    {label: 'Fatir', value: 'Fatir'},
    {label: 'Ya-Sin', value: 'Ya-Sin'},
    {label: 'As-Saffat', value: 'As-Saffat'},
    {label: 'Sad', value: 'Sad'},
    {label: 'Az-Zumar', value: 'Az-Zumar'},
    {label: 'Ghafir', value: 'Ghafir'},
    {label: 'Fussilat', value: 'Fussilat'},
    {label: 'Ash-Shura', value: 'Ash-Shura'},
    {label: 'Az-Zukhruf', value: 'Az-Zukhruf'},
    {label: 'Ad-Dukhan', value: 'Ad-Dukhan'},
    {label: 'Al-Jathiyah', value: 'Al-Jathiyah'},
    {label: 'Al-Ahqaf', value: 'Al-Ahqaf'},
    {label: 'Muhammad', value: 'Muhammad'},
    {label: 'Al-Fath', value: 'Al-Fath'},
    {label: 'Al-Hujurat', value: 'Al-Hujurat'},
    {label: 'Qaf', value: 'Qaf'},
    {label: 'Adh-Dhariyat', value: 'Adh-Dhariyat'},
    {label: 'At-Tur', value: 'At-Tur'},
    {label: 'An-Najm', value: 'An-Najm'},
    {label: 'Al-Qamar', value: 'Al-Qamar'},
    {label: 'Ar-Rahman', value: 'Ar-Rahman'},
    {label: "Al-Waqi'ah", value: "Al-Waqi'ah"},
    {label: 'Al-Hadid', value: 'Al-Hadid'},
    {label: 'Al-Mujadila', value: 'Al-Mujadila'},
    {label: 'Al-Hashr', value: 'Al-Hashr'},
    {label: 'Al-Mumtahanah', value: 'Al-Mumtahanah'},
    {label: 'As-Saff', value: 'As-Saff'},
    {label: "Al-Jumu'ah", value: "Al-Jumu'ah"},
    {label: 'Al-Munafiqun', value: 'Al-Munafiqun'},
    {label: 'At-Taghabun', value: 'At-Taghabun'},
    {label: 'At-Talaq', value: 'At-Talaq'},
    {label: 'At-Tahrim', value: 'At-Tahrim'},
    {label: 'Al-Mulk', value: 'Al-Mulk'},
    {label: 'Al-Qalam', value: 'Al-Qalam'},
    {label: 'Al-Haqqah', value: 'Al-Haqqah'},
    {label: "Al-Ma'arij", value: "Al-Ma'arij"},
    {label: 'Nuh', value: 'Nuh'},
    {label: 'Al-Jinn', value: 'Al-Jinn'},
    {label: 'Al-Muzzammil', value: 'Al-Muzzammil'},
    {label: 'Al-Muddathir', value: 'Al-Muddathir'},
    {label: 'Al-Qiyamah', value: 'Al-Qiyamah'},
    {label: 'Al-Insan', value: 'Al-Insan'},
    {label: 'Al-Mursalat', value: 'Al-Mursalat'},
    {label: 'An-Naba', value: 'An-Naba'},
    {label: "An-Nazi'at", value: "An-Nazi'at"},
    {label: 'Abasa', value: 'Abasa'},
    {label: 'At-Takwir', value: 'At-Takwir'},
    {label: 'Al-Infitar', value: 'Al-Infitar'},
    {label: 'Al-Mutaffifin', value: 'Al-Mutaffifin'},
    {label: 'Al-Inshiqaq', value: 'Al-Inshiqaq'},
    {label: 'Al-Buruj', value: 'Al-Buruj'},
    {label: 'At-Tariq', value: 'At-Tariq'},
    {label: "Al-A'la", value: "Al-A'la"},
    {label: 'Al-Ghashiyah', value: 'Al-Ghashiyah'},
    {label: 'Al-Fajr', value: 'Al-Fajr'},
    {label: 'Al-Balad', value: 'Al-Balad'},
    {label: 'Ash-Shams', value: 'Ash-Shams'},
    {label: 'Al-Lail', value: 'Al-Lail'},
    {label: 'Ad-Duha', value: 'Ad-Duha'},
    {label: 'Ash-Sharh', value: 'Ash-Sharh'},
    {label: 'At-Tin', value: 'At-Tin'},
    {label: 'Al-Alaq', value: 'Al-Alaq'},
    {label: 'Al-Qadr', value: 'Al-Qadr'},
    {label: 'Al-Bayyinah', value: 'Al-Bayyinah'},
    {label: 'Az-Zalzalah', value: 'Az-Zalzalah'},
    {label: 'Al-Adiyat', value: 'Al-Adiyat'},
    {label: "Al-Qari'ah", value: "Al-Qari'ah"},
    {label: 'At-Takathur', value: 'At-Takathur'},
    {label: 'Al-Asr', value: 'Al-Asr'},
    {label: 'Al-Humazah', value: 'Al-Humazah'},
    {label: 'Al-Fil', value: 'Al-Fil'},
    {label: 'Quraish', value: 'Quraish'},
    {label: "Al-Ma'un", value: "Al-Ma'un"},
    {label: 'Al-Kawthar', value: 'Al-Kawthar'},
    {label: 'Al-Kafirun', value: 'Al-Kafirun'},
    {label: 'An-Nasr', value: 'An-Nasr'},
    {label: 'Al-Masad', value: 'Al-Masad'},
    {label: 'Al-Ikhlas', value: 'Al-Ikhlas'},
    {label: 'Al-Falaq', value: 'Al-Falaq'},
    {label: 'An-Nas', value: 'An-Nas'},
  ];

  const lastReadRef = useRef(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(false);

  return (
    <View style={styles.root}>
      <DropDownPicker
        isFocus={isFocus}
        data={data}
        value={value}
        search={true}
        setIsFocus={setIsFocus}
        setValue={setValue}
        placeholder={placeholder}
      />

      <View style={styles.btnContainer}>
        <Input
          maxLength={3}
          inputMode="numeric"
          ref={lastReadRef}
          onChangeText={e => (lastReadRef.current.value = e)}
          placeholder="Last Read Ayat"
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
    </View>
  );
};

export default LastRead;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: convert(900),
    // justifyContent: 'space-between',
    // alignItems: 'center',
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
    marginTop: convert(35),
    marginHorizontal: convert(30),
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
