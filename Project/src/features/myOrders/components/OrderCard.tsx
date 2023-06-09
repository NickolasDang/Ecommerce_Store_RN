import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Surface } from 'react-native-paper';
import BaseDescriptionText from '../../../components/base/BaseDescriptionText';
import BaseLinkText from '../../../components/base/BaseLinkText';
import Colors from '../../../constants/Colors';
import { Order } from '../data/Order';
import OrderItem from './OrderItem';

type Props = {
  order: Order;
  onViewDetailsPressed?: () => void | undefined;
};

const OrderCard = ({order, onViewDetailsPressed}: Props) => {
  return (
    <Surface style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <BaseDescriptionText text={order.date} style={{textAlign: 'left'}} />
      </View>
      <FlatList
        data={order.orderItems}
        renderItem={({item}) => <OrderItem orderItem={item} />}
      />
      <BaseLinkText
        text="View Oder Details"
        textStyle={{marginTop: 20}}
        onPress={onViewDetailsPressed}
      />
    </Surface>
  );
};

export default OrderCard;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
