import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import BaseDescriptionText from '../../../components/base/BaseDescriptionText';
import Price from '../../../components/product/Price';
import ProductName from '../../../components/product/ProductName';
import Colors from '../../../constants/Colors';
import {DELETE_ICON_IMG} from '../../../constants/Images';
import {CartItem} from '../data/CartItem';
import AmountRegulationButton from './AmountRegulationButton';

interface Props {
  cartItem: CartItem;
  onRemoveItemPress?: () => void | undefined;
}

const MyCartItem = ({cartItem, onRemoveItemPress}: Props) => {
  return (
    <Surface style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.image} source={{uri: cartItem.item.img}} />
        <View style={{justifyContent: 'center'}}>
          <ProductName name={cartItem.item.name} />
          <BaseDescriptionText text="Color: Blue" style={{textAlign: 'left'}} />
          <Price
            priceNow={cartItem.item.price}
            priceBefore={cartItem.item.priceBefore}
            percentOff={cartItem.item.percentOff}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <AmountRegulationButton text="+" />
        <Text style={{marginHorizontal: 15}}>{cartItem.amount}</Text>
        <AmountRegulationButton text="-" />

        <TouchableOpacity
          onPress={onRemoveItemPress}
          style={{position: 'absolute', right: 0}}>
          <Image source={DELETE_ICON_IMG} />
        </TouchableOpacity>
      </View>
    </Surface>
  );
};

export default MyCartItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
});
