import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import BaseButton from '../../../components/base/BaseButton';
import BaseDescriptionText from '../../../components/base/BaseDescriptionText';
import BaseLinkText from '../../../components/base/BaseLinkText';
import BaseTitleText from '../../../components/base/BaseTitleText';
import {AVATAR_IMG} from '../../../constants/Images';
import {AppStackProps} from '../../../navigation/AppStack';
import {MyCartStackProps} from '../../../navigation/MyCartStack';

type Props = CompositeScreenProps<
  StackScreenProps<MyCartStackProps, 'MyCartLoginFirst'>,
  StackScreenProps<AppStackProps>
>;

const MyCartLoginFirst = ({navigation}: Props) => {
  const navigateToLogin = () => {
    navigation.navigate('Login');
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
            onPress={() => navigateToLogin()}
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
