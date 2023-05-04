import {StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

interface Props {
    text: String,
    onPress?: () => void | undefined,
    style?: StyleProp<ViewStyle> | undefined
}

const BaseButton: React.FC<Props> = ({text, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BaseButton;

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: Colors.blue500,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 15,
    fontFamily: 'Roboto',
    letterSpacing: 1.25,
    fontWeight: "500",
    textTransform: 'uppercase',
  },
});
