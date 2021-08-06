/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';

/* import Navigation from './src/components/Navigation/index'; */
import Home from './src/components/Home';
import List from './src/components/List';
import configureStore from './src/redux/store';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
              name="Home"
              component={Home}
            />
            <Tab.Screen
              name="List"
              component={List}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </>

  );
}

export default App;
