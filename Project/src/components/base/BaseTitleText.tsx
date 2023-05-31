import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Colors from '../../constants/Colors';

interface Props {
  text: string;
  textStyle?: StyleProp<TextStyle> | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
}

const BaseTitleText: React.FC<Props> = ({text, textStyle, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, textStyle]}>{text}</Text>
    </View>
  );
};

export default BaseTitleText;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: Colors.neutral500,
  },
});
