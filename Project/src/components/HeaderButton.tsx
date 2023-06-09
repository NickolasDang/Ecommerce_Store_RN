import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

type Props = {
  img: any;
  onPress?: () => void | undefined;
};

export default function HeaderButton({img, onPress}: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={{marginHorizontal: 15}}>
      <Image source={img} />
    </TouchableOpacity>
  );
}
