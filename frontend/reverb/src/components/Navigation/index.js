import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import List from '../List';
import Home from '../Home/index';
import BrandsList from '../BrandsList';

const Stack = createStackNavigator();

export default function Navigation() {
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="BrandsList" component={BrandsList} />
    </Stack.Navigator>

  );
}
