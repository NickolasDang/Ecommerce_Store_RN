import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Surface, Text } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import HeaderButton from '../../../components/HeaderButton';
import Colors from '../../../constants/Colors';
import { MY_CART_ICON_WHITE_IMG } from '../../../constants/Images';
import { AppStackProps } from '../../../navigation/AppStack';
import { MainStackProps } from '../../../navigation/MainStack';
import ProductCard from '../components/PrdoutcCard';
import ProductSearchBar from '../components/ProductSearchBar';
import { Product } from '../data/Product';
import { fetchProducts } from '../slice/ProductsSlice';

type Props = CompositeScreenProps<
  StackScreenProps<MainStackProps, 'Main'>,
  StackScreenProps<AppStackProps>
>

const Main = ({navigation}: Props) => {
  const data = useAppSelector(state => state.products);
   //Problem here. Data is not updated correctly
  const isCartEmpty = useAppSelector(state => state.cart.cart.cartItems.length === 0)

  const dispatch = useAppDispatch();

  const setHeader = () => {
    navigation.setOptions({
        title: 'Ecommerce Store',
          headerRight: () => (
            <HeaderButton img={MY_CART_ICON_WHITE_IMG} onPress={() => navigateToMyCart()}/>
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
    console.log("LOG:", isCartEmpty)
    const screenName = isCartEmpty ? 'MyCartEmpty' : 'MyCart'
    navigation.navigate('DrawerStack', {screen: 'MyCartStack', params: {screen: screenName}});
  };

  const navigateToSearchScreen = () => {
    navigation.navigate('Search')
  }

  return (
    <SafeAreaView>
      <Surface style={{backgroundColor: Colors.white}}>
        <TouchableOpacity onPress={navigateToSearchScreen}>
        <ProductSearchBar/>
        </TouchableOpacity>
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
            renderItem={ ({item}) => (
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
