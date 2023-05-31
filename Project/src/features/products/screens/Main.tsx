import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Surface, Text } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { MyCartHeaderButton } from '../../../components/headerButtons/MyCartHeaderButton';
import Colors from '../../../constants/Colors';
import { AppStackProps } from '../../../navigation/AppStack';
import { MainStackProps } from '../../../navigation/MainStack';
import ProductCard from '../components/PrdoutcCard';
import ProductSearchBar from '../components/ProductSearchBar';
import { Product } from '../data/Product';
import { fetchProducts } from '../slice/ProductsSlice';

type Props = CompositeScreenProps<
  StackScreenProps<MainStackProps, 'Main'>,
  StackScreenProps<AppStackProps>
>;

const Main = ({navigation}: Props) => {
  const data = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  const setHeader = () => {
    navigation.setOptions({
      title: 'Ecommerce Store',
      headerRight: () => (MyCartHeaderButton(navigation)),
    });
  };

  useEffect(() => {
    dispatch(fetchProducts());
    setHeader();
  });

  const navigateToProductDetail = (product: Product) => {
    navigation.navigate('ProductDetail', {product});
  };

  const navigateToSearchScreen = () => {
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView testID="main-screen">
      <Surface style={{backgroundColor: Colors.white}}>
        <TouchableOpacity onPress={navigateToSearchScreen}>
          <ProductSearchBar />
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
            renderItem={({item}) => (
              <ProductCard
                testID={`product-card-${data.products.indexOf(item)}`}
                product={item}
                onPress={() => navigateToProductDetail(item)}
              />
            )}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Main;
