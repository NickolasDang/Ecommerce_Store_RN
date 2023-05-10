import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Surface } from 'react-native-paper'
import Colors from '../../../constants/Colors'
import { StyleSheet } from 'react-native'
import BaseDescriptionText from '../../../components/base/BaseDescriptionText'
import BaseLinkText from '../../../components/base/BaseLinkText'
import OrderItem from './OrderItem'
import { Order } from '../data/Order'

type Props = {
    order: Order
}

const OrderCard = ({order}: Props) => {

  return (
    <Surface style={styles.container}>
        <View style={{flexDirection: 'row'}}>
            <BaseDescriptionText text={order.date} style={{textAlign: 'left'}}/>
        </View>
        <FlatList data={order.orderItems} renderItem={ ({item}) => (
          <OrderItem orderItem={item}/>
          )}/>
        <BaseLinkText text='View Oder Details' textStyle={{marginTop: 20}}/>
    </Surface>
  )
}

export default OrderCard

export const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.white,
      padding: 10,
      borderRadius: 5,
      marginBottom: 10
    }
  });
  