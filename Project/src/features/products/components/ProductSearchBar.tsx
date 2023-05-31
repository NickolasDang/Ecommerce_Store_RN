import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../../../constants/Colors';
import { SEARCH_ICON_IMG } from '../../../constants/Images';

interface Props {
  input?: string | undefined;
  onChageText?: (value: string) => void | undefined;
  onSearchIconPress?: (input?: string) => void | undefined;
}

const ProductSearchBar = ({input, onChageText, onSearchIconPress}: Props) => {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={() => onSearchIconPress?.(input)}>
        <Image source={SEARCH_ICON_IMG} style={styles.searchIcon} />
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        value={input}
        onChangeText={value => {
          onChageText?.(value);
        }}
      />
    </View>
  );
};

export default ProductSearchBar;

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.neutral500,
    borderRadius: 4,
    height: 34,
    margin: 20,
  },
  searchIcon: {
    marginHorizontal: 14,
  },
  textInput: {
    height: 20,
    padding: 0,
    fontSize: 15,
    fontFamily: 'Roboto',
    color: Colors.blue500,
  },
});
