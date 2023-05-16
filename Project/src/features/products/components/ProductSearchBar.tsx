import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
import { SEARCH_ICON_IMG } from '../../../constants/Images';

const ProductSearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Image source={SEARCH_ICON_IMG} style={styles.searchIcon}/>
      <TextInput style={styles.textInput} />
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
