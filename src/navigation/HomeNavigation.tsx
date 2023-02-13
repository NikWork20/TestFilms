import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import FilmsScreen from '@src/navigation/FilmsScreen/FilmsScreen';
import HomeScreen from '@src/navigation/HomeScreen/HomeScreen';
import LoginScreen from '@src/navigation/LoginScreen/LoginScreen';
import RegistrationScreen from '@src/navigation/RegistrationScreen/RegistrationScreen';
import ScreenInfo from '@src/navigation/ScreenInfo/ScreenInfo';

import {Navigation} from '@src/constants/textConst';

const Stack = createStackNavigator();

const HomeNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={Navigation.HOME} component={HomeScreen} />
    <Stack.Screen name={Navigation.SIGN_IN} component={LoginScreen} />
    <Stack.Screen name={Navigation.SIGN_UP} component={RegistrationScreen} />
    <Stack.Screen name={Navigation.MOVIES} component={RegistrationScreen} />
    <Stack.Screen name={Navigation.SERIES} component={RegistrationScreen} />
    <Stack.Screen name={Navigation.GENRES} component={RegistrationScreen} />
    <Stack.Screen name={Navigation.ABOUT} component={RegistrationScreen} />
    <Stack.Screen name={Navigation.ALL_FILMS} component={FilmsScreen} />
    <Stack.Screen name={Navigation.SCREEN_INFO} component={ScreenInfo} />
  </Stack.Navigator>
);

export default HomeNavigation;
