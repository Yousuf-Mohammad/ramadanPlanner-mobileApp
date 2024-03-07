import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Salah from '../components/HomeScreens/Salah';
import Quran from '../components/HomeScreens/Quran';
import Dailytarget from '../components/HomeScreens/Dailytarget';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  useEffect(() => {
    console.log('SCREEN: HOME: rendered!');
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Salah" component={Salah} />
      <Tab.Screen name="Quran" component={Quran} />
      <Tab.Screen name="Daily Target" component={Dailytarget} />
    </Tab.Navigator>
  );
};

export default Home;
