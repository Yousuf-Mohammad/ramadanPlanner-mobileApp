import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Button} from 'react-native-elements';
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
// reducers
import {getAuthToken} from '../../redux-toolkit/features/authentication/authToken';

const Quran = () => {
  // const authToken = useSelector(getAuthToken);
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

  const [error, setError] = useState('');
  const handleError = err => {
    setError(err);
  };

  const handleRegularTargetErr = () => {
    if (regularTarget.unit === 'Ayat' && regularTarget.value > 286) {
      return false;
    }
    if (regularTarget.unit === 'Para' && regularTarget.value > 30) {
      return false;
    }

    return true;
  };

  const handleLastReadErr = () => {
    let numOfAyats = 0;

    surahInfo.map((i, _idx) => {
      if (i.label === lastread.unit) {
        numOfAyats = i.ayats;
      }
    });

    if (parseInt(lastread.value, 10) > numOfAyats) {
      return false;
    }

    return true;
  };

  const handleSetTodayErr = () => {
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

  const handleSubmit = () => {
    // console.log('SCREEN:QURAN: AUTH_TOKEN: ', authToken);
    //* inputError -> true; error exists
    if (inputError()) {
      return;
    } else {
      handleError('');
    }
    // console.log('some code after validation');

    // todo: submit form data
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <BgBox title={'Regular Target'}>
        <RegularTarget
          placeholder={'ayat/page/para'}
          setter={setRegularTarget}
        />
      </BgBox>

      <BgBox title={'Last Read'}>
        <LastRead placeholder={'Surah'} setter={setLastread} data={surahInfo} />
      </BgBox>

      <BgBox title={'Completed today'}>
        <CompletedToday placeholder={'ayat/page/para'} setter={setToday} />
      </BgBox>

      {error !== '' ? (
        <View style={styles.err.errContainer}>
          <Text style={styles.err.msg}>{error}</Text>
        </View>
      ) : (
        <View style={styles.err.errContainer} />
      )}

      <Button
        title={'+ ADD TARGET'}
        loading={false}
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
    errContainer: {
      width: convert(1000),
      alignItems: 'center',
      marginTop: convert(25),
      // borderWidth: 1,
      // borderColor: 'black',
    },
  },
});
