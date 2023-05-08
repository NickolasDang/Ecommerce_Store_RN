import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Dot from './Dot';
import { StyleProp } from 'react-native';
import { ViewStyle } from 'react-native';


interface Props {
    style?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>> | undefined
}

const LoadingDots = ({style}: Props) => {
  const progress = useSharedValue(0);

  const dotStyleOne = useAnimatedStyle(() => {
    const position = interpolate(
      progress.value,
      [0, 25, 50, 75, 100],
      [0, -10, 0, 0, 0],
    );
    return {
      transform: [{translateY: position}],
    };
  });

  const dotStyleTwo = useAnimatedStyle(() => {
    const position = interpolate(
      progress.value,
      [0, 25, 50, 75, 100],
      [0, 0, -10, 0, 0],
    );
    return {
      transform: [{translateY: position}],
    };
  });

  const dotStyleThree = useAnimatedStyle(() => {
    const position = interpolate(
      progress.value,
      [0, 25, 50, 75, 100],
      [0, 0, 0, -10, 0],
    );
    return {
      transform: [{translateY: position}],
    };
  });

  useEffect(() => {
    const loading = withTiming(100, {duration: 1500});
    progress.value = withRepeat(loading, -1, false);
  });

  return (
    <Animated.View style={[styles.container, style]}>
      <Dot style={[dotStyleOne]} />
      <Dot style={[dotStyleTwo]} />
      <Dot style={[dotStyleThree]} />
    </Animated.View>
  );
};

export default LoadingDots;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
