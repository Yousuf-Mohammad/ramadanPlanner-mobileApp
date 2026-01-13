import Geolocation from '@react-native-community/geolocation';
import {getSunrise, getSunset} from 'sunrise-sunset-js';

import React from 'react';

interface SunTimings {
  sunset: Date;
  sunrise: Date;
}

export const getSuntimings = (
  setTime: React.Dispatch<React.SetStateAction<SunTimings>>,
) => {
  Geolocation.getCurrentPosition(info => {
    setTime(() => ({
      sunset: getSunset(info.coords.latitude, info.coords.longitude),
      sunrise: getSunrise(info.coords.latitude, info.coords.longitude),
    }));
  });
};
