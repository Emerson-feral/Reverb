/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Text, ImageBackground, StyleSheet
} from 'react-native';
import BrandsList from '../BrandsList';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  appLogo: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    height: 520,
    width: '100%'
  },

  appLogoText: {
    fontSize: 40,
    color: colors.white,
    marginTop: 30,
    fontStyle: 'italic',
    fontFamily: 'sans-serif-light'
  },

  mainContainer: {
    height: '100%'
  },

  brandContainer: {
    marginTop: '60%'
  }
});

function Home() {
  const image = { uri: 'https://freexwallpaper.com.hotbv.com/2020/11/17/2020_electric_guitars_guitars_musical_instruments_192754_2160x3840.jpg-postimg' };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.appLogo}
        source={image}
        resizeMode="stretch"
      >
        <Text style={styles.appLogoText}>Guitar Data Base</Text>
      </ImageBackground>
      <View style={styles.brandContainer}>
        <BrandsList />
      </View>
    </View>
  );
}

export default Home;
