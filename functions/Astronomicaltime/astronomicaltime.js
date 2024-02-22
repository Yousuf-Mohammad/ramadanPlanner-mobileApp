import Geolocation from '@react-native-community/geolocation';
import {getSunrise, getSunset} from 'sunrise-sunset-js';

export const getSuntimings = setTime => {
  Geolocation.getCurrentPosition(info => {
    setTime(() => ({
      sunset: getSunset(info.coords.latitude, info.coords.longitude),
      sunrise: getSunrise(info.coords.latitude, info.coords.longitude),
    }));
  });
};
