/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function GuitarDetail({ route }) {
  const { selectedGuitar } = route.params;

  const styles = StyleSheet.create({
    test: {
      height: 80,
      borderWidth: 2
    }
  });

  return (
    <View>
      <Text style={styles.test}>
        {' '}
        {selectedGuitar.model}
        {' '}
      </Text>
      <Text>Hola</Text>
    </View>
  );
}

export default GuitarDetail;
