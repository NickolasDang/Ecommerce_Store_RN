import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';
import {StyleProp} from 'react-native';
import {TextStyle} from 'react-native';
import {ViewStyle} from 'react-native';

interface Props {
  text: string;
  textStyle?: StyleProp<TextStyle> | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
}

const BaseHeaderText = ({text, textStyle, containerStyle}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, textStyle]}>{text}</Text>
    </View>
  );
};

export default BaseHeaderText;

const styles = StyleSheet.create({
  container: {
    width: '70%',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: Colors.blue300,
  },
});
