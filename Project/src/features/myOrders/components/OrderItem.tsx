import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import ProductName from '../../../components/product/ProductName'
import Colors from '../../../constants/Colors'
import { Product } from '../../products/data/Product'

type Props = {
    orderItem: Product
}

const OrderItem = ({orderItem}: Props) => {
  return (
    <View style={styles.container}>
      <ProductName name={orderItem.name}/>
      <Image style={styles.image} source={{uri: orderItem.img}}/>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.neutral300
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'cover'
    }
})