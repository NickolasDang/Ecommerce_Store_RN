import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DrawerStack, { DrawerStackProps } from './DrawerStack';
import ProductDetail from '../features/productDetail/ProductDetail';
import ModalStack, { ModalStackProps } from './ModalStack';
import Login from '../features/auth/screens/Login';
import { Product } from '../features/products/data/Product';

export type AppStackProps = {
  DrawerStack: NavigatorScreenParams<DrawerStackProps>
  ModalStack: NavigatorScreenParams<ModalStackProps>
  ProductDetail: {
    product: Product
  }
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
        <Stack.Screen name='ProductDetail' component={ProductDetail}/>
        <Stack.Screen name='ModalStack' component={ModalStack} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack
