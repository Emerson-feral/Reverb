/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View, ScrollView, Image, StyleSheet, TouchableOpacity
} from 'react-native';

function BrandsList() {
  const navigation = useNavigation();

  const allBrands = [
    { id: 1, brand: 'Gibson', logo: 'https://www.brandemia.org/wp-content/uploads/2013/01/Gibson_Marca.jpg' },
    { id: 2, brand: 'Fender', logo: 'https://1000marcas.net/wp-content/uploads/2020/02/Fender-Logo-1.png' },
    { id: 3, brand: 'Ibanez', logo: 'https://logos-marcas.com/wp-content/uploads/2020/12/Ibanez-Logo.png' },
    { id: 4, brand: 'PRS', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Prs_guitars_logo.png' },
    { id: 5, brand: 'Schecter', logo: 'https://www.thomann.de/thumb/opengraphnb/pics/herstlogos/schecter.gif' },
    { id: 6, brand: 'Jackson', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Jackson_logo.png' },
    { id: 7, brand: 'Yamaha', logo: 'https://logodix.com/logo/1047998.jpg' },
    { id: 8, brand: 'EVH', logo: 'https://www.amplifiedparts.com/sites/default/files/styles/large/public/sets_by_amp/logos/logo_evh_1547655723.png?itok=Dg6zHXTK' },
    { id: 9, brand: 'Solar', logo: 'https://www.thomann.de/thumb/opengraphnb/pics/herstlogos/solar_guitars.gif' },
    { id: 10, brand: 'Mayones', logo: 'https://mayones.com/wp-content/uploads/2017/12/mayones_logo_for_web_only.png' },
    { id: 11, brand: 'Skervesen', logo: 'https://www.seekpng.com/png/detail/763-7634222_logo-skervesen-guitars-skervesen-guitars-logo.png' },
    { id: 12, brand: 'ESP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/ESP_Logo.svg/1280px-ESP_Logo.svg.png' }
  ];

  const styles = StyleSheet.create({
    tinyLogo: {
      width: 70,
      height: 70,
      margin: 20
    },

    colum: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginTop: 15
    },

    // eslint-disable-next-line react-native/no-color-literals
    background: {
      backgroundColor: 'white',
      height: '100%',
      borderTopLeftRadius: 60,
      borderTopRightRadius: 60
    }
  });

  return (
    <View style={styles.background}>
      <ScrollView contentContainerStyle={styles.colum}>
        {
         allBrands.map((item) => (
           <View key={item.id}>
             <TouchableOpacity title="Go to guitar models" onPress={() => navigation.navigate('List', { selectedBrand: item.brand, logo: item.logo })}>
               <Image
                 resizeMode="contain"
                 style={styles.tinyLogo}
                 source={{
                   uri: item.logo
                 }}
               />
             </TouchableOpacity>
           </View>
         ))
        }
      </ScrollView>
    </View>
  );
}

export default BrandsList;
