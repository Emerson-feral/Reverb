/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, Text, ScrollView, Image, StyleSheet, ImageBackground
} from 'react-native';
import getGuitars from '../../redux/action/actionCreators';

function List({ route }) {
  const dispatch = useDispatch();
  const guitars = useSelector((store) => store.guitars);
  const { selectedBrand, logo } = route.params;
  const brandLogo = { uri: logo };

  useEffect(() => {
    if (!guitars.length)dispatch(getGuitars());
  }, []);

  const filteredGuitars = guitars?.filter((item) => item.brand === selectedBrand);

  const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50,
      margin: 30
    },
    appLogo: {
      position: 'absolute',
      height: '60%',
      width: '100%'
    },

    listContainer: {
      marginTop: '60%',
      backgroundColor: 'blue',
      borderTopLeftRadius: 60,
      borderTopRightRadius: 60,
      height: '100%'
    },

    guitarList: {
      marginTop: 20
    },
    // eslint-disable-next-line react-native/no-color-literals
    background: {
      height: '100%'
    }
  });

  return (
    <View style={styles.background}>
      <ImageBackground
        style={styles.appLogo}
        source={brandLogo}
        resizeMode="stretch"
      />
      <View>
        <ScrollView style={styles.listContainer}>
          {
          filteredGuitars?.map((item) => (
            <View key={item._id} style={styles.guitarList}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: item.image
                }}
              />
              <Text>{item.model}</Text>
            </View>
          ))
        }
        </ScrollView>

      </View>

    </View>
  );
}

export default List;
