import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigatorScreenParams } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import MyWishList from '../features/myWishList/screens/MyWishList'
import MainStack, { MainStackProps } from './MainStack'
import MyCartStack, { MyCartStackProps } from './MyCartStack'
import MyOrdersStack, { MyOrdersStackProps } from './MyOrdersStack'
import MyProfileStack, { MyProfileStackProps } from './MyProfileStack'
import AppDrawer from './drawer/AppDrawer'

export type DrawerStackProps = {
  MainStack: NavigatorScreenParams<MainStackProps>
  MyProfileStack: NavigatorScreenParams<MyProfileStackProps>
  MyWishList: undefined
  MyCartStack: NavigatorScreenParams<MyCartStackProps>
  MyOrdersStack: NavigatorScreenParams<MyOrdersStackProps>
}

const Drawer = createDrawerNavigator<DrawerStackProps>()

const DrawerStack = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <AppDrawer {...props}/>} 
    initialRouteName='MainStack' 
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.blue300
      },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: Colors.white
      },
      headerTintColor: Colors.white
    }}>
      
      <Drawer.Screen name='MainStack'component={MainStack} options={{headerShown: false}}/>
      <Drawer.Screen name='MyProfileStack' component={MyProfileStack} options={{headerShown: false}}/>
      <Drawer.Screen name='MyWishList' component={MyWishList} options={{headerShown: false}}/>
      <Drawer.Screen name='MyCartStack' component={MyCartStack} options={{headerShown: false}}/>
      <Drawer.Screen name='MyOrdersStack' component={MyOrdersStack} options={{headerShown: false}}/>
    </Drawer.Navigator>
  )
}

export default DrawerStack

const styles = StyleSheet.create({})