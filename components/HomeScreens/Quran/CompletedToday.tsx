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

const CompletedToday: React.FC<QuranInputProps> = ({
  dropDownPlaceholder,
  inputPlaceholder,
  setter,
}) => {
  const lastReadRef = useRef<any>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState<any>(null);

  const data = [
    {label: 'Ayat', value: 'Ayat'},
    {label: 'Page', value: 'Page'},
    {label: 'Para', value: 'Para'},
  ];

  useEffect(() => {
    setter(() => ({
      unit: value === null ? dropDownPlaceholder : value,
      value:
        lastReadRef.current?.value === '' ||
        lastReadRef.current?.value === undefined
          ? String(inputPlaceholder)
          : lastReadRef.current?.value,
    }));
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
        data={data}
        value={value}
        search={false}
        setIsFocus={setIsFocus}
        setValue={setValue}
        placeholder={dropDownPlaceholder}
      />

      <View style={styles.btnContainer}>
        <Input
          maxLength={value === 'Para' ? 2 : 3}
          inputMode="numeric"
          ref={lastReadRef}
          onChangeText={e => onChangeText(e)}
          placeholder={`${
            dropDownPlaceholder === 'ayat/page/para'
              ? 'value'
              : inputPlaceholder
          }`}
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

export default CompletedToday;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: convert(900),
    justifyContent: 'center',
    marginLeft: convert(35),
  },
  btnContainer: {
    marginTop: convert(35),
    marginHorizontal: convert(30),
  },
});
