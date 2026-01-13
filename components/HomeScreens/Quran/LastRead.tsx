/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';
// components
import DropDownPicker from '../../DropDownPicker/DropDownPicker';
// assets
import {convert} from '../../../assets/dimensions/dimensions';
import {colors} from '../../../assets/colors/colors';
import {QuranInputProps} from '../../../libs/types/components';

const LastRead: React.FC<QuranInputProps> = ({
  dropDownPlaceholder,
  inputPlaceholder,
  setter,
  data,
}) => {
  const lastReadRef = useRef<any>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState<any>(null);

  useEffect(() => {
    //* finding surah index
    setter(() => {
      let lastReadUnit = null;

      if (data) {
        data.map((i, idx) => {
          if (i.value === value) {
            lastReadUnit = String(idx + 1); // Ensure string if unit expects string
          }
        });
      }

      return {
        unit: lastReadUnit ? String(lastReadUnit) : '', // Assuming unit is string
        value:
          lastReadRef.current?.value === '' ||
          lastReadRef.current?.value === undefined
            ? String(inputPlaceholder)
            : lastReadRef.current?.value,
      };
    });
  }, [value]);

  const onChangeText = (e: string) => {
    if (lastReadRef.current) {
      lastReadRef.current.value = e;
    }

    setter(prev => ({
      ...prev,
      value: e,
    }));
  };

  return (
    <View style={styles.root}>
      <DropDownPicker
        isFocus={isFocus}
        data={data || []}
        value={value}
        search={true}
        setIsFocus={setIsFocus}
        setValue={setValue}
        placeholder={dropDownPlaceholder}
        dropdownPosition={'top'}
      />

      <View style={styles.btnContainer}>
        <Input
          maxLength={3}
          inputMode="numeric"
          ref={lastReadRef}
          onChangeText={e => onChangeText(e)}
          placeholder={`${inputPlaceholder}`}
          inputContainerStyle={{
            width: convert(350),
            backgroundColor: colors.dark.PRIMARY,
          }}
          inputStyle={{
            color: colors.dark.CONTRAST,
          }}
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
    marginLeft: convert(35),
  },
  btnContainer: {
    marginTop: convert(35),
    marginHorizontal: convert(30),
  },
});
