import React from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { View, TouchableOpacity, Text } from 'react-native';
import ViewCard from "./View"
import { Dimensions } from 'react-native';
export default (props) => {
    //  return <ViewCard/>
    _renderItem = ({ item, index }) => {
        return (
            <ViewCard item={item} />
        );
    }
    return (
        <View >
            <Carousel
                data={props.products}
                renderItem={this._renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
            />
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <Pagination
                    dotsLength={props.products.length}
                    activeDotIndex={1} // keep it from reference
                    containerStyle={{}}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.92)'
                    }}
                    inactiveDotStyle={{
                        // Define styles for inactive dots here
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
        </View>
    )
}