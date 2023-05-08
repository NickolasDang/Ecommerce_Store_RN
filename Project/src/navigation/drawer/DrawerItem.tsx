import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
    icon: any,
    text: string,
    onPress?: () => void | Promise<void> | undefined
}

const DrawerItem = ({icon, text, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={icon} style={styles.icon} />
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 25,
  },
});
