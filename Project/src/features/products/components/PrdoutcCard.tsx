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
    onPress: () => void
}

const ProductCard: React.FC<Props> = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Surface style={styles.container}>
        <Image style={styles.image} source={{uri: props.product.img}} />
        <ProductName name={props.product.name} />
        <Price
          priceNow={props.product.price}
          priceBefore={props.product.priceBefore}
          percentOff={props.product.percentOff}
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
