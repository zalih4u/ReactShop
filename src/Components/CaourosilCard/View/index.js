import React from 'react';
import style from './style'
import { View, Image, TouchableOpacity, Text } from 'react-native';
//import {View} from "./View"

export default (props) => {
  return <View style={{ backgroundColor: "#0003", width: "100%", height: 200 }}>
    <Image
      style={{ width: "100%", height: "100%" }}
      source={{ uri: props.item.url }}
    />
  </View>
}