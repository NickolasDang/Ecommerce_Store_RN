import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';
import BaseButton from './base/BaseButton';
import BaseTitleText from './base/BaseTitleText';
import BaseDescriptionText from './base/BaseDescriptionText';

interface Props {
    icon?: any | undefined,
    title: string ,
    description?: string | undefined,
    onPress: () => void
}

const OneOptionDialog: React.FC<Props> = ({icon, title, description, onPress}) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={icon} style={{marginTop: 25}} />
        <BaseTitleText text={title} textStyle={{marginTop: 15}} />
        {description && (
          <BaseDescriptionText text={description} style={{marginTop: 10}} />
        )}
        <BaseButton text={'ok'} style={styles.button} onPress={onPress} />
      </View>
    </View>
  );
};

export default OneOptionDialog;

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
