/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
// screens
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
// components
import CustomHeader from './components/CustomHeader/CustomHeader';
// redux-store
import {store} from './redux-toolkit/store/store';

import EditTaskInput from './components/HomeScreens/DailyTarget/EditTaskInput';
import ChangePassword from './components/AuthScreens/ForgotPassScreens/ChangePassword';
import RequestNewPassword from './components/AuthScreens/ForgotPassScreens/RequestNewPassword';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Register"
            component={Register}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ReqPassChange"
            component={RequestNewPassword}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ChangePass"
            component={ChangePassword}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{header: () => <CustomHeader />}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
    // <ChangePassword />
    // <RequestNewPassword />
  );
};

export default App;
