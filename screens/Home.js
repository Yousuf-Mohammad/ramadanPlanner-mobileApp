import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Tracker from '../components/HomeScreens/Tracker';
import Quran from '../components/HomeScreens/Quran';
import Todolist from '../components/HomeScreens/Todolist';
import CustomHeader from '../components/CustomHeader/CustomHeader';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tracker" component={Tracker} />
      <Tab.Screen name="Quran" component={Quran} />
      <Tab.Screen name="Todolist" component={Todolist} />
    </Tab.Navigator>
  );
};

export default Home;
