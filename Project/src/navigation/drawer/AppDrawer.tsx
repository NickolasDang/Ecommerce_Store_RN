import React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseHeaderText from '../../components/base/BaseHeaderText';
import BaseTitleText from '../../components/base/BaseTitleText';
import Colors from '../../constants/Colors';
import {
    CALL_ICON_IMG,
    EMAIL_ICON_IMG,
    MY_CART_ICON_IMG,
    MY_ORDERS_ICON_IMG,
    MY_PROFILE_ICON_IMG,
    MY_WISH_LIST_ICON_IMG,
    SHARE_ICON_IMG,
} from '../../constants/Images';
import DrawerItem from './DrawerItem';
  
  const AppDrawer = ({navigation}: any) => {
    return (
      <View style={{flex: 1}}>

        <View style={styles.container}>
          <BaseHeaderText text={'Ecomerce Store'} textStyle={styles.headerText} />
          <BaseTitleText
            text={'My Account'}
            textStyle={styles.titleText}
            containerStyle={styles.titleContainer}/>

            <DrawerItem icon={MY_PROFILE_ICON_IMG} text='My Profile' onPress={
                () => navigation.navigate('MyProfile')
            }/>
            <DrawerItem icon={MY_WISH_LIST_ICON_IMG} text='My Wish List'/>
            <DrawerItem icon={MY_CART_ICON_IMG} text='My Cart'/>
            <DrawerItem icon={MY_ORDERS_ICON_IMG} text='My Orders'/>
          </View>
  
        <View style={styles.container}>
          <BaseTitleText
            text={'Support'}
            textStyle={styles.titleText}
            containerStyle={styles.titleContainer}
          />
          <DrawerItem icon={EMAIL_ICON_IMG} text={'Email'} />
          <DrawerItem icon={CALL_ICON_IMG} text={'Call'} />
        </View>
  
        <View style={{paddingTop: 20}}>
          <DrawerItem icon={SHARE_ICON_IMG} text={'Share'} />
        </View>
      </View>
    );
  };
  
  export default AppDrawer;
  
  const styles = StyleSheet.create({
    container: {
      borderBottomColor: Colors.neutral300,
      borderBottomWidth: 1,
    },
    headerText: {
      textAlign: 'left',
      width: '100%',
      marginLeft: 20,
    },
    titleContainer: {
      alignItems: 'flex-start',
      marginStart: 20,
      marginVertical: 25,
    },
    titleText: {
      textAlign: 'left',
    },
  });
  