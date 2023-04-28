import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet } from 'react-native'
import Main from '../features/products/Main'
import Colors from '../constants/Colors'

export type DrawerStackProps = {
  Main: undefined
}

const Drawer = createDrawerNavigator<DrawerStackProps>()

const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName='Main' screenOptions={{
      headerStyle: {
        backgroundColor: Colors.blue300
      },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: Colors.white
      },
      headerTintColor: Colors.white
    }}>
      
      <Drawer.Screen
      name='Main'
      component={Main} />
    </Drawer.Navigator>
  )
}

export default DrawerStack

const styles = StyleSheet.create({})