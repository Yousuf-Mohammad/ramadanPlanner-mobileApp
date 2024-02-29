/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import {Button} from 'react-native-elements';
// functions
import {digitValidation} from '../../functions/validation';
// assets
import {SCREEN_HEIGHT, convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
import {FontSize} from '../../assets/fonts/fonts';
import {surahInfo} from '../../assets/constants/surahInfo';
// components
import BottomSlider from '../BottomSlider/BottomSlider';
import BgBox from './Quran/BgBox';
import RegularTarget from './Quran/RegularTarget';
import LastRead from './Quran/LastRead';
import CompletedToday from './Quran/CompletedToday';
// rtk-slices
import {
  useGetRecitationInfoQuery,
  useSetRecitationInfoMutation,
} from '../../redux-toolkit/features/recitationInfo/recitation-info-slice';
// import {getAuthToken} from '../../redux-toolkit/features/authentication/authToken';

const Quran = () => {
  // todo:perf: memoize other components, so that useState doesn't affect them all
  // const authToken = useSelector(getAuthToken);
  const [setRecitationInfo] = useSetRecitationInfoMutation();

  const {data = {}, error, isError, isLoading} = useGetRecitationInfoQuery();
  useEffect(() => {
    try {
      if (isError) {
        console.error('SCREEN:QURAN: get recitation error: ', error);
        setErr(error);
      }

      if (!isLoading) {
        console.log('SCREEN:QURAN: get recitation data: ', data);
      }
    } catch (issue) {
      console.error('SCREEN:QURAN: get recitation error: ', issue);
    }
  }, [isLoading, isError]);

  //* REGULAR TARGET
  const [regularTarget, setRegularTarget] = useState({
    unit: '',
    value: '',
  });

  //* LAST READ
  const [lastread, setLastread] = useState({
    unit: '',
    value: '',
  });

  //* COMPLETED TODAY
  const [today, setToday] = useState({
    unit: '',
    value: '',
  });

  const [err, setErr] = useState('');
  const handleError = info => {
    setErr(info);
  };

  const [loading, setLoading] = useState(false);
  function loadingHandler() {
    setLoading(prev => !prev);
  }

  function regularTargetDDPlaceholer() {
    return data.unit === '' ? 'ayat/page/para' : data.unit;
  }

  const regularTargetInputPlaceholer = () => {
    return data.target_value === null ? 'value' : data.target_value;
  };

  const lastReadDDPlaceholder = () => {
    let value = 'Surah';

    if (!(JSON.stringify(data) === '{}')) {
      surahInfo.map((i, idx) => {
        if (data.last_read_surah === idx + 1) {
          value = i.value;
        }
      });
    }

    return value;
  };

  const lastReadInputPlaceholer = () => {
    return data?.last_read_value === null ? 'Ayat no.' : data.last_read_value;
  };

  function completedTodayInputPlaceholder() {
    return data.completed_value === null ? 'value' : data.completed_value;
  }

  const handleRegularTargetErr = input => {
    // console.log('regular target: ', input);
    // console.log();
    // console.log();
    if (input.unit === '') {
      return false;
    }

    if (input.unit === null) {
      return false;
    }

    if (input.target_value === '') {
      return false;
    }

    if (input.target_value === null) {
      return false;
    }

    if (!digitValidation(input.target_value)) {
      return false;
    }

    if (input.unit === 'Ayat' && input.target_value > 286) {
      return false;
    }

    if (input.unit === 'Para' && input.target_value > 30) {
      return false;
    }

    return true;
  };

  const handleLastReadErr = input => {
    // console.log('last read: ', input);
    // console.log();
    // console.log();
    if (input.last_read_surah === '') {
      return false;
    }

    if (input.last_read_surah === null) {
      return false;
    }

    if (isNaN(input.last_read_surah)) {
      return false;
    }

    if (input.last_read_value === '') {
      return false;
    }

    if (input.last_read_value === null) {
      return false;
    }

    if (isNaN(input.last_read_value)) {
      return false;
    }

    let numOfAyats = null;

    surahInfo.map((i, idx) => {
      if (input.last_read_surah === idx + 1) {
        numOfAyats = i.ayats;
      }
    });

    if (parseInt(input.last_read_value, 10) > numOfAyats) {
      console.log('last read surah: ', lastread.unit, ' ayat: ', numOfAyats);
      return false;
    }

    return true;
  };

  const handleSetTodayErr = input => {
    // console.log('completed today: ', input);
    // console.log();
    // console.log();
    if (input.unit === '') {
      return false;
    }

    if (input.unit === null) {
      return false;
    }

    if (input.completed_value === '') {
      return false;
    }

    if (input.completed_value === null) {
      return false;
    }

    if (!digitValidation(input.completed_value)) {
      return false;
    }

    if (input.unit === 'Ayat' && input.completed_value > 286) {
      return false;
    }
    if (input.unit === 'Para' && input.completed_value > 30) {
      return false;
    }

    return true;
  };

  const inputError = input => {
    if (!handleRegularTargetErr(input)) {
      handleError('Invalid input in Regular Target Module');
      return true;
    }

    if (!handleLastReadErr(input)) {
      handleError('Invalid input in Last Read Module');
      return true;
    }

    if (!handleSetTodayErr(input)) {
      handleError('Invalid input in Comppleted Today Module');
      return true;
    }

    return false;
  };

  const handleSubmit = async () => {
    const input = {
      unit: regularTarget.unit ?? data.unit,
      last_read_surah: parseInt(lastread.unit ?? data.last_read_surah, 10),
      // todo: update last_read_value according to regular target value & completed today value
      last_read_value: parseInt(lastread.value ?? data.last_read_value, 10),
      target_value: parseInt(regularTarget.value ?? data.target_value, 10),
      completed_value: parseInt(today.value ?? data.completed_value, 10),
    };

    console.log('input: ', input);

    //* inputError -> true; error exists
    if (inputError(input)) {
      return;
    } else {
      handleError('');
    }

    // console.log(
    //   'isInputEmpty: ',
    //   isInputEmpty(parseInt(lastread.unit, 10), 'last_read_surah'),
    // );

    try {
      // console.log('SCREEN: QURAN: info: ', input);
      loadingHandler();
      const response = await setRecitationInfo(input);
      loadingHandler();
      // console.log('SCREEN:QURAN: set recitation info: ', response);

      if (response.error) {
        handleError('Error updating data');
        return;
      }

      if (response.data.message === 'Checklist updated') {
        handleError('Recitation tracker updated!');
      }
    } catch (issue) {
      console.error('SCREEN: QURAN: ERROR: ', issue);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
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
        <View style={styles.err.container}>
          <Text style={styles.err.msg}>{err}</Text>
        </View>
      ) : (
        <View style={styles.err.container} />
      )}

      <Button
        title={'+ ADD TARGET'}
        loading={loading}
        loadingProps={{size: 'small', color: colors.light.WHITE}}
        buttonStyle={styles.btn.buttonStyle}
        titleStyle={styles.btn.titleStyle}
        containerStyle={styles.btn.containerStyle}
        onPress={() => handleSubmit()}
      />

      <BottomSlider title={"Today's dua"} />
    </ScrollView>
  );
};

export default Quran;

const styles = StyleSheet.create({
  root: {
    height: SCREEN_HEIGHT - 210,
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderWidth: 1,
    // borderColor: 'black',
  },
  btn: {
    buttonStyle: {
      height: convert(150),
      width: convert(750),
      borderRadius: convert(50),
      backgroundColor: colors.light.PRIMARY,
      borderWidth: convert(10),
      borderColor: colors.light.ACCENT,
    },
    titleStyle: {
      fontWeight: 'bold',
      fontSize: FontSize.btnTitle,
      color: colors.light.WHITE,
    },
    containerStyle: {
      borderwidth: 4,
      borderColor: 'black',
    },
  },
  err: {
    msg: {
      color: colors.light.ERROR,
    },
    container: {
      width: convert(1000),
      alignItems: 'center',
      marginTop: convert(25),
      // borderWidth: 1,
      // borderColor: 'black',
    },
  },
});
