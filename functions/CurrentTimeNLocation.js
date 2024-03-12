import Geolocation from '@react-native-community/geolocation';
import {getCityName} from './RevGeoCoding';
import {getTimes} from './PrayerTimes';

export const getTimeNLocation = setter => {
  Geolocation.getCurrentPosition(async position => {
    let city = await getCityName(position);

    setter(() => ({
      location: {
        city: city,
      },
      time: getTimes(position),
    }));
  });
};
