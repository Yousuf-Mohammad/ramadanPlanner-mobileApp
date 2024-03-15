/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// components
import Salah from '../components/HomeScreens/Salah';
import Quran from '../components/HomeScreens/Quran';
import Dailytarget from '../components/HomeScreens/Dailytarget';
import OverView from '../components/HomeScreens/OverView/OverView';
import CustomTopTab from '../components/CustomTopTab/CustomTopTab';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTopTab {...props} />}>
      <Tab.Screen name="OverView" component={OverView} />
      <Tab.Screen name="Salah" component={Salah} />
      <Tab.Screen name="Quran" component={Quran} />
      <Tab.Screen name="Daily Target" component={Dailytarget} />
    </Tab.Navigator>
  );
};

export default Home;
