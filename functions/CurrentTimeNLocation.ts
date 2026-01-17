import React from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {
  isLocationEnabled,
  promptForEnableLocationIfNeeded,
} from 'react-native-android-location-enabler';
// functions
import {getCityName} from './RevGeoCoding';
import {getTimes} from './PrayerTimes';
import {Toast} from 'toastify-react-native';
import {colors} from '../assets/colors/colors';

async function getLocationAndroidNative() {
  try {
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message:
          'This app needs your location for Salat and Fasting times.' +
          'Without location access many parts of the app might not function properly.',
        buttonPositive: 'OK',
        buttonNegative: 'Deny',
        buttonNeutral: 'Ask me later',
      },
    );

    // console.log('what permission did it give?: ', permission);

    if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
      console.warn('Location access denied!');
      return;
    }
  } catch (error) {
    console.error(
      'CURRENT TIME N LOCATION: getLocationAndroidNative: catch: ',
      error,
    );
  }
}

async function getLocationAndroidThirdParty() {
  try {
    await promptForEnableLocationIfNeeded();
  } catch (error) {
    if (error) {
      console.error(
        'CURRENT TIME N LOCATION: getLocationAndroidThirdParty: catch: ',
        (error as any).message,
      );
      // The user has not accepted to enable the location services or something went wrong during the process
      // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
      // codes :
      //  - ERR00 : The user has clicked on Cancel button in the popup
      //  - ERR01 : If the Settings change are unavailable
      //  - ERR02 : If the popup has failed to open
      //  - ERR03 : Internal error
    }
  }
}

async function checkGPS() {
  const checkEnabled = await isLocationEnabled();

  // console.log('checkEnabled', checkEnabled);
  return checkEnabled;
}

async function chooseAndroidLocationProvider() {
  if (!(Platform.OS === 'android')) {
    return;
  }

  const gpsTurnedOn = await checkGPS();

  if (typeof gpsTurnedOn === 'boolean' && !gpsTurnedOn) {
    await getLocationAndroidThirdParty();
  } else {
    await getLocationAndroidNative();
  }
}

export interface LocationData {
  location: {
    city: string;
  };
  time: any;
}

export async function getTimeNLocation(
  setter: React.Dispatch<React.SetStateAction<LocationData>>,
) {
  try {
    await chooseAndroidLocationProvider();

    Geolocation.getCurrentPosition(async position => {
      let city = await getCityName(position);

      setter(() => ({
        location: {
          city: city.toUpperCase(),
        },
        time: getTimes(position),
      }));
    });
  } catch (error) {
    console.log('CURRENT TIME N LOCATION: catch: getTimeNLocation: ', error);
  }
}
