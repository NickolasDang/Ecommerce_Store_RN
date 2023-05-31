import React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseDescriptionText from '../../../components/base/BaseDescriptionText';
import Colors from '../../../constants/Colors';

type Props = {
  title: string;
  value: string;
  isDiscount?: boolean | undefined;
};

const PriceDetailItem = ({title, value, isDiscount}: Props) => {
  const valueColor = isDiscount ? Colors.blue300 : Colors.neutral500;
  return (
    <View style={styles.container}>
      <BaseDescriptionText text={title} />
      <BaseDescriptionText text={value} style={{color: valueColor}} />
    </View>
  );
};

export default PriceDetailItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
