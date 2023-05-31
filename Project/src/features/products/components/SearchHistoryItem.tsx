import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  text?: string | undefined;
  onPress?: () => void | undefined;
}

const SearchHistoryItem = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchHistoryItem;