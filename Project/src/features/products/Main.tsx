import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Colors from '../../constants/Colors';
import ProductCard, { Product } from './components/PrdoutcCard';
import ProductSearchBar from './components/ProductSearchBar';
import { fetchProducts } from './slice/ProductsSlice';

const Main = () => {
  const data = useAppSelector(state => state.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const navigateToProductDetail = (product: Product) => {
   // navigation.navigate('ProductDetail', product);
  };

  const navigateToMyCart = () => {
   // navigation.navigate('MyCart', {screen: 'MyCartEmpty'});
  };

  return (
    <SafeAreaView>
      <Surface style={{backgroundColor: Colors.white}}>
        <ProductSearchBar />
      </Surface>
      <View style={{marginHorizontal: 10}}>
        {data.loading && <Text>Loading</Text>}
        {!data.loading && data.error ? <Text>{data.error}</Text> : null}
        {!data.loading && data.products ? (
          <FlatList
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            data={data.products}
            renderItem={ ({item}  ) => (
              <ProductCard
                product= {item} 
                onPress={() => navigateToProductDetail(item)}
              />
            )}/>) : null}
      </View>
    </SafeAreaView>
  );
};

export default Main;
