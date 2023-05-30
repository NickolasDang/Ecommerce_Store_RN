import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import BaseDescriptionText from '../../../components/base/BaseDescriptionText'
import Colors from '../../../constants/Colors'

type Props = {
    text: string,
    onPress?: () => void | undefined 
}

const SIZE = 24

const AmountRegulationButton = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={style.button}>
      <BaseDescriptionText text={text}/>
    </View>
    </TouchableOpacity>
  )
}

export default AmountRegulationButton

const style = StyleSheet.create({
    button: {
        borderColor: Colors.neutral300,
        borderWidth: 1,
        borderRadius: SIZE/2,
        height: SIZE,
        width: SIZE,
        alignItems: 'center'
    }
})