import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';
import BaseButton from './base/BaseButton';
import BaseDescriptionText from './base/BaseDescriptionText';
import BaseTitleText from './base/BaseTitleText';

interface Props {
  icon?: any | undefined;
  title: string;
  description?: string | undefined;
  negativeButtonText?: string | undefined;
  positiveButtonText?: string | undefined;
  onNegativeButtonPress?: () => void | undefined;
  onPossitiveButtonPress?: () => void | undefined;
}

const TwoOptionsDialog = ({
  icon,
  title,
  description,
  negativeButtonText,
  positiveButtonText,
  onNegativeButtonPress,
  onPossitiveButtonPress,
}: Props) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={icon} style={{marginTop: 25}} />
        <BaseTitleText text={title} textStyle={{marginTop: 15}} />
        {description && (
          <BaseDescriptionText text={description} style={{marginTop: 10}} />
        )}
        <View style={{flexDirection: 'row'}}>
          <BaseButton
            text={negativeButtonText}
            style={[
              styles.button,
              {backgroundColor: Colors.red, marginRight: 5},
            ]}
            onPress={onNegativeButtonPress}
          />
          <BaseButton
            text={positiveButtonText}
            style={[styles.button, {marginLeft: 5}]}
            onPress={onPossitiveButtonPress}
          />
        </View>
      </View>
    </View>
  );
};

export default TwoOptionsDialog;

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 50,
    marginTop: 25,
    marginBottom: 30,
  },
});
