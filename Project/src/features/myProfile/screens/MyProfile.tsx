import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderButton from '../../../components/HeaderButton'
import { BACK_ARROW_ICON_IMG } from '../../../constants/Images'
import { DrawerStackProps } from '../../../navigation/DrawerStack'

type Props = StackScreenProps<DrawerStackProps, 'MyProfile'>

const MyProfile = ({navigation}: Props) => {

    const setHeader = () => {
        navigation.setOptions({
            title: 'My Profile',
              headerLeft: () => (
                <HeaderButton img={BACK_ARROW_ICON_IMG} onPress={() => navigation.goBack()}/>
              )
        })
      }

    useEffect(() => {
        setHeader()
    }, [])

  return (
    <View>
      <Text>MyProfile</Text>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({})