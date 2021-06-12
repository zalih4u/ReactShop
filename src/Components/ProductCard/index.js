import React from 'react';

import { View, TouchableOpacity, Text, Image } from 'react-native';

export default (props) => {
    return (
        <View style={{ alignItems: "center" }}>
            <Image
                style={{ width: 120, height: 120 }}
                source={{ uri: props.item.url }}
            />
            <Text style={[{ color: "#000000", padding: 10 }]}>{props.item.name}</Text>
            <Text style={[{ color: "#6EAD71", paddingBottom: 20 }]}>{props.item.offer}</Text>
        </View>)
}