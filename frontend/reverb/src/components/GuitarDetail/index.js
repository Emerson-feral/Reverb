/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Text, StyleSheet, Image
} from 'react-native';
import colors from '../styles/colors';

function GuitarDetail({ route }) {
  const { selectedGuitar } = route.params;

  const styles = StyleSheet.create({
    mainContainer: {
      height: '100%',
      backgroundColor: colors.white
    },

    containerImage: {
      height: '62%'

    },

    guitarImage: {
      resizeMode: 'contain',
      backgroundColor: colors.white,
      height: '100%'
    },

    specsContainer: {
      borderWidth: 2,
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      paddingTop: 30,
      height: '100%'
    },

    modelText: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center'
    },

    specsTextContainer: {
      marginTop: 35,
      paddingLeft: 20
    },

    specsText: {
      marginTop: 3,
      fontSize: 17,
      borderBottomWidth: 1,
      width: '95%',
      borderColor: colors.gray,
      fontWeight: '600'
    }
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerImage}>
        <Image source={{ uri: selectedGuitar.image }} style={styles.guitarImage} />
      </View>
      <View style={styles.specsContainer}>
        <Text style={styles.modelText}>{selectedGuitar.model}</Text>
        <View style={styles.specsTextContainer}>
          <Text style={styles.specsText}>{`Colour: ${selectedGuitar.specs.colour}`}</Text>
          <Text style={styles.specsText}>{`Body: ${selectedGuitar.specs.body}`}</Text>
          <Text style={styles.specsText}>{`Top: ${selectedGuitar.specs.top}`}</Text>
          <Text style={styles.specsText}>{`Neck: ${selectedGuitar.specs.neck}`}</Text>
          <Text style={styles.specsText}>{`Fretboard: ${selectedGuitar.specs.fretboard}`}</Text>
          <Text style={styles.specsText}>{`Pickups: ${selectedGuitar.specs.pickups}`}</Text>
        </View>
      </View>
    </View>
  );
}

export default GuitarDetail;
