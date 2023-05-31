import React from 'react';
import {SUCCESS_DIALOG_IMG} from '../../../../constants/Images';
import OneOptionDialog from '../../../../components/OneOptionDIalog';
import {StackScreenProps} from '@react-navigation/stack';
import {ModalStackProps} from '../../../../navigation/ModalStack';

type Props = StackScreenProps<ModalStackProps, 'ProductAddedDialog'>;

const ProductAddedDialog = ({navigation}: Props) => {
  return (
    <OneOptionDialog
      icon={SUCCESS_DIALOG_IMG}
      title={'Product added to your cart'}
      onPress={() => navigation.goBack()}
    />
  );
};

export default ProductAddedDialog;
