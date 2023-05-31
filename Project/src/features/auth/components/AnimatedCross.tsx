import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Colors from '../../../constants/Colors';

const AnimatedCross = () => {
  const progress = useSharedValue(0);

  const rFirstLine = useAnimatedStyle(() => {
    const height = interpolate(progress.value, [0, 0.5, 1], [0, 20, 20]);
    return {
      height,
      transform: [{rotate: '-45deg'}],
    };
  });

  const rSecondLine = useAnimatedStyle(() => {
    const height = interpolate(progress.value, [0, 0.5, 1], [0, 0, 20]);
    return {
      height,
      transform: [{rotate: '45deg'}],
    };
  });

  useEffect(() => {
    progress.value = withSpring(1);
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.line, rFirstLine]} />
      <Animated.View style={[styles.line, rSecondLine]} />
    </View>
  );
};

export default AnimatedCross;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  line: {
    width: 2,
    backgroundColor: Colors.white,
    position: 'absolute',
  },
});
