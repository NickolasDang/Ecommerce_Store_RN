import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Colors from '../../constants/Colors';
import ProductCard, { Product } from './components/PrdoutcCard';
import ProductSearchBar from './components/ProductSearchBar';
import { fetchProducts } from './slice/ProductsSlice';
import { StackScreenProps } from '@react-navigation/stack';
import { DrawerStackProps } from '../../navigation/DrawerStack';
import { AppStackProps } from '../../navigation/AppStack';
import { CompositeScreenProps } from '@react-navigation/native';
import HeaderButton from '../../components/HeaderButton';
import { MY_CART_ICON_WHITE_IMG } from '../../constants/Images';

type Props = CompositeScreenProps<
  StackScreenProps<DrawerStackProps, 'Main'>,
  StackScreenProps<AppStackProps>
>

const Main = ({navigation}: Props) => {
  const data = useAppSelector(state => state.products);

  const dispatch = useAppDispatch();

  const setHeader = () => {
    navigation.setOptions({
        title: 'Ecommerce Store',
          headerRight: () => (
            <HeaderButton img={MY_CART_ICON_WHITE_IMG}/>
          )
    })
  }

  useEffect(() => {
    dispatch(fetchProducts());
    setHeader()
  }, []);

  const navigateToProductDetail = (product: Product) => {
    navigation.navigate('ProductDetail', {product});
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
