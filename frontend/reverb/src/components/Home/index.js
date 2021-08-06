/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Text, TextInput
} from 'react-native';

function Home() {
  return (
    <View>
      <Text>Guitar Data Base</Text>
      <TextInput placeholder="Search" />
      {/* <Button onPress={() => navigation.navigate('List')} title="List">
        List
      </Button> */}
    </View>
  );
}

export default Home;
