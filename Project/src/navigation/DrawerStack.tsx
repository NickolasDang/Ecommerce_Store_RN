import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigatorScreenParams } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import MyProfile from '../features/myProfile/screens/MyProfile'
import MyWishList from '../features/myWishList/screens/MyWishList'
import Main from '../features/products/Main'
import MyCartStack, { MyCartStackProps } from './MyCartStack'
import MyOrdersStack, { MyOrdersStackProps } from './MyOrdersStack'
import AppDrawer from './drawer/AppDrawer'

export type DrawerStackProps = {
  Main: undefined
  MyProfile: undefined
  MyWishList: undefined
  MyCartStack: NavigatorScreenParams<MyCartStackProps>
  MyOrdersStack: NavigatorScreenParams<MyOrdersStackProps>
}

const Drawer = createDrawerNavigator<DrawerStackProps>()

const DrawerStack = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <AppDrawer {...props}/>} 
    initialRouteName='Main' 
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
      
      <Drawer.Screen name='Main' component={Main} />
      <Drawer.Screen name='MyProfile' component={MyProfile}/>
      <Drawer.Screen name='MyWishList' component={MyWishList} options={{headerShown: false}}/>
      <Drawer.Screen name='MyCartStack' component={MyCartStack} options={{headerShown: false}}/>
      <Drawer.Screen name='MyOrdersStack' component={MyOrdersStack} options={{headerShown: false}}/>
    </Drawer.Navigator>
  )
}

export default DrawerStack

const styles = StyleSheet.create({})