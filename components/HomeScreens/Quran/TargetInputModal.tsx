import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {colors} from '../../../assets/colors/colors';
import {convert} from '../../../assets/dimensions/dimensions';
import React, {useState} from 'react';
import DropDownPicker from '../../DropDownPicker/DropDownPicker';
import {surahInfo} from '../../../assets/constants/surahInfo';
import {Button} from 'react-native-elements';

import {
  AyatNumberMappings,
  DatePickerProps,
  InputRangeProps,
} from '../../../libs/types/models';
import DatePicker, {RangeOutput} from 'react-native-neat-date-picker';

interface TargetInputModal {
  isVisible: boolean;
  toggleModal: () => void;
}

export const TargetInputModal: React.FC<TargetInputModal> = ({
  isVisible,
  toggleModal,
}) => {
  const [isStartSurahNameFocus, setIsStartSurahNameFocus] =
    useState<boolean>(false);
  const [isStartAyatFocus, setIsStartAyatFocus] = useState<boolean>(false);
  const [isEndSurahNameFocus, setIsEndSurahNameFocus] =
    useState<boolean>(false);
  const [isEndAyatFocus, setIsEndAyatFocus] = useState<boolean>(false);
  const [startSurahValue, setStartSurahValue] = useState<string>('');
  const [endSurahValue, setEndSurahValue] = useState<string>('');
  const [startAyatValue, setStartAyatValue] = useState<string>('');
  const [endAyatValue, setEndAyatValue] = useState<string>('');

  const [showDatePickerRange, setShowDatePickerRange] = useState(false);
  const openDatePicker = () => setShowDatePickerRange(true);

  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const onCancelRange = () => {
    setShowDatePickerRange(false);
  };

  const onConfirmRange = (output: RangeOutput) => {
    setShowDatePickerRange(false);
    setStartDate(output.startDateString ?? '');
    setEndDate(output.endDateString ?? '');
  };

  function ayatNumberMapper(surahName: string): AyatNumberMappings[] {
    return surahInfo
      .filter((item: any) => item.label === surahName)
      .flatMap((item: any) => {
        let result: AyatNumberMappings[] = [];

        for (let i = 0; i < item.ayats; i++) {
          result.push({
            label: `${i + 1}`,
            value: i + 1,
          });
        }

        return result;
      });
  }

  const renderButton = (text: string, onPress: () => void) => (
    <Button
      title={text}
      loadingProps={{size: 'small', color: colors.dark.PRIMARY}}
      buttonStyle={styles.btnButtonStyle}
      titleStyle={styles.btnTitleStyle}
      onPress={() => onPress()}
    />
  );

  const renderDropDown: React.FC<InputRangeProps> = ({
    label,
    isSurahFocus,
    setIsSurahFocus,
    isAyatFocus,
    setIsAyatFocus,
    surahValue,
    setSurahValue,
    ayatValue,
    setAyatValue,
  }) => (
    <View style={styles.dropdownRoot}>
      <Text style={styles.dropdownLabel}>{label}</Text>

      <View style={styles.dropdownContainer}>
        <DropDownPicker
          isFocus={isSurahFocus}
          setIsFocus={setIsSurahFocus}
          data={surahInfo}
          value={surahValue}
          search={true}
          setValue={setSurahValue}
          placeholder={'Select Surah'}
        />

        <DropDownPicker
          disable={!surahValue}
          isFocus={isAyatFocus}
          setIsFocus={setIsAyatFocus}
          data={ayatNumberMapper(surahValue)}
          value={ayatValue}
          search={true}
          setValue={setAyatValue}
          placeholder={'Select Ayat'}
        />
      </View>
    </View>
  );

  const renderDatePicker: React.FC<DatePickerProps> = ({}) => (
    <View
      style={[styles.datePickerContainer, {flex: showDatePickerRange ? 1 : 0}]}>
      <DatePicker
        isVisible={showDatePickerRange}
        mode={'range'}
        onCancel={onCancelRange}
        onConfirm={onConfirmRange}
        withoutModal={false}
      />
    </View>
  );

  const renderAyatRangeDropDowns = () => (
    <>
      {/* start range */}
      {renderDropDown({
        label: 'Start Range',
        isSurahFocus: isStartSurahNameFocus,
        setIsSurahFocus: setIsStartSurahNameFocus,
        surahValue: startSurahValue,
        setSurahValue: setStartSurahValue,
        isAyatFocus: isStartAyatFocus,
        setIsAyatFocus: setIsStartAyatFocus,
        ayatValue: startAyatValue,
        setAyatValue: setStartAyatValue,
      })}

      <View style={styles.divider} />

      {/* end range */}
      {renderDropDown({
        label: 'End Range',
        isSurahFocus: isEndSurahNameFocus,
        setIsSurahFocus: setIsEndSurahNameFocus,
        surahValue: endSurahValue,
        setSurahValue: setEndSurahValue,
        isAyatFocus: isEndAyatFocus,
        setIsAyatFocus: setIsEndAyatFocus,
        ayatValue: endAyatValue,
        setAyatValue: setEndAyatValue,
      })}
    </>
  );

  const renderModalContent = () => (
    <View style={[styles.modalContent, {flex: showDatePickerRange ? 1 : 0}]}>
      {renderAyatRangeDropDowns()}
      <View style={{height: convert(50)}} />
      {!showDatePickerRange && !startDate && (
        <Button
          title={'Select Date Range'}
          onPress={openDatePicker}
          titleStyle={styles.dateBtnTitle}
          buttonStyle={styles.dateBtn}
        />
      )}
      {!showDatePickerRange && startDate && (
        <TouchableOpacity
          onPress={openDatePicker}
          style={[
            styles.dateBtn,
            {
              backgroundColor: colors.dark.PRIMARY,
              borderWidth: 2,
              borderColor: colors.dark.CONTRAST,
            },
          ]}>
          <Text style={[styles.dateBtnTitle, {color: colors.dark.CONTRAST}]}>
            {startDate}.........{endDate}
          </Text>
        </TouchableOpacity>
      )}
      {renderDatePicker({})}
      {renderButton('Select', () => toggleModal())}
    </View>
  );

  return (
    <View style={styles.root}>
      <Modal
        isVisible={isVisible}
        onBackdropPress={toggleModal}
        style={styles.bottomModal}>
        {renderModalContent()}
        {/* {renderDatePicker({})} */}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: convert(800),
    marginVertical: convert(50),
    borderWidth: 0.5,
    borderColor: colors.dark.CONTRAST,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  modalContent: {
    backgroundColor: colors.dark.PRIMARY,
    padding: convert(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: convert(50),
    borderTopRightRadius: convert(50),
  },
  bottomModal: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  btnButtonStyle: {
    height: convert(100),
    width: convert(890),
    marginBottom: convert(58),
    borderRadius: convert(25),
    backgroundColor: colors.dark.CONTRAST,
    marginTop: convert(75),
  },
  btnTitleStyle: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.PRIMARY,
  },
  dropdownRoot: {
    paddingVertical: convert(25),
  },
  dropdownLabel: {
    color: colors.dark.CONTRAST,
    fontFamily: 'Montserrat-SemiBold',
    left: convert(50),
  },
  dropdownContainer: {
    flexDirection: 'row',
  },
  datePickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateBtnTitle: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.PRIMARY,
    minHeight: convert(50),
  },
  dateBtn: {
    height: convert(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: convert(25),
    marginHorizontal: convert(7),
    marginVertical: convert(22),
    backgroundColor: colors.dark.CONTRAST,
    paddingHorizontal: convert(100),
  },
});
