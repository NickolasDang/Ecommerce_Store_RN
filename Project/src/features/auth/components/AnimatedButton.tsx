import React, { useState, useCallback } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, {
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useDerivedValue,
    withDelay,
    withSequence,
    withSpring,
    withTiming
} from 'react-native-reanimated';
import Colors from '../../../constants/Colors';
import AnimatedCross from './AnimatedCross';
import LoadingDots from './LoadingDots';
import { forwardRef } from 'react-native-paper/lib/typescript/src/utils/forwardRef';

interface Props {
    text: string,
    style?: any | undefined,
    onPress?: () => void | undefined,
    isSuccess: boolean,
}

export const wait = (numMs: number) => new Promise(res => setTimeout(() => res, numMs));

const AnimatedButton = ({text, style, onPress, isSuccess}: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const progress = useDerivedValue(() => {
    if (error) {
      return withSequence(withTiming(2), withDelay(500, withSpring(0)));
    } else if (!error && loading) {
      return withTiming(1);
    } else {
      return withTiming(0);
    }
  });

  const rContainerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1, 2],
      [Colors.blue500, Colors.blue300, Colors.red],
    );
    const width = interpolate(progress.value, [0, 1, 2], [100, 20, 20]);
    const translateX = interpolate(
      progress.value,
      [0, 1, 1.25, 1.5, 1.75, 2],
      [0, 0, -15, 0, 15, 0],
    );

    return {
      backgroundColor: backgroundColor,
      width: `${width}%`,
      transform: [{translateX}],
    };
  });

//   const errorAnimation = () => {
//     setLoading(true)
//     sleep(3000).then(r => {
//       setError(true);
//     });
//     sleep(4000).then(r => {
//       setError(false);
//       setLoading(false);
//     });
//   };

  const handleOnPress = useCallback(async () => {
    setLoading(true)
    await wait(3000);
    () => onPress;

    if(isSuccess) {
        setLoading(false);
    } else {
        setError(true)
        setLoading(false)
    }
  }, [isSuccess])

  return (
    <TouchableWithoutFeedback onPress={handleOnPress} disabled={loading}>
      <Animated.View style={[styles.buttonContainer, rContainerStyle]}>
        {!loading && !error ? (
          <Animated.Text style={[styles.buttonText]}>{text}</Animated.Text>
        ) : null}
        {loading && !error ? <LoadingDots /> : null}
        {error ? <AnimatedCross /> : null}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default AnimatedButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 40,
    borderRadius: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
