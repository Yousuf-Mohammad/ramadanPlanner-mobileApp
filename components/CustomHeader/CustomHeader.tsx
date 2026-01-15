/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
// asstes
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
// components
import DateCircle from './DateCircle';
import TopRightContainer from './TopRightContainer';
import SalahTimings from './SalahTimings';
// functions
import {hijriDate} from '../../functions/HijriDate';
import {
  getTimeNLocation,
  LocationData,
} from '../../functions/CurrentTimeNLocation';
// rtk-slices
import {setArabicDate} from '../../redux-toolkit/features/arabic-date/arabicDate';
import LogoutBtn from '../Buttons/LogoutBtn';
import {Button} from 'react-native-elements';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

const CustomHeader: React.FC = () => {
  const [expand, setExpand] = useState<boolean>(false);
  const headerHeight = 100;
  const maxHeaderHeight = 280;
  const header = useSharedValue(headerHeight);
  const [timeNLocation, setTimeNLocation] = useState<LocationData>({
    location: {
      city: '',
    },
    time: {
      seheriIftarTimes: {
        seheri: {
          hour: '',
          minute: '',
        },
        iftar: {
          hour: '',
          minute: '',
        },
      },
      prayerTimes: {
        fajr: {
          hour: '',
          minute: '',
        },
        duhr: {
          hour: '',
          minute: '',
        },
        asr: {
          hour: '',
          minute: '',
        },
        magrib: {
          hour: '',
          minute: '',
        },
        isha: {
          hour: '',
          minute: '',
        },
      },
    },
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const hijriDateToday = hijriDate();
    dispatch(setArabicDate(hijriDateToday));
    getTimeNLocation(setTimeNLocation);
  }, []);

  useEffect(() => {
    header.value = withTiming(expand ? maxHeaderHeight : headerHeight, {
      duration: 500,
    });
  }, [expand]);

  const allSalahTimings = [
    {
      startTime: `${timeNLocation.time.prayerTimes.fajr.hour} : ${timeNLocation.time.prayerTimes.fajr.minute}`,
      meridiem: 'AM',
      icon: 'sunrise',
      name: 'Fajr',
    },
    {
      startTime: `${timeNLocation.time.prayerTimes.duhr.hour} : ${timeNLocation.time.prayerTimes.duhr.minute}`,
      meridiem: 'PM',
      icon: 'sun',
      name: "Duh'r",
    },
    {
      startTime: `${timeNLocation.time.prayerTimes.asr.hour} : ${timeNLocation.time.prayerTimes.asr.minute}`,
      meridiem: 'PM',
      icon: 'sunset',
      name: 'Asr',
    },
    {
      startTime: `${timeNLocation.time.seheriIftarTimes.iftar.hour} : ${timeNLocation.time.seheriIftarTimes.iftar.minute}`,
      meridiem: 'PM',
      icon: 'moon',
      name: 'Magrib',
    },
    {
      startTime: `${timeNLocation.time.prayerTimes.isha.hour} : ${timeNLocation.time.prayerTimes.isha.minute}`,
      meridiem: 'PM',
      icon: 'moon',
      name: 'Isha',
    },
  ];

  const rootAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: header.value,
    };
  });

  const contentAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        header.value,
        [headerHeight, maxHeaderHeight],
        [0, 1],
        Extrapolation.CLAMP,
      ),
      height: interpolate(
        header.value,
        [headerHeight, maxHeaderHeight],
        [0, 180], 
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          translateY: interpolate(
            header.value,
            [headerHeight, maxHeaderHeight],
            [-20, 0],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  

  return (
    <Animated.View style={[styles.root, rootAnimatedStyle]}>
      <LinearGradient
        style={styles.gradient}
        colors={[colors.dark.GRADIENT_START, colors.dark.GRADIENT_END]}>
        <View style={styles.timedate}>
          <DateCircle date={hijriDate()} />

          <TopRightContainer
            seheri={timeNLocation.time.seheriIftarTimes.seheri}
            iftar={timeNLocation.time.seheriIftarTimes.iftar}
            city={timeNLocation.location.city}
          />
        </View>

        <Animated.View style={[styles.contentContainer, contentAnimatedStyle]}>
          <View style={styles.salahtime}>
            {allSalahTimings.map((i, idx) => {
              return (
                <SalahTimings
                  key={idx}
                  meridiem={i.meridiem}
                  startTime={i.startTime}
                  icon={i.icon}
                  name={i.name}
                />
              );
            })}
          </View>

          <LogoutBtn />
        </Animated.View>

        <Animated.View style={styles.btnContainer}>
          <Button
            buttonStyle={styles.btn}
            titleStyle={styles.btnTxt}
            title={expand ? 'Hide' : 'Show Salat Times'}
            onPress={() => {
              setExpand(prev => !prev);
            }}
          />
        </Animated.View>
      </LinearGradient>
    </Animated.View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  root: {
    borderBottomLeftRadius: convert(50),
    borderBottomRightRadius: convert(50),

    borderWidth: 1,
    borderColor: 'blue',
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    borderBottomLeftRadius: convert(50),
    borderBottomRightRadius: convert(50),
  },
  timedate: {
    height: convert(200),
    width: convert(1000),
    paddingRight: convert(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  salahtime: {
    width: convert(1000),
    flexDirection: 'row',
    paddingHorizontal: convert(25),
    backgroundColor: 'transparent',
  },
  btn: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: null,
    height: convert(50),
    minWidth: convert(300),
    marginTop: convert(25),
    marginHorizontal: convert(30),
    borderRadius: convert(50),
    backgroundColor: colors.dark.ACCENT,
  },
  btnTxt: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.dark.WHITE,
    fontSize: convert(25),
  },
  btnContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: convert(20),
    width: '100%',
  },
});
