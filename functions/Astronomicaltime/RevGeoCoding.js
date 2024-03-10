import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import {MAPS_API_KEY} from '@env';

export const getCityName = () => {
  Geocoder.init(MAPS_API_KEY);

  Geolocation.getCurrentPosition(info => {
    // console.log('in here', info.coords);
    Geocoder.from(info.coords.latitude, info.coords.longitude)
      .then(json => {
        console.log(json.plus_code);
      })
      .catch(error => console.warn(error));
  });
};
