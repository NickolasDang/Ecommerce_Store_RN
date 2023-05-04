import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import BaseButton from '../../../components/base/BaseButton';
import BaseDescriptionText from '../../../components/base/BaseDescriptionText';
import BaseTitleText from '../../../components/base/BaseTitleText';
import { EPMTY_CART_IMG } from '../../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { MyCartStackProps } from '../../../navigation/MyCartStack';

type Props = StackScreenProps<MyCartStackProps, 'MyCartEmpty'>

const MyCartEmpty = ({navigation}: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={EPMTY_CART_IMG} />
        <BaseTitleText text={'Your Cart is Empty!'} containerStyle={{marginTop: 15}} />
        <BaseDescriptionText
          text={'Add product in your cart now'}
          style={{marginTop: 5}}
        />
        <View style={{width: '100%', paddingHorizontal: 20}}>
          <BaseButton text={'shop now'} style={styles.loginButton} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyCartEmpty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 35,
  },
});
