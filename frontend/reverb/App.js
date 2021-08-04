/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './src/components/Header';
import List from './src/components/List';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Header" component={Header} options={{ title: 'Welcome Home' }} />
      <Stack.Screen name="List" component={List} options={{ title: 'Welcome List' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
