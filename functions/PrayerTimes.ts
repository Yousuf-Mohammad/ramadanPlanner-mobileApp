import {Coordinates, CalculationMethod, PrayerTimes, Madhab} from 'adhan';

import {GeolocationResponse} from '@react-native-community/geolocation';

export function getTimes(position: GeolocationResponse) {
  const coordinates = new Coordinates(
    position.coords.latitude,
    position.coords.longitude,
  );
  const params = CalculationMethod.MoonsightingCommittee();
  params.madhab = Madhab.Hanafi;
  const date = new Date();
  const prayerTimes = new PrayerTimes(coordinates, date, params);

  // console.log('this obj has: ', prayerTimes);

  const times = {
    seheriIftarTimes: {
      seheri: {
        hour:
          prayerTimes.sunrise.getHours() > 12
            ? prayerTimes.sunrise.getHours() - 12
            : prayerTimes.sunrise.getHours(),
        minute:
          prayerTimes.sunrise.getMinutes() < 10
            ? '0' + prayerTimes.sunrise.getMinutes()
            : prayerTimes.sunrise.getMinutes(),
      },
      iftar: {
        hour:
          prayerTimes.sunset.getHours() > 12
            ? prayerTimes.sunset.getHours() - 12
            : prayerTimes.sunset.getHours(),
        minute:
          prayerTimes.sunset.getMinutes() < 10
            ? '0' + prayerTimes.sunset.getMinutes()
            : prayerTimes.sunset.getMinutes(),
      },
    },
    prayerTimes: {
      fajr: {
        hour:
          prayerTimes.fajr.getHours() > 12
            ? prayerTimes.fajr.getHours() - 12
            : prayerTimes.fajr.getHours(),
        minute:
          prayerTimes.fajr.getMinutes() < 10
            ? '0' + prayerTimes.fajr.getMinutes()
            : prayerTimes.fajr.getMinutes(),
      },
      duhr: {
        hour:
          prayerTimes.dhuhr.getHours() > 12
            ? prayerTimes.dhuhr.getHours() - 12
            : prayerTimes.dhuhr.getHours(),
        minute:
          prayerTimes.dhuhr.getMinutes() < 10
            ? '0' + prayerTimes.dhuhr.getMinutes()
            : prayerTimes.dhuhr.getMinutes(),
      },
      asr: {
        hour:
          prayerTimes.asr.getHours() > 12
            ? prayerTimes.asr.getHours() - 12
            : prayerTimes.asr.getHours(),
        minute:
          prayerTimes.asr.getMinutes() < 10
            ? '0' + prayerTimes.asr.getMinutes()
            : prayerTimes.asr.getMinutes(),
      },
      magrib: {
        hour:
          prayerTimes.maghrib.getHours() > 12
            ? prayerTimes.maghrib.getHours() - 12
            : prayerTimes.maghrib.getHours(),
        minute:
          prayerTimes.maghrib.getMinutes() < 10
            ? '0' + prayerTimes.maghrib.getMinutes()
            : prayerTimes.maghrib.getMinutes(),
      },
      isha: {
        hour:
          prayerTimes.isha.getHours() > 12
            ? prayerTimes.isha.getHours() - 12
            : prayerTimes.isha.getHours(),
        minute:
          prayerTimes.isha.getMinutes() < 10
            ? '0' + prayerTimes.isha.getMinutes()
            : prayerTimes.isha.getMinutes(),
      },
    },
  };

  return times;
}
