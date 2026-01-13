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

const RegularTarget: React.FC<QuranInputProps> = ({
  dropDownPlaceholder,
  inputPlaceholder,
  setter,
}) => {
  const regularTargetRef = useRef<any>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState<any>(null);

  const dropdown = [
    {label: 'Ayat', value: 'Ayat'},
    {label: 'Page', value: 'Page'},
    {label: 'Para', value: 'Para'},
  ];

  useEffect(() => {
    setter(() => ({
      unit: value === null ? dropDownPlaceholder : value,
      value:
        regularTargetRef.current.value === '' ||
        regularTargetRef.current.value === undefined
          ? String(inputPlaceholder)
          : regularTargetRef.current.value,
    }));
  }, [value]);

  const onChangeText = (e: string) => {
    if (regularTargetRef.current) {
      regularTargetRef.current.value = e;
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
        data={dropdown}
        value={value}
        search={false}
        setIsFocus={setIsFocus}
        setValue={setValue}
        placeholder={dropDownPlaceholder}
      />

      <View style={styles.targetInputContainer}>
        <View style={styles.targetInput}>
          <Input
            keyboardType="number-pad"
            inputMode="numeric"
            maxLength={value === 'Para' ? 2 : 3}
            ref={regularTargetRef}
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
  },
  targetInputContainer: {
    marginHorizontal: convert(50),
    alignItems: 'center',
    flexDirection: 'row',
  },
  targetInput: {
    paddingTop: convert(50),
  },
});
