import React, { useCallback, useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import  { Pagination } from 'react-native-snap-carousel-v4';
import Colors from '../../../../constants/Colors';
import { ARROW_LEFT_BUTTON_IMG, ARROW_RIGHT_BUTTON_IMG } from '../../../../constants/Images';
import ImageCarouselItem, { ImageCarouselItemProps } from './ImageCarouselItem';

interface Props {
    data: []
}

interface RenderItemProps {
    item: ImageCarouselItemProps;
    index: number;
  }

const width = Dimensions.get('screen').width;

const ImageCarousel: React.FC<Props> = ({data}) => {
  const [index, setIndex] = useState(0);
  let ref = useRef(null);

  const renderItem = useCallback(({ item, index }: RenderItemProps) => {
    return (
      <ImageCarouselItem img = {item.img}/>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        ref={ref}
        onSnapToItem={index => setIndex(index)}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        useScrollView
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={ref}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.dot}
        dotContainerStyle={{marginHorizontal: 2.5}}
        inactiveDotScale={1}
        inactiveDotOpacity={1}
        dotColor={Colors.blue500}
        inactiveDotColor={Colors.neutral300}
        tappableDots={true}
      />

      <TouchableOpacity style={styles.arrowButtonLeft}>
        <Image source={ARROW_LEFT_BUTTON_IMG}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.arrowButtonRight}>
        <Image source={ARROW_RIGHT_BUTTON_IMG}/>
      </TouchableOpacity>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {
    marginTop: 43,
    justifyContent: 'center',
  },
  arrowButtonLeft: {
    position: 'absolute',
  },
  arrowButtonRight: {
    position: 'absolute',
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
  },
});
