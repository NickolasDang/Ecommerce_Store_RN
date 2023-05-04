import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet } from 'react-native'
import Main from '../features/products/Main'
import Colors from '../constants/Colors'
import MyCartStack, { MyCartStackProps } from './MyCartStack'
import MyProfile from '../features/myProfile/screens/MyProfile'
import MyWishList from '../features/myWishList/screens/MyWishList'
import MyOrders from '../features/myOrders/screens/MyOrders'
import AppDrawer from './drawer/AppDrawer'

export type DrawerStackProps = {
  Main: undefined
  MyProfile: undefined
  MyWishList: undefined
  MyCartStack: MyCartStackProps
  MyOrders: undefined
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
      <Drawer.Screen name='MyWishList' component={MyWishList}/>
      <Drawer.Screen name='MyCartStack' component={MyCartStack}/>
      <Drawer.Screen name='MyOrders' component={MyOrders}/>
    </Drawer.Navigator>
  )
}

export default DrawerStack

const styles = StyleSheet.create({})