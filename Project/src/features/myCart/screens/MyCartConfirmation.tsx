import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import BaseDescriptionText from '../../../components/base/BaseDescriptionText';
import BaseHeaderText from '../../../components/base/BaseHeaderText';
import BaseTitleText from '../../../components/base/BaseTitleText';
import { ORDER_CONFIRMATION_IMG } from '../../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { MyCartStackProps } from '../../../navigation/MyCartStack';
import BaseButton from '../../../components/base/BaseButton';

type Props = StackScreenProps<MyCartStackProps, 'MyCartConfirmation'>

const MyCartConfirmation = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <BaseHeaderText text={'Order Confirmation'} />
      <Image source={ORDER_CONFIRMATION_IMG} style={{marginTop: 40}} />
      <BaseTitleText
        text={'Thank you for placing your order with us!'}
        textStyle={{marginTop: 15}}
      />
      <BaseDescriptionText
        text={
          'Please check your email for more details. For any questions and further information please contact our customer support.'
        }
        style={{marginTop: 5}}
      />
      <View style={{width: '100%', paddingHorizontal: 20}}>
        <BaseButton text={'continue shopping'} style={styles.loginButton}/>
      </View>
    </SafeAreaView>
  );
};

export default MyCartConfirmation;

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
