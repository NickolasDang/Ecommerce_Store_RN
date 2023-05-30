import React from 'react';
import {ERROR_DIALOG_IMG} from '../../../../constants/Images';
import OneOptionDialog from '../../../../components/OneOptionDIalog';
import { StackScreenProps } from '@react-navigation/stack';
import { ModalStackProps } from '../../../../navigation/ModalStack';

type Props = StackScreenProps<ModalStackProps, "SelectColorDialog">

const SelectColorDialog = ({navigation}: Props) => {
  return (
    <OneOptionDialog
      icon={ERROR_DIALOG_IMG}
      title={'Select color'}
      description={'Please select your color to add this item in your cart'}
      onPress={() => navigation.goBack()}
    />
  );
};

export default SelectColorDialog;
