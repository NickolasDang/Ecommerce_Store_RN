import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Spacer} from 'react-native-flex-layout';
import {Surface} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import BaseButton from '../../../components/base/BaseButton';
import BaseTitleText from '../../../components/base/BaseTitleText';
import ProductName from '../../../components/product/ProductName';
import Colors from '../../../constants/Colors';
import {MyCartStackProps} from '../../../navigation/MyCartStack';
import MyCartItem from '../components/MyCartItem';
import PriceDetailItem from '../components/PriceDetailItem';
import cartSlice from '../slice/cartSlice';
import ordersSlice from '../../myOrders/slice/ordersSlice';

type Props = StackScreenProps<MyCartStackProps, 'MyCart'>;

const MyCart = ({navigation}: Props) => {
  const data = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const removeItem = (id: string) => {
    dispatch(cartSlice.actions.removeFromCart(id));
  };

  const makeOrder = () => {
    dispatch(ordersSlice.actions.addOrder(data.cart));
    navigation.navigate('MyCartConfirmation');
  };

  return (
    <SafeAreaView style={styles.container}>
      {data.cart.cartItems.length !== 0 ? (
        <FlatList
          data={data.cart.cartItems}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <MyCartItem
              cartItem={item}
              onRemoveItemPress={() => removeItem(item.id)}
            />
          )}
          ListFooterComponent={
            <Surface style={styles.priceDetailcontainer}>
              <BaseTitleText
                text="Price details"
                textStyle={{textAlign: 'left'}}
                containerStyle={{alignItems: 'flex-start', marginBottom: 20}}
              />
              <PriceDetailItem title="Price" value={data.cart.price} />
              <PriceDetailItem
                title="Delivery"
                value={data.cart.deliveryPrice}
              />
              <PriceDetailItem
                title="Discount"
                value={data.cart.discount}
                isDiscount={true}
              />
              <PriceDetailItem title="Tax (2%)" value={data.cart.tax} />
              <Spacer />
              <View style={styles.payableAmountContainer}>
                <ProductName name="Amount Payable" />
                <ProductName name={data.cart.payableAmount} />
              </View>
            </Surface>
          }
        />
      ) : null}

      <BaseButton
        text="proceed to payment"
        style={{marginBottom: 30}}
        onPress={makeOrder}
      />
    </SafeAreaView>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 36,
  },
  priceDetailcontainer: {
    width: '100%',
    backgroundColor: Colors.white,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  payableAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingTop: 15,
    paddingBottom: 20,
    borderTopColor: Colors.neutral300,
    borderTopWidth: 1,
  },
});
