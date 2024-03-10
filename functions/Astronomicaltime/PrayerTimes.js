import {Coordinates, CalculationMethod, PrayerTimes} from 'adhan';
import Geolocation from '@react-native-community/geolocation';

export const getPrayerTimes = setter => {
  Geolocation.getCurrentPosition(info => {
    const coordinates = new Coordinates(
      info.coords.latitude,
      info.coords.longitude,
    );
    const params = CalculationMethod.MoonsightingCommittee();
    const date = new Date();
    const prayerTimes = new PrayerTimes(coordinates, date, params);

    const formattedPrayerTimes = {
      fajr: {
        hour:
          prayerTimes.fajr.getHours() > 12
            ? prayerTimes.fajr.getHours() - 12
            : prayerTimes.fajr.getHours(),
        minute: prayerTimes.fajr.getMinutes(),
      },
      duhr: {
        hour:
          prayerTimes.dhuhr.getHours() > 12
            ? prayerTimes.dhuhr.getHours() - 12
            : prayerTimes.dhuhr.getHours(),
        minute: prayerTimes.dhuhr.getMinutes(),
      },
      asr: {
        hour:
          prayerTimes.asr.getHours() > 12
            ? prayerTimes.asr.getHours() - 12
            : prayerTimes.asr.getHours(),
        minute: prayerTimes.asr.getMinutes(),
      },
      magrib: {
        hour:
          prayerTimes.maghrib.getHours() > 12
            ? prayerTimes.maghrib.getHours() - 12
            : prayerTimes.maghrib.getHours(),
        minute: prayerTimes.maghrib.getMinutes(),
      },
      isha: {
        hour:
          prayerTimes.isha.getHours() > 12
            ? prayerTimes.isha.getHours() - 12
            : prayerTimes.isha.getHours(),
        minute: prayerTimes.isha.getMinutes(),
      },
    };

    // console.log('prayertimes: ', formattedPrayerTimes);

    setter(formattedPrayerTimes);
  });
};
