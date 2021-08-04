/* eslint-disable react/prop-types */
import React from 'react';
import { View, Button } from 'react-native';

function List({ navigation }) {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Header')} title="Home">
        Home
      </Button>
    </View>
  );
}

export default List;
