import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../features/auth/screens/Login';
import DrawerStack, { DrawerStackProps } from './DrawerStack';

export type AppStackProps = {
  DrawerStack: NavigatorScreenParams<DrawerStackProps>
  Login: undefined
}

const Stack = createStackNavigator<AppStackProps>()

const AppStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="DrawerStack"
          component={DrawerStack}
          options={{headerShown: false}}
        />
       
        <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack
