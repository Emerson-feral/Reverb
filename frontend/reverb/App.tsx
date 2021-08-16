/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Navigation from './src/components/Navigation';
import configureStore from './src/redux/store';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </>

  );
}

export default App;
