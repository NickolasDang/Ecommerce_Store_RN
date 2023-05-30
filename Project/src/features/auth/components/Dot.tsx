import React from 'react';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import Colors from '../../../constants/Colors';
import { StyleProp } from 'react-native';
import { ViewStyle } from 'react-native';

interface Props {
    style?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>> | undefined
}

const Dot = ({style}: Props) => {
  return <Animated.View style={[styles.dot, style]} />;
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    height: 5,
    width: 5,
    borderRadius: 3,
    backgroundColor: Colors.white,
    marginHorizontal: 2,
  },
});
