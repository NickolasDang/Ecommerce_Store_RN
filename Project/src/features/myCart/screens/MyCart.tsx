import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyCartItem from '../components/MyCartItem';
import { StackScreenProps } from '@react-navigation/stack';
import { MyCartStackProps } from '../../../navigation/MyCartStack';

type Props = StackScreenProps<MyCartStackProps, 'MyCart'>

const MyCart = ({navigation, route}: Props) => {
  const product = route.params.product;
  return (
    <SafeAreaView style={styles.container}>
      <MyCartItem product={product} />
    </SafeAreaView>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
