import React from 'react';
import {LOGIN_DIALOG_IMG} from '../../../../constants/Images';
import OneOptionDialog from '../../../../components/OneOptionDIalog';
import {ModalStackProps} from '../../../../navigation/ModalStack';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<ModalStackProps, 'LoginDialog'>;

const LoginDialog = ({navigation}: Props) => {
  return (
    <OneOptionDialog
      icon={LOGIN_DIALOG_IMG}
      title={'Login To Continue'}
      description={'Please login to add product in your cart'}
      onPress={() => navigation.goBack()}
    />
  );
};

export default LoginDialog;
