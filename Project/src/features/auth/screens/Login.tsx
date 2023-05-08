import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useAppDispatch } from '../../../app/hooks';
import BaseButton from '../../../components/base/BaseButton';
import BaseHeaderText from '../../../components/base/BaseHeaderText';
import BaseLinkText from '../../../components/base/BaseLinkText';
import Colors from '../../../constants/Colors';
import { AppStackProps } from '../../../navigation/AppStack';
import AnimatedButton from '../components/AnimatedButton';
import { authSlice } from '../slice/authSlice';

type Props = StackScreenProps<AppStackProps>

const Login = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setLogged] = useState(false)

  const dispatch = useAppDispatch();

  const setUpHeader = () => {
    navigation.setOptions({
        title: '',
        headerLeft: () => null
    })
  }

  const login = () => {
    dispatch(authSlice.actions.login());
    navigation.goBack()
  }

  //TODO: Still not working properly. Need to find how to manage state of animated button 
  const validation = () => {
    if (email === '' && password === '') {
      setLogged(false)
    } else {
        setLogged(true)
        login()
    }
  };

  useEffect(() => {
    setUpHeader()
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <BaseHeaderText
        text={'Ecomerce Store'}
        containerStyle={styles.headerContainer}
      />
      <View style={styles.container}>
        <TextInput
          style={{marginBottom: 20}}
          mode="outlined"
          label={'Email address'}
          activeOutlineColor={Colors.blue300}
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={{marginBottom: 20}}
          mode="outlined"
          label={'Password'}
          activeOutlineColor={Colors.blue300}
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <BaseLinkText text={'Forgot Password?'} textStyle={{marginBottom: 35}} />
        <BaseButton text={'Login'} onPress={validation} />
        <BaseLinkText
          text={'New here? Sign Up'}
          textStyle={{marginTop: 25, alignSelf: 'center'}}
        />
      </View>
      <View
        style={[
          styles.container,
          {flexDirection: 'column-reverse', marginBottom: 30},
        ]}>
        <AnimatedButton text={'skip login'} onPress={validation} isSuccess={isLogged}/>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
