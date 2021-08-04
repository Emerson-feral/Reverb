/* eslint-disable react/prop-types */
import React from 'react';
import { View, Button } from 'react-native';

function Header({ navigation }) {
  return (
    <View>
      <Button onPress={() => navigation.navigate('List')} title="List">
        List
      </Button>
    </View>
  );
}

export default Header;
