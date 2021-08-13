/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, Text, ScrollView, Image, StyleSheet, ImageBackground, TouchableOpacity
} from 'react-native';
import getGuitars from '../../redux/action/actionCreators';
import colors from '../styles/colors';

function List({ route }) {
  const dispatch = useDispatch();
  const guitars = useSelector((store) => store.guitars);
  const { selectedBrand, logo } = route.params;
  const brandLogo = { uri: logo };
  const navigation = useNavigation();

  useEffect(() => {
    if (!guitars.length)dispatch(getGuitars());
  }, []);

  const filteredGuitars = guitars?.filter((item) => item.brand === selectedBrand);

  const styles = StyleSheet.create({
    tinyLogo: {
      width: 80,
      height: 200,
      margin: 5,
      marginLeft: 30,
      resizeMode: 'contain'
    },

    appLogo: {
      position: 'absolute',
      height: '50%',
      width: '100%',
      backgroundColor: colors.white
    },

    guitarList: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 5
    },

    guitarListText: {
      fontSize: 14,
      fontWeight: 'bold'
    },

    mainContainer: {
      height: '100%'
    },

    listContainer: {
      height: '70%',
      marginTop: '57.5%',
      backgroundColor: colors.white,
      paddingLeft: 2,
      paddingRight: 2,
      borderWidth: 2,
      borderColor: colors.gray,
      borderTopRightRadius: 60,
      borderTopLeftRadius: 60,
      paddingTop: 2,
      overflow: 'hidden'
    }
  });

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.appLogo}
        source={brandLogo}
        resizeMode="contain"
      />
      <View style={styles.listContainer}>
        <ScrollView>
          {
          filteredGuitars?.map((item) => (
            <TouchableOpacity key={item._id} onPress={() => navigation.navigate('GuitarDetail', { selectedGuitar: item })}>
              <View key={item._id} style={styles.guitarList}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: item.image
                  }}
                />
                <Text style={styles.guitarListText}>{item.model}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
        </ScrollView>
      </View>
    </View>
  );
}

export default List;
