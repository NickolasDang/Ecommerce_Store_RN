import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { useAppDispatch } from '../../../app/hooks';
import { authSlice } from '../../auth/slice/authSlice';
import { AVATAR_IMG } from '../../../constants/Images';
import BaseTitleText from '../../../components/base/BaseTitleText';
import BaseDescriptionText from '../../../components/base/BaseDescriptionText';
import BaseButton from '../../../components/base/BaseButton';
import BaseLinkText from '../../../components/base/BaseLinkText';
import { StackScreenProps } from '@react-navigation/stack';
import { MyCartStackProps } from '../../../navigation/MyCartStack';

type Props = StackScreenProps<MyCartStackProps, 'MyCartLoginFirst'>

const MyCartLoginFirst = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const login = () => {
    dispatch(authSlice.actions.login());
  };

  return (
    <SafeAreaView style={{flex: 1}}>

      <View style={styles.container}>
        <Image source={AVATAR_IMG} />
        <BaseTitleText
          text={'Login First!'}
          containerStyle={{width: '50%', marginTop: 15}}
        />
        <BaseDescriptionText
          text={'Login first to view your cart'}
          style={{marginTop: 5}}
        />
        <View style={{width: '100%', paddingHorizontal: 20}}>
          <BaseButton
            text={'Login now'}
            style={styles.loginButton}
            onPress={() => login()}
          />
        </View>
        <BaseLinkText text={'New here? Sign Up'} textStyle={{marginTop: 25}} />
      </View>
    </SafeAreaView>
  );
};

export default MyCartLoginFirst;

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
