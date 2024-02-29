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

  const handleRegularTargetErr = () => {
    if (regularTarget.unit === null) {
      return false;
    }

    if (regularTarget.value === '') {
      return false;
    }

    if (!digitValidation(regularTarget.value)) {
      return false;
    }

    if (regularTarget.unit === 'Ayat' && regularTarget.value > 286) {
      return false;
    }
    if (regularTarget.unit === 'Para' && regularTarget.value > 30) {
      return false;
    }

    return true;
  };

  const handleLastReadErr = () => {
    if (lastread.unit.length === 0) {
      return false;
    }

    if (lastread.value === '') {
      return false;
    }

    let numOfAyats = 0;

    if (JSON.stringify(data) === '{}') {
      surahInfo.map((i, _idx) => {
        if (i.label === lastread.unit) {
          numOfAyats = i.ayats;
        }
      });
    } else {
      surahInfo.map((i, idx) => {
        if (data.last_read_surah === idx + 1) {
          numOfAyats = i.ayats;
        }
      });
    }

    if (parseInt(lastread.value, 10) > numOfAyats) {
      return false;
    }

    return true;
  };

  const handleSetTodayErr = () => {
    if (today.unit === false) {
      return false;
    }

    if (today.value === '') {
      return false;
    }

    if (!digitValidation(today.value)) {
      return false;
    }

    if (today.unit === 'Ayat' && today.value > 286) {
      return false;
    }
    if (today.unit === 'Para' && today.value > 30) {
      return false;
    }

    return true;
  };

  const inputError = () => {
    if (!handleRegularTargetErr()) {
      handleError('Invalid input in Regular Target Module');
      return true;
    }

    if (!handleLastReadErr()) {
      handleError('Invalid input in Last Read Module');
      return true;
    }

    if (!handleSetTodayErr()) {
      handleError('Invalid input in Comppleted Today Module');
      return true;
    }

    return false;
  };

  const handleSubmit = async () => {
    //* inputError -> true; error exists
    if (inputError()) {
      return;
    } else {
      handleError('');
    }

    const input = {
      unit: regularTarget.unit,
      last_read_surah: parseInt(lastread.unit, 10),
      // todo: update last_read_value according to regular target value & completed today value
      last_read_value: parseInt(lastread.value, 10),
      target_value: parseInt(regularTarget.value, 10),
      completed_value: parseInt(today.value, 10),
    };

    try {
      // console.log('SCREEN: QURAN: info: ', input);
      loadingHandler();
      const response = await setRecitationInfo(input);
      loadingHandler();
      console.log('SCREEN:QURAN: set recitation info: ', response);

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

  // todo: START HERE!
  // when last read is not updated because the placeholder is correct
  // but other values of data are updated, update data.last_read_unit with data.last_read_unit
  function lastReadDropDownPlaceholder() {
    let value = 0;

    surahInfo.map((i, idx) => {
      if (data.last_read_surah === idx + 1) {
        value = i.value;
      }
    });

    return value;
  }

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <BgBox title={'Regular Target'}>
        <RegularTarget
          dropDownPlaceholder={
            data?.unit === undefined ? 'ayat/page/para' : data.unit
          }
          inputPlaceholder={
            data?.target_value === undefined
              ? 'Regular Target'
              : data.target_value
          }
          setter={setRegularTarget}
        />
      </BgBox>

      <BgBox title={'Last Read'}>
        <LastRead
          dropDownPlaceholder={lastReadDropDownPlaceholder()}
          inputPlaceholder={data.last_read_value}
          setter={setLastread}
          data={surahInfo}
          initialValue={{
            unit: data.last_read_surah,
            value: data.last_read_value,
          }}
        />
      </BgBox>

      <BgBox title={'Completed today'}>
        <CompletedToday
          dropDownPlaceholder={
            data?.unit === undefined ? 'ayat/page/para' : data.unit
          }
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
