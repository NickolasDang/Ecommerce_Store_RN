import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import BaseButton from '../../components/base/BaseButton';
import HeaderButton from '../../components/HeaderButton';
import Price from '../../components/product/Price';
import ProductName from '../../components/product/ProductName';
import Colors from '../../constants/Colors';
import { MY_CART_ICON_WHITE_IMG, MY_WISH_LIST_ICON_WHITE_IMG } from '../../constants/Images';
import { AppStackProps } from '../../navigation/AppStack';
import ImageCarousel from './components/imageCarousel/ImageCarousel';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import cartSlice from '../myCart/slice/cartSlice';
import { CartItem } from '../myCart/data/CartItem';
import { store } from '../../app/store';

type Props = StackScreenProps<AppStackProps, "ProductDetail">

const ProductDetail = ({route, navigation}: Props) => {
  const {product} = route.params;
  const [color, setColor] = useState('');
  const isCartEmpty = useAppSelector(state => state.cart.cart.cartItems.length === 0)

  const dispatch = useAppDispatch()

  const navigateToMyCart = () => {
    const screenName = isCartEmpty ? 'MyCartEmpty' : 'MyCart'
    navigation.navigate('DrawerStack', {screen: 'MyCartStack', params: {screen: screenName}});
  };

  const setHeader = () => {
    navigation.setOptions({
        title: '',
        headerStyle: {
            backgroundColor: Colors.blue300
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Colors.white
          },
          headerTintColor: Colors.white,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <HeaderButton img={MY_WISH_LIST_ICON_WHITE_IMG}/>
            <HeaderButton img={MY_CART_ICON_WHITE_IMG} onPress={() => navigateToMyCart()}/>
            </View>
          )
    })
  }

  const addProduct = () => {
    const screenName = color == '' ? 'SelectColorDialog' : 'ProductAddedDialog';
    if(screenName === 'ProductAddedDialog') {
      const cartItem: CartItem = {
        id: `${Math.floor(Math.random() * 100)}`,
        item: product,
        amount: 1
      }
      dispatch(cartSlice.actions.addToCart(cartItem))
    }
    navigation.navigate('ModalStack', {screen: screenName});
  };

  useEffect(() => {
    setHeader()
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 20}}>
        <ImageCarousel data={product.imgCarousel} />

        <View style={styles.containerWithBottomBorder}>
          <ProductName name={product.name} style={{marginBottom: 15}} />
          <Price
            style={{marginBottom: 25}}
            priceNow={product.price}
            priceBefore={product.priceBefore}
            percentOff={product.percentOff}
          />
        </View>

        <View style={styles.containerWithBottomBorder}>
          <Text style={styles.titleText}>Select Color</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.colorButton}
              onPress={() => setColor('blue')}>
              <Text>Blue</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.titleText}>Description</Text>
        <Text>
          The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution,
          283ppi Super AMOLED display, a glass and plastic body, with Corning
          Gorilla Glass 5 protection on its front as well as its back. It is
          powered by a Qualcomm Snapdragon 665 SoC. It also has a 2.0, Type-C
          1.0 reversible connector.
        </Text>
      </ScrollView>

      <BaseButton
        text={'Add to cart'}
        style={{marginHorizontal: 20, marginBottom: 10}}
        onPress={() => addProduct()}
      />
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  containerWithBottomBorder: {
    borderBottomColor: Colors.neutral300,
    borderBottomWidth: 1,
  },
  titleText: {
    marginTop: 15,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 25,
    color: Colors.neutral700,
  },
  colorButton: {
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: Colors.neutral100,
    elevation: 3,
  },
});
