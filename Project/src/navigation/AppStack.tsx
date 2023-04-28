import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DrawerStack, { DrawerStackProps } from './DrawerStack';
import ProductDetail from '../features/productDetail/ProductDetail';
import { Product } from '../features/products/components/PrdoutcCard';
import ModalStack, { ModalStackProps } from './ModalStack';

export type AppStackProps = {
  DrawerStack: DrawerStackProps,
  ModalStack: NavigatorScreenParams<ModalStackProps>
  ProductDetail: {
    product: Product
  }
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
        <Stack.Screen name='ModalStack' component={ModalStack}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack
