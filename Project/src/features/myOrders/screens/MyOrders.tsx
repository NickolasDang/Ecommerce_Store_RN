import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useAppSelector } from '../../../app/hooks'
import { MyOrdersStackProps } from '../../../navigation/MyOrdersStack'
import OrderCard from '../components/OrderCard'

type Props =  StackScreenProps<MyOrdersStackProps, 'MyOrders'>

const MyOrders = ({navigation}: Props) => {
  const data = useAppSelector(state => state.orders);
  return (
    <View style={styles.container}>
      {data.orders? 
      <FlatList data={data.orders} 
        renderItem={ ({item}) => (<OrderCard order={item}/>)}/> : null}
    </View>
  )
}

export default MyOrders

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30
  }
})