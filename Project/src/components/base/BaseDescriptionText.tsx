import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';
import { StyleProp } from 'react-native';
import { ViewStyle } from 'react-native';

interface Props{
    text: string,
    style?: StyleProp<ViewStyle> | undefined
}

const BaseDescriptionText: React.FC<Props> = ({text, style}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.description, style]}>{text}</Text>
    </View>
  );
};

export default BaseDescriptionText;

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
  description: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: "400",
    color: Colors.neutral300,
  },
});
