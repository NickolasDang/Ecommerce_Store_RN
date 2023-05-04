import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { Product } from '../../products/components/PrdoutcCard';
import ProductName from '../../../components/product/ProductName';
import Price from '../../../components/product/Price';

interface Props {
    product: Product
}

const MyCartItem = ({product}: Props) => {
  return (
    <Surface>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.image} source={{uri: product.img}} />
        <View>
          <ProductName name={product.name} />
          <Price
            priceNow={product.price}
            priceBefore={product.priceBefore}
            percentOff={product.percentOff}
          />
        </View>
      </View>
    </Surface>
  );
};

export default MyCartItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
