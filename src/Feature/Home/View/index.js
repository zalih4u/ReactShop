import React from 'react';
import CaourosilCard from "../../../Components/CaourosilCard"
import ProductCard from "./../../../Components/ProductCard"
import Banner from "./../../../Components/Banner"
import { FlatGrid } from 'react-native-super-grid'
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import style from './style';
export default (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <CaourosilCard products={props.caourosil} />
                    <View style={style.productView}>
                        <View style={[style.productTitleView]}>
                            <Text style={[style.productTitle]}>Discounts for you </Text>
                            <View style={{ flex: 1 }} />
                            <View style={[style.allBtn]}>
                                <Text style={[style.allBtnText]}> View all</Text>
                            </View>
                        </View>
                        <View style={ [style.gridBack]}>
                            <FlatGrid
                                data={props.products}
                                renderItem={({ item }) => (<ProductCard item={item} />)}
                            />
                        </View>
                    </View>
                    <Banner item={{ "url": "https://tinyurl.com/y379jw6s" }} />
                </View>
            </ScrollView>
        </SafeAreaView>)
}