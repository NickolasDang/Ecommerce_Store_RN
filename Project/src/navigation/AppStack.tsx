import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DrawerStack from './DrawerStack';

const Stack = createStackNavigator()

const AppStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerStack}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack
