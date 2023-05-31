import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

interface Props {
  text: string;
  textStyle?: StyleProp<TextStyle> | undefined;
  onPress?: () => void | undefined;
}
const BaseLinkText = ({text, textStyle, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BaseLinkText;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: '400',
    color: Colors.blue300,
  },
});
