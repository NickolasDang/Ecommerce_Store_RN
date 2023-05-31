import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export interface ImageCarouselItemProps {
  img: string;
}

const ImageCarouselItem: React.FC<ImageCarouselItemProps> = ({img}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: img}} resizeMode="contain" style={styles.image} />
    </View>
  );
};

export default ImageCarouselItem;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
});
