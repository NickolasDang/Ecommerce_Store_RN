import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Surface} from 'react-native-paper';
import Price from '../../../components/product/Price';
import ProductName from '../../../components/product/ProductName';
import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
import { Product } from '../data/Product';

interface Props {
    product: Product,
    onPress: () => void,
    testID?: string | undefined
}

const ProductCard = ({product, onPress, testID}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Surface style={styles.container} testID={testID}>
        <Image style={styles.image} source={{uri: product.img}} />
        <ProductName name={product.name} />
        <Price
          priceNow={product.price}
          priceBefore={product.priceBefore}
          percentOff={product.percentOff}
        />
      </Surface>
    </TouchableOpacity>
  );
};

export default ProductCard;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    paddingBottom: 10,
    borderRadius: 5,
  },
  image: {
    alignSelf: 'center',
    marginVertical: 5,
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },
});
