import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

interface Props {
    name: String,
    style?: any
}

const ProductName: React.FC<Props> = ({name, style}) => {
  return (
    <View>
      <Text style={[styles.nameText, style]}>{name}</Text>
    </View>
  );
};

export default ProductName;

const styles = StyleSheet.create({
  nameText: {
    height: 20,
    fontSize: 15,
    fontFamily: 'Roboto',
    color: Colors.neutral700,
    fontWeight: '400',
  },
});
