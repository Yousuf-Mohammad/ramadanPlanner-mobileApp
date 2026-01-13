import Geocoder from 'react-native-geocoding';
import {MAPS_API_KEY} from '@env';

import {GeolocationResponse} from '@react-native-community/geolocation';

function deriveCityName(compound_code: string) {
  const parts = compound_code.split(' ');

  // todo: handle cities with multi-word names!
  const cityOnly = parts[1].split(',');

  return cityOnly[0];
}

export function getCityName(position: GeolocationResponse): Promise<string> {
  return new Promise((resolve, reject) => {
    Geocoder.init(MAPS_API_KEY);

    Geocoder.from(position.coords.latitude, position.coords.longitude)
      .then(res => {
        const cityName = deriveCityName(res.plus_code.compound_code);

        // console.log('city name: ', cityName);

        resolve(cityName);
      })
      .catch(error => {
        console.warn('Error getting CATCH city name: ', error);
        reject(error);
      });
  });
}
