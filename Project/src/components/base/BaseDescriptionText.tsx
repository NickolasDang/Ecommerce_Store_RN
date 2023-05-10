import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import Colors from '../../constants/Colors';
import { StyleProp } from 'react-native';
import { ViewStyle } from 'react-native';

interface Props{
    text: string,
    style?: StyleProp<TextStyle> | undefined,
    containerStyle?: StyleProp<ViewStyle> | undefined
}

const BaseDescriptionText = ({text, style, containerStyle}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.description, style]}>{text}</Text>
    </View>
  );
};

export default BaseDescriptionText;

const styles = StyleSheet.create({
  container: {
    
  },
  description: {
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: "400",
    color: Colors.neutral500,
  },
});
