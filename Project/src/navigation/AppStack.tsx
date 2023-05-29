import Analytics from 'appcenter-analytics';
import { NavigationContainer, NavigatorScreenParams, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useRef} from 'react';
import Login from '../features/auth/screens/Login';
import DrawerStack, { DrawerStackProps } from './DrawerStack';

export type AppStackProps = {
  DrawerStack: NavigatorScreenParams<DrawerStackProps>
  Login: undefined
}

const { Screen, Navigator } = createStackNavigator<AppStackProps>()

const AppStack = () => {
  const navigationRef = useNavigationContainerRef();
  const routNameRef = useRef<string>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routNameRef.current = navigationRef.getCurrentRoute()?.name
      }}
      onStateChange={async () => {
        const previousRouteName = routNameRef.current
        const currentRouteName = navigationRef.getCurrentRoute()?.name

        if(previousRouteName !== currentRouteName) {
          routNameRef.current = currentRouteName
          console.log(`${currentRouteName} screen opened`)
          await Analytics.trackEvent(`${currentRouteName} screen opened`)
        }
      }}
    >
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
