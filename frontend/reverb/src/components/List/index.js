/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, Text, ScrollView
} from 'react-native';
import getGuitars from '../../redux/action/actionCreators';

function List() {
  const dispatch = useDispatch();
  const guitars = useSelector((store) => store.guitars);

  useEffect(() => {
    if (!guitars.length)dispatch(getGuitars());
  }, []);

  return (
    <View>
      <ScrollView>
        {
          guitars.map((item) => (
            <View key={item._id} >
              <Text>{item.brand}</Text> 
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

export default List;
