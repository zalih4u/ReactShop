import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../../Feature/Home';
import ProductList from './../../Feature/ProductList';
import ViewProduct from './../../Feature/ViewProduct';
const Stack = createStackNavigator()
export default () => {
  return (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ProductList"
        component={ProductList}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ViewProduct"
        component={ViewProduct}
      />
    </Stack.Navigator>
  </NavigationContainer>)
}