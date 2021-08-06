import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';
import List from '../List';

const Stack = createStackNavigator();

export default function Navigation() {
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome Home' }} />
      <Stack.Screen name="List" component={List} options={{ title: 'Welcome List' }} />
    </Stack.Navigator>

  );
}
