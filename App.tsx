/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
// screens
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import RequestNewPassword from './components/AuthScreens/ForgotPassScreens/RequestNewPassword';
import ChangePassword from './components/AuthScreens/ForgotPassScreens/ChangePassword';
import OnboardingScreen from './screens/OnboardingScreen';
// components
import CustomHeader from './components/CustomHeader/CustomHeader';
// redux-store
import {store} from './redux-toolkit/store/store';
// assets
import {colors} from './assets/colors/colors';
// types
import {RootStackParamList} from './libs/types/navigation/index';

const rootStack = createNativeStackNavigator<RootStackParamList>();

const linking = {
  prefixes: ['https://ramadan-planner-frontend.vercel.app'],
  config: {
    screens: {
      ChangePass: 'password-reset/Mg/:params',
    },
  },
};

const App: React.FC = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.dark.PRIMARY,
          }}>
          {/* <Text>{'Loading...'}</Text> */}
        </View>
      }>
      <Provider store={store}>
        <rootStack.Navigator>
          <rootStack.Screen
            options={{headerShown: false}}
            name="Onboarding"
            component={OnboardingScreen}
          />

          <rootStack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => (
                <View style={{backgroundColor: colors.dark.PRIMARY}}>
                  <CustomHeader />
                </View>
              ),
            }}
          />

          <rootStack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <rootStack.Screen
            options={{headerShown: false}}
            name="Register"
            component={Register}
          />
          <rootStack.Screen
            options={{headerShown: false}}
            name="ReqPassChange"
            component={RequestNewPassword}
          />
          <rootStack.Screen
            options={{headerShown: false}}
            name="ChangePass"
            component={ChangePassword}
          />
        </rootStack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
