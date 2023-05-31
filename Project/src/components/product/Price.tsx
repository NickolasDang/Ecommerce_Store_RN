import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

interface Props {
  priceNow?: String;
  priceBefore?: String;
  percentOff?: String;
  style?: any;
}

const Price: React.FC<Props> = ({priceNow, priceBefore, percentOff, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.priceNowText}>{priceNow}</Text>
      <Text style={styles.priceBeforeText}>{priceBefore}</Text>
      <Text style={styles.percentOffText}>{percentOff}</Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  priceNowText: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: Colors.neutral700,
    fontWeight: '700',
  },
  priceBeforeText: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: Colors.neutral500,
    fontWeight: '700',
  },
  percentOffText: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: Colors.blue300,
    fontWeight: '700',
  },
});
