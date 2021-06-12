import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import View from './View'

const Home = ({ navigation }) => {

  const { homeModel: homeModelState } = useSelector(({ homeModel }) => {
    return {
      homeModel,
    };
  });

  const { homeModel: homeModelDispatch } = useDispatch(({ homeModel }) => {
    return {
      ...homeModel,
    };
  });

  const { products, caourosil } = homeModelState;

  useEffect(() => {
    // ready to fech some data
    homeModelDispatch.getProducts()
    homeModelDispatch.getCaourosil()
  }, [homeModelDispatch]);

  const open = () => {
    navigation.navigate("")
  }

  return (
    <View
      products={products}
      caourosil={caourosil}
    />)
};
export default Home