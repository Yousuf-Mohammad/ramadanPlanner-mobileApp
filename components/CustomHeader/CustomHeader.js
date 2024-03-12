/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// asstes
import {convert} from '../../assets/dimensions/dimensions';
import {colors} from '../../assets/colors/colors';
// functions
import {CURRENT_DATE} from '../../functions/InternationalDate/InternationalDate';
import {getSuntimings} from '../../functions/Astronomicaltime/astronomicaltime';
// rtk-slices
import {
  getArabicDate,
  setArabicDate,
} from '../../redux-toolkit/features/arabic-date/arabicDate';
import {useGetArabicDateQuery} from '../../redux-toolkit/features/arabic-date/arabic-date-slice';
// components
import DateCircle from './DateCircle';
import TopRightContainer from './TopRightContainer';
import SalahTimings from './SalahTimings';
import {getPrayerTimes} from '../../functions/timeNLocation.time.prayerTimes';
import LinearGradient from 'react-native-linear-gradient';
import {getCityName} from '../../functions/RevGeoCoding';
import {geoLocationIssue} from '../../functions/IsolatingIssue';
import {hijriDate} from '../../functions/HijriDate';
import {getTimeNLocation} from '../../functions/CurrentTimeNLocation';

const CustomHeader = () => {
  const dispatch = useDispatch();
  // const day = useSelector(getArabicDate);
  // const [date, setDate] = useState('');
  // todo: date coming directly, check if this is okay
  //* getting arabic date
  // const {
  //   data: outerData = {},
  //   isError,
  //   error,
  //   isLoading,
  // } = useGetArabicDateQuery(CURRENT_DATE);
  // // todo: call once and calculate whole month -> dates and timings
  // const {hijri = ''} = outerData?.data ?? {};

  // const [time, setTime] = useState({sunrise: '', sunset: ''});
  // const [timeNLocation.time.prayerTimes, setPrayerTimes] = useState({});
  // const [city, setCity] = useState('');
  const [timeNLocation, setTimeNLocation] = useState({
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

  useEffect(() => {
    // (async () => {
    // getCityName(setCity);
    // await geoLocationIssue();
    // getPrayerTimes(setPrayerTimes);
    // })();
    getTimeNLocation(setTimeNLocation);
  }, []);

  // console.log('city in HEADER: ', city);

  useEffect(() => {
    try {
      // if (isError) {
      //   // todo: handle error
      //   console.error('SCREEN:HEADER: error fetching arabic date: ', error);
      //   // return;
      // }
      // console.log('date params: ', hijri);
      // dispatch(setArabicDate(hijri));
      // console.log('hijri date type in reducer: ', typeof day.day);
      //* setting time -> iftar, seheri
      // getSuntimings(setTime);
      // setPrayerTimes(getPrayerTimes());
      // getPrayerTimes();
    } catch (issue) {
      console.log('SALAH TRACKER: CATCH error: ', issue);
    }
  }, []);

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
      startTime: `${timeNLocation.time.prayerTimes.magrib.hour} : ${timeNLocation.time.prayerTimes.magrib.minute}`,
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

  // todo: seheri, iftar time integrate & logic, err handling
  return (
    <LinearGradient
      style={styles.root}
      colors={[colors.dark.GRADIENT_START, colors.dark.GRADIENT_END]}>
      <View style={styles.timedate}>
        <DateCircle date={hijriDate()} />

        <TopRightContainer
          seheri={timeNLocation.time.seheriIftarTimes.seheri}
          iftar={timeNLocation.time.seheriIftarTimes.iftar}
          city={timeNLocation.location.city}
        />
      </View>

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
    </LinearGradient>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  root: {
    paddingBottom: convert(30),
    borderBottomLeftRadius: convert(50),
    borderBottomRightRadius: convert(50),
  },
  timedate: {
    height: convert(250),
    width: convert(1000),
    paddingRight: convert(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // borderWidth: 1,
    // borderColor: 'blue',
  },
  salahtime: {
    width: convert(1000),
    flexDirection: 'row',
    paddingHorizontal: convert(25),
    backgroundColor: 'transparent',

    // borderWidth: 1,
    // borderColor: 'red',
  },
});
