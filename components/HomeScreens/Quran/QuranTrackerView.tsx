import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
// rtk-slices
import {useSetRecitationInfoMutation} from '../../../redux-toolkit/features/recitation-Info/recitation-info-slice';
import {getArabicDate} from '../../../redux-toolkit/features/arabic-date/arabicDate';
// functions
import {inputError} from '../../../functions/validations/recitationValidation';
import {convert} from '../../../assets/dimensions/dimensions';
// assets
import {surahInfo} from '../../../assets/constants/surahInfo';
import {colors} from '../../../assets/colors/colors';
// components
import CompletedToday from './CompletedToday';
import BgBox from './BgBox';
import LastRead from './LastRead';
import RegularTarget from './RegularTarget';

import {RecitationInfo} from '../../../libs/types/models';

interface QuranTrackerViewProps {
  data: RecitationInfo;
}

const QuranTrackerView: React.FC<QuranTrackerViewProps> = ({data}) => {
  const day = useSelector(getArabicDate);
  const [setRecitationInfo] = useSetRecitationInfoMutation();

  const [regularTarget, setRegularTarget] = useState({
    unit: '',
    value: '',
  });

  const [lastread, setLastread] = useState({
    unit: '',
    value: '',
  });

  const [today, setToday] = useState({
    unit: '',
    value: '',
  });

  const [err, setErr] = useState('');
  const handleError = (info: string) => {
    setErr(info);
  };

  const [loading, setLoading] = useState(false);
  function loadingHandler() {
    setLoading(prev => !prev);
  }

  function regularTargetDDPlaceholer() {
    return data.unit ? data.unit : 'ayat/page/para';
  }

  const regularTargetInputPlaceholer = () => {
    return data.target_value ? data.target_value.toString() : 'value';
  };

  const lastReadDDPlaceholder = () => {
    let value = 'Surah';

    if (data && Object.keys(data).length > 0 && data.last_read_surah) {
      surahInfo.map((i, idx) => {
        if (data.last_read_surah === idx + 1) {
          value = i.value;
        }
      });
    }

    return value;
  };

  const lastReadInputPlaceholer = () => {
    return data.last_read_value ? data.last_read_value.toString() : 'Ayat no.';
  };

  function completedTodayInputPlaceholder() {
    return data.completed_value ? data.completed_value.toString() : 'value';
  }

  const handleSubmit = async () => {
    const input = {
      unit: regularTarget.unit ?? data.unit,
      last_read_surah: parseInt(lastread.unit ?? data.last_read_surah, 10),
      // todo: update last_read_value according to regular target value & completed today value
      last_read_value: parseInt(lastread.value ?? data.last_read_value, 10),
      target_value: parseInt(regularTarget.value ?? data.target_value, 10),
      completed_value: parseInt(today.value ?? data.completed_value, 10),
    };

    // console.log('input: ', input);

    if (inputError(input, handleError)) {
      return;
    } else {
      handleError('');
    }

    try {
      // console.log('SCREEN: QURAN: info: ', input);
      loadingHandler();
      const response = await setRecitationInfo({
        data: input,
        year: day.year,
        month: day.monthNumber,
        day: day.day,
      });
      loadingHandler();
      // console.log('SCREEN:QURAN: set recitation info: ', response);

      if ('error' in response) {
        handleError('Error updating data');
        return;
      }

      if (response.data && response.data.message === 'Checklist updated') {
        handleError('Recitation tracker updated!');
      }
    } catch (issue) {
      console.error('SCREEN: QURAN: ERROR: ', issue);
    }
  };

  useEffect(() => {
    let duration = 3500;

    const timeout = setTimeout(() => {
      setErr('');
    }, duration);

    return () => clearTimeout(timeout);
  }, [err]);

  return (
    <View style={styles.root}>
      <BgBox title={'Regular Target'}>
        <RegularTarget
          dropDownPlaceholder={regularTargetDDPlaceholer()}
          inputPlaceholder={regularTargetInputPlaceholer()}
          setter={setRegularTarget}
        />
      </BgBox>

      <BgBox title={'Last Read'}>
        <LastRead
          dropDownPlaceholder={lastReadDDPlaceholder()}
          inputPlaceholder={lastReadInputPlaceholer()}
          setter={setLastread}
          data={surahInfo}
        />
      </BgBox>

      <BgBox title={'Completed today'}>
        <CompletedToday
          dropDownPlaceholder={regularTargetDDPlaceholer()}
          inputPlaceholder={completedTodayInputPlaceholder()}
          setter={setToday}
        />
      </BgBox>

      {err !== '' ? (
        <View style={styles.errContainer}>
          <Text style={styles.errMsg}>{err}</Text>
        </View>
      ) : (
        <View style={styles.errContainer} />
      )}

      <Button
        title={'+ ADD TARGET'}
        loading={loading}
        loadingProps={{size: 'small', color: colors.dark.PRIMARY}}
        buttonStyle={styles.btnButtonStyle}
        titleStyle={styles.btnTitleStyle}
        containerStyle={styles.btnContainerStyle}
        onPress={() => handleSubmit()}
      />
    </View>
  );
};

export default QuranTrackerView;

const styles = StyleSheet.create({
  root: {
    width: convert(950),
    alignItems: 'center',
    paddingTop: convert(25),
    borderRadius: convert(25),
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  btnButtonStyle: {
    height: convert(100),
    width: convert(890),
    marginBottom: convert(58),
    borderRadius: convert(25),
    backgroundColor: colors.dark.CONTRAST,
    // borderWidth: convert(10),
    // borderColor: colors.dark.ACCENT,
  },
  btnTitleStyle: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.PRIMARY,
  },
  btnContainerStyle: {
    // any style needed
  },
  errMsg: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.ERROR,
  },
  errContainer: {
    height: convert(80),
    width: convert(1000),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
});
