import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, {useEffect} from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import BaseButton from '../../../components/base/BaseButton';
import BaseDescriptionText from '../../../components/base/BaseDescriptionText';
import BaseLinkText from '../../../components/base/BaseLinkText';
import BaseTitleText from '../../../components/base/BaseTitleText';
import { MY_ORDERS_LOGIN_FIRST_IMG } from '../../../constants/Images';
import { AppStackProps } from '../../../navigation/AppStack';
import { MyOrdersStackProps } from '../../../navigation/MyOrdersStack';
import HeaderButton from '../../../components/HeaderButton';
import { BACK_ARROW_ICON_IMG } from '../../../constants/Images';

type Props = CompositeScreenProps< 
  StackScreenProps<MyOrdersStackProps, 'MyOrdersLoginFirst'>,
  StackScreenProps<AppStackProps>
>

const MyOrdersLoginFirst = ({navigation}: Props) => {

  const navigateToLogin = () => {
    navigation.navigate('Login')
  };

  return (
    <SafeAreaView style={{flex: 1}}>

      <View style={styles.container}>
        <Image source={MY_ORDERS_LOGIN_FIRST_IMG} />
        <BaseTitleText
          text={'Login First!'}
          containerStyle={{width: '50%', marginTop: 15}}
        />
        <BaseDescriptionText
          text={'Login first to view your orders'}
          style={{marginTop: 5}}
        />
        <View style={{width: '100%', paddingHorizontal: 20}}>
          <BaseButton
            text={'Login now'}
            style={styles.loginButton}
            onPress={() => navigateToLogin()}
          />
        </View>
        <BaseLinkText text={'New here? Sign Up'} textStyle={{marginTop: 25}} />
      </View>
    </SafeAreaView>
  );
};

export default MyOrdersLoginFirst;

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
