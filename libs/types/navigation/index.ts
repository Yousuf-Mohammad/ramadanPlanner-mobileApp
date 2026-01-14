// Navigation types
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {RouteProp} from '@react-navigation/native';

// Root Stack Navigator params
export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ReqPassChange: undefined;
  ChangePass: {params: string};
};

// Home Tab Navigator params
export type HomeTabParamList = {
  OverView: undefined;
  Salah: undefined;
  Quran: undefined;
  'Daily Target': undefined;
};

// Navigation props for each screen
export type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

export type ReqPassChangeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ReqPassChange'
>;

export type ChangePassScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ChangePass'
>;

export type ChangePassScreenRouteProp = RouteProp<
  RootStackParamList,
  'ChangePass'
>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

// Home tab navigation props
export type OverViewTabNavigationProp = MaterialTopTabNavigationProp<
  HomeTabParamList,
  'OverView'
>;

export type SalahTabNavigationProp = MaterialTopTabNavigationProp<
  HomeTabParamList,
  'Salah'
>;

export type QuranTabNavigationProp = MaterialTopTabNavigationProp<
  HomeTabParamList,
  'Quran'
>;

export type DailyTargetTabNavigationProp = MaterialTopTabNavigationProp<
  HomeTabParamList,
  'Daily Target'
>;
