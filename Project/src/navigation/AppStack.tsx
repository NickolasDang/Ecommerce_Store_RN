import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../features/auth/screens/Login';
import DrawerStack, { DrawerStackProps } from './DrawerStack';

export type AppStackProps = {
  DrawerStack: NavigatorScreenParams<DrawerStackProps>
  Login: undefined
}

const { Screen, Navigator } = createStackNavigator<AppStackProps>()

const AppStack = () => {
  return (
    <NavigationContainer>
        <Navigator>
        <Screen
          name="DrawerStack"
          component={DrawerStack}
          options={{headerShown: false}}
        />
       
        <Screen name='Login' component={Login}/>
        </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
