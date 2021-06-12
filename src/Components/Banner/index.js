import React from 'react';
import style from './style'
import { View, Image, TouchableOpacity, Text } from 'react-native';

export default (props) => {
    return <View style={[style.conatiner]}>
        <Image
            style={[style.image,{ }]}
            source={{ uri: props.item.url }}
        />
    </View>
}