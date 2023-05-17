import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    text?: string | undefined,
    onPress?: () => void | undefined
}

const SearchHistoryItem = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View>
            <Text>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default SearchHistoryItem

const styles = StyleSheet.create({})